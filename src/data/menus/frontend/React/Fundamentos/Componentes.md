---
title: Componentes
---

## Componentes en React

Los componentes son los bloques fundamentales de construcción en React. Son funciones o clases reutilizables que retornan elementos de React que describen cómo debe aparecer una parte de la UI.

### Tipos de Componentes

**Componentes Funcionales** (recomendados desde React 16.8+):

```javascript
// Componente funcional simple
function Saludo({ nombre }) {
  return <h1>Hola, {nombre}!</h1>;
}

// Con arrow function
const Saludo = ({ nombre }) => {
  return <h1>Hola, {nombre}!</h1>;
};
```

**Componentes de Clase** (legacy, menos usados):

```javascript
class Saludo extends React.Component {
  render() {
    return <h1>Hola, {this.props.nombre}!</h1>;
  }
}
```

### Preguntas de Entrevista Comunes

**¿Cuál es la diferencia entre componentes funcionales y de clase?**

- Los componentes funcionales son más simples y concisos
- Los componentes de clase tienen métodos de ciclo de vida (antes de Hooks)
- Los componentes funcionales con Hooks son el estándar moderno
- Los componentes de clase tienen `this`, los funcionales no
- Mejor rendimiento con componentes funcionales

**¿Qué son los componentes controlados vs no controlados?**

**Controlados** - El estado de React controla el valor:
```javascript
function FormularioControlado() {
  const [valor, setValor] = useState('');

  return (
    <input
      value={valor}
      onChange={(e) => setValor(e.target.value)}
    />
  );
}
```

**No controlados** - El DOM mantiene su propio estado:
```javascript
function FormularioNoControlado() {
  const inputRef = useRef();

  const handleSubmit = () => {
    console.log(inputRef.current.value);
  };

  return <input ref={inputRef} />;
}
```

### Composición de Componentes

```javascript
// Componente padre
function App() {
  return (
    <Layout>
      <Header />
      <Main>
        <Sidebar />
        <Content />
      </Main>
      <Footer />
    </Layout>
  );
}

// Children prop
function Card({ children }) {
  return <div className="card">{children}</div>;
}
```

### Higher-Order Components (HOC)

```javascript
// HOC para añadir funcionalidad
function withAuth(Component) {
  return function AuthComponent(props) {
    const isAuth = useAuth();

    if (!isAuth) {
      return <Navigate to="/login" />;
    }

    return <Component {...props} />;
  };
}

// Uso
const ProtectedProfile = withAuth(Profile);
```

### Pure Components

```javascript
// Componente que solo se re-renderiza si props cambian
const MemoizedComponent = React.memo(({ data }) => {
  return <div>{data}</div>;
});

// Con comparación personalizada
const MemoizedComponent = React.memo(
  ({ data }) => <div>{data}</div>,
  (prevProps, nextProps) => {
    return prevProps.data.id === nextProps.data.id;
  }
);
```

### Fragmentos

```javascript
// Sin nodo DOM adicional
function Lista() {
  return (
    <>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </>
  );
}

// Con key (en listas)
function Lista({ items }) {
  return (
    <>
      {items.map(item => (
        <React.Fragment key={item.id}>
          <dt>{item.term}</dt>
          <dd>{item.description}</dd>
        </React.Fragment>
      ))}
    </>
  );
}
```

### Errores Comunes en Entrevistas

**❌ Incorrecto:**
```javascript
// Componente que muta props
function BadComponent({ items }) {
  items.push('nuevo'); // ¡Nunca mutar props!
  return <ul>{items.map(i => <li>{i}</li>)}</ul>;
}
```

**✅ Correcto:**
```javascript
function GoodComponent({ items }) {
  const newItems = [...items, 'nuevo'];
  return <ul>{newItems.map(i => <li key={i}>{i}</li>)}</ul>;
}
```

> **💡 Tip de Entrevista**
>
> Siempre menciona que los componentes deben ser funciones puras: mismo input = mismo output, sin efectos secundarios en el renderizado.
