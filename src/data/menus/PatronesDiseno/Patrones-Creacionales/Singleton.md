---
title: Singleton
---

## Definición

El patrón Singleton garantiza que una clase tenga una única instancia y proporciona un punto de acceso global a ella. Es uno de los patrones de diseño creacionales más simples y utilizados.

### Problema que resuelve

Cuando necesitas asegurarte de que solo exista una instancia de una clase en toda la aplicación, como una conexión a base de datos, un gestor de configuración o un logger.

### Implementación en JavaScript

```
class Singleton {
  constructor() {
    if (Singleton.instance) {
      return Singleton.instance;
    }

    // Inicialización de la instancia
    this.data = [];
    Singleton.instance = this;
  }

  getData() {
    return this.data;
  }

  addData(item) {
    this.data.push(item);
  }
}

// Uso
const instance1 = new Singleton();
const instance2 = new Singleton();

console.log(instance1 === instance2); // true
```

### Ventajas

- Garantiza una única instancia
- Proporciona acceso global controlado
- Inicialización perezosa (lazy initialization)
- Ahorra memoria

### Desventajas

- Dificulta el testing
- Viola el principio de responsabilidad única
- Puede causar problemas en aplicaciones multihilo
- Estado global puede ser problemático

> **⚠️ Advertencia**
>
> El patrón Singleton debe usarse con precaución. En muchos casos, la inyección de dependencias es una mejor alternativa.
