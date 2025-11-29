---
title: Inducción sobre Listas
---

El método de inducción puede generalizarse a las listas de cualquier tipo de elementos. La clave está en observar que ellas pueden generarse de una manera similar a la empleada para los naturales, es decir,, toda lista de elementos de tipo a es:

- O bien la lista vacía [],
- o bien una lista de la forma x : xs, donde x es de tipo a y xs es una lista de elementos de tipo a

(Como ya sabemos (:) es la función *constructora* de listas, llamadas "cons".)

En consecuencia, si ahora se tiene una *propiedad de listas*, digamos P, podemos enunciair un método de inducción que sea suficiente para demostrar que toda lista tiene la propiedad P. Para ello generalizamos la iidea de "arranque y progagación"; o sea:

- si la lista inicial (la vacía) tiene la propiedad P, y
- si toda vez que se tiene una lista que ya cumple la propiedad y se la prolonga mediante el constructor (:) se obtiene como resultado una lista que *también* tiene la propiedad,

entonces necesariamente *toda lista tendrá la propiedad*

La idea de "arranque y propagacion correctos" o, en otros términos, de "inicio y herencia" es la ida común de recursión y de la inducción, y se aplica en cualquier tipo de datos que pueda generarse a partir de "semillas" iniciales (caso base) por medio de operaciones constructoras que permiten agrandar las estructuras. Como veremos en la sección siguiente, estos tipos de datos así generados (llamados *tipos inductivos*) son, en general, tipos de árboles.

Volviendo ahora a las listas, podemos enunciar su principio de inducción:

Sea P una propiedad de listas. Si demostramos:

1. Caso Base. Tesis: P [], y

2. Paso Inductivo. Hipótesis: Sea xs €̉ [a] tal que P xs. Sea x € a.
Tesis: P (x:xs),

*entonces poddemos concluir (¥xs € [a]) P xs.*

En efecto, el caso base establece el arranque correcto: la lista inicial (vacía) tiene la propiedad deseada. Y, por el otro lado, el paso inductivo asegura que todo alargamiento de una lista que ya tenía la propiedad preserva o transmiite a ésta. Luego, todas las listas posibles tendrán la propiedad. Veamos ahora *aplicaciones* del principio. Para ello, repasemos algunas funciones conociddas. La primera es la que calcula el largo de una lista dada:

```haskell
length :: [a] -> Integer
length [] = 0
length (x:xs) = 1 + length xs.
```

La siguiente es la concatenación de dos listas:

``` haskell
(++) :: [a] -> [a] -> [a]
[] ++ ys = ys
(x:xs) ++ ys = x : (xs++ys)
```

Ahora podemos probar que el largo de la concatenación de dos listas no es otra cosa que la suma de los largos de esas listas. O sea:

**Proposició**. (¥xs € [a])(¥ys € [a]) length(xs++ys) = **length** xs + **length** ys

Como lo hicimos en la sección precedente, el primer paso es observar que la forma de la proposición es la correcta, es decir;

> (¥xs € [a]) P xs.

En otras palabras, se trata de demostrar una propiedad P para toda lista. En este caso, la propiedad es:

> P xs ≡ (¥ ys € [a]) **length**(xs ++ ys) = **length** xs + **length** ys.

Intentando la inducción en xs, procedemos primera a enunciar los "teoremas" componentes, es decir, el caso base y el paso inductivo. Para ello efectuamos las sustituciones mecánicas correpondientes, notando que la variable a sustituir es xs:

Caso Base: `Tesis: (¥ys € [a]) length([] ++ ys) = length [] + length ys`.

Paso Inductivo: `Hipótesis: Sea xs € [a] tal que (¥ys € [a]) length(xs++ys) = length xs + length ys`.

`Sea x € a`.

`Tesis: (¥ys € [a]) length((x:xs) ++ ys) = length (x:xs) + length ys`.

Las demostraciones pueden hacerse como sigue:

Caso Base: `Tesis: (¥ys € [a]) length([]++ys) = length[] + length ys`.

*Demostración* Usando la táctica de introducción del ¥ consideramos ys € [a] arbitraria y pasamos a demostrar **length**([] ++ ys) = **length**[] + **length** ys. Calculamos cada miembro de la igualdad por su lado intentando llegar a una misma expresión. Comenzamos por el lado izquierdo:

```
length([]++ys)
= (Código de ++ en caso base)
length ys.
```

Ahora por el lado derecho:

```
length[] + lengthys
= (Código de length en caso base)
0 + length ys
= (Aritmética)
length ys
```

■

Paso Inductivo: *Hipótesis*: Sea xs € [a] tal que (¥ys € [a]) length(xs ++ ys) = length xs + length ys.

Sea x € a.

Tesis: (¥ys € [a]) length((x:xs)++ys) = length(x:xs) + length ys.
Demosrtación: Usando la táctica de introducción del ¥ consideramos ys € [a] arbitraria y pasamos a demostrar length((x:xs) ++ ys) = length (x:xs) + length ys. Nuevamente calcularemos cada miembro de la igualdad por su lado, para llegar a una expresión que los iguale, Empezamos por el lado izquierdo:

```
length((x:xs) ++ ys)
= (Código de ++, caso recursivo)
length(x:(xs++ys))
= (Código de length, caso recursivo)
1 + length(xs++ys)
= (Hipótesis de inducción, length(xs++ys) = length xs + length ys)
1 + length xs + length ys.
```
Entretanto, por el lado derecho;

```
length (x:xs) + length ys
= (Código de length, caso recursivo)
1 + length xs + length ys
```

■

Consideremos ahora esta otra clásica función:

```haskell
filter :: (a -> Bool) -> [a] -> [a]
filter p [] = []
filter p (x:xs)
       | p x = x:filter p xs
       | not(p x) = filter p xs
```

Podemos probar, para cualquier predicado p:

**Proposición.** (¥xs € [a]) length(filter p xs) <= length xs.

Es decir que la propiedad a considerar ahora es:

P xs ≡ length(filter p xs) <= length xs,

y precediendo a formular los casos de la inducción aplicando las sustituciones mecánicas se tiene:

Caso Base: Tesis: length(filter p []) <= length [].

*Demostración*:
length(filter p [])
= (Código de filter, caso base)
length [] <= (Reflexividad de <=) length []

■

Paso Inductivo: Hipótesis: Sea xs € [a] tal que length(filter p xs) <= length xs. Sea x € a.
Tesis length (filter p (x:xs)) <= length (x:xs).

*Demostración*: Esta vez comenzaremos calculando el lado derecho de la inecauación:
lengt(x:xs)
= (Código de length, caso recursivo)
1 + length xs.

Ahora tomaremos el lado izquierdo procurando llegar a una expresión que sea menor o igual que la recién alcanzada. Pero calcular el lado izquierdo requiere calcular filter p (x:xs), y éste está definido por casos según valga o no p x. Como regla general, la estructura de la demostración debe seguir la estructura del código y, por la tanto, se divide en dos casos:

1. Caso p x:

length(filter p (x:xs))

= (Código de filter, teniendo en cuenta que vale p x)

length(x:filter p xs)

= (Código de length, caso recursivo)

1 + length (filter p xs)

<= (Dado que, por hipótesis, lengt(filter p xs) <= length xs)
1 + length xs,

que es donde deseábamos arribar.

2. Caso ¬(p x):

length(filter p (x:xs))
= (Código de filter, teniendo en cuenta que no vale p x)
length(filter p xs)
<= (Hipótesis)
length xs
<= (De hecho <, estrictamente)
1 + length xs

■

?1. demostrar

1. (¥xs € [a]) xs ++ [] = xs.

2. (Asociatividad de ++) (¥xs € [a]) (¥ys € [a]) (¥zs € [a]) xs ++ (ys ++ zs) = (xs ++ ys) ++ zs

?2. Considerar la siguiente definicion de la función reverse.

```haskell 
reverse :: [a] -> [a]
reverse [] = []
reverse (x:xs) = reverse xs ++ [x]
```

1. Demosrtar (¥xs € [a])(¥ys € [a]) reverse(xs++ys) = reverse ys ++ reverse xs.

2. Demostrar, sin usar inducción.

(a) reverse [x] = [x].
(b) [x] ++ xs = x : xs.

3. Demostrar (¥xs € [a]) reverse(reverse xs) = xs.

?3. Demostrar (¥xs € [a])(¥p € (a -> Bool)) takeWhile p xs ++ dropWhile p xs = xs.
