---
title: Introducción a Node.js
---

## ¿Qué es Node.js?

Node.js es un entorno de ejecución de JavaScript del lado del servidor, construido sobre el motor V8 de Chrome. Permite ejecutar JavaScript fuera del navegador, lo que lo hace ideal para crear aplicaciones de servidor.

### Características principales

- **Event-Driven** - Basado en eventos asíncronos
- **Non-Blocking I/O** - Operaciones de entrada/salida no bloqueantes
- **Single-Threaded** - Un solo hilo principal con event loop
- **NPM** - El gestor de paquetes más grande del mundo
- **Cross-Platform** - Funciona en Windows, Linux y macOS

### Instalación

Para instalar Node.js, descarga el instalador desde el sitio oficial:

```bash
# Verificar versión instalada
node --version

# Verificar versión de NPM
npm --version
```

### Primer programa en Node.js

```javascript
// hola.js
console.log('¡Hola desde Node.js!');

// Ejecutar con:
// node hola.js
```

### Casos de uso

- APIs REST y GraphQL
- Aplicaciones web en tiempo real
- Microservicios
- Herramientas de línea de comandos
- Aplicaciones de streaming

> **💡 Ventajas**
>
> Node.js permite usar JavaScript tanto en el frontend como en el backend, lo que facilita la reutilización de código y reduce la curva de aprendizaje.
