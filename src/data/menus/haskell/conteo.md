---
title: Enumeración o Conteo
---

1. **Introducción**. Conteo representa una parte esencial de la computación, ya que nos permite el análisis de algoritmos y tiempos de ejecución. Siendo que el presente curso se enmarca en el estudio de grado de Licenciatura en Sistemas, los cálculos serán presentados a través de programas y derivados de los mismos. El conteo se trata básicamente de contar la cantidad de casos posibles que se pueden dar para un determinado problema. La presentación de los conceptos teóricos de conteo serán a través de ejemplos concretos.

2. **Tiras de bits**.
Un clásico problema de conteo es calcular la cantidad de "tiras" de bits que se pueden construir con *n* números binarios (0s y 1s).

- 0 0
- 0 1
- 1 0
- 1 1

Concretamente pensemos que queremos saber cuántas tiras de 8 bits se puededn escribir. Para resolver este problema implementaremos funciones en Haskell que nos presenten todas las "tiras" que se pueden construir. Cada caso lo representaremos con una lista de enteros ([Int]), de los cuales sólo utilizaremos los dígitos 0 y 1, y al conjunto de todos los casos como una lista de éstas últimas ([[Int]]).

<code>
type Tira = [Int]
[Tira] -- para representar a un conjunto de tiras.
</code>

Comenzaremos por definir una función llamada `agregar01` que dada una `Tira` de *n* bits, retorna una lista de Tiras, sera de largo *n* + 1 bits, agregándole el 0 al principio de la Tira y el 1. Por ejemplo, `agregar01 [0,1,0,0] = [[0,0,1,0,0], [1,0,1,0,0]]` 

Para definir esta función usaremos todos los conocimientos que ya adquirimos al definir funciones sobre Listas, por lo cual podemos darnos cuenta de que simplemente debemos formar una lista de Tiras, agregándole el nuevo dígito a la Tira recibida. De esta forma tenemos:

```Haskell
agregar01 :: Tira -> [Tira]
agregar01 t = [(0:t), (1:t)]
```

?1. Programe la función `agregarBit` que dada una `[Tira]` le agrega un bit cada una de las tiras dadas. Por lo que tenemos que agregarle a cada Tira el 0 y el 1.

?2. Programe la función `tirasNBits` que dado un número entero positivo *n*, genere todas las tiras de *n* bits posibles.

Una vez resuelta la función del ejercicio anterior, ya es posible generar todas las Tiras que queríamos contar, en particular si nos interesa saber cuáles son las tiras de 8 bits, nos basta con llamar a la función posándole como argumente el número 8.

`tirasNBits 8`

Mediante un breve análisis de la definición anterior podemos generalizar la cuenta que nos facilita el cálculo de casos posibles. Para esto vamos a utilizar la función `length :: [a] -> Int` con el fin de contar la cantidad de casos generados.

```Haskell
length (tirasNBits 1) -- Resultado: 2
length (tirasNBits 2) -- Resultado: 4
length (tirasNBits 8) -- Resultado: 256
```

?3. Responder:

1. ¿Cuántas tiras de 100 bits se pueden formar?

2. ¿Cuál es el factor que existe entre los distintos casos?

Haciendo uso de la función que implementamos en Haskell el tiempo de ejecución se torna considerablemente largo, algo que podíamos intuir previamente mediante el cálculo de la cantidad de casos posibles. Además, es importante notar que durante la realización del problema, en la misma representación pueden aparecer múltiples 0 y 1, y el orden en el que aparecen nos resulta significativo.

3. Cantidad de números.

De la misma manera que calculamos las tiras de bits, es posible contar la cantidad que se pueden escribir de *n* dígitos que utilicen los números del 0 al 6.

Al igual que con las tiras de 0s y 1s del problema anterior, a los números los podemos representar con las mismas Tiras que utilizamos anteriormente, teniendo en cuenta que ahora los números estarán entre el 0 y el 6. Por lo que este problema es muy similar al que tratamos anteriormente, con la diferencia de que ahora debemos agregar todos los números del 0 al 6 para pormar números con un dígito más que otro. Nos será de mucha utilidad la función que definimos en lecciones anteriores `fromto :: Int -> Int -> [Int]` que genera una lista de enteros con todos los números entre los dos recibidos por parámetro.

```Haskell
fromto :: Int -> Int -> [Int]
fromto m n
    |  m > n = []
    |  m <= n = m : (fromto (m + 1) n)
```

Entonces si anteriormente agregábamos a una Tira el 0 y el 1 al principio para generar una Tira de un bit más, sería conveniente definir una funciónque reciba una lista de números que queremos agregar al principio de una Tira y así generar todas lan nuevas Tiras que contienen un dígito más que la Tira anterior. A esta función la llamaremos `agregarDigitos` y la definiremos de la siguiente manera:

```Haskell
agregarDigitos :: [Int] -> Tira -> [Tira]
agregarDigitos [] t = []
agregarDigitos (d:ds) t = (d:t) : (agregarDigitos ds t)
```

?4. Considerando las definiciones anteriores, programe la función `agregar06` que dada una Tira *t*, genera todas las tiras de un dígito más que la anterior.

Ejemplo `agregar06 [1] = [[0,1],[1,1], [2,1],[3,1],[4,1],[5,1],[6,1]]`

?5. Programe la función `agregarDigito` que dada una `[Tira]` le agrega un dígito más a cada una de las tiras dadas.

?6. Programe la función `tirasNDigitos` que dado un número entero positivo *n*, genere todas las tiras posibles de *n* dígitos entre el 0 y el 6.

Teniendo definidas estas funciones podemos responder a las preguntas que nos hicimos en el problema anterior: ¿cuántas tiras de 100 dígitos se pueden formar? y ¿cuál es el factor que existe entre los distintos casos?. Más allá del tiempo en que el intérprete de Haskell le lleva calcular todas las tiras posibles para luego contarlas, variando la cantidad de ddígitos con lo que generamos nuestras tiras podemos notar que se puede realizar el cálculo sin genrearlas todas.

*Resultados.* Con ambos resueltos en las secciones anteriores podemos identificar que la repetición de elementos es posible y que el orden es importante. A su vez en ambos casos, para cada elemento de la tira agregamos tantos elementos como son posibles: en el caso de los bits, par acada tira agregamos 2 casos; y en el caso de los números, para cada número agregamos 6 dígitos. Podemos intuir que en el caso de los bits si vamos a utilizar un total de 8 bits, tendremos 2 bits en la primer ejecución, luego a cada uno de esos bits le agregamos dos casos, y así sucesivamente hasta los 8.

Siguiendo el razonamiento anterior:


| #Bits | Casos Posibles |
|----------|----------|
| 1   | 2   |
| 2   | 4   |
| 3   | 8   |
| ...   | ....   |
| r   | 2power(r)   |


De la misma forma, cuando generamos las tiras de los números con dígitos del 0 al 6, por cada tira, par agenerar otras con un dígito más tenemos que agregar 7 elementos, y de esta forma tenemos:


| #Digitos | Casos Posibles |
|----------|----------|
| 1   | 7   |
| 2   | 49   |
| 3   | 343   |
| ... | ... |
| r   | 7power(r)   |


Teniendo en cuenta los problemas presentados y sus soluciones vamos a nombrar este tipo de problema con **permutaciones con repetición**. Una permutación con repetición contará con un total de n objetos distintos, que se ordenan de distintas maneras y pueden aparecer más de una vez en cada ordenación (llamadas tiras en los problemas anteriores) de largo r. La fórmula con la que denotaremos las permutaciones con repetición es:

P R(n, r) = n power(r)

4. 5 de oro.

Luego de haber contados las tiras de bits nos sentimos con suerte y queremos apostarle al 5 de Oro el próximo fin de semana. Para eso podríamos contar cuántas jugadas posibles se pueden hacer y así saber nuestras posibilidades de ganar el premio. En este juego se cuenta con 48 bolillas numeradas, de las cuales si uno acierta 5 de las mismas se lleva el premio mayor. Particularmente, en esta solución, consideramos a cada jugada teniende en cuenta el orden en el que salen las bolillas.

Ahora, a diferencia de los problemas anteriores que agregábamos los mismos números a tiras ya formadas con un dígito menos, nuestra jugada se formará por una bolilla y por otras 4 ( de las 48 totales) pero sin incluir a la primera, por lo que vamos a tener que descartar números a medida que se vayan utilizando la representación de las jugadas será de la misma forma que las Tiras de bits y de dígitos:

```Haskell
type Bolilla = Int
type Jugada = [Bolilla]
[Jugada] -- para representar a un conjunto de jugadas .
```

Para resolver este caso utilizaremos un esquema similar al de los problemas anteriores, salvo a que ahora no necesariamente agregamos todas las bolillas disponibles a una jugada porque puede ser que la misma ya la contenga. De este modo nos es muy conveniente contar con la función `elem :: Eq a => a -> [a] -> Bool` que verifica si un elemento pertenece a una lista.

```
elem :: Eq a => a -> [a] -> Bool
elem e [] = False
elem e (x:xs)
    | e == x = True
    | e /= x = elem e xs
```

Entonces, ahora al agregar una Bolilla a una jugada debemos considerar las 48 bolillas que tenemos disponibles menos aquellas que ya están en la jugada actual. Por lo que la función `agregarBolilla` debe verificar si una bolilla está en la jugada para saber si la puede agregar o no.

```
agregarBolillas :: [Bolilla] -> Jugada -> [Jugada]
agregarBolillas [] j = []
agregarBolillas (b:bs) j
    | elem b j = agregarBolillas bs j
    | not (elem b j) = (b:j):(agregarBolillas bs j)
```

?7. Considerando las definiciones anteriores, programe la función `agregarBolillasEntre` que dado dos números enteros *m* y *n*, y una Jugada j, devuelve todas las jugadas que se pueden formar con j y bolillas entre m y n que ne estén en j.

?8. Programe la funcion `agregarBolilla` que dada una `[Jugada]` le agrega una bolilla más a cada una de las jugadas dadas.

?9. Programe la funcion `jugadasNBolillas` que dado un número entero *n*, retorne todas las jugadas posibles de *n* bolillas entre 1 y el 48.

De la misma forma que contamos la cantidad de tiras en los problemas anteriores, podemos contar la cantidad de jugadas con *n* bolillas con la función **length*, por ejemplo, tenemos 48 jugadas con una sola bolilla.

`length (jugadasNBolillas 1) -- Resultado : 48`

?10. Responder:

1. ¿Cuántas jugadas con 2 bolillas se pueden hacer?
2. ¿Y con 5 bolillas? ¿Cuanto demoró el interprete en obtener el resultado?

*Resultados*. Siguiendo el análisis de las definiciones anteriores es posible notar que cuando se elige la premer bolilla existen 48 posibilidades, pero una vez que para sacar la segunda solo existen 47 posibilidades, ya que la primera fue descartada, luego para la tercera solo 46, y así sucesivamente. Llevando el razonamiento anterior a números existen 48*47*46*45*44 casos posibles a la hora de jugar al 5 de Oro.

Es importante volver a notar que en esta versión del juego tratamos los casos como diferentes si el orden de salidda de las bolillas es ddiferente.

En el caso que nos referimos a las distintas formas en las que podemos ordenar elementos sin repetir estamos hablando de **permutaciones**. El razonamiento para llegar a la fórmula se puede generalizar a partir del ejemplo anterior. Como pudimos notar a medida que usábamos un elemento para conformar nuestrapermutación, para el siguiente exitían n-1 casos, siendo que nos quedaron 48*47*46*45*44 casos tomados 5 bolillas, si hubiésemos tomado las 48 bolillas frente a la operación de factorial.

48 * 47 * 46 * 45 * 44 * 43 * 42 * ... * 1 = 48!

Con el fin de limitar la cantidad de bolillas que tomamos y contar correctamente la cantidad de jugadas solamente tomando 5 bolillas, podemos hacer uso de propiedades matemáticas, simplificando factores del producto del factorial. En particular nos interesa que esa multiplicación termine en 44, por lo que si dividimos cada uno de los factores que sigue entre sí mismo, logramos evitar multiplicar números de más.

48 * 47 * 46 * 45 * 44 * 43/43 * 42/42 * ... * 1/1 = (48 * 47 * 46 * 45 * 44 * 43 * 42 * ... * 1 ) / 43 * 42 * ... * 1 = 48!/43!

De esta forma eliminamos el conteo las 43 bolillas que nos sobraron para nuestras jugadas. Entonces, contar las **permutaciones** de n elementos con ordenaciones de largo *r*, se generaliza a la siguiente fórmula la cual es más rápida de calcular que generar todas las jugadas.

P(*n*,*r*) = *n*! / (*n* - *r*)!

### 5. 5 de oro (real)

 En el problema anterior vimos cómo formar todas las jugadas de 5 bolillas de entre 48 posibles pero considerando el orden con que salen esas bolillas. Ahora bien, la realidad es que este juego de azar no toma en cuenta el orden en el que salen las bolillas para considerar ganadora una jugada, por ejemplo es lo misom que salga: 44-43-14-45-13 o 13-32-14-44-45. Lo que podemos notar rápidamente es que existen varios casos que se encuentran repetidos dentro de las permutaciones que calculamos en la parte anterior.

 O sea, para implementar la solución al problema real del 5 de oro utilizaremos las mismas funciones que en el planteo anterior solo que ahora del resultado de las permutaciones debemos fgiltrar las jugadas que consideramos "iguales". Una jugada es igual a otra simplemente si contiene las mismas bolillas sin importar el orden, por lo cual necesitaremos definir las siguientes funciones:

 ?11. `contiene` que dadas dos Jugadas j1 y j2, devuelve True si ambas jugadas contienen las mismas bolillas.

 ?12. quitarRepetidas que dada una lista de jugadas js, elimina todas las jugadas que sean iguales entre sí, conisderando la definición del ejercicio anterior.

 Una vez definidas estas dos últimas funciones, el problema de obtener las jugadas ganadoras reales del 5 oro se reducirá a obtener todas las jugadas caluculadas en el problema anterior (permutaciones) y luego queitar las repetidas con el método recientemente implementado
 
```Haskell
jugadasNBolillasSinOrden :: Int -> [Jugada]
jugadasNBolillasSinOrden n = quitarRepetidas(jugadasNBolillas n)
```

*Resultado*. Analizando el problema intuitivamente podemos notar que la cantidad de casos deberían ser menores, ya que estamos filtrando de todos los casos originales, aquellos que contengan todos los mismos elementos en distinto orden.

Vamos a completar los datos con el fin de encontrar la relación que se encuentra entre tener en cuenta el orden y no tenerlo en cuenta para formar las posibilidades utilizando distinta cantidad de números como ganadores. Para esto utilizaremos las funciones que ya programamos y pregunatemos el largo de la cantidad de resultados.

Para efectivamente ejecutar las funciones que implementamos anteriormente sin sentarno a esperar el resultado por un largo rato, podemos reducir el ejercicio a selecionar 5 bolillas entre 20 para achicar sustancialmente los tiempos en el intérprete de Haskell, ya que los efectos del análisis obtendremos los mismos resultados. Teniendo en cuenta est aaclaración obtenemos los siguientes datos:


| #de Bolillas | Casos Posibles c/orden | Casos Posibles s /orden |
|----------|----------|----------|
| 1  | 20   | 20 |
| 2   | 380   | 190 |
| 3   | 6840 | 1140 |
| 4 | 116280 | 4845 |
| 5 | 1860480 | 45504 |


Con el fin de poder generalizar una función que nos permita realizar el cálcula de los casos posibles cuando no nos importa el orden analizaremos la tabla resultado.



