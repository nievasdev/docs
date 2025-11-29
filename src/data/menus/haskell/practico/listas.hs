import Prelude hiding (null,length,duplicate,(++),append,reverse,lensum,concat,
                       sum,prod,and,or,any,all,count,map,filter,elem,head,tail,last,init,(!!),firstp,lastp)

length :: [a] -> Int
length [] = 0
length (x:xs) = 1 + length xs

null :: [a] -> Bool
null a = length a == 0

duplicate :: [a] -> [a]
duplicate [] = []
duplicate (x:xs) = x : (x : duplicate xs)

(++) :: [a] -> [a] -> [a]
(++) [] ys = ys
(++) (x:xs) ys = x : (++) xs ys

append :: a -> [a] -> [a]
append a [] = [a]
append a (x:xs) = x : append a xs

reverse :: [a] -> [a]
reverse [] = []
reverse (x:xs) = reverse xs ++ [x]

lensum :: [[a]] -> Int
lensum [] = 0
lensum (x:xs) = length x + lensum xs

concat :: [[a]] -> [a]
concat [] = []
concat (x:xs) = x ++ concat xs

sum :: [Int] -> Int
sum [] = 0
sum (x:xs) = x + sum xs

prod :: [Int] -> Int
prod [] = 0
prod (x:[]) = x
prod (x:xs) = x * prod xs

and :: [Bool] -> Bool
and [] = False
and (x:[]) = x
and (x:xs) = x && and xs

or :: [Bool] -> Bool
or [] = False
or (x:[]) = x
or (x:xs) = x || or xs

any :: (a -> Bool) -> [a] -> Bool
any f [] = False
any f (x:xs) = f x || any f xs

all :: (a -> Bool) -> [a] -> Bool
all f [] = True
all f (x:xs) = f x && all f xs

count :: (a -> Bool) -> [a] -> Int
count f [] = 0
count f (x:xs) = if f x then 1 + count f xs else count f xs

map :: (a -> b) -> [a] -> [b]
map f [] = []
map f (x:xs) = f x : map f xs

elem :: Eq a => a -> [a] -> Bool
elem a [] = False
elem a (x:xs) = a == x || elem a xs



--- Ejercicio 4

head :: [a] -> a
head [] = error "la cadena esta vacia"
head (x:xs) = x

tail :: [a] -> [a]
tail [] = []
tail (x:xs) = xs

last :: [a] -> a
last [] = error "la cadena esta vacia"
last (x:[]) = x
last (x:xs) = last xs

init :: [a] -> [a]
init [] = []
init (x:[]) = []
init (x:xs) = x : init xs

(!!) :: Int -> [a] -> a
(!!) _ [] = error "Elemento fuera de lista"
(!!) 0 (x:xs) = x
(!!) n (x:xs) = (!!) (n-1) xs

firstp :: (a -> Bool) -> [a] -> a
firstp f [] = error "No hay elementos que cumplan la condicion"
firstp f 
