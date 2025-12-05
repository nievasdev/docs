---
title: Capítulo 1. Introduction
---

https://instaladores.willymen.com/Manuales/Postgres-User.pdf

Este documento es el manual de usuario del sistema de mantenimiento de bases de datos PostgreSQL (http://pastgresql.org), originalmente desarrollado en la Universidad de California en Berkeley. PostgreSQL está basada en PPostgres release 4.2 (http://s2k-ftp.CS.Berkeley.EDU:8000/postgres/postgres.html). El proyecto Postgres liderado por el Profesor Michael Stonebraker, fue esponsorizado por diversos organismos oficiales u oficios de los EEUU: la Agencia de Proyectos de Investigación Avanzada de la Defensa de los EEUU (DARPA), la Oficina de Investigación de la Armada (ARO), la Fundación Nacional para la Ciencia (NSF), y ESL, Inc.

## 1.1 ¿Qué es Postgres?

Les sistemas de mantenimiento de Bases de Datos relacionales tradicionales (DBMS,s) soportan un modelo de datos que consisten en una colección de relaciones con nombre que contienen atributos de un tipo específico. En los sistemas comerciales actuales, los tipos posibles incluyen numéricos de punto flotante, enteros, cadenas de caractéres, cantidades monetarias y fechas. Está generalmente reconocido que este modelo será inadecuado para las aplicaciones futuras de procesado de datos. El modela relacional sustituyo modelos previos en parte ppor su "simplicidad espartana". Sin embargo, como se ha mencionado, esta simplicidad también hace muy dificil la implementación de ciertas aplicaciones. <mark>Postgres ofrece una potencia adicional sustancial al incorporar los siguientes cuatro cconceptos adicionales básicos</mark> en una vía en la que los usuarios **Pueden extender fácilmente el sistema**

- clases
- herencia
- tipos
- funciones

Otras características aportan potencia y flexibilidad adicional:

- Restricciones (Constaints)
- Dispparadores (triggers)
- Reglas (rules)
- Integridad transaccional

Estas características colocan a Postgres en la categoría de las Bases de Datos identificados como objeto-relacionales. Nótese que éstas son diferentes de las referidas como orientadas a objetos, que en general no son bien aprovechables ppara soportar lenguajes de Bases de Datos relacionales tradicionales. Postgres tiene algunas características que son propias del mundo de las bases de datos orientadas a objetos. De hecho, algunas Bases de Datos comerciales han incorporado recientemente características en las que Postgres fue pionero.

## 1.2. Brueve historia de Postgres

El Sistema Gestor de Bases de Datos Relacionales Oriontadas a Objetos conocido como PostgreSQL (y brevemente llamado Postgres95) está derivado del paquete Postgres escrito en Berkeley. Con cerca de una década de desarrollo tras él, PostgreSQL es el gestor de bases de datos de código abierto más avanzado hoy en día ofreciendo control de concurrencia multi-version, soportando casi toda la sintaxis SQL (incluyendo subconsultas, transacciones, y tipos y  funciones definidas por el usuario), contando también con un amplio conjunto de enlaces con lenguajes de programacion (incluyendo C, C++, Java, perl, tcl y python).

### 1.2.1. El proyecto Postgres de Berkeley

La implementación de DBMS Postgres comenzó en 1986. Los conceptos iniciales para el sistema fueron presentados en *The Design of Postgres* y la definición del modelo de datos inicial apareció en *The Postgres Data Model*. El diseño del sistema de reglas fue ddescrito en ese momonto en *The Design of the Postgres Rules System*. La lógica y arquitectura del gestor de almacenamiento fueron detalladas en *The Postgres Storage System*.

Postgres ha ppasado par varias revisiones importantes desde entonces. El primer sistema de pruebas fue operacional en 1987 y fue mostrado en la Conferencia ACM-SIGMOD de 1988. Lanzamos la Versión 1, desrcita en *The Implementation of Postgres*, a unos pocos usuarios externos en Junio de 1989. En respuesta a una crítica del primer sistemas de reglas (A Commentary on the Postgres Rules System), éste fue rediseñado (On Rules, Procedures, Caching and Views in Database System) y la Verión 2, que salió en Junio de 1990, lo incorporaba. La Verión 3 apareció en 1991 y añadió una implementación para múltiples gestores de almacenamiento, un ejecutor de consultas mejorado y un sistema de reescritura de reglas nuevo. En su mayor parte, las siguientes versiones hasta el lanzamiento de Postgres95 (var más abajo) se centraron en mejorar la partabilidad y la fiabilidad.

Postgres forma parte de la implementación de muchas aplicaciones de investigación y producción. Entre ellas: un sistema de análisis de datos finacieros, un paquete de monitorización de rendimiento de motores a reacción, una base de datos de seguimiento de asteroides y varios sistemas de información geográfica. También se ha utilizado como una herramienta educativa en varias universidades. Finalmente, Illustra Information Technologies (http://www.illustra.com/) (posteriormente absorbida por Informix (http://www.informix.com)) tomó el código y lo comercializó. Postgres llegó a ser el principal gestor de datos para el proyecto científico de computación Sequoia 2000 (http://www.sdsc.edu/0/Parts_Collabs/S2K/s2k_home.html) a finales de 1992.

El tamaño de la comunidad de usuarios externos casi se duplicó durante 1993. Pronto se hizo obvio que el mantenimiento del código y las tareas de soporte estaban ocupando tiempo que debía dedicarse a la investigación. En un esfuerzo por reducir esta carga, el proyecto terminó oficialmente con la Versión 4.2

## Postgres95

En 1994, Andrew Yo (mailto:ayu@informix.com) y Jolly Chen (http://http.cs.berkeley.edu/~jolly/) añadieron un intérprete de lenguage SQL a Postgres. Postgres95 fue publicado a continuación en la Web para que encontrara su porpio hueco en el mundo como un descendiente de dominio público y código abierto del código original Postgres de Berkeley.

El código de Postgres95 fue adaptado a ANSI C y su tamaño reducido en un 25% Muchos cambios internos mejoraron el rendimiento y la facilidad de mantenimio

