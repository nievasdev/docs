---
title: Testing
---

## Preguntas sobre Testing en React

### 1. ¿Cómo hacer testing de componentes React?

**Herramientas principales:**
- **Jest** - Test runner y framework
- **React Testing Library** - Testing de componentes
- **Vitest** - Alternativa moderna a Jest

```javascript
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Counter from './Counter';

describe('Counter', () => {
  test('renders initial count', () => {
    render(<Counter />);
    expect(screen.getByText('Count: 0')).toBeInTheDocument();
  });

  test('increments count on button click', () => {
    render(<Counter />);
    const button = screen.getByRole('button', { name: /increment/i });
    fireEvent.click(button);
    expect(screen.getByText('Count: 1')).toBeInTheDocument();
  });
});
```

### 2. ¿Cuál es la diferencia entre Testing Library y Enzyme?

**React Testing Library:**
- Enfocada en testing como el usuario
- Queries por texto, roles, labels
- No accede a estado interno
- Recomendada oficialmente

```javascript
// Testing Library
const button = screen.getByRole('button', { name: /submit/i });
fireEvent.click(button);
expect(screen.getByText('Success')).toBeInTheDocument();
```

**Enzyme:**
- Permite testing de implementación
- Acceso a state y props
- Shallow rendering
- En desuso

```javascript
// Enzyme
const wrapper = shallow(<Component />);
expect(wrapper.state('count')).toBe(0);
wrapper.find('button').simulate('click');
```

**Recomendación:** Usar React Testing Library

### 3. ¿Cómo testear Hooks?

**Opción 1: Testing Library**
```javascript
import { renderHook, act } from '@testing-library/react';
import useCounter from './useCounter';

test('useCounter increments', () => {
  const { result } = renderHook(() => useCounter(0));

  expect(result.current.count).toBe(0);

  act(() => {
    result.current.increment();
  });

  expect(result.current.count).toBe(1);
});
```

**Opción 2: En un componente**
```javascript
function TestComponent() {
  const { count, increment } = useCounter(0);
  return (
    <>
      <div data-testid="count">{count}</div>
      <button onClick={increment}>Increment</button>
    </>
  );
}

test('useCounter hook', () => {
  render(<TestComponent />);
  expect(screen.getByTestId('count')).toHaveTextContent('0');
  fireEvent.click(screen.getByRole('button'));
  expect(screen.getByTestId('count')).toHaveTextContent('1');
});
```

### 4. ¿Cómo mockear API calls en tests?

**Opción 1: Jest mock functions**
```javascript
import { render, screen, waitFor } from '@testing-library/react';
import UserProfile from './UserProfile';

// Mock fetch
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ name: 'John Doe' })
  })
);

test('loads and displays user', async () => {
  render(<UserProfile userId={1} />);

  expect(screen.getByText('Loading...')).toBeInTheDocument();

  await waitFor(() => {
    expect(screen.getByText('John Doe')).toBeInTheDocument();
  });

  expect(fetch).toHaveBeenCalledWith('/api/users/1');
});
```

**Opción 2: MSW (Mock Service Worker)**
```javascript
import { rest } from 'msw';
import { setupServer } from 'msw/node';

const server = setupServer(
  rest.get('/api/users/:id', (req, res, ctx) => {
    return res(ctx.json({ name: 'John Doe' }));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('loads user data', async () => {
  render(<UserProfile userId={1} />);
  await screen.findByText('John Doe');
});
```

### 5. ¿Cómo testear componentes con Context?

**Crear wrapper con Provider:**

```javascript
const AllTheProviders = ({ children }) => {
  return (
    <ThemeProvider>
      <AuthProvider>
        {children}
      </AuthProvider>
    </ThemeProvider>
  );
};

const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options });

// Re-export everything
export * from '@testing-library/react';
export { customRender as render };

// Uso
test('component using context', () => {
  render(<MyComponent />); // Usa el wrapper automáticamente
});
```

**Con valores específicos:**
```javascript
test('renders with specific theme', () => {
  const ThemeWrapper = ({ children }) => (
    <ThemeContext.Provider value="dark">
      {children}
    </ThemeContext.Provider>
  );

  render(<ThemedComponent />, { wrapper: ThemeWrapper });
  expect(screen.getByTestId('theme')).toHaveTextContent('dark');
});
```

### 6. ¿Cómo testear componentes asíncronos?

**waitFor y findBy:**

```javascript
test('loads data asynchronously', async () => {
  render(<AsyncComponent />);

  // Esperar a que aparezca
  await waitFor(() => {
    expect(screen.getByText('Data loaded')).toBeInTheDocument();
  });

  // O usar findBy (combina getBy + waitFor)
  const element = await screen.findByText('Data loaded');
  expect(element).toBeInTheDocument();
});
```

**waitForElementToBeRemoved:**
```javascript
test('loading spinner disappears', async () => {
  render(<AsyncComponent />);

  const spinner = screen.getByTestId('spinner');

  await waitForElementToBeRemoved(spinner);

  expect(screen.getByText('Content')).toBeInTheDocument();
});
```

### 7. ¿Cómo testear eventos del usuario?

**fireEvent vs userEvent:**

```javascript
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

test('with fireEvent (sintético)', () => {
  render(<Input />);
  const input = screen.getByRole('textbox');
  fireEvent.change(input, { target: { value: 'Hello' } });
  expect(input).toHaveValue('Hello');
});

test('with userEvent (más realista)', async () => {
  const user = userEvent.setup();
  render(<Input />);
  const input = screen.getByRole('textbox');

  await user.type(input, 'Hello');
  expect(input).toHaveValue('Hello');

  await user.clear(input);
  expect(input).toHaveValue('');
});
```

**Eventos comunes:**
```javascript
// Click
await user.click(button);

// Doble click
await user.dblClick(element);

// Hover
await user.hover(element);

// Teclado
await user.keyboard('{Enter}');

// Upload archivo
await user.upload(input, file);

// Select
await user.selectOptions(select, ['option1']);

// Checkbox/Radio
await user.click(checkbox);
```

### 8. ¿Cómo hacer snapshot testing?

```javascript
import { render } from '@testing-library/react';
import Component from './Component';

test('matches snapshot', () => {
  const { container } = render(<Component name="Test" />);
  expect(container).toMatchSnapshot();
});
```

**Actualizar snapshots:**
```bash
npm test -- -u
```

**Inline snapshots:**
```javascript
test('renders correctly', () => {
  const { container } = render(<Button>Click me</Button>);
  expect(container.firstChild).toMatchInlineSnapshot(`
    <button class="btn">
      Click me
    </button>
  `);
});
```

**Cuándo usar:**
- Componentes de UI estables
- Props/configuración fija
- No para lógica de negocio

### 9. ¿Cómo testear Error Boundaries?

```javascript
test('error boundary catches errors', () => {
  const spy = jest.spyOn(console, 'error').mockImplementation();

  const ThrowError = () => {
    throw new Error('Test error');
  };

  render(
    <ErrorBoundary>
      <ThrowError />
    </ErrorBoundary>
  );

  expect(screen.getByText(/something went wrong/i)).toBeInTheDocument();

  spy.mockRestore();
});
```

### 10. ¿Qué queries usar en Testing Library?

**Orden de preferencia:**

**1. Accesibles a todos:**
```javascript
// getByRole (mejor)
screen.getByRole('button', { name: /submit/i });
screen.getByRole('textbox', { name: /username/i });

// getByLabelText
screen.getByLabelText(/username/i);

// getByPlaceholderText
screen.getByPlaceholderText('Enter username');

// getByText
screen.getByText(/hello world/i);
```

**2. Queries semánticas:**
```javascript
// getByAltText (imágenes)
screen.getByAltText('Logo');

// getByTitle
screen.getByTitle('Close');
```

**3. Test IDs (último recurso):**
```javascript
screen.getByTestId('custom-element');
```

**Variantes:**
- `getBy` - Error si no encuentra
- `queryBy` - Null si no encuentra
- `findBy` - Async, espera a que aparezca
- `getAllBy` - Array de elementos

### 11. ¿Cómo testear componentes con Router?

```javascript
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

const renderWithRouter = (ui, { route = '/' } = {}) => {
  window.history.pushState({}, 'Test page', route);

  return render(ui, { wrapper: BrowserRouter });
};

test('renders about page', () => {
  renderWithRouter(<App />, { route: '/about' });
  expect(screen.getByText(/about/i)).toBeInTheDocument();
});
```

**Con MemoryRouter:**
```javascript
import { MemoryRouter } from 'react-router-dom';

test('navigation works', async () => {
  render(
    <MemoryRouter initialEntries={['/']}>
      <App />
    </MemoryRouter>
  );

  const user = userEvent.setup();
  await user.click(screen.getByText(/about/i));

  expect(screen.getByText(/about page/i)).toBeInTheDocument();
});
```

### 12. ¿Cómo hacer coverage de tests?

**Configurar Jest:**
```json
{
  "jest": {
    "collectCoverageFrom": [
      "src/**/*.{js,jsx,ts,tsx}",
      "!src/**/*.test.{js,jsx,ts,tsx}",
      "!src/index.js"
    ],
    "coverageThreshold": {
      "global": {
        "branches": 80,
        "functions": 80,
        "lines": 80,
        "statements": 80
      }
    }
  }
}
```

**Ejecutar con coverage:**
```bash
npm test -- --coverage
```

**Métricas:**
- **Statements** - Líneas ejecutadas
- **Branches** - Condiciones (if/else)
- **Functions** - Funciones llamadas
- **Lines** - Líneas de código

### 13. ¿Qué son los integration tests vs unit tests?

**Unit Tests:**
- Testean componentes aislados
- Mock de dependencias
- Rápidos y específicos

```javascript
test('Button component', () => {
  const handleClick = jest.fn();
  render(<Button onClick={handleClick}>Click</Button>);
  fireEvent.click(screen.getByRole('button'));
  expect(handleClick).toHaveBeenCalledTimes(1);
});
```

**Integration Tests:**
- Testean flujos completos
- Interacción entre componentes
- Más cercanos a uso real

```javascript
test('Login flow', async () => {
  render(<App />);

  await userEvent.type(screen.getByLabelText(/username/i), 'user');
  await userEvent.type(screen.getByLabelText(/password/i), 'pass');
  await userEvent.click(screen.getByRole('button', { name: /login/i }));

  await screen.findByText(/welcome, user/i);
  expect(screen.getByRole('button', { name: /logout/i })).toBeInTheDocument();
});
```

**E2E Tests:**
- Cypress, Playwright
- Testean aplicación completa
- Browser real
