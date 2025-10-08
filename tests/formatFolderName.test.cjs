// Test para la función formatFolderName
// Esta función debe convertir guiones y guiones bajos en espacios y capitalizar

function formatFolderName(str) {
  return str
    .replace(/[-_]/g, ' ')
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}

const tests = [
  {
    name: 'Test 1: Guiones bajos simples',
    input: 'logica_y_matematica',
    expected: 'Logica Y Matematica',
  },
  {
    name: 'Test 2: Guiones simples',
    input: 'inteligencia-artificial',
    expected: 'Inteligencia Artificial',
  },
  {
    name: 'Test 3: Sin separadores',
    input: 'backend',
    expected: 'Backend',
  },
  {
    name: 'Test 4: Mixto guiones y guiones bajos',
    input: 'machine_learning-avanzado',
    expected: 'Machine Learning Avanzado',
  },
  {
    name: 'Test 5: Todo en mayúsculas',
    input: 'BASES_DE_DATOS',
    expected: 'Bases De Datos',
  },
  {
    name: 'Test 6: Múltiples guiones bajos',
    input: 'logica_y_matematica_discreta',
    expected: 'Logica Y Matematica Discreta',
  },
  {
    name: 'Test 7: Una sola letra',
    input: 'a',
    expected: 'A',
  },
  {
    name: 'Test 8: Palabras largas con guiones',
    input: 'programacion-orientada-a-objetos',
    expected: 'Programacion Orientada A Objetos',
  }
];

let passed = 0;
let failed = 0;
const failures = [];

console.log('=== TESTS: formatFolderName ===\n');

tests.forEach(test => {
  const result = formatFolderName(test.input);
  const isPass = result === test.expected;

  if (isPass) {
    passed++;
    console.log(`✅ ${test.name}`);
    console.log(`   Input: "${test.input}" → Output: "${result}"`);
  } else {
    failed++;
    failures.push(test);
    console.log(`❌ ${test.name}`);
    console.log(`   Input: "${test.input}"`);
    console.log(`   Expected: "${test.expected}"`);
    console.log(`   Got: "${result}"`);
  }
  console.log('');
});

console.log('=== RESUMEN ===');
console.log(`Total: ${tests.length} tests`);
console.log(`✅ Pasados: ${passed}`);
console.log(`❌ Fallidos: ${failed}`);

if (failed > 0) {
  console.log('\n=== TESTS FALLIDOS ===');
  failures.forEach(test => {
    console.log(`- ${test.name}: esperaba "${test.expected}" pero obtuvo "${formatFolderName(test.input)}"`);
  });
  process.exit(1);
} else {
  console.log('\n🎉 Todos los tests pasaron!');
  process.exit(0);
}
