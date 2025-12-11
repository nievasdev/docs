---
title: Examen Gemini 1 - Informe de Corrección
---

## 📊 RESULTADO FINAL

**Calificación: 34/39 correctas (87.18%)**

**Preguntas incorrectas: 5**

---

## ❌ PREGUNTAS INCORRECTAS

### Pregunta 20

**Enunciado:** ¿Cuál de los siguientes elementos de almacenamiento de datos no digitales es más similar a una base de datos?
A) el catálogo de tarjetas con los datos de los socios de una biblioteca
B) el ticket de una caja registradora
C) los totales de las ventas calculados en una planilla Excel
D) una factura de compra

**Tu respuesta:** C

**Respuesta correcta:** A) el catálogo de tarjetas con los datos de los socios de una biblioteca

**Explicación:**

Un **catálogo de tarjetas** es más similar a una base de datos.

**Características de una base de datos:**
1. Colección organizada de datos relacionados
2. Estructura consistente (campos comunes)
3. Capacidad de búsqueda y recuperación
4. Datos persistentes
5. Múltiples registros del mismo tipo

**Catálogo de tarjetas de biblioteca:**
- ✓ Múltiples registros (una tarjeta por socio)
- ✓ Estructura consistente (nombre, dirección, número de socio)
- ✓ Organizado y indexado
- ✓ Permite búsquedas
- **Muy similar a una tabla de base de datos**

**Totales en Excel (tu respuesta):**
- Son **datos procesados/agregados**
- No son "registros" individuales
- Son el **resultado** de procesar datos, no los datos base

**Comparación:**
- Catálogo = Tabla de base de datos con registros de socios
- Totales Excel = Consulta agregada (SELECT SUM...)

---

### Pregunta 21

**Enunciado:** ¿En qué tres tecnologías clave se basa Internet?
A) TCP / IP, HTML y HTTP
B) TCP / IP, HTTP y conmutación de paquetes
C) computación cliente / servidor, conmutación de paquetes y desarrollo de estándares de comunicación para vincular redes y computadoras como el TCP/IP
D) informática cliente / servidor, conmutación de paquetes y HTTP

**Tu respuesta:** B

**Respuesta correcta:** C) computación cliente / servidor, conmutación de paquetes y desarrollo de estándares de comunicación para vincular redes y computadoras como el TCP/IP

**Explicación:**

Las **tres tecnologías clave fundacionales** de Internet son:

1. **Computación cliente/servidor:**
   - Arquitectura distribuida
   - Clientes solicitan, servidores responden
   - Permite escalar y distribuir servicios

2. **Conmutación de paquetes:**
   - Divide mensajes en paquetes
   - Cada paquete puede tomar rutas diferentes
   - Se reensamblan en destino
   - Robusto y eficiente

3. **Estándares de comunicación (TCP/IP):**
   - Protocolos comunes para que todas las redes se comuniquen
   - TCP/IP es el conjunto de protocolos fundamental
   - Permite interoperabilidad global

**Por qué B es incorrecta:**
- HTTP es un protocolo de **aplicación** que corre SOBRE Internet
- HTTP vino DESPUÉS de que Internet ya existiera
- TCP/IP + conmutación de paquetes SÍ son fundamentales
- Pero falta la arquitectura cliente/servidor

**Fundacionales vs Posteriores:**
- Fundacional: TCP/IP, cliente/servidor, packet switching
- Posterior: HTTP, HTML, navegadores web (años 90)

---

### Pregunta 22

**Enunciado:** Suponga una empresa de venta de productos al por menor en la que se desea llevar el control de la ubicación de los productos dentro las tiendas de venta al público. Una forma práctica de hacer esto es:
A) Colocar etiquetas RFID en cada producto de forma de rastear su posición al pasar cerca de un lector
B) Interconectar los productos a través de una red LAN con la que rastrar los productos a través de la tienda
C) Utilizar un hub que permita identificar cada producto en cada lugar
D) Ninguna respuesta es correcta

**Tu respuesta:** B

**Respuesta correcta:** A) Colocar etiquetas RFID en cada producto de forma de rastear su posición al pasar cerca de un lector

**Explicación:**

**RFID (Radio Frequency Identification)** es la solución correcta para rastrear ubicación de productos.

**Cómo funciona RFID:**
1. Etiquetas RFID pasivas en cada producto
2. Lectores RFID colocados en diferentes ubicaciones de la tienda
3. Cuando producto pasa cerca de lector, se detecta automáticamente
4. Sistema registra: "Producto X está cerca del lector en pasillo 5"
5. Rastreo en tiempo real sin intervención humana

**Por qué las otras opciones NO funcionan:**

**B - Red LAN para productos:**
- Los productos físicos NO se pueden "interconectar" a una LAN
- No tienen capacidad de procesamiento ni de red
- Técnicamente imposible

**C - Hub para identificar productos:**
- Un hub de red NO puede identificar productos físicos
- Hubs son para redes de computadoras, no para items de inventario

---

### Pregunta 29

**Enunciado:** TI puede aumentar los costos de agencia, haciendo posible que las empresas crezcan sin aumentar los costos de supervisión y sin agregar empleados
A) True
B) False

**Tu respuesta:** A

**Respuesta correcta:** B) False

**Explicación:**

Esta afirmación es **falsa** porque contiene una contradicción lógica. La TI **reduce** (no aumenta) los costos de agencia.

**Costos de agencia - Recordatorio:**
- Costos de supervisar y controlar empleados
- Asegurar que actúen en el mejor interés de la empresa
- Incluyen: monitoreo, evaluación, control de calidad

**Cómo la TI REDUCE los costos de agencia:**
1. **Monitoreo automatizado:** Sistemas rastrean desempeño sin supervisores humanos constantes
2. **Dashboards en tiempo real:** Visibilidad inmediata de KPIs y métricas
3. **Sistemas de workflow:** Automatizan la aplicación de políticas y procedimientos

**Resultado:** Menos gerentes necesarios por empleado → costos de agencia más bajos.

---

### Pregunta 37

**Enunciado:** Ud. trabaja para una empresa de alquiler de automóviles y desea determinar qué características son compartidas entre sus clientes más leales. Para hacer esto, Ud. querrá usar software de minería de datos que es capaz de hacer
A) identificación de asociaciones
B) identificación de grupos
C) identificación de secuencias
D) clasificación

**Tu respuesta:** A

**Respuesta correcta:** D) clasificación

**Explicación:**

La respuesta correcta es **clasificación** (classification).

**Técnicas de minería de datos:**

1. **Clasificación:** Asigna elementos a categorías predefinidas basándose en características conocidas. En este caso, ya tienes identificado un grupo ("clientes leales") y quieres determinar qué características definen a ese grupo para poder predecir qué otros clientes serán leales.

2. **Identificación de grupos (Clustering):** Agrupa elementos similares sin categorías predefinidas, descubriendo patrones naturales en los datos. Se usa cuando NO sabes de antemano qué grupos existen.

**En este escenario:**
- Ya sabes quiénes son tus clientes leales (categoría conocida)
- Quieres identificar las características que los definen
- Esto es un problema de **clasificación**, no de clustering.

---

## 📈 RESUMEN DE ÁREAS A REFORZAR

1.  **Analogías de Bases de Datos:** Diferenciar entre datos crudos/registros (catálogo de tarjetas) y datos procesados/agregados (totales en una planilla).
2.  **Tecnologías Fundacionales de Internet:** Distinguir entre la arquitectura base (cliente/servidor, conmutación de paquetes, TCP/IP) y los protocolos de aplicación que corren sobre ella (HTTP).
3.  **Tecnologías de Rastreo Físico:** Entender la aplicación de tecnologías como RFID para el seguimiento de inventario en el mundo real.
4.  **Impacto de TI en Costos:** Recordar que la TI está orientada a reducir costos de agencia y supervisión, no a aumentarlos.
5.  **Técnicas de Minería de Datos:** Diferenciar entre `Clasificación` (predecir una categoría conocida) y otras técnicas como `Asociación` (encontrar relaciones entre eventos).
