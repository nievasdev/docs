type Tira = [Int]

agregar01 :: Tira -> [Tira]
agregar01 t = [(0:t),(1:t)]

agregarBit :: [Tira] -> [Tira]
agregarBit [] = []
agregarBit (t:ts) = agregar01 t ++ agregarBit ts 
