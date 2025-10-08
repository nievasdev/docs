// Test para validar estructura de contenido JSON
const fs = require('fs');
const path = require('path');

const menusPath = path.join(__dirname, '../src/data/menus');

// Función para encontrar todos los JSON
const findJsonFiles = (dir) => {
  let jsonFiles = [];
  const items = fs.readdirSync(dir);

  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      jsonFiles = jsonFiles.concat(findJsonFiles(fullPath));
    } else if (item.endsWith('.json')) {
      jsonFiles.push(fullPath);
    }
  }
  return jsonFiles;
};

const tests = [
  {
    name: 'Test 1: Todos los JSON tienen campo "title"',
    check: () => {
      const jsonFiles = findJsonFiles(menusPath);
      for (const file of jsonFiles) {
        const data = JSON.parse(fs.readFileSync(file, 'utf8'));
        if (!data.title || typeof data.title !== 'string') {
          console.log(`   ⚠️  Sin "title" en: ${path.relative(menusPath, file)}`);
          return false;
        }
      }
      return true;
    },
    expected: true,
  },
  {
    name: 'Test 2: Todos los JSON tienen campo "sections" (array)',
    check: () => {
      const jsonFiles = findJsonFiles(menusPath);
      for (const file of jsonFiles) {
        const data = JSON.parse(fs.readFileSync(file, 'utf8'));
        if (!data.sections || !Array.isArray(data.sections)) {
          console.log(`   ⚠️  "sections" no es array en: ${path.relative(menusPath, file)}`);
          return false;
        }
      }
      return true;
    },
    expected: true,
  },
  {
    name: 'Test 3: Las secciones tienen estructura correcta',
    check: () => {
      const jsonFiles = findJsonFiles(menusPath);
      for (const file of jsonFiles) {
        const data = JSON.parse(fs.readFileSync(file, 'utf8'));

        // Permitir sections vacío para test.json
        if (data.sections.length === 0) continue;

        for (const section of data.sections) {
          if (!section.id || !section.title || !section.items) {
            console.log(`   ⚠️  Sección inválida en: ${path.relative(menusPath, file)}`);
            return false;
          }
          if (!Array.isArray(section.items)) {
            console.log(`   ⚠️  section.items no es array en: ${path.relative(menusPath, file)}`);
            return false;
          }
        }
      }
      return true;
    },
    expected: true,
  },
  {
    name: 'Test 4: Los items tienen estructura correcta',
    check: () => {
      const jsonFiles = findJsonFiles(menusPath);
      for (const file of jsonFiles) {
        const data = JSON.parse(fs.readFileSync(file, 'utf8'));

        // Saltar si no hay sections
        if (data.sections.length === 0) continue;

        for (const section of data.sections) {
          for (const item of section.items) {
            if (!item.id || !item.title || !item.slug || !item.content) {
              console.log(`   ⚠️  Item inválido en: ${path.relative(menusPath, file)}`);
              console.log(`      Section: ${section.title}, Item: ${item.title || 'sin título'}`);
              return false;
            }
          }
        }
      }
      return true;
    },
    expected: true,
  },
  {
    name: 'Test 5: Los items tienen content con breadcrumb y sections',
    check: () => {
      const jsonFiles = findJsonFiles(menusPath);
      for (const file of jsonFiles) {
        const data = JSON.parse(fs.readFileSync(file, 'utf8'));

        if (data.sections.length === 0) continue;

        for (const section of data.sections) {
          for (const item of section.items) {
            if (!item.content.breadcrumb || !Array.isArray(item.content.breadcrumb)) {
              console.log(`   ⚠️  breadcrumb inválido en: ${path.relative(menusPath, file)}`);
              return false;
            }
            if (!item.content.sections || !Array.isArray(item.content.sections)) {
              console.log(`   ⚠️  content.sections inválido en: ${path.relative(menusPath, file)}`);
              return false;
            }
          }
        }
      }
      return true;
    },
    expected: true,
  },
  {
    name: 'Test 6: Tipos de contenido válidos',
    check: () => {
      const validTypes = ['heading', 'paragraph', 'code', 'list', 'callout'];
      const jsonFiles = findJsonFiles(menusPath);

      for (const file of jsonFiles) {
        const data = JSON.parse(fs.readFileSync(file, 'utf8'));

        if (data.sections.length === 0) continue;

        for (const section of data.sections) {
          for (const item of section.items) {
            for (const contentSection of item.content.sections) {
              if (!validTypes.includes(contentSection.type)) {
                console.log(`   ⚠️  Tipo inválido "${contentSection.type}" en: ${path.relative(menusPath, file)}`);
                return false;
              }
            }
          }
        }
      }
      return true;
    },
    expected: true,
  },
  {
    name: 'Test 7: Content type "heading" tiene level y text',
    check: () => {
      const jsonFiles = findJsonFiles(menusPath);
      for (const file of jsonFiles) {
        const data = JSON.parse(fs.readFileSync(file, 'utf8'));

        if (data.sections.length === 0) continue;

        for (const section of data.sections) {
          for (const item of section.items) {
            for (const content of item.content.sections) {
              if (content.type === 'heading') {
                if (!content.level || !content.text) {
                  console.log(`   ⚠️  heading sin level o text en: ${path.relative(menusPath, file)}`);
                  return false;
                }
              }
            }
          }
        }
      }
      return true;
    },
    expected: true,
  },
  {
    name: 'Test 8: Content type "list" tiene items array',
    check: () => {
      const jsonFiles = findJsonFiles(menusPath);
      for (const file of jsonFiles) {
        const data = JSON.parse(fs.readFileSync(file, 'utf8'));

        if (data.sections.length === 0) continue;

        for (const section of data.sections) {
          for (const item of section.items) {
            for (const content of item.content.sections) {
              if (content.type === 'list') {
                if (!content.items || !Array.isArray(content.items)) {
                  console.log(`   ⚠️  list sin items array en: ${path.relative(menusPath, file)}`);
                  return false;
                }
              }
            }
          }
        }
      }
      return true;
    },
    expected: true,
  },
];

let passed = 0;
let failed = 0;
const failures = [];

console.log('=== TESTS: Contenido JSON ===\n');

tests.forEach(test => {
  try {
    const result = test.check();
    const isPass = result === test.expected;

    if (isPass) {
      passed++;
      console.log(`✅ ${test.name}`);
    } else {
      failed++;
      failures.push({ ...test, result });
      console.log(`❌ ${test.name}`);
      console.log(`   Expected: ${test.expected}, Got: ${result}`);
    }
  } catch (error) {
    failed++;
    failures.push({ ...test, error: error.message });
    console.log(`❌ ${test.name}`);
    console.log(`   Error: ${error.message}`);
  }
  console.log('');
});

console.log('=== RESUMEN ===');
console.log(`Total: ${tests.length} tests`);
console.log(`✅ Pasados: ${passed}`);
console.log(`❌ Fallidos: ${failed}`);

if (failed > 0) {
  console.log('\n=== TESTS FALLIDOS ===');
  failures.forEach((test, i) => {
    console.log(`${i + 1}. ${test.name}`);
    if (test.error) {
      console.log(`   Error: ${test.error}`);
    }
  });
  process.exit(1);
} else {
  console.log('\n🎉 Todos los tests de contenido JSON pasaron!');
  process.exit(0);
}
