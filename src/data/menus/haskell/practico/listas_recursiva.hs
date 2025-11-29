-- Ejercicio 1
largo :: [a] -> Int

largo a = length a

productoLista :: [Int] -> Int

productoLista [] = 0
productoLista (x:[]) = x
productoLista (x:xs) = x * productoLista(xs)

todosTrue :: [Bool] -> Bool
todosTrue [] = False
todosTrue (x:[]) = x
todosTrue (x:xs) = x && todosTrue xs

algunTrue :: [Bool] -> Bool
algunTrue [] = False
algunTrue (x:[]) = x
algunTrue (x:xs) = x || algunTrue xs

-- Ejercicio 2

reduce :: (a -> a -> a) -> a -> [a] -> a
reduce f b [] = b
reduce f b (x:xs) = f x (reduce f b xs)

productoLista2 :: [Int] -> Int
productoLista2 [] = 0
productoLista2 (x:xs) = reduce (*) x xs 

todosTrue2  :: [Bool] -> Bool
todosTrue2 [] = False
todosTrue2 (x:xs) = reduce (&&) x xs

algunTrue2 :: [Bool] -> Bool
algunTrue2 [] = False
algunTrue2 (x:xs) = reduce (||) x xs

-- Ejercicio 3

append :: [a] -> [a] -> [a]
append [] ys = ys
append (x:xs) ys = x : (append xs ys)

-- Ejercicio 4

append2 :: [a] -> [a] -> [a]
append2 xs ys = foldr (:) ys xs

-- Ejercicio 5

revertir :: [a] -> [a] 
revertir [] = []
revertir (x:xs) = revertir xs ++ [x]

-- Ejercicio 6

flatten :: [[a]] -> [a]
flatten [] = []
flatten (x:xs) = x ++ flatten(xs)

flatten2 :: [[a]] -> [a]
flatten2 xs = foldr (++) [] xs 

--- Ejercicio 7

esVacia :: [a] -> Bool
esVacia xs = (length xs) == 0 

laCabeza :: [a] -> a
laCabeza [] = error "La lista esta vacia"
laCabeza (x:xs) = x

laCola :: [a] -> [a]
laCola [] = error "La lista esta vacia"
laCola (x:xs) = xs

--- Ejercicio 8

ultimoElemento :: [a] -> a
ultimoElemento [] = error "La lista esta vacia"
ultimoElemento (x:xs) = if (length xs) > 0 then ultimoElemento xs else x

precedente :: [a] -> [a]
precedente (x:xs) = if (length xs) > 0 then [x] ++ precedente xs else []

snoc :: a -> [a] -> [a]
snoc a [] = [a]
snoc a (x:xs) = [x] ++ snoc a xs 

--- Ejercicio 9

has :: [Int] -> Int -> Bool
has [] a = False
has (x:xs) a = x == a || has xs a

--- Ejercicio 10

how_many :: Eq a => a -> [a] -> Int
how_many a [] = 0
how_many a (x:xs) = (if a == x then 1 else 0) + how_many a xs

--- Ejercicio 11

posicion :: Int -> [a] -> a
posicion i [] = error "Fuera de indice"
posicion 0 (x:xs) = x
posicion i (x:xs) = posicion (i - 1) xs

indice :: Eq a => a -> [a] -> Int
indice a [] = 0
indice a (x:xs) =  if a == x then 0 else 1 + indice a xs

--- Ejercicio 12

miTakeWhile :: (a -> Bool) -> [a] -> [a]
miTakeWhile f (x:xs) = if f x then x : takeWhile f xs else []

miDropWhile :: (a -> Bool) -> [a] -> [a]
miDropWhile f [] = []
miDropWhile f (x:xs) = if f x then miDropWhile f xs else xs

--- Ejercicio 13

miFilter :: (a -> Bool) -> [a] -> [a]
miFilter f [] = []
miFilter f (x:xs) = if f x then x : miFilter f xs else miFilter f xs

--- Ejercicio 14

miMap :: (a -> b) -> [a] -> [b]
miMap f [] = []
miMap f (x:xs) = f x : miMap f xs

--- Ejercicio 15 

borrarTodos :: Eq a => a -> [a] -> [a]
borrarTodos a [] = []
borrarTodos a (x:xs) = if a == x then borrarTodos a xs else x : borrarTodos a xs 

eliminarPrimero :: Eq a => a -> [a] -> [a]
eliminarPrimero a [] = []
eliminarPrimero a (x:xs) = if x == a then xs else x : eliminarPrimero a xs

--- Ejercicio 16

miTake :: Int -> [a] -> [a]
miTake n [] = []
miTake n (x:xs) = if n > 1 then x : miTake (n-1) xs else [x]

miDrop :: Int -> [a] -> [a]
miDrop n [] = []
miDrop n (x:xs) = if n > 1 then miDrop (n-1) xs else xs

-- Ejercicio 17

fromTo :: Int -> Int -> [Int]
fromTo m n = if m > n then m : fromTo (m-1) n else (if m < n then m : fromTo (m+1) n else [m])

divisores :: Int -> [Int]
divisores n = filter (\x -> mod n x == 0) (fromTo 1 n)

primo :: Int -> Bool
primo n = precedente (divisores n) == [1] 

listaPrimos :: Int -> [Int]
listaPrimos 0 = []
listaPrimos n = if primo n then n : listaPrimos (n-1) else listaPrimos (n-1) 

