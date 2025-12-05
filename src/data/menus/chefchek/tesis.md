---
title: ChefCheck-Manager
---

# 1. Introducción

## 1.1. Objetivos del proyecto

El objetivo principal de este proyecto es desarrollar e implementar un sistema avanzado de gestion de inventario y análisis de costos para el hotel Tio Tom All Inclusive. Este sistema permitirá la autamatización y optimización de los procesos de control y gestión de alimentos y bebidas, crucial para la operación de la modalidad *all inclusive* del hotel.

Los diferentes objetivos que determinó el equipo se agrupan por categoría.

### 1.1.1 Proyecto

#### 1.1.1.1. Desarrollo de un MVP

El objectivo se considerará como cumplido únicamente si la fecha de la entrega administrativa en gestión, el equipo cuento con un MVP que permita realizar las operaciones mínimas/básicas necesarias para la cooperativa del hotel.

**KPI**: Implementación del MVP del sistema (Sí/No)

#### 1.1.1.2. Integración de tecnología avanzada

Este objetivo abarca la incorporación de inteligoncia artifical. Se utilizarán algoritmos de *machine learning* para desarrollar modelos predictivos que ayuden en la planificación y gestión de los recursos del hotel, basándose en patrones de consumo históricos y proyecciones de ocupación Además, el sistema será desarrollado sobre una plataforma que permita la integración continua de nuevas necesidades.

**KPI**: Integración de algoritmos de *machine learning* (SI/NO)

#### 1.1.1.3. Flexibilidad y escalabilidad del sistema

El sistema será diseñado con una arquitectura escalable, permitiendo futuras expansiones o modificaciones sin requerir un gran rediseño. Esta permitirá la capacidad de integrarse y expandirse para incluir otras capacidades que el hotel pueda requerir en un futuro, garantizando una oparación más eficiente.

**KPI**: Capacidad del sistema para integrar módulos adicionales (Sí/NO)



### 1.1.2. Producto

#### 1.1.2.1 Completitud de requerimientos prioritarios/esenciales del Producto

Asegurar que todas las funcionalidades de alta o muy alta prioritarias en los requisitos iniciales estén implementadas y funcionen correctamente antes de la entrega del producto. Esto incluye validar cada funcianalidad mediante pruebas exhaustivas.

**KPI**: El 100% de las funcionalidades prioritarias/detalladas en el documento de requisitos debe estar completaddo y validado con éxito mediante pruebas funcionales internas antes de la entrega final. (Sí/No)

#### 1.1.2.2. Garantizar la compatibilidad y adaptabilidad el sistema en múltiples plataformas

Asegurar que el sistema funcione correctamente en el entorno *web* tanto en dispositivos móviles como en computaddoras, y que la aplicación Flutter sea completamente funcional y se pueda compilar en ddispositivos iOS y Android. Se verificará la consistencia de la experiencia de usuario y la funcionalidad entre las diferentes plataformas.

**KPI**: El sistema *web* se addapta de manera responsive y sin problemas en Chrome en dispositivos móviles y de escritorio, y la aplicación Flutter se puede compilar sin errores críticos en iOS y Android, validado mediante pruebas en diferdentes resoluciones de pantalla antes de la entrega del producto. (Sí/No)

#### 1.1.2.3. Calidad y profesinalismo del producto

El sistema será desarrollado siguiendo las mejores prácticas de ingeniería de software, asegurando que el producto no solo cumpla con las expectativas funcionales, sino que también ofrezca una interfaz de usuario intuitiva y accesible. Esto asegurará que el personal del hotel pueda adaptarse rápidamente al sistema, minimizando el tiempo de capacitación y maximizando la eficiencia desde el inicio.

**KPI**: Nivel de satisfacción del usuario con la interfaz y el uso (Escala 1-5)

### 1.1.3. Académicos

#### 1.1.3.1. Aprendizaje y aplicación de nuevas tecnologías

El proyecto proporcionará al equipo un espacio para profundizar en tecnologías quizá no tan conocidas para ellos, como pueden ser las tecnologías del campo de la inteligencia artificial y *machine learning*. Además, será una oportunidad para aplicar estos conocimientos en un contexto real y desafiante, lo cual fortalecerá sus habilidades y preparación para futuros desafíos profesionales.

**KPI**: Adopción de tecnologías nuevas y desafiantes (o escasamente utilizadas por el equipo) como Python (Sí/No)

#### 1.1.3.2. Aplicación práctica de conocimientos Académicos

El desarrollo del sistema permitirá al equipo aplicar y combinar una variedad de conocimientos y técnicas aprendidas durante la carrera. Esto incluye desde la programación y el diseño de un *software*, hasta la gestión de proyectos, proporcionando una experiencia a través de todo el ciclo del desarrollo de un software, lo cual refleja las exigencias del mundo real.

**KPI**: Cantidad de técnicas académicas aplicadas en el proyecto

### 1.1.4 Equipo

#### 1.1.4.1. Compromiso con el equipo

El éxito del proyecto se basa en un trabajo en equipo efectivo y un entendimiento mutuo entre los integrantes. Para eso es necesario que los integrantes puedan acudir a las reuninos realizadas.
Estas reuniones, son instancias claves para compartir avances, dudas, preguntas, logros, etc.

**KPI**: El 100% de los integrante acudió a todas las reuniones clave (Scrum daily, planning, review y retrospective). (Sí/No)

#### 1.1.4.2.  Creación de un emprendimiento tecnológico

Explorar la posibilidad de transformar el proyecto en un emperendimiento comercial viable es una motivación adicional pora el equipo, ya que puede desencadenar el surgimiento de un producto comercial. Esta posibilidad no solo proporciona un potencial retorno económico a medio plazo, sino que también permite aplicar y expandir las soluciones desarrolladas a un mercado más amplio, adaptándolas a las necesidades de otros clientes en la industria.

**KPI**: Viabilidad del proyecto como emprendimiento (Sí/No)

#### 1.1.4.3. Disfrutar y aprender durante el ddesarrollo del proyecto

Más allá de los objectivos técnicos y académicos, el equipo valora la importancia de disfrutar el pproceso de aprendizaje y desarrollo. Aprovechar al máximo las oportunidades que brinda este proyecto para crecer personal y profesionalmente, es fundamental para el eniquecimiento de cada miembro del equipo.

**KPI**: Nivel de satisfacción del equipo con el proceso de desarrollo (Escala 1-5)


# 2.Problema y solución

Cuando el Hotel Tío Tom *All Inclusive* comenzó a operar, lo hizo bajo un enfoque más tradicional, conocido como "breakfast only". Esto signifiac que, en la tarifa abonada por los huéspedes, únicamente se incluía el desayuno, sin cubrir otras comidas del día. Esta modalidad permitió al hotel ofrecer un servicio sencillo y directo, adaptado a las necesidades de aquellos huéspedes que preferían organizar sus propios almuerzons y cenas fuera del hotel.

No fue sino hasta el año 2021 que el hotel implementó un cambio significativo en su modelo de servicio, pasanddo de "breakfast only" a "all inclusive". Este cambio marcó un hito en la historia del hotel, ya que se convirtió en el primer establecimiento en la costa este de Uruguay en operar bajo esta modalidad. La trasformación no solo representó una evolución en la oferta de servicios, sino que también planteó un desafío considerable para la gestión y administración del hotel.

Con el nuevo modelo de "all inclusive", la tarifa no solo incluía el desayuno, sino también las cuatro comidas principales del día: desayuno, almuerzo, merienda y cena. Además, los huéspedes obtuvieron acceso a un snack bar disponible durante todo el día, donde podían disfrutar de una variedad de alimentos como hamburguesas, panchos, papas fritas y otros aperitivos. Este cambio radical en la oferta gastronómica implicó un esfuerzo significativo por parte del hotel, no solo en términos logísticos, sino también en la forma en que se gestionaba la experiencia de los huéspedes.

La implementación del "all inclusive" supuso una redefinición del enfoque del hotel, que pasó de ofrecer una simple estancia con desayono  a brindar una experiencia integral donde los huéspedes no necesitaban preocuparse por las comidas durante su estadía. Esto no solo aumentó el nivel de satisfacción de los clientes, sino que también posicionó al hotel como una opción líden en el turismo de la zona este del país, atrayendo a un nuevo tipo de huésped que buscaba comodidad y un servicio más completo durante sus vacaciones.

## 2.2 Problema

Cuando el Hotel Tío Tom decidió pasar de la modalidad "breakfast included" a "All inslusive", el control de costos en el sector de alimentos y bebidas dejó de ser un tema menor y se convirtió en uno de los principales desafíos operativos. La transición implicó un cambio fundamental en la forma en que los huéspedes interactuaban con los servicios de comida, ya que ahora contaban con una mayor variedad y libertad a la hora de elegir qué consumir, cuánto consumir y cuándo hacerlo. Esta variabilidad en el consumo introdujo una nueva complejidad para la gestión del inventario y la planificación de los insumos.

Para el equipo de cocina, adaptarse a este nuevo modelo fue especialmente complicado. Aunque podían apoyarse en los registros históricos del hotel, donde el promedio diario de huéspedes era de 146 y el número aproximado de comensales por semana alcanzaba los 1025, prever con exactitud las necesidades diarias de alimentos y bebidas resultaba un reto. La dificultad radicaba en que no solo se trataba de mantener un equilibrio adecuado entre demanda y oferta, sino que también era necesario gestionar la preparación de platos sin caer en excesos que generan desperdicios, ni en carencias que pudieran afectar la experiencia del huésped.

Actualmente, el hotel maneja entre 500 y 700 variedades diferentes de productos relacionados con la comida y bebida, una cantidad significativamente mayor comparada con los pocos productos que se gestionaban bajo la modalidad "Breakfast Included". Este aumento drástico en la variedad de insumos también complicó la logística de almacenamiento y la relación con los proveedores, que pasó de ser relativamente simple a requerir la coordinación con un mayor número de ellos. Esta complejidad adicional en la cadena de suministros incrementó la necesidad de realizar una gestión más detallada y eficiente, tanto en términos de recepción como de control de stock.

Además, el hotel se vio obligado a aumentar el personal en el área de cocina y atención al cliente para poder sostener el nuevo ritmo de operación. Aparte de esta expansión, se contrató un empleado dedicado exclusivamente a la gestión de inventarios y costos, encargado de controlar el flujo de insumos, asegurar que los recursos se utilizaran eficientemente y gestionar las facturas emitidas por los proveedores.

Por último, la variabilidad en el consumo de los huéspedes fue otro factor problemático. A diferencia del desayuno, que tiene un consumo más predecible, las demás comidas  y snacks presentaron un comportamiento fluctuante, haciendo más dificil planificar las compras y la preparación de los alimentos. Algunos huéspedes aprovechaban al máximo la oferta, mientras que otros consumían menos de lo esperado, lo que resultaba en desabastecimiento en ciertos momentos o en el desperdicio de productos que no se utilizaban.

En resumen, la gestión de Alimentos y Bebidas se convirtió en un reto considerable par ael hotel.
Pasaron de manejar una oporación simple y predecible a enfrentarse con una mayor diversidad de productos, proveedores y empleados, todo bajo un cosumo variable y difícil de anticipar. Esta transformación hizo que el control de costos y la planificacion de inventario se convirtieran en tareas eseciales y más desafiantes par ael éxito del hotel.

## 2.3. Solucíon

Francisco Cabanillas, integrante del equipo del proyecto, desempeñó diversas funciones dentro del hotel entre las temporadas 2019/20 y 2022/23, lo que le permitió experimientar de primera mano los problemas generados por el cambio a la modalidad "All inclusive". Consciente de las dificultades que enfrentaba el hotel en la gestión de alimentos y bebidas, decidió aplicar sus conocimientos en el desarrollo de una solución tecnológica. Aprovechó las bases teóricas y prácticas que había adquirido recientemente desarrollando el obligartorio correspondiente a la materia Diseño de Aplicaciones 1 y se puso manos a la obra para diseñar un sistema que pudiera dar respuesta a la situación.

Esta primera versión de la solución fue un sistema básico para el análisis de costos de "All Inclusivo". Se trataba de una aplicaicón de escritorio para Windows, desarrollada apresuradamente en .NET Framework y basada en el esqueleto de una aplicación de Finanzas Personales que Francisco había creado anteriormente, junto a su compañero de clases y también estudiante de la Universidad ORT, Alfonso Irazábal. La base de datos era local y estaba instalada en la laptop del analista de costos, lo que limitaba su accesibilidad y escalabilidad. Además, el sistema requría la carga manual de las facturas, lo que haciá necesario que el analista estuviera dedicando a timepo completo a esta tarea, y los reportes también debían extraerse manualmente.

A pesar de sus limitaciones, el sistema proporcionaba una estructura inicial para la gestión de costos. El relevamiento de stock se realizaba semanalmente en conjunto con el chef, lo que permitía obtener una mejor visibilidad de los insumos utilizados. Aunque el desarrolo se llevaba a cabo semana a semana, con un conocimiento limitado del funcionamiento de la modalidad "All Inclusive", esta solución rudimentaria sirvió como punto de partida.

A partir de esta base, el equipo trabajó para escalar la solución, integrar mejoras y ajustarse a los nuevos requerimientos del cliente. La nueva solución fue desarrollada desde cero, pero aprovechando el proyecto inicial como fuente de aprendizaje y experiencia.

Esta nueva versión estará compuesta por varios productos destinados a optimizar la gestión del hotel. En primer lugar, se desarrollará un *frontend web* en Angular, cuyo principal objetivo será servir como panel de administración, permitiendo además la visualización de reportes y análisis detallados de los costos.

Adicionalmente, se implementará un frontend en Flutter para ser utilizado en tabletas dentro del almacén donde actualmente se guardan los productos. Este sistema permitirá registrar de manera eficiente los egresos e ingresos de productos al inventario. Además, un empleado dispondrá de  de una tableta par acontrabilizar la cantidad de huéspedes por cada comida del día, así como las habitaciones a las que pertenecen.

En cuanto al backend, este será responsable de gestionar todo lo relacionado con el inventario, los productos y los proveedores. Una de las características clave será la automatización de la carga de facturas emitidas al hotel por parte de los proveedores de alimentos y bebidas, lo que reducirá significativamente la carga de trabajo manual y los errores.

Por último, la solución contará con un módulo de *machine learning* que permitirá realizar predicciones más precisas sobre la variabilidad en el consumo, los costos y otros factores asociados. Este módulo proporcionará al hotel una herramienta avanzada para mejorar la planificación y la toma de decisiones, optimizando así su operación bajo la modalidad "All inclusive"

# 3. Marco metodológico

## 3.1. Ciclo de vida

Dadas las características del proyecto y el contexto del cliente, el equipo optó  por un enfoque de desarrollo incremental [ 14 ]. Este ciclo de vida es iddeal para adaptarse a las necesidades cambiantes y complejas de un sistema de gestión de inventario y costos.

Los ciclos incrementales son fundamentales en este enfoque, ya que permiten la repetición de actividades (iteraciones) en fases específicas para maximizar el entendimiento del producto por parte del equipo. El objetivo es que al final de cada iteración, se cuente con un entregable funcional que refleje una parte del sistema y que cumpla con las consignas/objetivos de la iteración. Esto permite validar funcionalidades y hacer ajustes antes de proceder a la siguiente fase. Ese entregable puedee ser interno para el equipo y oculto para el cliente, debido a que pueden tratarse de avances que el cliente no puede percibir (por ejemplo, funcionalidades de la API, pero no en la web).

La flexibilidad del ciclo de vida incremental facilita la incorporación de cambios en los requisitos y necesidades del proyecto, lo cual es crucial en un entorno que debe adaptarse constantementa a variaciones de demanda y oferta turística. Este modelo de ciclo de vida proporciona la estructura necesaria para manejar de manera efectiva los cambios y asegurar que el producto final cumpla con los requisitos identificados en cada etapa del proceso.

Por ejemplo, si se identifica la necesidad de mejorar el módulo de gestión de facturas, se puede planificar su implementación en una iteración posterior/diferente sin interrumpir el desarrollo en curso de otras partes del sistema.

Al final de cada iteración, se evalúa el entregable obtenido, lo que permite no solo verificar la funcionalidad sino también la alineación con los requerimientos establecidos. Esto es vital para asegurar que el sistema final realmente permita al hotel poder optimizar la gestión de inventarios y costos, mejorando así la rentabilidad y eficiencia.

El uso de un enfoque incremental también facilita la gestión de riesgos, permitiendo identificar y resolver problemas técnicos o de diseño en fases tempranas del desarrollo, antes de que estos puedan impactar significativamente el progreso del proyecto o la calidad del producto final.

Este ciclo de vida no solo asegura al equipo un desarrollo ágil y orientado a resultados, sino que también permite responder de manera efectiva a los cambios, maximizando así las oportunidades de éxito del proyecto y la satisfacción del cliente.

Al no ser un proyecto de requerimientos cambiantes, o que los mismos van surgiendo a medida que se desarrolla, el ciclo de vida evolutivo fue descartado [15].

## 3.2 Metodologías ágiles

### 3.2.1. Scrum

Para el desarrollo del sistema, el equipo optó por un enfoque de desarrollo incremental utilizando una adaptación de la metodología ágil Scrum. Este ciclo de vida es ideal en contextos donde la respuesta rápida a posibles cambios es crucial. No es el caso del equipo, ya que se cuentan con los requerimientos ya establecidos. De igual manera, Scrum otorga la flexibilidad necesaria para afrontar cualquier cambio repentino en los requerimientos, en el caso que se produzca alguna transformación.

Por esa razón el equipo considera que no es una metodología cien porciento ágil, sino que se habla de una metodología del tipo híbrida.

Como la metodología seleccionada trabaja por medio de iteraciones llamadas sprints, las mismas obligan al equipo a producir un incremento al finalizar dicho sprint.

El porqué del término "... adapcación de la metodología ágil Scrum", radica en que el equipo no implementó Scrum puro, debido a que no se utilizaron todos los artefactos y eventos de la metodología de una manera cien por ciento formal. Como, por ejemplo, el Scrum *daily*. Debido a las agendas de cada integrante del equipo, se dificultó la realización de una reunión diaria de lunes a viernes. Para contrarrestar esta problemática, el equipo fijó los jueves, como el día adecuado para que acontezcan estas reuniones.

El equipo tiene experiencia previa con Scrum, lo cual es de gran valor para enfrentar los desafíos del proyecto. Esta experiencia permite implementar las prácticas de Scrum de manera efectiva y adaptarlas a las necesidades específicas del cliente.

En el anexo Ventajas de Scrum, se pueden visualizar las ventajas.

### 3.2.2. Comparativa Scrum vs Kanban

La elección de Scrum sobre otras metodologías ágiles como Kanban, se basó en varios factores específicos del proyecto. Pirmero, la naturaleza iterativa y estructurada de Scrum, con sus ciclos definidos de sprints y reviews, se alinea bien con la necesidad de obtener resultados medibles en intervalos regulares. Esto es crucial para un proyecto dodnde las entregas incrementales son fundamentales para el éxito de este tipo de proyecto en particular.

Además, Scrum promueve una colaboración continua entre todos los miembros del equipo y el cliente, facilitado una comunicación abierta y un entendimiento común de los objetivos del proyecto. Esto asegura que se puede ver el progreso en tiempo real, lo cual es vital pra mantener el proyecto en curso y adaptarse rápidamente a cualquier cambio o desafío.

### 3.2.3. Descartar Kanban

En cuanto  a Kanban, aunque es muy recomendado para gestionar el flujo de trabajo y es altamente flexible, no impone límites de tiempo estrictos como los sprints en Scrum. Esta característica podría haber resultado en menos presión para cumplir con entregas específicas en plazos estrictos, lo cual podría ser menos ideal para un proyecto con requisitos y expectativas claros y con un calendario ajustado. Además, el equipo directamente no cuenta con experiencia en Kanban, y además Scrum ofrece un marco más familiar y controlado para gestionar las complejidades del proyecto.

Por último, Scrum fue seleccionaddo por su capacidad para facilitar una mejor estimación y planificación a través de su enfoque en la priorización de backlog y la revisión continua del progreso. Esto no solo ayuda a mejorar la eficiencia del equipo, sino que tamiben asegura que el proyecto permanezca en camino hacia el cumplimiento de los objetivos finales, maximizando el retorno de inversión para el cliente y minimizando los riesgos asociados con el desarrollo del producto.


## 3.3. Etapas del proyecto

El desarrollo del sistema de gestión de inventario y análisis de costos se estructuró en tres etapas principales, cada una diseñada para abordar los distintos aspectos del proyecto de forma secuencial y efectiva.

### 3.3.1. Investigación y análisis

La primera fase del proyecto se centró en diferentes tareas como:

- Definición de los requerimientos del *software*
- Inicio de las reuniones con la tutora Helena Garbarino.
- Comienzo de la documentación.
- Definición del ciclo de vida y metodología de trabajo.
- Investigación de la API de FacturaLista y DGI, la cual es una integración con terceros que si o si necesita el *software*.
- Elección de tecnologías.
- Sprint 0 (en el cual no se desarrolló software).

### 3.3.2. Desarrollo y pruebas

Tras concluir la fase inicial, se procedió a la etapa de desarrollo del producto. Utilizando la metodología ágil Scrum, adaptada a las necesidades y tiempos del equipo, se logró una mayor flexibilidad y respuesta rápida ante los desafíos. Durante esta fase, también se puso especial atención en la validación y las pruebas del sistema para garantizar su funcionalidad y calidad, asegurando que cada incremento cumpliera con los estándares de calidad y requerimientos existentes.

### 3.3.3. Fiscalización y mejora continua del producto

La etapa final se dedicó a la implementación de todas las mejoras posibles previo a la fecha de finalización del proyecto.

Esta fase fue esencial para refinar el producto final previo a la entrega en gestión, asegurando también una documentación detallada del mismo. El objetivo fue consolidar todos los aspectos del proyecto, desde la fguncionalidad hasta la interfaz de usuario, para garantizar una solución robusta que respondiero a los requerimientos del cliente.

## 3.4. Roles

Durante la primera reunión con la tutora del equipo, se le asignó al equipo la tarea de asignar los roles de los integrantes del equipo. Esta distribución de roles se basa en los niveles de experiencia de cada miembro, las preferencias personales y las áreas en las que cada uno demostró una mayor habilidad.

Este proceso dde definición de roles fue muy importante para la gestión del equipo durante el proyecto. Al alinear los roles con las habilidades y preferencias individuales, se facilita la colaboración. Esta estrategia aseguró que cada área crítica del proyecto fuera liderada por alguen con el conocimiento y la motivación necesarios para generar un mayor progreso en el proyecto.

##### Project manager: Francisco Cabanillas

Aunque el rol del *project manager* no es formal dentro del marco de Scrum, Francisco Cabanillas asume esta posición estratégica que abarca el proyecto en su totalidad. Como *project manager*, Fracisco se encarga de coordinar y supervisar el desarrollo general del proyecto, asegurando que toddas las partes avancen cohorentemente hacia los objetivos establecidos. Su gestión incluye maneja del cronograma, los recursos y las comunicaciónes del equipo, lo cual es crucial para el flujo eficiente del trabajo y la resolución de conflictos o retrasos. Además, Francisco actúa como el principal intermediario entre el equipo de desarrollo y el *product owner*, facilitando un canal claro y efectivo para el reporte de avances y la retroalimentación continua. Esta interacción asegura que las expectativas del *product owner* se mantengan alineadas con el progreso del proyecto, y que cualquier ajuste necesario sea implementado de manera oportuna.

##### Ingeniero en requerimientos: Francisco Cabanillas

Francisco Cabanillas también se desempeña como ingeniero en requerimientos, una posición crítica que implica identificar, documentar y validar los requerimientos del proyecto en colaboración con el cliente. Su trabajo es esencial para asegurar que los requerimientos tanto funcionales como no funcionales se integren adecuadamente en la arquitectura del sistema. Francisco también se encarga de monitorear la trazabilidad de estos requerimientos a lo largo del proyecto y facilita la comunicación entre el equipo técnico y los clientes o usuarios finales para asegurar un aclara comprensión y alineación de los objetivos del proyecto.

Además, el es el encargado de identificar y gestionar los riesgos potenciales que podrían afectar la culminación exitosa del proyecto.

##### Arquitecto de *software*: Martín Sosa

En su rol como arquitecto de infraestructura, Martín asume la responsabilidad dde ddiseñar y proponer soluciones de infraestructura tecnológica que soporten los requerimientos establecidos para el sistema. Su trabajo debe garantizar la escalabilidad, seguridad y rendimiento de la infraestructura tecnológica, supervisando la implementación y realizando ajustes necesarios, de acuerda con las necesidades del proyecto. Además, colabora en la integración ded los distintos componentes y servicios que conforman el sistema, asegurando que se tenga una infrasetructura eficiente.


##### Encargado de gestíon: Martín Sosa

Martín Sosa ocupa la posición de encargado de gestión, donde sus principales tareas son: Procurar el cumplimiento de las prácticas de Scrum, no excederse do los tiempos acordados (en lo posible, asegurar los entregables dentro del proyecto y coordinar las tareas necesarias para mantener el equipo operativo y eficiente.)

Martín juega un papel clave en facilitar la comunicaicón interna y asegurar que todos los miembros del equipo cuenten con las herramientas e información necesarias para su trabajo.


##### Encargado de la gestión de calidad: Andrés Quintero

Andrés Quintero, como encargado de gestionar la calidad, dedfine y supervisa los estánddares de calidadd del proyecto para asegurar que el sistema cumpla con estos criterios antes de su lanzamiento. Andrés supervisa la implementación de mejores prácticas de codificación y revisión de código, y documenta los resultados para mantener un control de calidad riguroso. Su trabajo garantiza que el proyecto alcance los niveles de calidadd requeridos y satisfaga las expectativas del clienet.

## 3.5. Cronograma del proyecto

Como anteriormente el equipo comentó, el crenograma del proyecto se estructura en *sprints*. La siguiente imagen ( Ilustración 1) muestra los diferentes hitos a lo largo de los sprints:

[Ilustración 1](/2025-12-05_19-03.png)


