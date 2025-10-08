#!/bin/bash

echo "╔════════════════════════════════════════════╗"
echo "║   SUITE DE TESTS - Sistema de Documentación   ║"
echo "╚════════════════════════════════════════════╝"
echo ""

TESTS_PASSED=0
TESTS_FAILED=0

# Test 1: formatFolderName
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "📝 Test 1: Formateo de nombres de carpetas"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
node tests/formatFolderName.test.cjs
if [ $? -eq 0 ]; then
  TESTS_PASSED=$((TESTS_PASSED + 1))
else
  TESTS_FAILED=$((TESTS_FAILED + 1))
fi
echo ""

# Test 2: Estructura de carpetas
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "📁 Test 2: Estructura de carpetas"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
node tests/folderStructure.test.cjs
if [ $? -eq 0 ]; then
  TESTS_PASSED=$((TESTS_PASSED + 1))
else
  TESTS_FAILED=$((TESTS_FAILED + 1))
fi
echo ""

# Test 3: Contenido JSON
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "📋 Test 3: Contenido JSON"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
node tests/jsonContent.test.cjs
if [ $? -eq 0 ]; then
  TESTS_PASSED=$((TESTS_PASSED + 1))
else
  TESTS_FAILED=$((TESTS_FAILED + 1))
fi
echo ""

# Resumen final
echo "╔════════════════════════════════════════════╗"
echo "║          RESUMEN FINAL DE TESTS            ║"
echo "╚════════════════════════════════════════════╝"
echo ""
echo "Total de suites ejecutadas: $((TESTS_PASSED + TESTS_FAILED))"
echo "✅ Suites pasadas: $TESTS_PASSED"
echo "❌ Suites fallidas: $TESTS_FAILED"
echo ""

if [ $TESTS_FAILED -eq 0 ]; then
  echo "🎉 ¡Todos los tests pasaron exitosamente!"
  exit 0
else
  echo "⚠️  Algunos tests fallaron. Revisa los detalles arriba."
  exit 1
fi
