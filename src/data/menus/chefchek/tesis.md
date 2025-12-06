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

![Ilustración 1](/2025-12-05_19-03.png)

A continuación, se desrciben los hitos clave del proyecto.

### 3.5.1 Verificación de requerimientos con el cliente

Una vez trascurridos 5 sprints de desarrollo, el equipo logró un avance visual como para ser mostrado al cliente. Se procedió a agendar una videollamada, para hacer una primera demo de los requerimientos que fueron materializados en la interfaz gráfica, tanto del panel web, como de la aplicación móvil.

Respecto a la aplicación web, se mostró el flujo de login/autenticación de la aplicación web, para luego llegar al menú principal de la misma (sin funcionalidad aún, solo el maquetado) y mostrar la vista genérica de los CRUD's.

Por otro lado, en la aplicación móvil fueron mostrados los siguientes requerimientos: login, logout, registro de movimientos de inventario, eliminación de movimientos de inventario y listado de movimientos de inventario.

El cliente mostró su absoluta conformidad con lo acontecido, tanto en web como móvil. No se evidenciaron críticas. Hizo hincapié en un requerimiento importante (aún no implementado, pero ya conocido), el cual consta de dejar registro de la cantidad de comensales por turno (desayuno, alumerzo, merienda y cena) del hotel, para que el equipo lo tuviese en consideración (para la app móvil). De esta manera, ellos pueden conocer, por ejemplo, cuántos comensales hubo en el almuerzo del 2 de enero del 2025.

Al momento de la primera reunión de verificación de requerimientos, la aplicación móvil Flutter, se encantraba en un 50% meintras que la web se encontraba en su etapa inicial.

En lo  que corresponde a verificación de requerimientos y usabilidad desed el punto de la iteracción del cliente con el producto, el equipo tiene pensado relaizart dos próxmas sesiones durante los sprints 10 (desde 17/10/2024 hasta 4/11/2024) y 11 (desde 4/11/2024 hasta 18/11/2024), posterior a la entrega del documento en gestión.


### 3.5.2. Entrega del anteproyecto

El anteproyecto se entregó el 22 de abril de 2024. Este hito es crucial ya que estableció las bases del proyecto y definió en parte, los objetivos y requerimientos específicos.

### 3.5.3 Revisión del proyecto

El 29 de julio de 2024 se ralizó la primera y única revisión del proyecto con Marcelo Cagnani.

### 3.5.4 Revisión de la arquitectura

El equipo contó con el apoyo del profesor Gastón Mousqués con quien se realizó una reunión para presentarle la arquitectura del sistema.

### 3.5.5 Entrega administrativa en el portal de gestión

El 21 de octubre de 2024, se realiza la entrega de la ddocumentación gestión. Para entonces, se habrán completado varias iteraciones enfocadas en la implementación de las funcionalidades requeridas (el ciclo de vida del desarrollo no finaliza con esta entrega).

### 3.5.6 Defensa

Programada para los días 25 al 28 de noviembre de 2024, la defensa es un hito donde el equipo presentará el proyecto finalizado ante el comité evaluador. Este evento se llevará a cabo después ded completar múltiples *sprints* enfocados en pulir detalles, corregir errores y optimizar el sistema basado en las pruebas iniciales y el feedback recibido. La defensa será una oportunidad para demestrar la efectividad de la solución y la alineación con los requerimientos del cliente.

### 3.5.7 Puesto en producción

El 1 de diciembre de 2024, el sistema será puesto en producción, marcando la culminación de los *sprints* dedicados a asegurar la estabilidad y la funcionalidad del software en un entorno real. Este hito es fundamental, ya que implica que el sistema estará completamente operativo y listo para su uso diario por parte del hotel, mejorando significativamente la eficiencia en la gestión ed costos y stock.

### 3.5.8 Fin de soporte de garantía

El soporte de garantía finalizará a finales de abril de 2026. Este poríodo permitirá al equipo asegurar que el sistema funcione sin inconvenientes y que todas las funcionalidades implementadas estén operativas y optimizadas.

En total, el proyecto abarca nieve *sprints* hasta la entrega de gestión, más varios *sprints* adicionales hasta la puesta en producción y el fin del soporte de garantía. Este enfoque iterativo asegura una adaptación continua a los requerimientos del cliente y una mejora constante del producto a lo largo del ciclo de vida del proyecto.

# 4. Ingeniería de requerimientos

## 4.1 Obtención y análisis de requerimientos

El relevamiento de requerimientos es una fase crítica en el desarrollo de software, ya que implica la recopilación de información sobre las necesidades y expectativas de los usuarios y stakeholders. Para realizar este proceso eficazmente, se utilizan herramientas que facilitan la obtención y organización de la información.

### 4.1.1 Herramientas para el relevamiento

Este relevamiento se realizó en su mayoría previo a la iniciación del proyecto para la universidad en el verano de 2021, cuando el hotel en cuestión se embarcó en su primera instacncia de formato All inclusive. Esa etapa realizada antes no tuvo un proceso formal que incluyera encuestas, mapas mentales u otros debido al apuro que los altos cargos conocían los gastos realizados, para saber si era redituable el formato o si se excedían.

#### 4.1.1.1. Observación directa

La observación directa en el ámbito laboral es una técnica eficaz para la recopilación de requerimientos de software, ya que permite a los analistas observar cómo los empleados interactúan con los sistemas y procesos actuales en su entrono de trabajo. Al estar inmersos en el contexto laboral, los observadores pueden identificar patrones de comportamiento, detectar problemas y descubrir necesidades que los usuarios pueden no haber expresado durante entrevistas o encuestas. Este ciclo de vida proporciona información valiosa sobre la dinámica del trabajo, los flujos de información y las interacciones entre los empleaddos y la tecnología, empatizando con los actores involucrados en los procesos, lo que facilita la comprensión de sus verdaderas necesidades.

Esta fue la técnica **utilizada** en el desarrollo de la primera versión **utilizada** en el pasado por Francisco. En el análisis de costos, él entendió primero cómo eran los procesos del sector Alimentos y Bebidas y el sector administrativo y de finanzas con preguntas como: "¿Qué días se realiza el stock en la cocina?", 2."¿Qué ddiferencia tienen las unidades en las facturas contra la realidad?", 3. "¿Por dónde llegan las facturas?", 4. "¿Qué número queieren ver los gerentes?", y lo más importante, 5. "¿Cómo lograr estos cálculos diaria o semanalmente?"

A partir de lo investigado encontró que:

1- Se realizaban los stocks los sábados, demorando unas 4 horas en contar y pesar todos los producto, precisando también así que todos los datos dde las facturas estuvieran cargados para ese día.

2- Dependiendo edl proveedor, varía la nomenclatura del mismo producto para representar distintas unidaddes, no siempre siendo exacta la relación entr ellas por ejemplo:
"BANANA ecuador IMP KG" / "BANANA ecuador IMP CAJA"

Las cajas suponen tener entre 15kg y 20kg de producto aproximado dependiendo de cual se trate, las bolsas tienen 10kg aproximadamente.

3. Las facturas que se emiten hoy en día al hotel, y al parador hasta el año pasado, se pueden
encontrar en el proveedor electrónico de ellos ‘Factura Lista’, siempre y cuando el
proveedor tenga facturación electrónica. Estas se descargaban en formato pdf y eran
diferenciadas entre hotel y parador por el encargado de alimentos y bebidas (lo cual ya no
es necesario desde 2024 por su separación de razones sociales). También había proveedores
con facturación manual, por lo que el chef debía guardar estas facturas y de perderse habría
que pedir al proveedor una imagen de su copia.

4. Cuando se presupuestó la idea, se estimó un consumo de 25 dólares por huésped por día.
Para lograr un cálculo comparativo, se podía dividir el gasto total (de todos los tipos de
producto) por la suma de huéspedes de cada día. Ejemplo: Un promedio de 90 huéspedes
por día son 630 huéspedes en 7 días. Calculando todo lo comprado en esos 7 días, dividido
por estos 630 huéspedes que fueron alimentados, se obtiene las compras por huésped por
día.  

5. A partir de lo investigado y con las últimas cuatro respuestas se dimensiona la magnitud
del problema principal. Excel como herramienta no iba a ser viable por la ineficiencia y el
sesgo que presentaría. ¿Por qué? El problema de realizar estos cálculos solo con los totales
de las facturas no muestra lo que consumieron esos huéspedes, sino que se infla durante
una semana en la que varios productos se terminaran y se tuviera que hacer un encargo
grande, como la semana previa al encargo grande sería la de menor compras.

#### 4.1.1.2. Prototipado y uso

Un proceso de prototipado y uso de un sistema empieza con la creación de un prototipo básico del software, con las funcionalidades identificadas por la observación directa y otros métodos de recolección de requerimientos. Este prototipo permite a los usuarios interactuar con el sistema en un entorno controlado, brindando una representación visual y funcional de cómo será el producto final.

Una vez que el prototipo está en funcionamiento, se invita a los empleados a probarlo. Durante esta fase, se recopilan comentarios sobre su experiencia, usabilidad y si el sistema satisface sus necesidades.

Para este caso el empleado que usaba el sistema era el mismo desarrollador del prototipo: Francisco. Esto agilizo el proceso de recopilación viendo él mismo las falencias u orotunidades que habían de mejora. Por supuesto que toda sugerencia era bienvenida, especialmente por el chef con el que se tenía un trato directo en el uso del prototipo.

A medida que se obtenían nuevas ideas y suegerencias, el prototipo se ajustaba y refinaba en ciclos iterativos. Este enfoque no solo mejora el diseña del sistema, sino que también permite adaptarse a las necesidades cambiantes del usuario y del negocio. Así, el prototipado se convierte en una herramienta dinámica para descubrir continuamente la información necesaria y optimizar el software de acuerdo con las expectativas de los usuarios.

#### 4.1.1.3. Reunión virtual con el cliente

Conociendo las falencias que había en el hotel con respecto a este sector cuando se presenta la oportunidad de realizar el proyecto dde fin dde carrera, la primera idea fue ofrecerle al hotel trabajar en conjunto para solucionar estos problemas con los que contaban.

Se realizo una videaconferencia entre Francisco, el dueño Roberto Planas y el encargado Maximiliano Correa donde se convers´o por arriba sobre el prototipo que se había utilizado en previos años y lo que se podría lograr usándolo como base para avanzar en esta integración tecnológica en un hotel tan antiguo fundado por el padre de Roberto.

La mayor duda que presento el dueño fue por qué el servicio de facturación para restaurantes que utilizaban en el parador no podría utilizarse par aesta situación. La situación con ese sistema era la manera en que estaba implementado, donde hay un manejo de stock, pero este disminuya a partir de las cuentas que se le generan a las mesas. De cada plato se configura en el sistema cuando cunsumía de cada producto para realizarse y a partir de esto el sistema sabe las cantidades a restar del stock cuando se sirve ese plato en cualquier cuenta en la jornada. Sabiendo esto vemos la dificultad que presenta el uso de ese sitmea en un servicio donde cada huésped elije con mano propia el tamaño de su plato, con que completa el mismo, la cantidad de repeticiones que desea y todo realizado con mínima intervinción de un profesional del hotel.

Tanto Maximiliano como Francisco tenían clara esta diferencia en ese instante y pudieron clarificarla detalladamente para poder así continuar.


#### 4.1.1.3.1 Entrevista presencial con el cilente

El proceso de entrevista al cliente es crucial para recopilar y revisar requerimientos en el desarrollo de software, ya que permite obtener información directa sobre las necesidades y expectativas de los usuarios finales. Durante estas entrevistas, se utilizan preguntas abiertas en un ambiente de confianza, lo que facilita la expresión de opiniones y la identificación de problemas con el sistema actual. El analista escucha atentamente, toma notas y realiza preguntas de seguimiento para clarificar respuestas. Este enfoque no solo genera un conjunto de requerimientos más claro, sino que también establece una relación de colaboración fundamental para el éxito del proyecto.

Esta ocasión también aportó a confirmar los requerimientos ya relevados en otras instancias y poder mejorarlos o refinarlos.

En fobrero todo el equipo fue invitado a pasar una noche en el hotel para reunirse en la mañana con Maximiliano Correa. El motivo de esta instancia era repasar y adaptar los requerimientos relevados para el prototipo con los nuevos procesos implementados en estos nuevas años. Por ejemplo, la separación de razones sociales entre el hotel y parador, la oblicación de los comercios desde 2024 a facturar solo por medio electrónico y la integración del nuevo container para almacenar los productos. Se recorrieron las instalaciones desde adentro, conversando superficialmente sobre las dinámicas gastronómicas con las que cuentan, conociendo referentes como el nuevo encargado de alimentos y bebidas, previamente encargado de barra, Augusto Gavernet.

Estas dinámicas gastronómicas constan de noches temáticas (como la noche mexicana con tacos), algunas con show cooking, en las que siempre se puede elegir sobre una variedad de proteínas, carbohidratos, postres dulces o salados, así como un bar con bebidas para todos los gustos.

También se nos comentó las dificultades con las que contaron para podrer analazar los costos en la última temporada que optaron por no usar el prototipo. Hicieron el intento de usar excel sobre considerado los valores totales de las facturas.

Lamentablemente el dueño no puedo estar presente en esta instancia, pero mostraba estar de acuerdo con la idea en su mayoría del timpo todavía con algunas dudas respecto a la diferencia que se obtendría con el programa de restaurante anttes mencionado, pero confiando en Maximiliano (como el actual encargado) y Francisco (como su exepleado con el que presenta un cierto nivel de confianza).

### 4.1.2 Conclusión

A partir de estas instancias y la información recopilada, pudimos reconocer a los principales interesados, siendo estos: el dueño, el chef, el encargado de alimentos y bebidas, y el analista de costos. Todos afirman la falta de integración con la tecnología en ese sector del hotel y visualizan los beneficios que podría tener la implementacion de un sistema que contabilice los costos y pueda llevar un stock en tiempo real de los productos.

Esta necesidad de modernizacion resalta la importancia de adoptar herramientas tecnologicas que no solo optimicen la gestion de inventarios ycostos, sino que tambień mejoren la toma de decisiones estrategicas. La implementación de un sistema intregral permitría a los interesados acceder a ddatos actualizados sobre el uso ded insumos, facilitando la planificacion dde compras y reduciendo el desperdicio. Además, una solución tecnológica podría mejorar la comunicación entre los diferentes departamentos, asegurando que todos trabajen con la misma información y en la misma dirección.

En resumen, la integración de tecnología en la gestión de alimentos y bebidas ddel hotel no solo es deseable, sino que se ha convertido en una necesidad imperante par amejorar la eficiencia operativa y maximizar la rentabilidad del negocio.

## 4.2 Espcificación de requerimientos

La etapa de Especificiación de Requerimentos es un proceso integral que implca la recopilación, analisis, documentacion, revision y aprobación de los reqeuemiientos, asegurando que se astablezcan bases sólidas par ael desarrollo del rpoyecto.

### 4.2.1 Prototipo "Finanzas Tio Tom"

El prototipo como se comentó no tenia esperanzas de terminar siendo un sisetama de análisis de costos, sino que comenzo cumo una aplicación de esrcitorio par afinanzas prsonales. Esto dificultaba mucho su modificación y extensibilidad, especialmente con el poco tiempo con el que se contaba. Este prototipo contaba con Proveedores, sectores (de producto) , Productos y Gastos, siendo esta la estructurar base desde la que partimos.

Esta aplicación eral ocal y únicamente accesible por una instancia a menos que se invirtier en descentralizar su based de datos.

El ingreso y trazabilidad de los gastos de cada producto era un o de los mayores prblemas, siendo que  cada gasto era ingresado manualmente y de manera individual permitía a la equivocación seguido. Por ejemplo, estos tenían el numero de factura guardado como un valor entero, per o si se le ingresaba un nuemeero mal de la factura esta ya formaba parte de una factura que no era. Continuando por este problem, si se ingresaba un digito de más o menos en un precio unitario, este alteraba todos los valores de la semana y el mes, obligando al usuario a buscar entretodos los gastos y facturas cual fue mal ingresado principalmente recurriendo a la memoria de cual puede haber sido.

Los stocks semanales requirían al analista tener todo ingresado para el sábado en la mañana sin olvidarse de ninguna factura y aque podría afectar al recuento de stock en el instante. Por ejemplo, con un producto del cual no hubiera stock hace semanas, este no aparecería en la planilla impresa para realizalo llevando a realizar antotaciones a mano que pueden afectar la compresnsión del analista para ingresarlo luego manualmente al sistema. Estos recuento ssemanales tampoco permieten la información en timepo real enrtre semana y requeiren de varias horas relaizanodol por semana.

A pesar de estos  y varios otros defectos que tenia le premitía al analista rendir numeros a los altos cargods del hotel semana a semana trabajando 8 horas por semana (sin días libres) para realizarlo estos reportes eran altamente informativos permitian la comparación entre semanas en la mayoría de los sectores que podían varianr contiuamente,  especialment ante camibos de proveedores.


## 4.3 Lista de requeriemientos 

### 4.3.1 Historias de usuario
Las historias de usuario son una herramiento clave en la metodología ágil para el desarrollo de software., y su uso se base en decisines estrategicas que buscan mejorar la compresión de las necesidades del usuario y facilitar la comunicación entro les distintos miembros del equipo desarrollo. Estas constan de una descripción  breve, infgormal y el lenguaje sencillo de los que un usuario queiere rlograr con el uso de un determinado producto de software.

El equipo optó por redactar los requerimientos en forma de historias deusuario siguiendo el enfoque BDD (Behavior Driven Development), lo cual fdacilita la comuncicación entro les integranttes del proyceto, y pone al usuario en el centro de las deciciones de desarrollo. Se puede encantrar el detalle de BDD en el anexo Behaviour Driver Devoolopment

Este formato permite describir, de manera clara, las funcionalidades dedl sistema desde la perspectiva de los usuarios finales, asegurando que cada historia refleja las necenisadddes expectativas del cliente o usurario.

Cada historia de usuario se estruectura mediante escenarios qu eexplican, en términos de comportamiento, cómo debería funcionar el sistema en distintas situaciones, tanto en casos exitosos come en aquellos donde surgen fallos. Además, el hecho de nnvcluir criterios de acerpatcion calaros antes de comenzar el desarrollo permite al equipo minimizar los malentendidos, asegurando que todos comprendan qué se espara que el sistema haga.

El equipo utilizó este ciclo de vida porque facilita:

- Poner a los usuarios en el centro del rpceso de desarrollo.
- Comprender el valor que cada funcionalidad aporta al producto
- Evita la duplicación de esfuerzos y posibles correcciones derivadas de errores de interpretación.
- Describir tanto escenarios de éxito como de fallo para garantizar que los comportamienttos estén bien documentados.

Las historias de usuario se diseñan con base en los princiopoios BDD y cumplen con las caracteristicas de INVEST (mayer contexto en el anexo ): Son independientes, cnegociable valiosas, estimables, pequeñas  y testeables. Cada historia está lo suficientementte acotada par aser completada dentro de una itercacinon de desarrollo, lo que garanntiza un ciclo de entrega ágic  ycontinuo. 

### 4.3.2 Requrimiento prinicpales funcionales

Historia de usuraciro CC-6: Automatizacion de la captura de datos facturas
Como usario de la app web,
Quiero que el sistema captura automáticamente los dates do las facturas electrónicas,
Para que el ingreso de datos de campras sea rápido, autmatizado y sin errores manuales 

CRiterios de aceptación:

- El sistema deb e realizar el ingreso de facturas desde el proveedor a la base de datos de manera automatica
- es sistema debe realizar el ingresa de facrturas únicamente de los preveeedores ingresados.- El sistema debe ejecutar este proceso periodicamente en segundo plano.


**Historia de usuario CC-11**: Gestión de proveedores

**Como** usuario de la appweb, 
**Quiero** gestionar la carga, actualizacion, listado y eliminación de proveedores, 
**Para** mantener un control sobre las empresas que nos venden los insumos necesarios para operar

Criterio de aceptación:

- El sistema debe permitir el ingreso de nuevos proveedores con su RUT y nomber.
- El sistema debe premitir la modificacion de proveedores ya ingeresados
- El sistema debe permitir la visualizacion de los proveedores ya ingersador
- El sistema debe perimtir la habilitación o inhabilitación de un proveedor
- El sistema debe informar ante cualquier fallo en el ingreso, modificación o consulta valores de los proveedores.

**Historia de usuario CC-15**: Gestion de productos

**Como** usuarios de la app web, 

**Quiero** gestionar la carga, actualización, listado y elimicnacion de preductos

**Para** mantener un inventario preciso y actualizado que refeleje las necesidades edddl negocio.

Criterios de aceptación:

- El sistema debe permitir el ingreso de nuevos productos con su nombre.
- El sistema debe permitir la modificacion de productos ya ingresados
- El sistema debe premitir la visualización de los productos ya ingersados.
- El sistema debe permitir la habilitación o inhabilitación de un producto.
El sistema debe informar ante cualquier fallo en el ingreso, modificación o consulta de valores de los productos.


**Historia de usuario CC-171**: Gostion de usurarios

**Como** usauario de la app web,

**quiero** gestionar la creción, actualizacínso, listado y elimincancion de usuarios,

**Para** asegurarme de que solo personas atorizadas tengan acceso al sistema y sus funcionalidades.

Criterio de aceptación:

- El sistema debe permitir el ingreso de nuevos usuarios con su nombre, apellido, usaario, emoail y contraseña.
- El sistema debe permitir la modificación de usurarios ya ingresados.
- El sistema debe permitir la visualizacion de los usuarios ya ingresados
- El sistema dedbe permitir el eliminado físico de un usuario.
- El sistema debe informar ante cualquier fallo en el ingreso, modificacióno consulta de valores de los usuarios.

**Historia de usuario CC-117**: login
**Como ** usuario de la app web, 
**Quiero** poder iniciar y cerrar sesión utulizando mi nombre de usuario y contraseña,

**Para ** asegruarr el acceso a mi cuentra personal y pretger mi infgormación privada.

Criterios de aceptarción:

- El sistema debe premitir el ingreso de un usuario a partir de un nombre de usariio y contraseña
- El sistema debe retornar un token JWT con el cual se realizan todas las consutoras por un determinado periodod
- El sistema deberá rechazar el ingreso de un usuario con sus credenciales incorrectas sin informar cual campo fue el incorrecto.
- El sistema dedbe informar en caso positivo o negativo de la acción.

**Historia de usuario CC-159**: Historial ded compras
**Como** usuario de la app web,
**Quiero** poder visualizar el historial de compras, 
**Para** tener control sobre las compras que se le hacen a los proveedores.

Criterios de aceptacioń:

- El sistema debe permitir la visualizacion de todas las facturas ingresadas en el sistema.
- El sistema dedbe permitir la eliminacion de una factura. 
- El sistema debe premitir el filtrado por fecha desde y hasta de la factura.

**Historia de usuario CC-17: Registro de ingreso de mercadería

**Como** usuario de la app móvil, 
**Quiero** agregar un nuevo movimiento de mercadería en el sistema,
**Para** que se mentenga el control de stock y rpevenir desbastecimientos.

Criterios de acpetación:

- El sistema debe permitir registrar el ingreso de mercaderia de un producto seleccionado.
- El sistema debe prmitir indicar la cantidad de su ingerso.
- El sistema debe avisar si el ingreso fue logrado o fallido.

**Historia de usuario CC-19**: Registro ed egreso de mercadería

**Como** usuario de la app movil, 
**Quiero** agregar un nuevo egreso de mercadería en el sistema,
**Para** que es mantenga el control del stock.

Criterios de aceptación:

- El sistema debe permitir registrar el egreso de mercadería de un producto seleccionado.
- El sistema debe permitir indicar la cantidad de su egreso
- El sistema debe avisar si el egreso fue logrado o fallido.

### 4.3.3. Requerimientos no funcionales

## RNF-1 - Seguridad

El sistema debe garantizar la seguridad de los datos sensibles mediante el uso de cifrado de datos tanto en tránsito como en reposo (protocolo HTTPS, tokens JWT para las sesiones de usuarios y cifrados de datos sencibles).

## RNF-2 - Disponibilidad

El sistema debe tener una disponibilidad mínima del 99% del tiempo en que debe ser utilizado
durante la temparada alta, asegurando que los usuarios puedan acceder al sistema en cada momento, excepto durante los periódos destinados al mantenimiento del producto.

## RNF-3 - Escalabilidad

El sistema debe ser capaz de escalar horizontalmente para soportar un aumento en la carga de trabajo durante la temporada alta (en caso de ser necesario), para no afectar el rendimiento del usuario.

## RNF-4 - rendimiento

El sistema debe permitir que el ingreso o modificación de datos, trancurra en un tiempo promedio que no supere los 2.5 segundos promedio, garantizando una experiencia de usuario rápida y sin demoras. Las consultas de datos deben realizarse en un tiempo menor a los 3 segundos promedio.

## RNF-5 - Usabilidad

Las interfaces de usuarios (tanto de la aplicación de contenedor, como el panel admin web), debe ser intuitiva, siguiendo los principios de diseño centrado en el usuario (hourísticas de Nielsen). La intefaz debe proporcionar retroalimentación a los usuarios sobre el estado de sus acciones, incluyendo mensajes de error claros y confirmaciones (siempre y cuando sea necesario). El sistema debe estar accesible para usuarios con diferentes niveles de habilidad tecnológica.

La primera temporada del hotel, en la cual el sistema estará implementado (temporada que abarca el período de tiempo entre los meses de noviembre y fines de abril), será también una prueba piloto para el sistema. El equipo no considera que el análisis para lograr la mejor usabilidad posible culmina al momento de hacer el release a producción, sino que este aspecto seguirá evolucionando a medida que pasa el tiempo y el sistema se va utilizando. Por eso se puede considerar a la primera temporada de utulización de ChefCheck-Manager, como una temporada piloto.

## RNF-6 - Compatibilidad

El panel web admin debe ser compatible con los navegadores web más populares, teniendo como referencia a Google Chrome (por el acceso desde Windows, Android e iOS). Además, las diferentes pantallas de la web deben de poder adaptarse a distintas diminsiones de pantalla, como dispositivos móviles, tablets y computadoras.

Respecto a la aplicación del contenedor, la misma debe ser únicamente compatible con el sistema operativo Android (en un principio), y desarrollada para ser utulizada en una tablet, en su modalidad horizontal (landscape). Debe desarrollarse por medio de un framework multiplataforma, debido a que si en un futuro, es necesario hacer un release de una versión iOS, se puede hacer con un costo muy bajo.

## RNF-7 - Extensibilidad

El sistema debe permitir la extensibilidad, para permitir la integración de nuevos módulos y funcionalidades en el futuro, como, por ejemplo, la incorporación de nuevas tecnologías de machine learning para mejorar las predicciones de consumo y análisis de datos

## RNF-8 - Mantenibilidad

El sistema debe realizarse bajo una arquitectura modular, para facilitar su mantenimiento y actualización en el futuro. El código debe estar documentado adecuadamente y seguir estándares de codificación reconocidos para asegurar la facilidad de comprensión y modificacion. Las actualizaciones (puesta en producción), deben poder realizarse sin causar interrupciones significativas en el servicio. Como la operativa del hotel no dura las 24 horas, existen varios momentos para realizar estas actualizaciones.

## RNF-9 - Recuperación ante fallos

La infraestructura de hosting debe contar con mecanismos de recuperación ante fallos que permitan restaurar su funcionamiento en caso de incidentes críticos. Debe incluir copias de seguridad regulares de los datos y procedimientos claros para la repcuperación rápida y efectiva.

## RNF-10 - Integración

El sistema debe integrarse sin problemas con los servicios externos de la empresa Factura Lista para la descarga e ingreso automático de datos de facturación electrónica.

## RNF-11 - Monitorización y registro

El sistema debe registrar información sobre los errores ocurridos (error, tipo de error, fecha de usuario, etc.), y deben ser almacenados de manera segura en la base de datos. Esto facilita al equipo de desarrollo, la determinación del tipo de error que ocurrió, lo cual agiliza el soporte para solucionarlos.

### 4.3.4. Entregables

Los entregables correspondientes a componentes del sistema se detallan en la sección Arquitectura a alto nivel:

- Base de datos de negocio.
- Base de datos para módulo de machine learning.
- Script de machine learning.
- Web API (incluyendo una integración con la API de la empresa FacturaLista).
- Frontend web.
- Fronten mobile.
- Despliegue en azure para las bases de datos, script de machine learning, web API y frontend web.
- Despliegue en Google Play Store para aplicición mobile.
- Documentación técnica del sistema (requerimientos funcionales/ no funcionales, decisiones técnicas, diagramas, descripciones de los componentes de la arquitectura y sus comunicación, etc).

## 4.4 Validación de problema y solución

En el desarrollo de software, es fundamental entender la diferencia entre validar y verificar tanto los requerimientos como las soluciones propuestas.

- Validar el problema: Este proceso implica asegurarse de que tanto el problema como la solución identificados realmente reflejan las necesidades del cliente o usuario. A través de entrevistas y sesiones de retroalimentación, se busca confirmar que el problema planteado es relevante y que los requerimientos recopilados son correctos y adecuados para abordar dicha problemática. Esta validación es esencial para garantizar que el enfoque del proyecto esté alineado con las expectativas y necesidades del cliente, lo que establece una base sólida para el desarrollo de una solución efectiva.

- Verificar la solución: Una vez que se ha desarrollado una solución o un prototipo, la verificación se enfoca en evaluar si está realmente comple con los requerimientos establecidos y resuelve el problema identificado. En esta fase, se presenta el producto al cliente para que valide que la solución corresponde a sus expectativas y necesidades originales.

Ambos procesos son cruciales para asegurar que el desarrollo del software no solo aborda el rpoblema real, 
