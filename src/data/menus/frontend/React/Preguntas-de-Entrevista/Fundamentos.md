---
title: Fundamentos
---

## Preguntas Fundamentales de React

### 1. ¿Qué es React y cuáles son sus principales características?

React es una biblioteca de JavaScript para construir interfaces de usuario, creada por Facebook.

**Características principales:**
- **Declarativo** - Diseñas vistas para cada estado
- **Basado en componentes** - Crea componentes encapsulados
- **Virtual DOM** - Actualiza eficientemente el DOM real
- **Unidireccional** - Flujo de datos de arriba hacia abajo
- **JSX** - Sintaxis que combina JavaScript y HTML

### 2. ¿Qué es JSX?

JSX (JavaScript XML) es una extensión de sintaxis para JavaScript que permite escribir código similar a HTML dentro de JavaScript.

```javascript
// JSX
const element = <h1>Hola, {nombre}</h1>;

// JavaScript equivalente
const element = React.createElement('h1', null, 'Hola, ', nombre);
```

**Características:**
- No es HTML, es azúcar sintáctico
- Transpilado por Babel
- Permite expresiones JavaScript dentro de `{}`
- Debe tener un solo elemento raíz

### 3. ¿Cuál es la diferencia entre un componente funcional y uno de clase?

**Componente Funcional:**
```javascript
function Saludo(props) {
  return <h1>Hola, {props.nombre}</h1>;
}
```

**Componente de Clase:**
```javascript
class Saludo extends React.Component {
  render() {
    return <h1>Hola, {this.props.nombre}</h1>;
  }
}
```

**Diferencias:**
- Los funcionales son más simples y concisos
- Las clases tienen métodos de ciclo de vida (componentDidMount, etc.)
- Los funcionales usan Hooks para estado y efectos
- Los funcionales tienen mejor rendimiento
- **Recomendación actual:** Componentes funcionales con Hooks

### 4. ¿Qué es el Virtual DOM y cómo funciona?

El Virtual DOM es una representación en memoria del DOM real.

**Funcionamiento:**
1. React crea una copia virtual del DOM
2. Cuando el estado cambia, crea un nuevo Virtual DOM
3. Compara el nuevo con el anterior (diffing)
4. Actualiza solo las partes que cambiaron en el DOM real (reconciliación)

**Ventajas:**
- Actualizaciones eficientes
- Mejor rendimiento
- Abstracción del DOM real

### 5. ¿Qué son las props?

Las props (propiedades) son argumentos que se pasan de un componente padre a un hijo.

```javascript
// Padre
<Usuario nombre="Juan" edad={25} />

// Hijo
function Usuario(props) {
  return <p>{props.nombre} tiene {props.edad} años</p>;
}
```

**Características:**
- Son inmutables (read-only)
- Flujo unidireccional (de padre a hijo)
- Pueden ser de cualquier tipo (string, number, function, object, etc.)

### 6. ¿Qué es el estado (state)?

El estado es un objeto que contiene datos que pueden cambiar durante el ciclo de vida del componente.

```javascript
const [count, setCount] = useState(0);
```

**Características:**
- Es mutable (se puede actualizar)
- Es privado del componente
- Los cambios causan re-renderizado
- Se maneja con `useState` (funcional) o `this.setState` (clase)

### 7. ¿Cuál es la diferencia entre state y props?

| State | Props |
|-------|-------|
| Mutable | Inmutable |
| Privado del componente | Pasadas desde el padre |
| Puede cambiar | Read-only |
| Causa re-render al cambiar | Se reciben del exterior |

### 8. ¿Qué es un componente controlado vs no controlado?

**Componente Controlado:**
El valor del input es controlado por React (estado).

```javascript
const [value, setValue] = useState('');

<input
  value={value}
  onChange={(e) => setValue(e.target.value)}
/>
```

**Componente No Controlado:**
El valor es manejado por el DOM, accedido mediante refs.

```javascript
const inputRef = useRef();

<input ref={inputRef} />
// Valor: inputRef.current.value
```

**Recomendación:** Usar componentes controlados (más React way)

### 9. ¿Qué es el prop drilling y cómo se evita?

**Prop Drilling:** Pasar props a través de múltiples niveles de componentes.

```javascript
// Problema
<A data={data}>
  <B data={data}>
    <C data={data}>
      <D data={data} /> {/* Solo D necesita data */}
    </C>
  </B>
</A>
```

**Soluciones:**
- Context API
- State management (Redux, Zustand)
- Composition (children props)
- Custom Hooks

### 10. ¿Qué es React.Fragment y para qué sirve?

Fragment permite agrupar múltiples elementos sin agregar nodos extra al DOM.

```javascript
// Con Fragment
return (
  <React.Fragment>
    <h1>Título</h1>
    <p>Párrafo</p>
  </React.Fragment>
);

// Sintaxis corta
return (
  <>
    <h1>Título</h1>
    <p>Párrafo</p>
  </>
);
```

### 11. ¿Qué es la reconciliación en React?

Es el algoritmo que React usa para determinar qué partes del DOM necesitan actualizarse.

**Proceso:**
1. Compara el Virtual DOM actual con el nuevo
2. Identifica las diferencias (diffing)
3. Actualiza solo los nodos que cambiaron

**Optimización con keys:**
```javascript
{items.map(item => (
  <li key={item.id}>{item.name}</li>
))}
```

### 12. ¿Por qué las keys son importantes en listas?

Las keys ayudan a React a identificar qué elementos cambiaron, se agregaron o eliminaron.

**Mal:**
```javascript
{items.map((item, index) => (
  <li key={index}>{item}</li> // ❌ No usar index
))}
```

**Bien:**
```javascript
{items.map(item => (
  <li key={item.id}>{item.name}</li> // ✅ ID único
))}
```

**Reglas:**
- Deben ser únicas entre hermanos
- Deben ser estables (no cambiar entre renders)
- No usar índices si la lista puede reordenarse
