---
title: Listas
---

## Formación de los tipos de listas

Dado cualquier tipo `&`, se tiene el tipo `[&]`, cuyos objetos son las **listas** (secuencias) de objetos de tipo `&`.

Damos ejemplos de tipos de listas y de sus objetos (listas concretas):

| Tipo | Ejemplo |
|------|---------|
| `[Integer]` | `[21, -14, 17]` |
| `[Bool]` | `[True, False, False, True]` |
| `[[Integer]]` | `[[1,2,3], [4,5], [0]]` |
| `[Integer -> Integer]` | `[(^2), \x-> x, \x-> 2*x+1]` |

La tercera línea muestra que es posible formar **listas de listas**. En efecto, puesto que `[Integer]` es, obviamente, un tipo (ver primera línea de la tabla) entonces también lo es `[[Integer]]`. De hecho, las listas de listas tienen variadas aplicaciones --una de ellas es la de modelar *matrices* (lo cual puede hacerse para cualquier número de dimensiones). La cuarta línea muestra el ejemplo de listas de *funciones*, en ese caso de funciones de tipo `Integer -> Integer`.

Una lista puede *contener* cualquier número de elementos (también llamados sus *miembros*). Esto incluye el caso de la **lista vacía** la cual, como es de esperar, se escribe `[]`. Sin embargo, <mark>todos los miembros de una lista deben ser del mismo tipo</mark>, como surge de la regla de formación establecida al comienzo. Por lo tanto, **no** son casos válidos de lista:

- `[3, 4, True, -11]`
- `[[1,2,3],[4,5], 0, [0]]`

La notación con corchetes `[a1, a2, ..., an]` se puede utilizar, como en todos los ejemplos anteriores, para formar listas concretas. Pero, en los hechos, ella es una abreviatura de otra notación más básica, una que permite formar las listas de cualquier tipo de manera sistemática y recursiva:

<mark>Por definición, una lista es:</mark>

- O bien **vacía** (es decir, la lista `[]`, *también pronunciada "nil"*)
- O bien formada por **encastrar** (acoplar) **un elemento** a una lista (*previamente formada*). La operación de encastre o acoplamiento en Haskell es `(:)` y se pronuncia *"cons"*.

Así pues, si traducimos la lista `[21, -14, 17]` a "notación cons-nil", resulta que se obtiene por acoplar el elemento (entero) 21 a la lista `[-14, 17]`, lo cual nos da como notación correcta:

```haskell
21 : [-14, 17]
```

En este caso, como en el de toda lista no vacía, el primer elemento se denomina la **cabeza** (en inglés: *head*) de la lista, mientras que la lista que sigue a continuación se denomina su **resto** o **cola** (en inglés: *tail*). Si continuamos descomponiendo la cola, obtenemos que la lista original puede escribirse también:

```haskell
21 : (-14 : [17])
```

Y, finalmente, una lista de un único elemento, tal como `[17]`, no es otra cosa que el acoplamiento de ese elemento a la lista vacía. Es decir que se tiene en general `[x] = x : []` y nuestra lista original puede escribirse:

```haskell
21 : (-14 : (17 : []))
```

En Haskell los paréntesis que aparecen en esta última expresión no son necesarios y puede escribirse directamente:

```haskell
21 : -14 : 17 : []
```

En otras palabras, <mark>Haskell asumirá que los cons se aplicarán de derecha a izquierda</mark>, lo cual técnicamente se describe diciendo que el operador `(:)` **asocia a la derecha**.

En definitiva, se tiene `[21, -14, 17] = 21 : -14 : 17 : []`. Ahora bien, la segunda notación, junto con la convención de asociación a derecha recién mencionada, nos da una descripción del proceso de creación o construcción (recursiva) de la lista:

- **1** Uno comienza por la lista más simple posible y siempre disponible, es decir `[]`.
- **2** Luego va acoplando (agregando, encajando, encastrando) cada vez un (nuevo) elemento a la lista que ya ha formado.

Las listas crecen entonces hacia la izquierda o, como también pueden verse, agregando elementos a su frente.

Los operadores *"nil"* (`[]`) y *"cons"* (`(:)`) son, por lo tanto, los que se utilizan para formar toda lista. Son por ello denominados los operadores **constructores** de los tipos de listas. Como ya hemos remarcado, <mark>las listas son por definición aquellos objetos construidos mediante la combinación de esos dos constructores.</mark> De igual modo, los booleanos son, por definición, los objetos formados por los operadores (simples) `False` y `True`. La noción general es la siguiente:

**Un tipo es inductivo cuando es definido por enumeración de sus constructores.** O, en otras palabras, al enumerar las formas de construir todos sus valores.

Los tipos inductivos se introducen en Haskell mediante la notación `data` ya empleada en el caso de los booleanos:

```haskell
data Bool = False | True
```

la cual, en el caso de las listas, daría:

```haskell
data [a] = [] | (:) a [a]
```

En esta declaración hay algunos detalles a explicar:

- **1** El nombre de tipo introducido es `[a]`, donde `a` es un **parámetro o variable de tipo**. Es decir, estamos diciendo: para todo tipo `a`, tenemos el tipo inductivo (*data*) `[a]` (leído "listas de as"). Esto refleja directamente la regla de formación con la que comenzamos el repartido. De hecho, podría decirse que estamos introduciendo una cantidad infinita de tipos mediante una única declaración.

- **2** El primer constructor es nuestro ya bien conocido *"nil"*, es decir el constructor de la lista vacía.

- **3** Luego viene otro constructor, que es `(:)`. Pero éste no forma un valor de por sí sino que requiere dos parámetros:
  - (a) La **cabeza** de la nueva lista, o sea el elemento a encastrar, obviamente de tipo `a`.
  - (b) La lista a alargar con ese nuevo elemento, obviamente de tipo `[a]`.

En otras palabras, la declaración `(:) a [a]` no es otra cosa que una abreviatura de:

```haskell
(:) :: a -> [a] -> [a]
```

Nuestro *"cons"* `(:)` es un **constructor funcional** o, mejor aún, una **función constructora**. Es, evidentemente, una función. Pero no tiene asociada una definición que indique cómo computar con ella. Más bien lo que ocurre es que, en cuanto ella se aplica a todos sus argumentos (o sea, se "satura") ya produce (construye) un valor.

Ése es precisamente el rol de las funciones constructoras: formar valores combinando (encastrando, conectando) sus parámetros.

## Recursión en listas

Para definir la negación booleana, cuya declaración es:

```haskell
not :: Bool -> Bool
```

bastaba considerar los casos posibles del parámetro de la función. Esos casos son, obviamente, `False` y `True` y entonces uno podía escribir dos ecuaciones:

```haskell
not False = True
not True = False
```

Supongamos ahora que queremos definir funciones sobre listas. Por ejemplo:

```haskell
suma :: [Integer] -> Integer
```

que compute la suma de los elementos de la lista dada como parámetro.

Bueno pues, podemos proceder con la misma idea que en el caso de la negación, es decir, podríamos tener una ecuación por cada forma de construir listas. Como venimos de ver, ello nos lleva a:

```haskell
suma [] = ?1
suma (x : xs) = ?2
```

Expliquemos esto:

- **1.** La primera ecuación corresponde al caso de la lista vacía. La incógnita `?1` debe ser sustituida entonces por el resultado de sumar los elementos de la lista vacía, y una breve reflexión nos indica que este resultado es `0`.

- **2.** En la segunda ecuación estamos considerando el caso de una lista formada por el constructor *"cons"*, es decir, se trata de una lista no vacía. Caracterizamos su forma haciendo aparecer el constructor acompañado de sus parámetros: es decir describimos la lista, de una manera genérica, haciendo notar que consta de un primer elemento `x` y un resto o cola `xs`. Por supuesto, los nombres utilizados para estos parámetros son arbitrarios y bien podrían haber sido **cabeza** y **cola**, *head* y *tail*, `h` y `t`, o cualquiera otros. Pero la elección `x`, `xs` se ha impuesto al punto de constituir prácticamente un estándar. Viene del hecho de que hace notar muy gráficamente que `x` es un elemento arbitrario y que el resto son "otros xs", o sea, una lista del mismo tipo de cosas.

Ahora la cuestión es resolver la incógnita `?2` y así terminar de definir la función. En este punto es que la **recursión** viene en nuestra ayuda: ¿Cuál es el resultado de sumar todos los elementos de la lista `x:xs`? Bueno, basta con sumar `x` a la suma de los elementos de `xs`; y esta última suma la podemos obtener por medio de una **llamada recursiva**, porque notoriamente al efectuar ésta estaremos achicando el tamaño del problema: para calcular la suma de `x:xs` usamos la suma de `xs` que es una lista más pequeña, y el caso base o final (cuando la lista sea vacía) ya está resuelto.

El razonamiento precedente nos conduce a:

```haskell
suma [] = 0
suma (x:xs) = x + suma xs
```

Antes de pasar a ejercicios, digamos que las descripciones de casos tales como `x:xs` (que describe listas de al menos un elemento) o `[]` (que describe la lista vacía) son llamados **patrones** y los sistemas de ecuaciones que los usan para definir funciones se denominan **definiciones por (ecuaciones con) patrones** (Inglés: por *pattern-matching*).

Otra nota es que la función `suma` que acabamos de definir está predefinida en el preludio de Haskell con el nombre `sum`.

### Ejercicios

**Ejercicio 1.** Definir en cada caso una función que:

- **1.** Compute el *largo* de una lista cualquiera. (Esta función está predefinida en Haskell con el nombre `length`.)

- **2.** Compute el producto de los elementos de una lista de enteros.

- **3.** Reciba una lista de booleanos y determine si *todos* ellos son `True`. (Esta función está predefinida en Haskell con el nombre `and`.)

- **4.** Reciba una lista de booleanos y determine si *algunos* (al menos uno) de ellos son `True`. (Esta función está predefinida en Haskell con el nombre `or`.)

Todas las anteriores definiciones son extremadamente parecidas; se pueden obtener por analogía de la definición de `suma` que hemos dado arriba. Lo que varía en cada caso es:

- **1.** La operación que se realiza *entre* los elementos de la lista.
- **2.** El valor del *caso base*.

Una buena idea es tratar de **generalizar** todos estos casos a una función que reciba como parámetros la operación y el caso base y realice la recursión. Luego será posible obtener todas esas funciones sin usar la recursión, sino simplemente *instanciando* esta función general, es decir, pasándole como parámetros la operación y caso base correspondiente. Una primera versión es la siguiente. Comenzamos por la declaración:

```haskell
reduce :: (a -> a -> a) -> a -> [a] -> a
```

En esta declaración estamos diciendo que nuestra función general recibe una **operación binaria** como primer parámetro. En efecto eso es lo que indica el tipo `a -> a -> a` de ese primer parámetro: se trata de una función que opera sobre dos parámetros de cualquier tipo a y retorna un resultado de ese mismo tipo. Es lo que vulgarmente llamamos una operación sobre el tipo a. Esta forma de modelar el primer parámetro de nuestra funcion general es suficiente para todos los casos que hemos considerado, e.g. la suma o producto de enteros y la conjunción o disyunción lógicas.

A continuación, nuestra función general recibe el resultado del caso base, es decir el resultado que es conveniente devolver para la lista vacía. Notoriamente, éste debe ser también un resultado de tipo a.

Y, finalmente, dados esos dos parámetros básicos la función esá lista para operar sobre cualquier lista de elementos de tipo a y devolver un a como resultado. El código que hace el trabajo es el siguiente:

```haskell
reduce f b [] = b
reduce f b (x : xs) = x 'f' (reduce f b xs)
```

Como explicació de este código, simplemente remitimos al código de suma detallado arriba. Nótese que el esquema de recursión es exactamente el mismo, pero que la operación de suma y el resultado del caso base (0) ha sido parametrizados. Como consecuencia los patrones y la llamada recursiva requieren que esos parámetros les sean pasados a `reduce`.

**?2.** Reprogramar todas las funciones del ejercicio 1 sin usar recursión, instanciado adecuadamente **reduce**.

**?3.** El tipo de reduce dado en la definición precedente no es el más general posible. Para darse cuenta de eso, hay que observar que podríamos usar **reduce** para computar resultados de un tipo b distinto del de los elementos de la lista. Efectuar las modificaciones pertinentes al tipo de reduce para permitir esto.

> Nota: En Haskell, **reduce** está predefinida con el nombre **foldr**.

Una operación fundamental entre listas es su *concatenación*. Se trata de la manera de unir dos listas en una sola. Debe notarse para empezar la diferencia con el constructor (:) ("cons") que acopla un *elemento* al frente de una lista, alargando ésta en una unidad. En cambio, si llamamos **append** a la función de concatenación, queremos aplicar ésta a dos listas y obtener, por ejemplo:

> append [2,3,4] [5,6] = [2,3,4,5,6]

Para programar append comenzamos por declararla :

> append [a] -> [a] -> [a]

Si pensamos en intentar una solución recursiva, la novedad en este caso es que hay dos listas entre las cuales elegir una para realizar la recursión. La buena noticia es que la elección más directa (es decir, recursión en el primer parámetro) es la que funciona adecuadamente. De hecho, se trata del mismo tipo de recursión empleado en todos los ejemplos precedentes. Veámoslo en detalle:

```haskell
append [] ys = ?1
appenddd (x:xs) ys = ?2
```
Como se ve, estamos analizando (haciendo variar, realizando la recursión sobre) la primera lista y dejando fija la segunda (llamada ys en ambos casos). ¿Cuál debe ser el valor de la primera incógnita? Bueno, dado que la primera lista es vacía, su concatenación con la segunda es necesariomente esta última. Por el otro lado, ¿cómo expresamos la concatenación de x:xs con ys ? Recordemos que la recursión está disponible: podemos recurrir, por ejemplo, a la concatenación de la lista más pequeña xs con ys. Si tenemos esto disponiible (lo cual obtenemos con la llamada append xs ys) entonces basta, para obtener el resultado final, acoplar el elemento x al frente del resultado de esa misma llamada recursiva. Se obtiene:

```haskell
append [] ys = ys
append (x:xs) ys = x : (append xs ys)
```

Nota: **append** está predefinida en Haskell con el nombre (++).

**?4.** Como se menciionó al pasar más arriba, la recursión de **append** es la misma que la de **foldr** (alias **reduce**). Reprogramar **append** sin recursión como instancia de **foldr**.

**?5.** 

1. Programar una función recursiva que invierta una lista cualiera dada. (También puede pensarse que esta función retorna la "imagen en espejo" de la lista). *Sugerencia*: Debe usarse concatencación.

2. Reprogaramar esta función sin usar recursión, instanciando **foldr**.

**?6.**

1. Programar una función *recursiva* que reciba una lista de listas y concatene todas ellas en una única lista de elementos. (A veces esta función se denomina **flatten** porque "achata" la lista de listas al nivel de los elementos de las listas. En Haskell está predefinida con el nombre **concat**)

2. Reprogramar esta función sin usar recursión, instanciando *foldr*.

**?7.** (Algunas funciones no necesitan recursión)

1. Programar una función que determine si una lista dada es o no vacía.

2. Programar una función que retorne la cabeza de una lista no vaciá

3. Programar una función que retorne la cola de una lista no vaciá.

**?8.**

1. Programar una función recursiva que retorne el último elemento de una lista no vacía.

2. Programar una función recursiva que retorne el "frente" de una lista no vacía xs, es decir, la lista que precede al último elemento de xs.

3. Programar una función recursiva que agregue un elemento *al final* de una lista. (Habitualmente esta función es llamada **snoc**.)

**?9.** Programar una función que reciba una lista de enteros xs y un entero a y determine si a es o no miembro de xs.

El tipo de la función de este último ejercicio puede ponerse como:

> [Integer] -> Integer - > Bool.

Pero quien haya resuelto el ejercicio podrá observar que el código funciona *sin cambios* para buscar booleanos en listas de boooleanos o,, más generalmente, para buscar valores de tipo a en lista de ese mismo tipo, *siempre y cuando la operación de comparación == esté disponible para el tipo* **a**. Esto se expresa en Haskell dando a la función en cuestión el tipo siguiente:

> Eq a => [a] -> a -> Bool.

Éste es, justamente, el tipo de la función predefinida **elem** que realiza la tarea planteada en el ejercicio. Se lee así: <mark>Para cualquier tipo que tenga definida la igualdad booleana ==? La respuesta es sí, por al menos 2 razones:</mark>

1. No hay manera general de comparar funciones. La pregunta de cuándo dos funciones son iguales admite dos respuestas posibles:

(a) f = g cuando cada entrada posibla a se tiene f a = g a. En otras palabras, cuando dan el mismo resultado en cada entrada posible. Este criterio es denominado *igualdad extensional* de las funciones y es imposible de implementar si la cantidad de entradas posibles es infinita, como ocurre por ejemplo con las funciones de tipo <code>Integer -> Integer</code>. Es cierto que bajo ciertas codiciones (que incluyen la finitud del dominio) sería posible implementar este tipo de choqueo, pero aún en ese caso el desempeño en términos de consumo de recursos sería en general oneroso y no justificaría el desarrollo.

(b) f = g cuando ambas funciones han sido *definidas* del mismo modo (o sea, representan el mismo algoritmo). Este criterio es también oneroso en su implementación, requiriendo, para empezar, el examen de código en tiempo de ejecución.

2. Como ya se ha visto, es posible introducir nuevos tipos --en particular, tipos inductivos por medio de la enumeración de constructores. El hecho es que cada tipo inductivo tiene su propia definición de == y esta operación no puede considerarse definida hasta que el programador no provea la versión correspondiente. Por ejemplo, el algoritmo que compara booleanos es diferente del que compara enteros o notas musicales. Para cada nuevo tipo que se introducido el algoritmo correspondiente a == debe (si eso es posible) ser provisto por el programador. Así que sólo aquellos tipos para los cuales el programador (o Haskell en forma prmitiva)  haya provisto un algoritmo son los que tendrán definida la igualdad booleana.

**?10.** Escribir un afunción que cuente la cantidad de veces que un objeto dado aparece en una lista dada (Los tipos deberán ser apropiados.).

Aquí van dos soluciones al ejercicio precedente:

```haskell
how_many :: Eq a => a -> [a] -> Integer
how_many a [] = 0
how_many a (x:xs)
        | a == x = 1 + how_many a xs
        | a /= x = how_many a xs
```

```haskell
how_many :: Eq a => a -> [a] -> Integer
how_many a [] = 0
how_many a (x:xs) = (if a == x then 1 else 0) + how_many a xs
```
 
La primera solución ilustra la combinación de patrones con condiciones (llamadas *guardas*) que, de hecho, ya veníamos usando desde los ejercicios de recursión en enteros. En efecto, debe tenerse en cuenta que un patrón elemental es una simple variable, que caracteriza a cualquier objecto (estos patrones simples fueron usados reiteradamente en las soluciones de recursión en enteros).

La segunda solucíon muestra que <code>if_then_else</code> puede usarse para formar expresiones que se evalúan como cualquier otra. Lo mismo funcionaría con una expresión **case**, aunque requiriendo código algo más largo.

**?11.** Las *posiciones* en una misma lista se suelen numerar desde 0 y, por lo tanto, hasta n - 1 si n es el largo de la lista. Programar:

1. Una función que reciba un natural i y una lista, y retorne el elemento que se encuentra en la posición i de la lista. ¿Qué ocurre si i cae fuera del rango de posiciones válidas de la lista?

2. Una función que reciba una lista y un objeto (de tipos apropiados) y determine la primera posición en la que éste aparece en la lista. Si el objeto no aparece en la lista, se retornará el largo de la lista.

**?12.** Siempre que una lista xs pueda ponerse en la forma xs = ys ++ zs se llama a ys un prefijo y a zs un sufijo de xs. Se pide:

1. Programar una función que reciba un predicado p y una lista xs y retorne el prefijo ys más largo de xs tal uqe todos los elementos de ys cumplen p. (Esta función está predefinida en Haskell con el nombre **takeWhile**.)

2. Programar la función que devuelve el *sufijo* restante de la precedente. (Esta función está predefinida en Haskell con el nombre **dropWhile**.)

**?13.** Programar una función que reciba una lista y la filtre por un ppredicado dado. (Es decir, la salida es la lista de los elementos de la lista original que cumplen el predicado. Esta funcion está predefinida en Haskell con el nombre filter.)

**?14**. Programar una función que reciba una lista y una función de tipo apropiado y aplique ésta a cada elemento de la lista. (Esta función está predefinida en Haskell con el nombre **map**.)

**?15.** Programar en cada caso un afunción que reciba un objeto y una lista (de tipos apropiados) y :

1. Elimine *todas* las apariciones del objeto en la lista.

2. Elimine la *primera* aparición del objeto en la lista.

**?16.**

1. Programar una función que reciba un natural *n* y una lista y retorne los primeros *n* elementos de ésta ¿De qué maneras se puede resolver el caso en que *n* es superior al largo de la lista? (Esta función este predefinida en Haskell con el nombre **take**.)

2. Ídem pero *eliminando* los primeros *n* elementos de la lista. (Esta fgunción está predefinida en Haskell con el nombre **drop**.)

**?17.**

1. Programar **fromto** que reciba dos enteros m y n y retorne la lista de los números entre *m* y *n* incluyendo a éstos. (En Haskell, **fromto m n** se escribe **[m..n]**.)

2. Programar **divisores** que reciba un entero positivo *n* y retorne la lista de sus divisores. **Sugerencia: Usar filter**.

3. Usando la función precedente programar el predicado **primo**.

4. Programar una función que reciba un natural *n* y retorne la lista de los primos menores o iguales a *n*.


