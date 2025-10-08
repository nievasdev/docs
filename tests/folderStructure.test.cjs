// Test para validar estructura de carpetas de menús
const fs = require('fs');
const path = require('path');

const menusPath = path.join(__dirname, '../src/data/menus');

const tests = [
  {
    name: 'Test 1: Carpeta backend existe',
    check: () => fs.existsSync(path.join(menusPath, 'backend')),
    expected: true,
  },
  {
    name: 'Test 2: Carpeta frontend existe',
    check: () => fs.existsSync(path.join(menusPath, 'frontend')),
    expected: true,
  },
  {
    name: 'Test 3: Carpeta academic existe',
    check: () => fs.existsSync(path.join(menusPath, 'academic')),
    expected: true,
  },
  {
    name: 'Test 4: Backend tiene Node.json',
    check: () => fs.existsSync(path.join(menusPath, 'backend/Node.json')),
    expected: true,
  },
  {
    name: 'Test 5: Frontend tiene React.json',
    check: () => fs.existsSync(path.join(menusPath, 'frontend/React.json')),
    expected: true,
  },
  {
    name: 'Test 6: PatronesDiseno.json existe en raíz',
    check: () => fs.existsSync(path.join(menusPath, 'PatronesDiseno.json')),
    expected: true,
  },
  {
    name: 'Test 7: Academic tiene contenido',
    check: () => {
      const academicPath = path.join(menusPath, 'academic');
      const items = fs.readdirSync(academicPath);
      return items.length > 0;
    },
    expected: true,
  },
  {
    name: 'Test 8: Academic tiene JSON',
    check: () => {
      const academicPath = path.join(menusPath, 'academic');
      const items = fs.readdirSync(academicPath);
      const hasJson = items.some(file => file.endsWith('.json'));
      return hasJson;
    },
    expected: true,
  },
  {
    name: 'Test 9: Todos los JSON son válidos',
    check: () => {
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

      const jsonFiles = findJsonFiles(menusPath);

      for (const file of jsonFiles) {
        try {
          const content = fs.readFileSync(file, 'utf8');
          JSON.parse(content);
        } catch (error) {
          console.log(`   ⚠️  JSON inválido en: ${file}`);
          return false;
        }
      }
      return true;
    },
    expected: true,
  },
  {
    name: 'Test 10: Sistema soporta estructura de carpetas',
    check: () => {
      // Verificar que existen carpetas con JSON (al menos 2 niveles)
      const items = fs.readdirSync(menusPath);
      let foundNestedStructure = false;

      for (const item of items) {
        const itemPath = path.join(menusPath, item);
        if (fs.statSync(itemPath).isDirectory()) {
          const subItems = fs.readdirSync(itemPath);
          const hasJson = subItems.some(file => file.endsWith('.json'));
          if (hasJson) {
            foundNestedStructure = true;
            break;
          }
        }
      }

      return foundNestedStructure;
    },
    expected: true,
  }
];

let passed = 0;
let failed = 0;
const failures = [];

console.log('=== TESTS: Estructura de Carpetas ===\n');

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
    } else {
      console.log(`   Expected: ${test.expected}, Got: ${test.result}`);
    }
  });
  process.exit(1);
} else {
  console.log('\n🎉 Todos los tests de estructura pasaron!');
  process.exit(0);
}
