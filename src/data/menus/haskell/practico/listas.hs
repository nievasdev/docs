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
