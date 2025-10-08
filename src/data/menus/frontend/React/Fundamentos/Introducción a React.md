---
title: Introducción a React
---

## ¿Qué es React?

React es una biblioteca de JavaScript para construir interfaces de usuario, desarrollada y mantenida por Meta (Facebook). Se centra en la creación de componentes reutilizables y la gestión eficiente del estado de la aplicación.

### Características principales

- **Component-Based** - Arquitectura basada en componentes
- **Virtual DOM** - Renderizado eficiente con DOM virtual
- **Declarativo** - Código más predecible y fácil de debuguear
- **JSX** - Sintaxis que combina JavaScript con HTML
- **Unidirectional Data Flow** - Flujo de datos unidireccional

### Instalación

Crear una nueva aplicación React con Vite:

```
# Crear proyecto con Vite
npm create vite@latest mi-app -- --template react

# Navegar al directorio
cd mi-app

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

### Primer componente

```
// App.jsx
function App() {
  return (
    <div>
      <h1>¡Hola React!</h1>
      <p>Mi primer componente</p>
    </div>
  );
}

export default App;
```

> **💡 Filosofía de React**
>
> React te permite construir UIs complejas a partir de pequeñas piezas aisladas de código llamadas "componentes".
