# Suite de Tests - Sistema de Documentación

Esta carpeta contiene tests automatizados para validar el funcionamiento correcto del sistema de documentación.

## Ejecutar todos los tests

```bash
bash tests/runAll.sh
```

## Tests individuales

### 1. Test de Formateo de Nombres (`formatFolderName.test.cjs`)

**Propósito:** Validar que los nombres de carpetas se formateen correctamente.

**Casos de prueba:**
- ✅ Guiones bajos → Espacios (`logica_y_matematica` → "Logica Y Matematica")
- ✅ Guiones → Espacios (`inteligencia-artificial` → "Inteligencia Artificial")
- ✅ Sin separadores (`backend` → "Backend")
- ✅ Mixto guiones/guiones bajos (`machine_learning-avanzado` → "Machine Learning Avanzado")
- ✅ Mayúsculas → Capitalizado (`BASES_DE_DATOS` → "Bases De Datos")
- ✅ Múltiples separadores
- ✅ Una sola letra
- ✅ Palabras largas

**Total:** 8 tests

### 2. Test de Estructura de Carpetas (`folderStructure.test.cjs`)

**Propósito:** Verificar que la estructura de carpetas del sistema sea correcta.

**Casos de prueba:**
- ✅ Carpeta `backend/` existe
- ✅ Carpeta `frontend/` existe
- ✅ Carpeta `academic/` existe
- ✅ `backend/Node.json` existe
- ✅ `frontend/React.json` existe
- ✅ `PatronesDiseno.json` existe en raíz
- ✅ Academic tiene subcarpetas
- ✅ Subcarpetas contienen archivos JSON
- ✅ Todos los JSON son válidos (parseable)
- ✅ Estructura soporta al menos 3 niveles de anidación

**Total:** 10 tests

### 3. Test de Contenido JSON (`jsonContent.test.cjs`)

**Propósito:** Validar que todos los archivos JSON tengan la estructura correcta.

**Casos de prueba:**
- ✅ Todos los JSON tienen campo `title` (string)
- ✅ Todos los JSON tienen campo `sections` (array)
- ✅ Las secciones tienen estructura válida (`id`, `title`, `items`)
- ✅ Los items tienen estructura válida (`id`, `title`, `slug`, `content`)
- ✅ El `content` tiene `breadcrumb` y `sections`
- ✅ Tipos de contenido válidos (`heading`, `paragraph`, `code`, `list`, `callout`)
- ✅ Content type `heading` tiene `level` y `text`
- ✅ Content type `list` tiene array `items`

**Total:** 8 tests

## Resumen

- **Total de tests:** 26
- **Suites de test:** 3
- **Estado:** ✅ Todos pasando

## Cómo agregar nuevos tests

1. Crear archivo con extensión `.test.cjs` (CommonJS)
2. Seguir el patrón de los tests existentes
3. Agregar el test al script `runAll.sh`
4. Ejecutar `bash tests/runAll.sh` para validar

## Estructura esperada

```
tests/
├── README.md                    # Este archivo
├── runAll.sh                    # Script principal
├── formatFolderName.test.cjs    # Test de formateo
├── folderStructure.test.cjs     # Test de estructura
└── jsonContent.test.cjs         # Test de contenido
```

## Notas importantes

- Los tests usan extensión `.cjs` porque el proyecto está configurado como ES module
- No modifican el código base, solo validan
- Útiles para CI/CD y validación antes de commits
