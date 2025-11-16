---
title: Árboles generales
---

El siguiente es un ejemplo de árbol:

Su característica esencial es que se forma **recursivamente** combinando un *elemento* (en este caso, un entero) con otros árboles (en este ejemplo, dos):

Esto debe compararse con la formación de *listas* que combina un elemento con una lista:

En el caso de las listas llamamos al primer elemento la **cabeza** de la lista y al resto (la lista subsiguiente) su **cola**. En el caso de los árboles, el elemento en el tope es denominado la **raíz** del árbol, mientras que los árboles componentes son sus **subárboles**. Como ya es sabido, las listas pueden seguirse descomponiendo recursivamente una cantidad finita de veces hasta llegar a su caso base indivisible, que es en general la lista vacía. Como es también ya sabido, si escribimos esta (des)composición en notación explícita de Haskell se tiene que para la lista precedente:

```haskell
2 : (4 : (6 : (8 : ( 10 : []))))
```

Asimismo, si usamos la notación `∅` para denotar al árbol vacío, podemos reescribir más explícitamente la formación del árbol precedente:

Un árbol del tipo de este ejemplo es llamado **binario**, porque cumple que:

- O bien se compone de un elemento y dos árboles binarios (caso recursivo),
- o bien es el árbol vacío (caso base).

Veamos entonces cómo introducir este tipo de árboles binarios en Haskell. Para ello repasemos primero cómo se procede en el caso de las listas. Uno tiene para empezar una forma de denotar la lista vacía, a saber `[]`. Luego se tiene una manera de combinar un elemento con una lista para formar una lista más larga. Éste es el constructor *"cons"*, escrito en Haskell `:` cuando se usa en forma infija. Como ya hemos visto, la declaración de este tipo en Haskell sería:

```haskell
data [a] = [] | (:) a [a]
```

pero no es necesario efectuarla puesto que las listas están predefinidas en Haskell. Recordemos también que <mark>esta declaración está formulada en términos de un parámetro de tipo `a`, que indica que se están definiendo listas cuyos miembros pueden ser de cualquier tipo</mark> (aunque el mismo para todos ellos).

Para el caso de los árboles binarios del tipo del de arriba, tendremos, correspondientemente, una constante para el árbol vacío; llamémosla `Empty`. Y luego necesitaremos una función constructora que combine un elemento con dos árboles binarios para formar un árbol binario mayor. Si denominamos a esta función `Node`, entonces podremos introducir el tipo `BinTree` de los árboles binarios de la siguiente manera:

```haskell
data BinTree a = Empty | Node a (BinTree a) (BinTree a)
```

Observemos que, al igual que en el caso de las listas, `BinTree` debe ser aplicado a un tipo, que será el de los elementos de los árboles del tipo resultante. Así podremos tener árboles de enteros `BinTree Integer`, de booleanos `BinTree Bool` y, en general, de cualquier tipo de elementos (aunque, nuevamente, el mismo para todos éstos). Asimismo, tal como ya hemos visto en varios casos concerniendo listas, podremos definir funciones que admitan como argumentos árboles cuyos elementos puedan ser de un tipo genérico.

Debe ser escrito como sigue:

```haskell
Node 16 (Node 10 (Node 6 Empty Empty) (Node 5 Empty Empty)) (Node 20 Empty Empty)
```

Los elementos de los árboles son habitualmente llamados sus **nodos**. Cada nodo tiene asociado un número de subárboles (en el caso de los árboles binarios, siempre dos). Las raíces de estos subárboles, si existen, son llamados **nodos hijos** del nodo original. Así, en el árbol precedente, la raíz del árbol completo, con valor 16 tiene como nodos hijos a los que contienen los valores 10 y 20. Se denominan **hojas** del árbol a aquellos nodos sin hijos. Se observa también que los nodos de todo árbol se organizan en **niveles**; el primer nivel está ocupado sólo por la raíz, el segundo por los hijos de ésta y, en general, cada nivel contiene todos los hijos de los nodos del nivel precedente. La **altura** de un árbol es la cantidad de niveles que posee.

Uno puede naturalmente imaginarse múltiples tipos de árboles, más allá de los binarios. En un caso bastante general, cada nodo puede tener asociada una lista finita de subárboles, como por ejemplo:

Volviendo a los árboles binarios, corresponde ahora la pregunta: **¿cómo se programan funciones sobre estas estructuras?** Consideremos por ejemplo una función que calcule el tamaño (cantidad de nodos) de un árbol binario dado. Si la llamamos `size`, su declaración es la siguiente:

```haskell
size :: BinTree a -> Integer
```

Porque claramente puede actuar sobre árboles binarios de cualquier tipo de elementos.

Para razonar sobre árboles binarios, uno recuerda su definición. <mark>Un árbol binario es:</mark>

- **O bien el árbol vacío** `Empty`.
- **O bien un árbol no vacío** formado por un elemento y dos subárboles. En el caso de los árboles binarios, los subárboles suelen ser denominados *izquierdo* y *derecho*. La forma de los árboles no vacíos es entonces `Node x izq der`, donde `x` es el elemento (nodo raíz) y los otros dos, sus subárboles. Por lo tanto, `x` es de tipo `a`, mientras `izq` y `der` son de tipo `BinTree a`.

Se trata, como ya es evidente, de una definición **recursiva** (el término técnico es *inductiva*) y el razonamiento correspondiente también debe ser recursivo:
