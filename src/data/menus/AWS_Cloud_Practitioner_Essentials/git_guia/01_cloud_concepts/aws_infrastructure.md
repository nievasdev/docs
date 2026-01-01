---
title: Infraestructura Global de AWS
---

Imagina AWS como una red global de ciudades interconectadas:

- Regiones son como grandes áreas metropolitanas
- Zonas de Disponibilidad son como distritos dentro de cada ciudad
- Edge Locations son como centros de distribucion para servicio rápido
- Todo está conectado por **autopistas de alta velocidad**

¡Esta infraestructura permite a AWS entregar servicios con increíble **velocidad**, **confiabilidad** y **alcance global**!

# Regiones de AWS

## ¿Qué es una Región de AWS?

piensa en una Región de AWS como una **gran ciudad** con **múltiples distritos**:

- Cada región es un área geográfica separada
- Contiene múltiples ubicaciones aisladas (Zonas de Disponibilidad)
- Completamente independiente de otras Regiones
- Tiene su propia red eléctrica, redes y conectividad

## Huella Global Actual

A partir de 2024, AWS tiene 30+ **regiones** en todo el mundo, incluyendo:

**Regiones Principales por Área Geográfica**:

Estados Unidos

- us-east-1 (N.Virginia) - La región "original"
- us-west-2 (Oregon) - Popular para aplicaciones de la costa oeste
- us-east-2 (Ohio) - Ubicación central, buena latencia
- us-west-1 (N. California) - Proximidad a Silicon Valley

Europa

- eu-west-1 (Irlanda) - Sede europea
- eu-central-1 (Frankfurt) - Soberanía de datos para Alemania
- eu-west-2 (Londres) - Servicios del Reino Unido post-Brexit
- eu-south-1 (Milán) - Cobertura del sur de Europa

Asia Pacífico

- ap-northeast-1 (Tokio) - Región principal de Japón
- ap-southeast-1 (Singapur) - Centro del sudeste asiático
- ap-south-1 (Mumbai) - Mercado creciente de India
- ap-northeast-2 (Seúl) - Cobertura de Corea del Sur

## Características de las Regiones

### Independencia de Infraestructura

- Infraestructura física separada en cada región
- Redes eléctricas independientes y conexiones de internet
- Dominios de falla aislados - problemas en una región no afectan a otras
- Equipos de servicio regionales para soporte local

### Disponibilidad de Servicios

- No todos los servicios están disponibles en todas las regiones inicialmente
- Los servicios maś nuevos típicamente se lanzan primero en us-east-1
- Despliegue gradual a otras regiones basado en la demanda
- Algunos servicios sen globales por naturaleza (IAM, CloudFront)

### Variaciones de Precios

- Precios diferentes en diferentes regiones
- us-east-1 típicamente tiene los precios más bajos
- Regiones maás nuevas pueden tener costos iniciales más altos
- Costos de transferencia de datos varían entreregiones

## Regional Services vs Global Services

### Servicios Regionales (La Mayoría de Servicios AWS)

- EC2 las instancias se ejecutan en regiones específicas
- S3 los buckets se crean en regiones específicas
- RDS las bases de datos existen en regiones elegidas
- VPCs son específicas de región

### Servicios Globales

- IAM (Gestión de Identidad y Acceso)
- CloudFront (Red de Entrega de Contenido)
- Route 53 (servicio DNS)
- WAF (Firewall de Aplicaciones Web)

---

# Zonas de Disponibilidad (AZs)

## ¿Qué es una Zona de Disponibilidad?

Piensa en las AZs como distritos **separados** en una ciudad:

- Centros de datlos físicamente separados dentro de una región
- Conectados por enlaces de alta velocidad y baja latencia
- Energía, refigeración y redes independientes
- Diseñados para aislar fallas

## Características de las AZ

Número por Región

- Mínimo 3 AZs por region (la mayoría tiene 3-6)
- Cada AZ tiene uno o más centros de datos físicos
- Energía, redes y conectividad redundantes
- Múltiples proveedores de servicios de internet

Conectividad

- Redes de alto ancho de banda y baja latencia entre AZs
- Conexiones privadas de fibra óptica
- Latencia sub-milisegundo entre AZs en la misma región
- Replicación síncrono de datos posible

Separación Física

- Al menos 100km de distancia (pero usualmente mucha más cerca)
- Llanuras de inundación separadas y líneas de falla
- Redes eléctricas independientes
- Perímetros de seguridad física diferentes

Alta Disponibilidad con AZs

La Regla de Oro: "Siempre Usa Múltiples AZs"

X Implementación de AZ Única

<code>
Región: us-east-1
    |-- AZ-1a: [Servidor Web] [Base de Datos]
    |-- AZ-1b: [Vacío]
    |-- AZ-1c: [Vacío]

    Riesgo: Punto único de falla
</code>

Implementación de Multi-AZ

<code>
Región: us-east-1
    |-- AZ-1a: [Servidor Web] [Base de Datos Primaria]
    |-- AZ-1b: [Servidor Web] [Base de Datos Standby]
    |-- AZ-1c: [Balanceador de Carga]

Beneficio: Tolerancia a fallas y alta disponibilidad
</code>

Mejores Prácticas
 
- Distribuir recursos a través de múltiples AZs
- Usar balanceadores de carga para enrutar tráfico
- Replicar datos a través de AZs
- Probar escenarios de failover regularmente

---

# Edge Locations

## ¿Qué son las Edge Locations?

Piensa en las Edge Locations como **centros de distribución** **locales**:

- Instalaciones más pequeñas más cerca de los usuarios finales
- Cachean contenido popular para entrega más rápida
- Reducen latencia sirviendo contenido localmente
- Mucho más numerosas que las regiones (400+ mundialmente)

## Red de Entrega de Contenido (CDN)

Cómo funcionan las Edge Locations

1. Usuario solicita contenido (sitio web, video, archivo)
2. Solicitud va a la edge location más cercana
3. Si el contenide está en caché -> Se sirve inmediatamente
4. Si no está en caché -> Se obtiene del origen, se cachea, luego se sirve
5. Solicitudes subsecuentes -> Se sirven desde caché (¡más rápido!)

Beneficios

- Latencia reducida - Contenido servido más cerca de usuarios
- Rendimiento mejorado - Cargas de páginas más rápidas
- Carga reducida del origen - Menos tráfico a servidores principales
- Alcance global - Servir usuarios mundialmente de manera efeciente

## Servicios de AWS que Usan Edge Locations

Amazon CloudFront
 
- Servicio CDN principal usando edge locations
- Cachea contenido estático y dinámico
- Soporta orígenes personalizados (no solo AWS)
- Monitoreo en tiempo real y analíticas

Route 53

- Servicio DNS con presencia global
- Usar edje locations para consultas DNS
- Verificaciones de salud desde múltiples ubicaciones
- Resolución DNS de baja latencia

AWS Shield

- Protección DDoS en edge locations
- Filtra tráfico malicioso antes de que llegue al origen
- Protección siempre activa para todos los clientes de AWS

---

# Infraestructura Adicional

## Local Zones

Lo que son: Infraestructura de AWS muy cerca de áreas metropolitanas específicas

Propósito:

- Latencia ultra-baja para aplicaciones específicas
- Latencia de un dígito en milisegundos a usuarios finales
- Extiende VPC a zonas locales
- Perfecto para aplicaciones en tiempo real

Casos de Uso:

- Aplicaciones de juegos
- Transmisión de video en vivo
- Realidad Aumentada/Virtual
- Trading de alta frecuencia

## AWS Wavelength

Lo que es: Infraestructura de AWS integrada en redes de telecomunicaciones

Propósito:

- Edge computing para aplicaciones móviles
- Optimización de redes 5G
- Latencia extremadamente baja para aplicaciones móviles
- Procesar datos más cerca de usuarios móviles

Casos de Uso:

- Juegos móviles
- Vehículos autónomos
- Aplicaciones de ciudades inteligentes
- IoT industrial

## AWS Outposts

Lo que es: Infrasetructura de AWS en las instalaciones del cliente

Propósito:

- Implementaciones de nube híbrida
- Requisitos de residencia de datos
- Necesidades de procesamiento local
- Experiencia consistente de AWS en las instalaciones

---

# Criterios de Selección de Región

## Los cuatro Pilares dde Selección de Región 

1. Latencia y Ubicación de usuarios

**Consideración principal**: ¿Dónde están tus usuarios?

**Consejo Pro**: Usa herramientas como AWS Region Latency Test para medir latencia real

2. Cumplimiento y Soberanía de Datos

**Requisitos legales**: Algunos datos deben permanecer en países/regiones específicos

3. Optimización de Costos

Los precios varían por región - ¡a veces significativamente!

**Consejos de Optimización de Costos**:

- Comparar precios entre regiones adecuadas
- Considerar costos de transferencia de datos entre regiones
- Factorizar costos operacionales (soporte, Experiencia)
 
4. Disponibilidad de Servicios

No todos los servicios de AWS están disponibles en todas las regiones

Patrón de Despliegue de Servicios:

1. us-east-1 - Los nuevos servicios se lanzan aquí primero
2. Regiones principales - us-west-2, eu-west-1, ap-northeeast-1
3. Regiones secundarias - Despliegue gradual basado en demanda
4. Regiones especializadas - Pueden tener conjuntos de servicios limitados

## Cómo verificar disponibilidad de servicios:

- Lista de Servicios Regionales de AWS - Documentación oficial
- Panel de Salud de Servicios de AWS -Estado en tiempo real
- AWS CLI/Console - Menús de servicios especificos por región



