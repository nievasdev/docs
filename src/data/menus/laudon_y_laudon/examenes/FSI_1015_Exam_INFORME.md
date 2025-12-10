---
title: Examen Octubre 2020 - Informe de Corrección
---

## 📊 RESULTADO FINAL

**Calificación: 36/45 correctas (80%)**

**Preguntas incorrectas: 9**

---

## ❌ PREGUNTAS INCORRECTAS

### Pregunta 15

**Enunciado:** La herramienta que permite a los usuarios ver los mismos datos de diferentes maneras usando múltiples dimensiones es:

**Tu respuesta:** B SQL

**Respuesta correcta:** C OLAP

**Explicación:**

**OLAP (Online Analytical Processing)** es la herramienta correcta para análisis multidimensional.

**OLAP - Características:**
- Permite ver datos desde **múltiples dimensiones** simultáneamente
- Operaciones: drill-down, roll-up, slice, dice, pivot
- Análisis interactivo de datos en cubos multidimensionales
- Ejemplo: Analizar ventas por (región × producto × tiempo)

**SQL - Características:**
- Es un **lenguaje de consulta** para bases de datos relacionales
- Recupera y manipula datos
- NO proporciona análisis multidimensional automático
- Puede usarse DENTRO de herramientas OLAP, pero no ES OLAP

**Ejemplo práctico:**
```
OLAP permite:
- Ver ventas totales
- Hacer drill-down a ventas por región
- Luego drill-down a ventas por producto dentro de cada región
- Rotar para ver por mes/trimestre/año
- Todo de forma interactiva y visual

SQL requiere:
- Escribir query diferente para cada vista
- Sin navegación interactiva
- Sin visualización multidimensional automática
```

---

### Pregunta 17

**Enunciado:** La confusión creada por ________ dificulta que las empresas creen sistemas de gestión de relaciones con los clientes, de gestión de la cadena de suministro o sistemas empresariales que integran datos de diferentes fuentes.

**Tu respuesta:** A procesamiento de archivos independientes

**Respuesta correcta:** B redundancia de datos

**Explicación:**

La **redundancia de datos** es el problema directo que crea confusión en la integración.

**Redundancia de datos:**
- **Mismos datos** almacenados en **múltiples lugares**
- Frecuentemente **inconsistentes** entre sí
- Diferentes versiones de la "verdad"
- Dificulta saber cuál dato es correcto al integrar

**Ejemplo del problema:**
```
Sistema Ventas:
  Cliente: "IBM Corp" - Tel: "2600-1234"

Sistema Facturación:
  Cliente: "I.B.M." - Tel: "2601-1234"

Sistema CRM:
  Cliente: "International Business Machines" - Tel: "2600-1234"

¿Cuál es correcto? ¡Son el mismo cliente con datos redundantes e inconsistentes!
```

**Procesamiento de archivos independientes:**
- Es una **causa raíz** de la redundancia
- Pero no es lo que CREA LA CONFUSIÓN directamente
- La confusión viene de tener los mismos datos repetidos inconsistentemente

**Por qué es un problema para integración:**
- CRM necesita integrar datos de ventas + facturación
- ¿Qué nombre usar? ¿Qué teléfono es correcto?
- La redundancia genera **ambigüedad y conflictos**

---

### Pregunta 31

**Enunciado:** Los sistemas empresariales (ERP) a menudo incluyen transacciones con clientes y proveedores:

**Tu respuesta:** B Falso

**Respuesta correcta:** A Verdadero

**Explicación:**

Esta afirmación es **VERDADERA**. Los ERP modernos SÍ incluyen transacciones con clientes y proveedores.

**ERP - Alcance completo:**

Los sistemas ERP integran TODOS los procesos de negocio, incluyendo:

1. **Transacciones con clientes (front-office):**
   - Gestión de pedidos de clientes
   - Facturación a clientes
   - Servicio al cliente
   - Gestión de contratos

2. **Transacciones con proveedores (back-office):**
   - Órdenes de compra a proveedores
   - Recepción de mercancías
   - Pagos a proveedores
   - Gestión de contratos de aprovisionamiento

3. **Procesos internos:**
   - Producción
   - Inventario
   - Recursos humanos
   - Finanzas y contabilidad

**ERP vs sistemas especializados:**
- **ERP tradicional (1990s):** Solo procesos internos
- **ERP moderno (2000s+):** Incluye CRM + SCM integrados
- **ERP actual:** Sistema completo end-to-end desde proveedor hasta cliente

**Ejemplos:**
- SAP ERP incluye módulos SD (Sales & Distribution) para clientes y MM (Materials Management) para proveedores
- Oracle ERP Cloud integra todo el ciclo: procurement → producción → ventas

---

### Pregunta 34

**Enunciado:** Los "costos de menú" son los costos asociados a la búsqueda de alternativas por parte del cliente.

**Tu respuesta:** A Verdadero

**Respuesta correcta:** B Falso

**Explicación:**

Esta afirmación es **FALSA**. Los costos de menú NO son costos de búsqueda.

**Costos de menú - Definición correcta:**
- Son los **costos de cambiar precios**
- Denominados así porque originalmente se refería al costo de reimprimir menús de restaurantes
- Incluyen: imprimir nuevos catálogos, actualizar etiquetas, modificar sistemas

**En el contexto del e-commerce:**
- En comercio electrónico, los **costos de menú son casi CERO**
- Cambiar precios en un sitio web es instantáneo y gratis
- No hay que reimprimir nada físico
- Esto permite **ajuste dinámico de precios**

**Costos de búsqueda - Concepto diferente:**
- Son los costos de **encontrar información** sobre productos y precios
- Tiempo y esfuerzo para comparar opciones
- También son **bajos en e-commerce** (Google, comparadores de precios)

**Comparación:**
```
Costos de MENÚ (cambiar precios):
  Tradicional: Alto (reimprimir catálogos)
  E-commerce: Casi cero (actualización automática)

Costos de BÚSQUEDA (encontrar info):
  Tradicional: Alto (visitar tiendas físicas)
  E-commerce: Bajo (Google, comparadores)
```

---

### Pregunta 35

**Enunciado:** Cuando hacemos búsquedas en Internet, muchos utilizamos Google como herramienta de búsqueda la cual integra contenido y servicios como correo electrónico, mapas entre otros. A esto lo llamamos:

**Tu respuesta:** A Proveedor de contenido

**Respuesta correcta:** B Portal

**Explicación:**

Google es un **Portal**, no un proveedor de contenido.

**Portal - Definición:**
- Sitio web que **agrega múltiples servicios** en un solo lugar
- Punto de entrada integrado a Internet
- Combina: búsqueda + email + noticias + mapas + calendario + más
- Ejemplos: Google, Yahoo, MSN

**Proveedor de contenido:**
- Crea y distribuye **contenido original**
- Noticias, música, videos, artículos
- Ejemplos: Netflix, Spotify, New York Times, CNN

**Proveedor comunitario:**
- Facilita **interacción entre usuarios**
- Redes sociales, foros
- Ejemplos: Facebook, Reddit, Twitter

**Google como Portal:**
```
Servicios integrados de Google:
- Google Search (búsqueda)
- Gmail (correo)
- Google Maps (mapas)
- Google Calendar (calendario)
- Google Drive (almacenamiento)
- YouTube (video)
- Google News (noticias agregadas)

Todo accesible desde un punto central: google.com
```

**Diferencia clave:**
- Portal = **Agrega servicios** de múltiples fuentes
- Proveedor de contenido = **Crea contenido** original

---

### Pregunta 40

**Enunciado:** Una agrupación de caracteres en una palabra, un grupo de palabras o un número completo se denomina "grabar".

**Tu respuesta:** A Verdadero

**Respuesta correcta:** B Falso

**Explicación:**

Esta afirmación es **FALSA**. Eso NO se llama "grabar", se llama **campo** o **field**.

**Terminología correcta de bases de datos:**

1. **Bit:** Unidad mínima (0 o 1)

2. **Byte:** 8 bits (representa 1 carácter)

3. **Campo (Field):** ← **Esto es lo correcto**
   - Agrupación de caracteres
   - Representa un atributo
   - Ejemplos: nombre, email, teléfono, precio

4. **Registro (Record):**
   - Agrupación de campos relacionados
   - Representa una entidad completa
   - Ejemplo: un cliente con todos sus datos

5. **Archivo/Tabla (File/Table):**
   - Agrupación de registros del mismo tipo
   - Ejemplo: tabla de clientes

6. **Base de datos (Database):**
   - Agrupación de archivos relacionados

**Ejemplo:**
```
Base de datos: TiendaOnline
  │
  ├─ Tabla: Clientes
  │    ├─ Registro 1: (Juan, juan@mail.com, 099123456)
  │    │    ├─ Campo: nombre = "Juan"          ← Campo
  │    │    ├─ Campo: email = "juan@mail.com"  ← Campo
  │    │    └─ Campo: tel = "099123456"        ← Campo
  │    └─ Registro 2: ...
  │
  └─ Tabla: Productos
       └─ ...
```

**"Grabar" en contexto de bases de datos:**
- "Grabar" o "guardar" (save/write) es una **operación**
- No es una estructura de datos
- Se refiere a **almacenar** datos en disco

---

### Pregunta 43

**Enunciado:** ¿Cuál de los siguientes NO es uno de los principales problemas con un entorno de archivo tradicional?

**Tu respuesta:** D poca seguridad

**Respuesta correcta:** B independencia de los datos del programa

**Explicación:**

La **independencia de datos** NO es un problema, es una **SOLUCIÓN** que ofrecen los DBMS.

**Problemas del entorno de archivos tradicional:**

1. **Redundancia de datos** ✓ Es problema
   - Mismos datos en múltiples archivos
   - Desperdicio de espacio

2. **Inconsistencia de datos** ✓ Es problema
   - Versiones diferentes del mismo dato
   - Difícil mantener sincronizados

3. **Dependencia datos-programa** ✓ Es problema
   - Cambios en estructura de datos requieren cambiar programas
   - Dificulta mantenimiento

4. **Falta de flexibilidad** ✓ Es problema
   - Difícil crear reportes ad-hoc
   - Consultas no previstas son complicadas

5. **Poca seguridad** ✓ Es problema
   - Difícil controlar acceso
   - Archivos accesibles por el sistema operativo

**Independencia de datos:**
- Es una **VENTAJA** de los DBMS
- **NO es un problema** de los archivos tradicionales
- Separa vista lógica de vista física
- Permite cambiar estructura física sin afectar programas

**Comparación:**
```
Entorno de archivos tradicional:
  ❌ Dependencia programa-datos (problema)
  ❌ Redundancia (problema)
  ❌ Inconsistencia (problema)
  ❌ Poca seguridad (problema)

DBMS:
  ✅ Independencia de datos (solución)
  ✅ Integridad de datos (solución)
  ✅ Seguridad mejorada (solución)
```

---

### Pregunta 46

**Enunciado:** Las redes telefónicas son fundamentalmente diferentes de las redes informáticas.

**Tu respuesta:** B Falso

**Respuesta correcta:** A Verdadero

**Explicación:**

Esta afirmación es **VERDADERA**. Las redes telefónicas tradicionales SÍ son fundamentalmente diferentes de las redes informáticas.

**Redes telefónicas tradicionales (PSTN):**

1. **Conmutación de circuitos:**
   - Se establece un **circuito dedicado** end-to-end
   - El circuito permanece **reservado** durante toda la llamada
   - Recursos exclusivos aunque no se esté hablando
   - Garantiza calidad constante

2. **Orientada a conexión:**
   - Requiere establecer conexión antes de transmitir
   - Tres fases: establecimiento → transmisión → liberación

3. **Transmisión continua:**
   - Flujo constante de voz
   - Tiempo real

**Redes informáticas (Internet):**

1. **Conmutación de paquetes:**
   - Datos divididos en **paquetes independientes**
   - Cada paquete viaja por rutas diferentes
   - Recursos compartidos dinámicamente
   - Más eficiente

2. **Sin conexión (IP):**
   - No requiere circuito dedicado
   - Cada paquete es independiente
   - Mejor uso de recursos

3. **Transmisión por ráfagas:**
   - Datos en bloques discretos
   - No necesariamente tiempo real

**Comparación:**
```
Llamada telefónica tradicional:
  [A]====circuito dedicado====[B]
  Ancho de banda reservado 100%
  Aunque estén en silencio

Transferencia de datos Internet:
  [A]→paquete1→[router]→[B]
     →paquete2→[router]→[B]
  Recursos compartidos
  Solo usa cuando transmite
```

**IMPORTANTE:**
- Esto describe redes **tradicionales**
- Actualmente con VoIP, la voz también usa conmutación de paquetes
- Pero las redes PSTN tradicionales siguen siendo fundamentalmente diferentes

---

### Pregunta 52

**Enunciado:** ¿Cuál de los siguientes no es una característica de la conmutación de paquetes?

**Tu respuesta:** B Los paquetes se enrutan a través de muchas rutas diferentes

**Respuesta correcta:** C La conmutación de paquetes requiere circuitos punto a punto

**Explicación:**

La conmutación de paquetes **NO requiere circuitos punto a punto**. Esa es característica de conmutación de circuitos.

**Características de la conmutación de PAQUETES:**

1. **Los paquetes viajan independientemente** ✓
   - Cada paquete es una unidad autónoma
   - Contiene dirección destino
   - Puede tomar rutas diferentes

2. **Paquetes enrutados por múltiples rutas** ✓
   - No hay ruta fija predeterminada
   - Routers eligen mejor camino dinámicamente
   - Mayor resiliencia

3. **Incluyen datos de verificación** ✓
   - Checksums para detectar errores
   - Números de secuencia
   - Información de control

4. **NO requiere circuitos punto a punto** ✗
   - Esta es la opción INCORRECTA (la respuesta correcta)
   - Los circuitos dedicados son de conmutación de CIRCUITOS
   - Packet switching usa rutas compartidas dinámicamente

**Conmutación de CIRCUITOS vs PAQUETES:**

```
CIRCUITOS (telefonía tradicional):
┌───┐                           ┌───┐
│ A │═══════════════════════════│ B │
└───┘   circuito dedicado       └───┘
- Requiere circuito punto a punto ←
- Recursos reservados
- Ruta fija

PAQUETES (Internet):
┌───┐    pkt1→    ┌────┐        ┌───┐
│ A │→pkt2→→→→→→→→│ RT │→→→→→→→→│ B │
└───┘  ←pkt3←  ←←└────┘        └───┘
- NO requiere circuito dedicado
- Recursos compartidos
- Rutas dinámicas
```

**Por qué C es la respuesta correcta:**
- A, B y D son características REALES de packet switching
- C describe conmutación de CIRCUITOS, no de paquetes
- La pregunta pide la característica que NO es de packet switching

---

## 📈 RESUMEN DE ÁREAS A REFORZAR

1. **OLAP vs SQL** (P15): OLAP para análisis multidimensional, SQL es lenguaje de consulta
2. **Redundancia de datos** (P17): Causa confusión en integración de sistemas
3. **Alcance de ERP** (P31): Incluye transacciones con clientes Y proveedores
4. **Costos de menú** (P34): Costos de cambiar precios, no de búsqueda
5. **Tipos de modelos de negocio web** (P35): Portal vs Proveedor de contenido
6. **Jerarquía de datos** (P40): Bit → Byte → Campo → Registro → Archivo → BD
7. **Problemas de archivos tradicionales** (P43): Independencia de datos es SOLUCIÓN, no problema
8. **Redes telefónicas vs informáticas** (P46): Conmutación de circuitos vs paquetes
9. **Conmutación de paquetes** (P52): NO requiere circuitos dedicados punto a punto

---

**¡Excelente desempeño! 80% de aciertos.**

El informe completo con explicaciones está en: `FSI_1015_Exam_INFORME.md`
