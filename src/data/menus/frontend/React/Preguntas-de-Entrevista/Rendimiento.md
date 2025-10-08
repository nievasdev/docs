---
title: Rendimiento y Optimización
---

## Preguntas sobre Rendimiento

### 1. ¿Cuáles son las técnicas principales de optimización en React?

**1. React.memo** - Memoizar componentes
```javascript
const MemoizedComponent = React.memo(Component);
```

**2. useMemo** - Memoizar valores
```javascript
const value = useMemo(() => expensiveCalc(), [deps]);
```

**3. useCallback** - Memoizar funciones
```javascript
const callback = useCallback(() => {}, [deps]);
```

**4. Code splitting** - Cargar código bajo demanda
```javascript
const Component = lazy(() => import('./Component'));
```

**5. Virtualización** - Renderizar solo lo visible
```javascript
<VirtualList items={largeList} />
```

**6. Debounce/Throttle** - Limitar ejecuciones

### 2. ¿Cuándo usar React.memo?

**Usar cuando:**
- Componente renderiza frecuentemente con las mismas props
- El componente es costoso de renderizar
- Componente puro (mismo input → mismo output)

```javascript
// Componente costoso que recibe props estables
const ExpensiveList = React.memo(({ items }) => {
  return items.map(item => <Item key={item.id} {...item} />);
});
```

**NO usar cuando:**
- El componente siempre recibe props diferentes
- El componente es simple y rápido
- Props incluyen funciones/objetos nuevos en cada render

### 3. ¿Cuál es la diferencia entre useMemo y useCallback?

**useMemo** - Memoiza el **resultado**
```javascript
const sortedList = useMemo(() => {
  return list.sort(); // Retorna el array ordenado
}, [list]);
```

**useCallback** - Memoiza la **función**
```javascript
const handleClick = useCallback(() => {
  console.log('click');
}, []); // Retorna la función
```

**Equivalencia:**
```javascript
useCallback(fn, deps) === useMemo(() => fn, deps)
```

### 4. ¿Qué es code splitting y cómo implementarlo?

Dividir el código en chunks que se cargan bajo demanda.

**React.lazy:**
```javascript
import { lazy, Suspense } from 'react';

// Carga diferida
const Dashboard = lazy(() => import('./Dashboard'));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Dashboard />
    </Suspense>
  );
}
```

**Route-based splitting:**
```javascript
const Home = lazy(() => import('./routes/Home'));
const About = lazy(() => import('./routes/About'));

<Routes>
  <Route path="/" element={
    <Suspense fallback={<Loading />}>
      <Home />
    </Suspense>
  } />
</Routes>
```

**Ventajas:**
- Reduce el bundle inicial
- Mejora tiempo de carga
- Carga recursos solo cuando se necesitan

### 5. ¿Qué es la virtualización y cuándo usarla?

Renderizar solo los elementos visibles en pantalla.

```javascript
import { FixedSizeList } from 'react-window';

<FixedSizeList
  height={600}
  itemCount={10000}
  itemSize={50}
>
  {({ index, style }) => (
    <div style={style}>Item {index}</div>
  )}
</FixedSizeList>
```

**Cuándo usar:**
- Listas muy largas (1000+ items)
- Tablas con muchos datos
- Grids infinitas

**Librerías:**
- react-window (más liviana)
- react-virtualized (más features)

### 6. ¿Cómo evitar re-renders innecesarios?

**1. Evitar crear objetos/funciones inline:**
```javascript
// ❌ Mal
<Component onClick={() => {}} />
<Component style={{ color: 'red' }} />

// ✅ Bien
const handleClick = useCallback(() => {}, []);
const style = useMemo(() => ({ color: 'red' }), []);
<Component onClick={handleClick} style={style} />
```

**2. Mover estado hacia abajo:**
```javascript
// ❌ Estado en componente grande
function App() {
  const [text, setText] = useState('');
  return (
    <div>
      <HeavyComponent /> {/* Re-render innecesario */}
      <input value={text} onChange={e => setText(e.target.value)} />
    </div>
  );
}

// ✅ Estado en componente pequeño
function App() {
  return (
    <div>
      <HeavyComponent />
      <SearchInput /> {/* Solo esto re-renderiza */}
    </div>
  );
}
```

**3. Composition con children:**
```javascript
// Children no re-renderizan si no cambian
function Wrapper({ children }) {
  const [state, setState] = useState(0);
  return <div>{children}</div>; // children son estables
}

<Wrapper>
  <ExpensiveComponent /> {/* No re-renderiza */}
</Wrapper>
```

### 7. ¿Qué es React DevTools Profiler?

Herramienta para medir y analizar el rendimiento.

**Uso:**
1. Abrir DevTools → Pestaña Profiler
2. Grabar interacción
3. Analizar:
   - Tiempo de render de cada componente
   - Por qué re-renderizó
   - Flame graph
   - Ranked chart

**En código:**
```javascript
import { Profiler } from 'react';

<Profiler id="App" onRender={onRenderCallback}>
  <App />
</Profiler>

function onRenderCallback(
  id, phase, actualDuration, baseDuration,
  startTime, commitTime, interactions
) {
  console.log(`${id} took ${actualDuration}ms`);
}
```

### 8. ¿Qué es el debouncing y throttling?

**Debounce:** Ejecutar después de que pasen X ms sin llamadas.

```javascript
function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(timer);
  }, [value, delay]);

  return debouncedValue;
}

// Uso en búsqueda
const [search, setSearch] = useState('');
const debouncedSearch = useDebounce(search, 500);

useEffect(() => {
  // API call solo después de 500ms sin escribir
  fetchResults(debouncedSearch);
}, [debouncedSearch]);
```

**Throttle:** Ejecutar máximo una vez cada X ms.

```javascript
function useThrottle(value, delay) {
  const [throttledValue, setThrottledValue] = useState(value);
  const lastRan = useRef(Date.now());

  useEffect(() => {
    const timer = setTimeout(() => {
      if (Date.now() - lastRan.current >= delay) {
        setThrottledValue(value);
        lastRan.current = Date.now();
      }
    }, delay - (Date.now() - lastRan.current));

    return () => clearTimeout(timer);
  }, [value, delay]);

  return throttledValue;
}
```

**Cuándo usar:**
- Debounce: Search, resize, form validation
- Throttle: Scroll, mouse move, window resize

### 9. ¿Qué es el bundle size y cómo reducirlo?

Tamaño del JavaScript enviado al navegador.

**Estrategias:**

**1. Code splitting**
```javascript
const Component = lazy(() => import('./Component'));
```

**2. Tree shaking** - Eliminar código no usado
```javascript
// ✅ Named imports
import { map } from 'lodash-es';

// ❌ Import completo
import _ from 'lodash';
```

**3. Dynamic imports**
```javascript
// Cargar solo cuando se necesita
button.onclick = async () => {
  const module = await import('./heavy-module');
  module.doSomething();
};
```

**4. Analizar bundle**
```bash
npm install --save-dev webpack-bundle-analyzer
```

**5. Comprimir assets**
- Minificación
- Gzip/Brotli compression
- Optimizar imágenes

### 10. ¿Qué son los Web Workers en React?

Ejecutar JavaScript en background threads.

```javascript
// worker.js
self.addEventListener('message', (e) => {
  const result = heavyCalculation(e.data);
  self.postMessage(result);
});

// Component.jsx
function Component() {
  const [result, setResult] = useState(null);

  useEffect(() => {
    const worker = new Worker('/worker.js');

    worker.onmessage = (e) => {
      setResult(e.data);
    };

    worker.postMessage(data);

    return () => worker.terminate();
  }, []);
}
```

**Uso:**
- Cálculos pesados
- Procesamiento de imágenes
- Parsing de datos grandes
- No bloquear UI

### 11. ¿Qué es React.StrictMode?

Modo para detectar problemas en desarrollo.

```javascript
<React.StrictMode>
  <App />
</React.StrictMode>
```

**Detecta:**
- Componentes con métodos de ciclo de vida inseguros
- Uso de API deprecated
- Efectos secundarios inesperados
- Context legacy

**Características:**
- Solo en desarrollo
- Renderiza componentes dos veces
- Ejecuta effects dos veces (React 18+)

### 12. ¿Cómo optimizar imágenes en React?

**1. Lazy loading**
```javascript
<img src="image.jpg" loading="lazy" />
```

**2. Responsive images**
```javascript
<img
  srcSet="small.jpg 500w, medium.jpg 1000w, large.jpg 2000w"
  sizes="(max-width: 600px) 500px, 1000px"
/>
```

**3. Formatos modernos**
```javascript
<picture>
  <source srcSet="image.webp" type="image/webp" />
  <source srcSet="image.jpg" type="image/jpeg" />
  <img src="image.jpg" alt="" />
</picture>
```

**4. CDN y compresión**
```javascript
<img
  src="https://cdn.example.com/image.jpg?w=800&q=80"
  alt=""
/>
```

**5. Librerías especializadas**
- next/image (Next.js)
- gatsby-image (Gatsby)
- react-lazy-load-image-component

### 13. ¿Qué métricas de rendimiento son importantes?

**Core Web Vitals:**

**1. LCP (Largest Contentful Paint)**
- Tiempo hasta que el contenido principal carga
- Meta: < 2.5s

**2. FID (First Input Delay)**
- Tiempo hasta que la página responde a interacción
- Meta: < 100ms

**3. CLS (Cumulative Layout Shift)**
- Estabilidad visual
- Meta: < 0.1

**Otras métricas:**
- FCP (First Contentful Paint)
- TTI (Time to Interactive)
- TBT (Total Blocking Time)

**Herramientas:**
- Lighthouse
- Web Vitals library
- React DevTools Profiler
