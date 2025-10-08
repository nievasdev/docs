---
title: Operaciones
---

El boleano consta unicamente de 2 valores, True y False, la siguiente es la codificación de Booleanos en Haskell

```haskell
data Bool = False | True
```

## Operador Case

Tenemos disponible el operador case que, dada una expresión booleana, permite analizar sus posibles valores (False o True)

```haskell
\x -> case x of {
 False -> True;
 True -> False
 }
```

obviamente, la funcion tiene tipo Bool -> Bool
