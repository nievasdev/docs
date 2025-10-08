---
title: Temas Varios
---

## Preguntas Misceláneas de React

### 1. ¿Cómo funciona React Router?

**Configuración básica:**
```javascript
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users/:id" element={<User />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
```

**Hooks importantes:**
```javascript
// Obtener parámetros de URL
function User() {
  const { id } = useParams();
  return <div>User {id}</div>;
}

// Navegación programática
function LoginButton() {
  const navigate = useNavigate();

  const handleLogin = () => {
    // ... login logic
    navigate('/dashboard');
  };

  return <button onClick={handleLogin}>Login</button>;
}

// Leer query strings y hash
function SearchPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('q');

  return <div>Search: {query}</div>;
}

// Información de ruta actual
function ActiveLink() {
  const location = useLocation();
  return <div>Current path: {location.pathname}</div>;
}
```

### 2. ¿Cómo manejar formularios en React?

**Componentes controlados:**
```javascript
function Form() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        value={formData.name}
        onChange={handleChange}
      />
      <input
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
```

**Con React Hook Form:**
```javascript
import { useForm } from 'react-hook-form';

function Form() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register('name', { required: true })}
      />
      {errors.name && <span>Name is required</span>}

      <input
        {...register('email', {
          required: true,
          pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
        })}
      />
      {errors.email && <span>Invalid email</span>}

      <button type="submit">Submit</button>
    </form>
  );
}
```

**Validación:**
```javascript
function validateForm(values) {
  const errors = {};

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@/i.test(values.email)) {
    errors.email = 'Invalid email';
  }

  if (!values.password || values.password.length < 8) {
    errors.password = 'Password must be at least 8 characters';
  }

  return errors;
}

function Form() {
  const [values, setValues] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm(values);

    if (Object.keys(validationErrors).length === 0) {
      // Submit
    } else {
      setErrors(validationErrors);
    }
  };

  // ...
}
```

### 3. ¿Cómo usar TypeScript con React?

**Tipado de componentes:**
```typescript
// Props interface
interface ButtonProps {
  text: string;
  onClick: () => void;
  disabled?: boolean;
  variant?: 'primary' | 'secondary';
}

function Button({ text, onClick, disabled = false, variant = 'primary' }: ButtonProps) {
  return <button onClick={onClick} disabled={disabled}>{text}</button>;
}

// Con React.FC (opcional)
const Button: React.FC<ButtonProps> = ({ text, onClick, disabled, variant }) => {
  return <button onClick={onClick} disabled={disabled}>{text}</button>;
};
```

**Hooks con TypeScript:**
```typescript
// useState
const [count, setCount] = useState<number>(0);
const [user, setUser] = useState<User | null>(null);

// useRef
const inputRef = useRef<HTMLInputElement>(null);

// useReducer
type State = { count: number };
type Action = { type: 'increment' } | { type: 'decrement' };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
  }
};

// Context
interface ThemeContextType {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
```

**Eventos:**
```typescript
function Input() {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input onChange={handleChange} />
      <button onClick={handleClick}>Submit</button>
    </form>
  );
}
```

### 4. ¿Qué es Strict Mode y para qué sirve?

```javascript
<React.StrictMode>
  <App />
</React.StrictMode>
```

**Funciones:**
- Identifica componentes con ciclo de vida inseguro
- Advierte sobre API deprecated
- Detecta efectos secundarios inesperados
- Renderiza dos veces en desarrollo (React 18+)

**Solo en desarrollo:**
- No impacta producción
- No renderiza UI visible
- Puede aplicarse a cualquier parte del árbol

### 5. ¿Cómo hacer autenticación en React?

**Patrón común:**
```javascript
// AuthContext.jsx
const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Verificar si hay sesión
    checkAuth().then(user => {
      setUser(user);
      setLoading(false);
    });
  }, []);

  const login = async (credentials) => {
    const user = await api.login(credentials);
    setUser(user);
    localStorage.setItem('token', user.token);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('token');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
```

**Rutas protegidas:**
```javascript
function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();

  if (loading) return <Loading />;
  if (!user) return <Navigate to="/login" />;

  return children;
}

// Uso
<Routes>
  <Route path="/login" element={<Login />} />
  <Route
    path="/dashboard"
    element={
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    }
  />
</Routes>
```

**Interceptores de API:**
```javascript
// axios config
axios.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

axios.interceptors.response.use(
  response => response,
  error => {
    if (error.response?.status === 401) {
      // Redirect to login
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);
```

### 6. ¿Cómo manejar variables de entorno?

**Create React App:**
```bash
# .env
REACT_APP_API_URL=https://api.example.com
REACT_APP_API_KEY=abc123
```

```javascript
// Uso
const apiUrl = process.env.REACT_APP_API_URL;
const apiKey = process.env.REACT_APP_API_KEY;
```

**Vite:**
```bash
# .env
VITE_API_URL=https://api.example.com
```

```javascript
const apiUrl = import.meta.env.VITE_API_URL;
```

**Diferentes entornos:**
```
.env                # Todas las variables
.env.local          # Local (ignorado por git)
.env.development    # Desarrollo
.env.production     # Producción
```

### 7. ¿Qué es SEO en React y cómo mejorarlo?

**Problemas:**
- JavaScript renderiza contenido
- Crawlers no ejecutan JS correctamente
- Contenido inicial vacío

**Soluciones:**

**1. Server-Side Rendering (Next.js):**
```javascript
// pages/index.js
export async function getServerSideProps() {
  const data = await fetchData();
  return { props: { data } };
}

function Page({ data }) {
  return <div>{data}</div>;
}
```

**2. Static Site Generation (Next.js):**
```javascript
export async function getStaticProps() {
  const data = await fetchData();
  return { props: { data }, revalidate: 60 };
}
```

**3. React Helmet para meta tags:**
```javascript
import { Helmet } from 'react-helmet';

function Page() {
  return (
    <>
      <Helmet>
        <title>Page Title</title>
        <meta name="description" content="Page description" />
        <meta property="og:title" content="Page Title" />
      </Helmet>
      <div>Content</div>
    </>
  );
}
```

**4. Pre-rendering:**
```javascript
// react-snap
npm install react-snap
```

```json
// package.json
{
  "scripts": {
    "postbuild": "react-snap"
  }
}
```

### 8. ¿Cómo implementar Dark Mode?

```javascript
function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved || 'light';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(t => t === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
```

**CSS:**
```css
:root {
  --bg-color: white;
  --text-color: black;
}

[data-theme="dark"] {
  --bg-color: black;
  --text-color: white;
}

body {
  background-color: var(--bg-color);
  color: var(--text-color);
}
```

**Detectar preferencia del sistema:**
```javascript
const getSystemTheme = () => {
  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';
};

const [theme, setTheme] = useState(() => {
  return localStorage.getItem('theme') || getSystemTheme();
});

// Escuchar cambios
useEffect(() => {
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  const handleChange = (e) => {
    if (!localStorage.getItem('theme')) {
      setTheme(e.matches ? 'dark' : 'light');
    }
  };

  mediaQuery.addEventListener('change', handleChange);
  return () => mediaQuery.removeEventListener('change', handleChange);
}, []);
```

### 9. ¿Cómo hacer Infinite Scroll?

```javascript
function InfiniteScroll() {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const observerTarget = useRef(null);

  useEffect(() => {
    const fetchItems = async () => {
      setLoading(true);
      const newItems = await api.getItems(page);

      if (newItems.length === 0) {
        setHasMore(false);
      } else {
        setItems(prev => [...prev, ...newItems]);
      }

      setLoading(false);
    };

    fetchItems();
  }, [page]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting && hasMore && !loading) {
          setPage(p => p + 1);
        }
      },
      { threshold: 1 }
    );

    if (observerTarget.current) {
      observer.observe(observerTarget.current);
    }

    return () => observer.disconnect();
  }, [hasMore, loading]);

  return (
    <div>
      {items.map(item => (
        <div key={item.id}>{item.name}</div>
      ))}
      {loading && <Loading />}
      <div ref={observerTarget} />
    </div>
  );
}
```

### 10. ¿Cómo implementar Drag and Drop?

**Con HTML5 API:**
```javascript
function DragDropList() {
  const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3']);
  const [draggedItem, setDraggedItem] = useState(null);

  const handleDragStart = (e, index) => {
    setDraggedItem(index);
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDragOver = (e, index) => {
    e.preventDefault();

    if (draggedItem === index) return;

    const newItems = [...items];
    const draggedContent = newItems[draggedItem];

    newItems.splice(draggedItem, 1);
    newItems.splice(index, 0, draggedContent);

    setDraggedItem(index);
    setItems(newItems);
  };

  return (
    <div>
      {items.map((item, index) => (
        <div
          key={item}
          draggable
          onDragStart={(e) => handleDragStart(e, index)}
          onDragOver={(e) => handleDragOver(e, index)}
        >
          {item}
        </div>
      ))}
    </div>
  );
}
```

**Con react-beautiful-dnd:**
```javascript
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

function DraggableList() {
  const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3']);

  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const newItems = Array.from(items);
    const [removed] = newItems.splice(result.source.index, 1);
    newItems.splice(result.destination.index, 0, removed);

    setItems(newItems);
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="list">
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {items.map((item, index) => (
              <Draggable key={item} draggableId={item} index={index}>
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    {item}
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}
```

### 11. ¿Cómo manejar archivos y uploads?

```javascript
function FileUpload() {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [uploading, setUploading] = useState(false);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);

    // Preview para imágenes
    if (selectedFile?.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onloadend = () => setPreview(reader.result);
      reader.readAsDataURL(selectedFile);
    }
  };

  const handleUpload = async () => {
    if (!file) return;

    setUploading(true);

    const formData = new FormData();
    formData.append('file', file);

    try {
      await fetch('/api/upload', {
        method: 'POST',
        body: formData
      });
      alert('Upload successful!');
    } catch (error) {
      console.error('Upload failed:', error);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      {preview && <img src={preview} alt="Preview" />}
      <button onClick={handleUpload} disabled={!file || uploading}>
        {uploading ? 'Uploading...' : 'Upload'}
      </button>
    </div>
  );
}
```

**Drag and drop upload:**
```javascript
function DropZone() {
  const [isDragging, setIsDragging] = useState(false);

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);

    const files = Array.from(e.dataTransfer.files);
    console.log('Dropped files:', files);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  return (
    <div
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onDragLeave={() => setIsDragging(false)}
      style={{
        border: isDragging ? '2px dashed blue' : '2px dashed gray',
        padding: '2rem'
      }}
    >
      Drop files here
    </div>
  );
}
```

### 12. ¿Cómo implementar Internacionalización (i18n)?

**Con react-i18next:**
```javascript
// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        welcome: 'Welcome',
        hello: 'Hello, {{name}}'
      }
    },
    es: {
      translation: {
        welcome: 'Bienvenido',
        hello: 'Hola, {{name}}'
      }
    }
  },
  lng: 'en',
  fallbackLng: 'en'
});

export default i18n;
```

```javascript
// App.jsx
import { useTranslation } from 'react-i18next';

function App() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <h1>{t('welcome')}</h1>
      <p>{t('hello', { name: 'Juan' })}</p>

      <button onClick={() => changeLanguage('en')}>English</button>
      <button onClick={() => changeLanguage('es')}>Español</button>
    </div>
  );
}
```
