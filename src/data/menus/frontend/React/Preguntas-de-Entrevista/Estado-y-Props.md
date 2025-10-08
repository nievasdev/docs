---
title: Estado y Props
---

## Preguntas sobre Estado y Props

### 1. ¿Cómo se pasa data de un hijo a un padre?

Mediante callbacks pasados como props.

```javascript
// Padre
function Padre() {
  const handleData = (data) => {
    console.log('Data del hijo:', data);
  };

  return <Hijo onData={handleData} />;
}

// Hijo
function Hijo({ onData }) {
  return (
    <button onClick={() => onData('Hola!')}>
      Enviar
    </button>
  );
}
```

### 2. ¿Qué es el lifting state up?

Mover el estado a un ancestro común cuando múltiples componentes necesitan compartir el mismo estado.

```javascript
// ❌ Antes - Estado duplicado
function ComponenteA() {
  const [value, setValue] = useState('');
  return <input value={value} />;
}

function ComponenteB() {
  const [value, setValue] = useState(''); // Mismo estado
  return <input value={value} />;
}

// ✅ Después - Estado compartido
function Padre() {
  const [value, setValue] = useState('');
  return (
    <>
      <ComponenteA value={value} onChange={setValue} />
      <ComponenteB value={value} onChange={setValue} />
    </>
  );
}
```

### 3. ¿Cuál es la diferencia entre setState síncrono y asíncrono?

**setState es asíncrono** por defecto para optimizar el rendimiento.

```javascript
const [count, setCount] = useState(0);

// ❌ No funciona como esperado
setCount(count + 1);
setCount(count + 1);
console.log(count); // Aún es 0

// ✅ Actualización funcional
setCount(c => c + 1);
setCount(c => c + 1);
// count será 2
```

**En React 18+:**
- Batching automático en todos los eventos
- Incluso en promesas, timeouts, etc.

### 4. ¿Cómo actualizar un objeto en el estado?

**Siempre crear un nuevo objeto** (inmutabilidad).

```javascript
const [user, setUser] = useState({
  name: 'Juan',
  age: 25
});

// ❌ Mal - Mutación directa
user.name = 'Pedro';
setUser(user);

// ✅ Bien - Spread operator
setUser({
  ...user,
  name: 'Pedro'
});

// ✅ Bien - Objeto anidado
setUser(prevUser => ({
  ...prevUser,
  address: {
    ...prevUser.address,
    city: 'Madrid'
  }
}));
```

### 5. ¿Cómo actualizar un array en el estado?

**Crear un nuevo array** (métodos inmutables).

```javascript
const [items, setItems] = useState([1, 2, 3]);

// Agregar
setItems([...items, 4]);
setItems([0, ...items]); // Al inicio

// Eliminar
setItems(items.filter(item => item !== 2));

// Actualizar
setItems(items.map(item =>
  item === 2 ? 20 : item
));

// Ordenar
setItems([...items].sort());

// ❌ Evitar - Mutaciones
items.push(4); // No causa re-render
items.sort(); // Muta el array original
```

### 6. ¿Qué es el batching en React?

Agrupación de múltiples actualizaciones de estado en un solo re-render.

```javascript
function handleClick() {
  setCount(c => c + 1);
  setFlag(f => !f);
  setData(d => [...d, 'new']);
  // Solo 1 re-render, no 3
}
```

**React 18+:**
- Batching automático en todas las situaciones
- Incluso en promesas, setTimeout, eventos nativos

**Desactivar batching (raro):**
```javascript
import { flushSync } from 'react-dom';

flushSync(() => {
  setCount(c => c + 1);
}); // Re-render inmediato

setFlag(f => !f); // Otro re-render
```

### 7. ¿Qué son los derived states y cuándo usarlos?

Estados calculados a partir de otros estados o props.

```javascript
// ❌ Mal - Estado redundante
const [firstName, setFirstName] = useState('');
const [lastName, setLastName] = useState('');
const [fullName, setFullName] = useState(''); // Redundante

// ✅ Bien - Derived state
const [firstName, setFirstName] = useState('');
const [lastName, setLastName] = useState('');
const fullName = `${firstName} ${lastName}`; // Calculado

// ✅ Con useMemo para cálculos costosos
const expensiveValue = useMemo(() => {
  return computeExpensiveValue(data);
}, [data]);
```

### 8. ¿Cuándo usar estado local vs global?

**Estado Local (useState):**
- Solo un componente lo necesita
- Estado de UI (modales, toggles, inputs)
- Datos temporales

**Estado Global (Context, Redux):**
- Múltiples componentes distantes lo necesitan
- Datos de usuario, autenticación
- Configuración de la app
- Estado compartido entre rutas

```javascript
// Local - Solo este componente
function Modal() {
  const [isOpen, setIsOpen] = useState(false);
  // ...
}

// Global - Toda la app
const UserContext = createContext();
function App() {
  const [user, setUser] = useState(null);
  return (
    <UserContext.Provider value={user}>
      {/* Cualquier componente puede acceder */}
    </UserContext.Provider>
  );
}
```

### 9. ¿Qué es defaultProps y propTypes?

**propTypes:** Validación de tipos en desarrollo.

```javascript
import PropTypes from 'prop-types';

function User({ name, age, isAdmin }) {
  return <div>{name}</div>;
}

User.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  isAdmin: PropTypes.bool
};
```

**defaultProps:** Valores por defecto.

```javascript
User.defaultProps = {
  age: 0,
  isAdmin: false
};

// Alternativa moderna con destructuring
function User({
  name,
  age = 0,
  isAdmin = false
}) {
  return <div>{name}</div>;
}
```

**Nota:** TypeScript es la alternativa moderna recomendada.

### 10. ¿Cómo pasar múltiples props fácilmente?

**Spread operator:**

```javascript
const props = {
  name: 'Juan',
  age: 25,
  email: 'juan@mail.com'
};

// Pasar todas las props
<User {...props} />

// Equivalente a:
<User name="Juan" age={25} email="juan@mail.com" />

// Combinar con props específicas
<User {...props} role="admin" />
```

### 11. ¿Qué es children en React?

Prop especial que contiene el contenido entre las etiquetas de apertura y cierre.

```javascript
function Card({ children }) {
  return (
    <div className="card">
      {children}
    </div>
  );
}

// Uso
<Card>
  <h1>Título</h1>
  <p>Contenido</p>
</Card>
```

**Patterns avanzados:**

```javascript
// Render props con children
<DataProvider>
  {data => <Display data={data} />}
</DataProvider>

// Multiple children slots
function Layout({ header, sidebar, content }) {
  return (
    <div>
      <header>{header}</header>
      <aside>{sidebar}</aside>
      <main>{content}</main>
    </div>
  );
}
```

### 12. ¿Cómo evitar renders innecesarios por props?

**React.memo:**
```javascript
const MemoizedComponent = React.memo(function MyComponent(props) {
  // Solo re-renderiza si props cambian
  return <div>{props.value}</div>;
});

// Con comparación personalizada
const MemoizedComponent = React.memo(
  MyComponent,
  (prevProps, nextProps) => {
    return prevProps.id === nextProps.id; // true = no re-render
  }
);
```

**useMemo y useCallback:**
```javascript
function Parent() {
  // ❌ Nueva función en cada render
  <Child onClick={() => console.log('click')} />

  // ✅ Función memoizada
  const handleClick = useCallback(() => {
    console.log('click');
  }, []);

  <MemoizedChild onClick={handleClick} />
}
```

### 13. ¿Qué es la prop key y cuándo es crítica?

**key** ayuda a React identificar elementos en listas.

```javascript
// ✅ Bien - ID único y estable
{users.map(user => (
  <User key={user.id} {...user} />
))}

// ⚠️ Aceptable solo si no hay mejor opción
{items.map((item, index) => (
  <Item key={index} {...item} />
))}

// ❌ Mal - Aleatorio
<User key={Math.random()} />
```

**Crítico cuando:**
- La lista puede reordenarse
- Items pueden agregarse/eliminarse
- Items tienen estado interno

**Problema sin key adecuada:**
```javascript
// Con key=index
[A, B, C] → Se elimina A → [B, C]
// React piensa: "B está en posición 0, C en posición 1, eliminé posición 2"
// Puede causar bugs si los componentes tienen estado
```
