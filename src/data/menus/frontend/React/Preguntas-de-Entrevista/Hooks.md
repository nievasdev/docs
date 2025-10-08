---
title: Hooks
---

## Preguntas sobre React Hooks

### 1. ¿Qué son los Hooks y por qué se introdujeron?

Los Hooks son funciones que permiten usar estado y otras características de React en componentes funcionales.

**Razones de su introducción:**
- Reutilizar lógica con estado sin HOCs o render props
- Componentes más simples y legibles
- Evitar la complejidad de las clases
- Separar lógica por concerns, no por lifecycle

### 2. ¿Cuáles son las reglas de los Hooks?

**Regla 1: Solo llamar Hooks en el nivel superior**
- No dentro de loops, condiciones o funciones anidadas

```javascript
// ❌ Mal
if (condition) {
  const [state, setState] = useState(0);
}

// ✅ Bien
const [state, setState] = useState(0);
if (condition) {
  setState(1);
}
```

**Regla 2: Solo llamar Hooks desde componentes funcionales o custom hooks**
- No desde funciones JavaScript regulares

### 3. Explica useState

Hook para agregar estado a componentes funcionales.

```javascript
const [count, setCount] = useState(0);

// Con función inicializadora (lazy initialization)
const [state, setState] = useState(() => {
  return expensiveCalculation();
});

// Actualización funcional
setCount(prevCount => prevCount + 1);
```

**Características:**
- Retorna un array: [valor, función setter]
- El valor inicial se usa solo en el primer render
- Las actualizaciones causan re-render
- Pueden existir múltiples useState en un componente

### 4. Explica useEffect

Hook para efectos secundarios (side effects).

```javascript
useEffect(() => {
  // Efecto
  document.title = `Clicks: ${count}`;

  // Cleanup (opcional)
  return () => {
    document.title = 'React App';
  };
}, [count]); // Dependencias
```

**Casos de uso:**
- Fetching de datos
- Subscripciones
- Manipulación del DOM
- Timers

**Array de dependencias:**
- `[]` - Solo se ejecuta una vez (mount)
- `[dep]` - Se ejecuta cuando dep cambia
- Sin array - Se ejecuta en cada render

### 5. ¿Cuál es la diferencia entre useEffect y useLayoutEffect?

**useEffect:**
- Se ejecuta **después** de pintar la pantalla
- No bloquea el render visual
- Para la mayoría de efectos

**useLayoutEffect:**
- Se ejecuta **antes** de pintar la pantalla
- Bloquea el render visual
- Para mediciones del DOM o mutaciones síncronas

```javascript
// Evita parpadeo visual
useLayoutEffect(() => {
  const rect = divRef.current.getBoundingClientRect();
  setHeight(rect.height);
}, []);
```

### 6. Explica useMemo

Hook para memorizar valores calculados (memoización).

```javascript
const expensiveValue = useMemo(() => {
  return computeExpensiveValue(a, b);
}, [a, b]);
```

**Cuándo usar:**
- Cálculos costosos
- Evitar re-cálculos innecesarios
- Optimización de rendimiento

**Cuándo NO usar:**
- Para todo (overhead innecesario)
- Si el cálculo es trivial

### 7. Explica useCallback

Hook para memorizar funciones.

```javascript
const memoizedCallback = useCallback(() => {
  doSomething(a, b);
}, [a, b]);
```

**Diferencia con useMemo:**
```javascript
useCallback(fn, deps) === useMemo(() => fn, deps)
```

**Cuándo usar:**
- Pasar callbacks a componentes hijos optimizados (React.memo)
- Evitar re-creación de funciones
- Dependencia de useEffect

### 8. Explica useRef

Hook para mantener una referencia mutable que persiste entre renders.

```javascript
const inputRef = useRef(null);

// Acceder al DOM
inputRef.current.focus();

// Valor mutable que no causa re-render
const countRef = useRef(0);
countRef.current += 1; // No causa re-render
```

**Casos de uso:**
- Acceder a elementos del DOM
- Almacenar valores que no causan re-render
- Guardar valores anteriores
- Timers e intervalos

### 9. Explica useContext

Hook para consumir un Context.

```javascript
const ThemeContext = React.createContext('light');

// En componente hijo
const theme = useContext(ThemeContext);
```

**Ventajas:**
- Evita prop drilling
- Más limpio que Consumer
- Acceso directo al valor del context

### 10. ¿Qué son los Custom Hooks?

Funciones que encapsulan lógica con Hooks reutilizables.

```javascript
function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return width;
}

// Uso
const width = useWindowWidth();
```

**Convenciones:**
- Nombrar con prefijo `use`
- Pueden usar otros Hooks
- Compartir lógica, no estado

### 11. ¿Cuándo usar useReducer en lugar de useState?

**useState:**
- Estado simple
- Lógica de actualización simple
- Pocos estados relacionados

**useReducer:**
- Estado complejo con múltiples sub-valores
- Lógica de actualización compleja
- Próximo estado depende del anterior
- Múltiples acciones relacionadas

```javascript
const [state, dispatch] = useReducer(reducer, initialState);

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
}

dispatch({ type: 'increment' });
```

### 12. Explica useImperativeHandle

Hook para personalizar el valor expuesto cuando se usa ref en componentes.

```javascript
const Input = forwardRef((props, ref) => {
  const inputRef = useRef();

  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    },
    clear: () => {
      inputRef.current.value = '';
    }
  }));

  return <input ref={inputRef} />;
});

// Uso
const ref = useRef();
ref.current.focus(); // Llama al método personalizado
```

### 13. ¿Qué es el cleanup en useEffect?

Función que se ejecuta antes de que el componente se desmonte o antes de volver a ejecutar el efecto.

```javascript
useEffect(() => {
  const subscription = api.subscribe();

  // Cleanup
  return () => {
    subscription.unsubscribe();
  };
}, []);
```

**Casos de uso:**
- Limpiar subscripciones
- Cancelar timers
- Remover event listeners
- Cancelar requests

### 14. ¿Por qué no se debe llamar a Hooks condicionalmente?

React depende del orden de llamada de los Hooks para mantener el estado correcto.

```javascript
// ❌ Mal - Orden puede cambiar
if (condition) {
  useState(0); // A veces se llama, a veces no
}
useState(''); // Posición cambia

// ✅ Bien
const [count, setCount] = useState(0);
const [name, setName] = useState('');

if (condition) {
  setCount(1);
}
```

### 15. ¿Cómo evitar ejecuciones infinitas en useEffect?

**Problema:**
```javascript
// ❌ Loop infinito
const [count, setCount] = useState(0);

useEffect(() => {
  setCount(count + 1); // Cambia count
}, [count]); // Se ejecuta cuando count cambia
```

**Soluciones:**
```javascript
// ✅ Dependencias correctas
useEffect(() => {
  fetchData();
}, []); // Solo una vez

// ✅ Actualización funcional
useEffect(() => {
  setCount(c => c + 1);
}, []); // No depende de count

// ✅ Dependencias específicas
useEffect(() => {
  if (shouldFetch) {
    fetchData();
  }
}, [shouldFetch]); // Solo cuando shouldFetch cambia
```
