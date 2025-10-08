---
title: Temas Avanzados
---

## Preguntas Avanzadas de React

### 1. ¿Qué son los Higher-Order Components (HOC)?

Función que toma un componente y retorna un nuevo componente con funcionalidad adicional.

```javascript
// HOC
function withAuth(Component) {
  return function AuthenticatedComponent(props) {
    const { isAuthenticated } = useAuth();

    if (!isAuthenticated) {
      return <Redirect to="/login" />;
    }

    return <Component {...props} />;
  };
}

// Uso
const ProtectedPage = withAuth(Dashboard);
```

**Convenciones:**
- Prefijo `with`
- Pasar todas las props (`{...props}`)
- No mutar el componente original

**Cuándo usar:**
- Reutilizar lógica entre componentes
- Inyectar props
- Envolver con funcionalidad cross-cutting

**Alternativas modernas:**
- Custom Hooks (preferido)
- Render Props

### 2. ¿Qué son los Render Props?

Patrón donde un componente recibe una función como prop que retorna un elemento React.

```javascript
function DataProvider({ render }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData().then(setData);
  }, []);

  return render(data);
}

// Uso
<DataProvider
  render={data => (
    data ? <Display data={data} /> : <Loading />
  )}
/>

// Con children
<DataProvider>
  {data => data ? <Display data={data} /> : <Loading />}
</DataProvider>
```

**Ventajas:**
- Separación de lógica y presentación
- Flexibilidad en renderizado
- Composición explícita

**Desventajas:**
- Callback hell si se anidan muchos
- Sintaxis más verbosa que Hooks

### 3. ¿Qué es la composición de componentes?

Combinar componentes simples para crear componentes complejos.

**Composición vs Herencia:**
```javascript
// ❌ Herencia (anti-pattern en React)
class FancyButton extends Button {
  // ...
}

// ✅ Composición
function FancyButton({ children, ...props }) {
  return (
    <Button {...props} className="fancy">
      <Icon />
      {children}
    </Button>
  );
}
```

**Patterns de composición:**

**1. Containment** - children prop
```javascript
function Card({ children }) {
  return <div className="card">{children}</div>;
}

<Card>
  <h1>Title</h1>
  <p>Content</p>
</Card>
```

**2. Specialization** - Props específicas
```javascript
function Dialog({ title, children }) {
  return (
    <div>
      <h1>{title}</h1>
      <div>{children}</div>
    </div>
  );
}

function WelcomeDialog() {
  return (
    <Dialog title="Welcome">
      <p>Thank you for visiting!</p>
    </Dialog>
  );
}
```

**3. Slots** - Múltiples children
```javascript
function Layout({ header, sidebar, content, footer }) {
  return (
    <div>
      <header>{header}</header>
      <div className="body">
        <aside>{sidebar}</aside>
        <main>{content}</main>
      </div>
      <footer>{footer}</footer>
    </div>
  );
}
```

### 4. ¿Qué es el patrón Compound Components?

Componentes que trabajan juntos para formar una interfaz completa.

```javascript
// Implementación
const TabsContext = createContext();

function Tabs({ children, defaultTab }) {
  const [activeTab, setActiveTab] = useState(defaultTab);

  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      <div className="tabs">{children}</div>
    </TabsContext.Provider>
  );
}

function TabList({ children }) {
  return <div className="tab-list">{children}</div>;
}

function Tab({ id, children }) {
  const { activeTab, setActiveTab } = useContext(TabsContext);
  return (
    <button
      className={activeTab === id ? 'active' : ''}
      onClick={() => setActiveTab(id)}
    >
      {children}
    </button>
  );
}

function TabPanel({ id, children }) {
  const { activeTab } = useContext(TabsContext);
  return activeTab === id ? <div>{children}</div> : null;
}

// Exportar como compound
Tabs.List = TabList;
Tabs.Tab = Tab;
Tabs.Panel = TabPanel;

// Uso
<Tabs defaultTab="home">
  <Tabs.List>
    <Tabs.Tab id="home">Home</Tabs.Tab>
    <Tabs.Tab id="profile">Profile</Tabs.Tab>
  </Tabs.List>

  <Tabs.Panel id="home">Home content</Tabs.Panel>
  <Tabs.Panel id="profile">Profile content</Tabs.Panel>
</Tabs>
```

**Ventajas:**
- API expresiva y flexible
- Estado compartido implícito
- Componentes relacionados agrupados

**Ejemplos reales:**
- React Router (`<Routes>`, `<Route>`)
- Reach UI
- Radix UI

### 5. ¿Qué es Error Boundary?

Componente que captura errores de JavaScript en su árbol de componentes.

```javascript
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error:', error, errorInfo);
    // Enviar a servicio de logging
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

// Uso
<ErrorBoundary>
  <App />
</ErrorBoundary>
```

**Qué captura:**
- Errores durante el renderizado
- En métodos de ciclo de vida
- En constructores

**Qué NO captura:**
- Event handlers (usar try/catch)
- Código asíncrono
- Errores en el mismo error boundary
- Server-side rendering

**Hook version (experimental):**
```javascript
// No oficial, usando react-error-boundary
import { ErrorBoundary } from 'react-error-boundary';

<ErrorBoundary
  FallbackComponent={ErrorFallback}
  onError={(error, errorInfo) => {
    console.error(error);
  }}
>
  <App />
</ErrorBoundary>
```

### 6. ¿Qué es el patrón Container/Presentational?

Separar lógica de negocio de la presentación.

**Container (Smart Component):**
```javascript
// Maneja lógica y estado
function UserContainer() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUsers().then(data => {
      setUsers(data);
      setLoading(false);
    });
  }, []);

  return <UserList users={users} loading={loading} />;
}
```

**Presentational (Dumb Component):**
```javascript
// Solo renderiza UI
function UserList({ users, loading }) {
  if (loading) return <Spinner />;

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
```

**Ventajas:**
- Separación de concerns
- Componentes presentacionales reutilizables
- Fácil de testear

**Nota:** Menos relevante con Hooks (Custom Hooks reemplazan containers).

### 7. ¿Qué es el patrón Provider?

Proveer datos/funcionalidad a componentes descendientes sin prop drilling.

```javascript
// 1. Crear Context
const ThemeContext = createContext();

// 2. Crear Provider
function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(t => t === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// 3. Custom Hook para consumir
function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
}

// 4. Uso
function App() {
  return (
    <ThemeProvider>
      <Header />
      <Content />
    </ThemeProvider>
  );
}

function Header() {
  const { theme, toggleTheme } = useTheme();
  return <button onClick={toggleTheme}>{theme}</button>;
}
```

### 8. ¿Qué es Concurrent Mode? (React 18+)

Modo que permite a React interrumpir, pausar y reanudar renders.

**Características:**

**1. Automatic Batching**
```javascript
// React 18+ - Batching automático en todas partes
setTimeout(() => {
  setCount(c => c + 1);
  setFlag(f => !f);
  // Solo 1 render
}, 1000);
```

**2. Transitions**
```javascript
import { useTransition } from 'react';

function SearchComponent() {
  const [isPending, startTransition] = useTransition();
  const [input, setInput] = useState('');
  const [list, setList] = useState([]);

  const handleChange = (e) => {
    setInput(e.target.value); // Urgente

    startTransition(() => {
      // No urgente - puede interrumpirse
      setList(filterLargeList(e.target.value));
    });
  };

  return (
    <>
      <input value={input} onChange={handleChange} />
      {isPending && <Spinner />}
      <List items={list} />
    </>
  );
}
```

**3. Suspense para Data Fetching**
```javascript
<Suspense fallback={<Loading />}>
  <DataComponent />
</Suspense>
```

**4. useDeferredValue**
```javascript
function SearchResults({ query }) {
  const deferredQuery = useDeferredValue(query);

  // Se renderiza con valor anterior mientras
  // el nuevo cálculo está en progreso
  const results = useMemo(
    () => filterResults(deferredQuery),
    [deferredQuery]
  );

  return <List items={results} />;
}
```

### 9. ¿Qué es Server Components? (React 18+)

Componentes que se renderizan solo en el servidor.

```javascript
// UserProfile.server.js
async function UserProfile({ userId }) {
  // Corre solo en el servidor
  const user = await db.users.find(userId);

  return (
    <div>
      <h1>{user.name}</h1>
      <UserPosts userId={userId} /> {/* Client Component */}
    </div>
  );
}
```

**Ventajas:**
- Acceso directo a backend (DB, filesystem)
- Reduce bundle size (código no va al cliente)
- Mejora rendimiento inicial
- Mejor seguridad (API keys en servidor)

**Tipos de componentes:**
- `.server.js` - Solo servidor
- `.client.js` - Solo cliente
- `.js` - Shared (ambos)

**Limitaciones:**
- No pueden usar useState, useEffect
- No pueden usar event handlers
- No tienen acceso a browser APIs

### 10. ¿Qué es el patrón State Reducer?

Control avanzado sobre el estado de un componente.

```javascript
function useToggle(initialState = false) {
  function reducer(state, action) {
    switch (action.type) {
      case 'toggle':
        return !state;
      case 'on':
        return true;
      case 'off':
        return false;
      case 'reset':
        return initialState;
      default:
        throw new Error(`Unknown action: ${action.type}`);
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  return {
    on: state,
    toggle: () => dispatch({ type: 'toggle' }),
    setOn: () => dispatch({ type: 'on' }),
    setOff: () => dispatch({ type: 'off' }),
    reset: () => dispatch({ type: 'reset' })
  };
}

// Uso
const { on, toggle, setOn, setOff, reset } = useToggle();
```

**Con reducer override:**
```javascript
function useToggle(initialState, reducerOverride) {
  const [state, dispatch] = useReducer(
    reducerOverride || defaultReducer,
    initialState
  );
  // ...
}

// Usuario puede customizar comportamiento
const toggle = useToggle(false, (state, action) => {
  if (action.type === 'toggle' && someCondition) {
    return state; // No toggle si condición
  }
  return defaultReducer(state, action);
});
```

### 11. ¿Cómo implementar Undo/Redo?

```javascript
function useHistory(initialState) {
  const [index, setIndex] = useState(0);
  const [history, setHistory] = useState([initialState]);

  const state = history[index];

  const setState = (newState) => {
    const updatedState = typeof newState === 'function'
      ? newState(state)
      : newState;

    // Eliminar history futura si estamos en el pasado
    const newHistory = history.slice(0, index + 1);
    setHistory([...newHistory, updatedState]);
    setIndex(newHistory.length);
  };

  const undo = () => {
    if (index > 0) setIndex(index - 1);
  };

  const redo = () => {
    if (index < history.length - 1) setIndex(index + 1);
  };

  const canUndo = index > 0;
  const canRedo = index < history.length - 1;

  return {
    state,
    setState,
    undo,
    redo,
    canUndo,
    canRedo
  };
}

// Uso
function DrawingApp() {
  const {
    state: drawing,
    setState: setDrawing,
    undo,
    redo,
    canUndo,
    canRedo
  } = useHistory([]);

  return (
    <>
      <button onClick={undo} disabled={!canUndo}>Undo</button>
      <button onClick={redo} disabled={!canRedo}>Redo</button>
      <Canvas drawing={drawing} onDraw={setDrawing} />
    </>
  );
}
```

### 12. ¿Qué es Portals?

Renderizar componentes fuera de la jerarquía DOM del padre.

```javascript
import { createPortal } from 'react-dom';

function Modal({ children, isOpen }) {
  if (!isOpen) return null;

  return createPortal(
    <div className="modal-overlay">
      <div className="modal">
        {children}
      </div>
    </div>,
    document.getElementById('modal-root') // DOM node externo
  );
}

// HTML
<body>
  <div id="root"></div>
  <div id="modal-root"></div>
</body>
```

**Casos de uso:**
- Modales
- Tooltips
- Dropdowns
- Notificaciones

**Ventajas:**
- Escapar overflow: hidden
- Evitar z-index issues
- Mantener contexto de React (events, context)

### 13. ¿Qué es forwardRef?

Pasar refs a través de componentes.

```javascript
const Input = forwardRef((props, ref) => {
  return <input ref={ref} {...props} />;
});

// Uso
function Form() {
  const inputRef = useRef();

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <>
      <Input ref={inputRef} />
      <button onClick={focusInput}>Focus</button>
    </>
  );
}
```

**Con useImperativeHandle:**
```javascript
const Input = forwardRef((props, ref) => {
  const inputRef = useRef();

  useImperativeHandle(ref, () => ({
    focus: () => inputRef.current.focus(),
    clear: () => inputRef.current.value = '',
    getValue: () => inputRef.current.value
  }));

  return <input ref={inputRef} {...props} />;
});

// Uso métodos custom
ref.current.clear();
```
