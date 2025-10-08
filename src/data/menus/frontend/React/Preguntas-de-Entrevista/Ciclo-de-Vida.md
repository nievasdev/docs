---
title: Ciclo de Vida
---

## Preguntas sobre Ciclo de Vida

### 1. ¿Cuáles son las fases del ciclo de vida en React?

**En componentes de clase:**

**1. Mounting (Montaje)**
- `constructor()`
- `static getDerivedStateFromProps()`
- `render()`
- `componentDidMount()`

**2. Updating (Actualización)**
- `static getDerivedStateFromProps()`
- `shouldComponentUpdate()`
- `render()`
- `getSnapshotBeforeUpdate()`
- `componentDidUpdate()`

**3. Unmounting (Desmontaje)**
- `componentWillUnmount()`

**4. Error Handling**
- `static getDerivedStateFromError()`
- `componentDidCatch()`

### 2. ¿Cómo se mapean los métodos de ciclo de vida a Hooks?

**componentDidMount:**
```javascript
// Clase
componentDidMount() {
  fetchData();
}

// Hook
useEffect(() => {
  fetchData();
}, []); // Array vacío = solo al montar
```

**componentDidUpdate:**
```javascript
// Clase
componentDidUpdate(prevProps, prevState) {
  if (prevProps.id !== this.props.id) {
    fetchData(this.props.id);
  }
}

// Hook
useEffect(() => {
  fetchData(id);
}, [id]); // Se ejecuta cuando id cambia
```

**componentWillUnmount:**
```javascript
// Clase
componentWillUnmount() {
  subscription.unsubscribe();
}

// Hook
useEffect(() => {
  const subscription = subscribe();

  return () => {
    subscription.unsubscribe();
  };
}, []);
```

**Combinación:**
```javascript
// Clase - Múltiples métodos
componentDidMount() {
  this.setupSubscription();
}
componentDidUpdate(prevProps) {
  if (prevProps.source !== this.props.source) {
    this.updateSubscription();
  }
}
componentWillUnmount() {
  this.cleanupSubscription();
}

// Hook - Un solo useEffect
useEffect(() => {
  setupSubscription();
  return () => cleanupSubscription();
}, [source]);
```

### 3. ¿Qué es componentDidMount y para qué se usa?

Método que se ejecuta después del primer render.

```javascript
class Component extends React.Component {
  componentDidMount() {
    // API calls
    fetch('/api/data').then(/* ... */);

    // Subscripciones
    this.subscription = eventEmitter.subscribe();

    // Inicializar librerías third-party
    this.chart = new Chart(this.canvasRef.current);

    // Acceder al DOM
    this.inputRef.current.focus();

    // Timers
    this.timer = setInterval(() => {}, 1000);
  }
}
```

**Con Hooks:**
```javascript
useEffect(() => {
  // Todo lo anterior
}, []);
```

### 4. ¿Qué es componentDidUpdate?

Se ejecuta después de cada actualización (excepto el primer render).

```javascript
componentDidUpdate(prevProps, prevState, snapshot) {
  // Comparar props anteriores
  if (this.props.userId !== prevProps.userId) {
    this.fetchUser(this.props.userId);
  }

  // Comparar estado anterior
  if (this.state.searchTerm !== prevState.searchTerm) {
    this.performSearch(this.state.searchTerm);
  }

  // Usar snapshot
  if (snapshot !== null) {
    this.scrollToPosition(snapshot);
  }
}
```

**Con Hooks:**
```javascript
// Se ejecuta cuando userId cambia
useEffect(() => {
  fetchUser(userId);
}, [userId]);

// Para detectar cambios necesitas valor anterior
const usePrevious = (value) => {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
};

const prevCount = usePrevious(count);
useEffect(() => {
  if (prevCount !== count) {
    console.log(`Changed from ${prevCount} to ${count}`);
  }
});
```

### 5. ¿Qué es componentWillUnmount?

Se ejecuta antes de que el componente se desmonte.

```javascript
componentWillUnmount() {
  // Limpiar subscripciones
  this.subscription.unsubscribe();

  // Cancelar timers
  clearInterval(this.timer);

  // Remover event listeners
  window.removeEventListener('resize', this.handleResize);

  // Cancelar requests pendientes
  this.abortController.abort();

  // Limpiar WebSockets
  this.websocket.close();
}
```

**Con Hooks:**
```javascript
useEffect(() => {
  const subscription = subscribe();

  return () => {
    // Cleanup function
    subscription.unsubscribe();
  };
}, []);
```

### 6. ¿Qué es shouldComponentUpdate?

Método de optimización que decide si un componente debe re-renderizarse.

```javascript
shouldComponentUpdate(nextProps, nextState) {
  // No re-renderizar si el ID no cambió
  return nextProps.id !== this.props.id;
}
```

**Equivalente con Hooks:**
```javascript
// React.memo hace shallow comparison por defecto
const Component = React.memo(function MyComponent(props) {
  return <div>{props.name}</div>;
});

// Con comparación custom
const Component = React.memo(
  MyComponent,
  (prevProps, nextProps) => {
    // true = NO re-renderizar
    // false = SÍ re-renderizar
    return prevProps.id === nextProps.id;
  }
);
```

**PureComponent:**
```javascript
// Hace shallow comparison automático
class MyComponent extends React.PureComponent {
  render() {
    return <div>{this.props.name}</div>;
  }
}
```

### 7. ¿Qué es getDerivedStateFromProps?

Actualizar el estado basándose en cambios en props (raro, generalmente anti-pattern).

```javascript
static getDerivedStateFromProps(props, state) {
  // Actualizar estado cuando prop cambia
  if (props.userId !== state.prevUserId) {
    return {
      prevUserId: props.userId,
      data: null, // Reset data
      loading: true
    };
  }
  return null; // No cambios
}
```

**Con Hooks (mejor):**
```javascript
function Component({ userId }) {
  const [data, setData] = useState(null);

  // Detectar cambio en userId
  useEffect(() => {
    setData(null); // Reset
    fetchData(userId).then(setData);
  }, [userId]);

  return <div>{data}</div>;
}
```

**Cuándo usar:**
- Raramente necesario
- Preferir key prop para resetear estado
- Preferir useEffect

### 8. ¿Qué es getSnapshotBeforeUpdate?

Capturar información del DOM antes de que cambie.

```javascript
getSnapshotBeforeUpdate(prevProps, prevState) {
  // Guardar posición del scroll antes de actualizar
  if (prevProps.list.length < this.props.list.length) {
    const list = this.listRef.current;
    return list.scrollHeight - list.scrollTop;
  }
  return null;
}

componentDidUpdate(prevProps, prevState, snapshot) {
  if (snapshot !== null) {
    const list = this.listRef.current;
    list.scrollTop = list.scrollHeight - snapshot;
  }
}
```

**Con Hooks:**
```javascript
// No hay equivalente directo
// Usar useLayoutEffect para mutaciones síncronas

useLayoutEffect(() => {
  const prevScrollHeight = listRef.current.scrollHeight;
  const prevScrollTop = listRef.current.scrollTop;

  return () => {
    // Ajustar después del render
    const newScrollHeight = listRef.current.scrollHeight;
    listRef.current.scrollTop =
      prevScrollTop + (newScrollHeight - prevScrollHeight);
  };
}, [items]);
```

### 9. ¿Cuál es el orden de ejecución en el ciclo de vida?

**Montaje (Mount):**
```
1. constructor()
2. getDerivedStateFromProps()
3. render()
4. React actualiza DOM y refs
5. componentDidMount()
```

**Actualización (Update):**
```
1. getDerivedStateFromProps()
2. shouldComponentUpdate()
   ↓ (si retorna true)
3. render()
4. getSnapshotBeforeUpdate()
5. React actualiza DOM y refs
6. componentDidUpdate()
```

**Desmontaje (Unmount):**
```
1. componentWillUnmount()
2. Componente removido del DOM
```

**Con Hooks:**
```javascript
function Component({ prop }) {
  console.log('1. Render phase');

  useEffect(() => {
    console.log('3. Commit phase - mount/update');

    return () => {
      console.log('4. Cleanup');
    };
  });

  useLayoutEffect(() => {
    console.log('2. Layout effects (sync)');
  });

  return <div>Hello</div>;
}
```

### 10. ¿Qué métodos de ciclo de vida están deprecated?

**Deprecated (React 16.3+):**
- `componentWillMount()` → usar `componentDidMount()`
- `componentWillReceiveProps()` → usar `getDerivedStateFromProps()`
- `componentWillUpdate()` → usar `getSnapshotBeforeUpdate()`

**Por qué se deprecaron:**
- Incompatibles con async rendering
- Causaban bugs
- Confusión sobre cuándo usarlos

**Migración:**
```javascript
// ❌ Deprecated
componentWillReceiveProps(nextProps) {
  if (nextProps.id !== this.props.id) {
    this.setState({ loading: true });
  }
}

// ✅ Alternativas
// 1. getDerivedStateFromProps (raro)
static getDerivedStateFromProps(props, state) {
  if (props.id !== state.prevId) {
    return { prevId: props.id, loading: true };
  }
  return null;
}

// 2. componentDidUpdate (común)
componentDidUpdate(prevProps) {
  if (prevProps.id !== this.props.id) {
    this.setState({ loading: true });
    this.fetchData();
  }
}

// 3. useEffect (recomendado)
useEffect(() => {
  setLoading(true);
  fetchData();
}, [id]);
```

### 11. ¿Cómo funciona el ciclo de vida con Suspense?

```javascript
<Suspense fallback={<Loading />}>
  <LazyComponent />
</Suspense>
```

**Flujo:**
1. React intenta renderizar `LazyComponent`
2. Componente "suspende" (lanza promesa)
3. React muestra `fallback`
4. Cuando promesa resuelve, renderiza componente real

**Con data fetching:**
```javascript
const resource = fetchData(); // Retorna "suspendable resource"

function Component() {
  const data = resource.read(); // Suspende si no está listo
  return <div>{data}</div>;
}

<Suspense fallback={<Loading />}>
  <Component />
</Suspense>
```

**Ciclo de vida:**
- `componentDidCatch` no captura suspensión
- `ErrorBoundary` captura errores en load
- Límites múltiples para granularidad

### 12. ¿Cómo manejar cleanup en efectos?

**Patrones comunes:**

**1. Subscripciones:**
```javascript
useEffect(() => {
  const subscription = api.subscribe(handleUpdate);
  return () => subscription.unsubscribe();
}, []);
```

**2. Event listeners:**
```javascript
useEffect(() => {
  const handleResize = () => setWidth(window.innerWidth);
  window.addEventListener('resize', handleResize);
  return () => window.removeEventListener('resize', handleResize);
}, []);
```

**3. Timers:**
```javascript
useEffect(() => {
  const timer = setInterval(() => setCount(c => c + 1), 1000);
  return () => clearInterval(timer);
}, []);
```

**4. Async/Abort:**
```javascript
useEffect(() => {
  const abortController = new AbortController();

  fetch('/api/data', { signal: abortController.signal })
    .then(res => res.json())
    .then(setData)
    .catch(err => {
      if (err.name !== 'AbortError') {
        console.error(err);
      }
    });

  return () => abortController.abort();
}, []);
```

**5. Flags para prevenir updates:**
```javascript
useEffect(() => {
  let isMounted = true;

  fetchData().then(data => {
    if (isMounted) {
      setData(data);
    }
  });

  return () => {
    isMounted = false;
  };
}, []);
```
