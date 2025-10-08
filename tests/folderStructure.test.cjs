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
    name: 'Test 7: Academic tiene subcarpeta',
    check: () => {
      const academicPath = path.join(menusPath, 'academic');
      const items = fs.readdirSync(academicPath);
      const folders = items.filter(item =>
        fs.statSync(path.join(academicPath, item)).isDirectory()
      );
      return folders.length > 0;
    },
    expected: true,
  },
  {
    name: 'Test 8: Subcarpeta de academic tiene JSON',
    check: () => {
      const academicPath = path.join(menusPath, 'academic');
      const items = fs.readdirSync(academicPath);

      for (const item of items) {
        const itemPath = path.join(academicPath, item);
        if (fs.statSync(itemPath).isDirectory()) {
          const subItems = fs.readdirSync(itemPath);
          const hasJson = subItems.some(file => file.endsWith('.json'));
          if (hasJson) return true;
        }
      }
      return false;
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
    name: 'Test 10: Estructura tiene al menos 3 niveles',
    check: () => {
      // Buscar estructura: folder/subfolder/file.json
      const findDeepJson = (dir, level = 0) => {
        const items = fs.readdirSync(dir);

        for (const item of items) {
          const fullPath = path.join(dir, item);
          const stat = fs.statSync(fullPath);

          if (stat.isDirectory()) {
            const subItems = fs.readdirSync(fullPath);
            const hasSubfolderWithJson = subItems.some(subItem => {
              const subPath = path.join(fullPath, subItem);
              if (fs.statSync(subPath).isDirectory()) {
                const deepItems = fs.readdirSync(subPath);
                return deepItems.some(f => f.endsWith('.json'));
              }
              return false;
            });

            if (hasSubfolderWithJson) return true;
            if (findDeepJson(fullPath, level + 1)) return true;
          }
        }
        return false;
      };

      return findDeepJson(menusPath);
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
