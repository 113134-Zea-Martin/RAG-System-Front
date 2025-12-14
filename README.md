# RAG System - Frontend

Frontend de un sistema **Retrieval-Augmented Generation (RAG)** construido con **Angular 18**. Esta aplicación permite cargar documentos, procesarlos mediante embeddings y realizar consultas enriquecidas con información contextual.

## 📋 Características

- **Carga de documentos**: Sube documentos con título y contenido
- **Generación de embeddings**: Procesa documentos para crear representaciones vectoriales
- **Búsqueda semántica**: Busca información relevante basada en similitud
- **Consultas enriquecidas**: Realiza preguntas y obtiene respuestas fundamentadas en los documentos
- **Interfaz moderna**: Diseño limpio y responsivo

## 🏗️ Estructura del Proyecto

```
src/
├── app/
│   ├── components/
│   │   ├── ask/              # Componente para realizar consultas
│   │   ├── home/             # Página principal
│   │   └── upload/           # Componente para cargar documentos
│   ├── services/
│   │   ├── ask.service.ts    # Servicio de consultas RAG
│   │   └── upload.service.ts # Servicio de carga y embeddings
│   ├── interfaces/
│   │   └── models.ts         # Tipos TypeScript compartidos
│   ├── app.component.ts      # Componente raíz
│   ├── app.config.ts         # Configuración de la aplicación
│   └── app.routes.ts         # Rutas de la aplicación
├── index.html                # HTML principal
├── main.ts                   # Punto de entrada
└── styles.css               # Estilos globales
```

## 🚀 Requisitos Previos

- **Node.js** v18 o superior
- **npm** o **yarn**
- **Angular CLI** 18

## 📦 Instalación

1. **Clonar el repositorio**
   ```bash
   git clone <https://github.com/113134-Zea-Martin/RAG-System-Front>
   cd rag-front
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Configurar la URL del backend**
   
   Edita el archivo `environment.ts` para apuntar a tu servidor backend:
   ```typescript
   export const environment = {
     apiUrl: 'http://localhost:8000' // Ajusta según tu configuración
   };
   ```

## 🔧 Desarrollo

### Iniciar el servidor de desarrollo

```bash
npm start
```

La aplicación estará disponible en `http://localhost:4200/`

### Compilar para producción

```bash
npm run build
```

Los archivos compilados se guardarán en el directorio `dist/`

### Ejecutar pruebas

```bash
npm test
```

## 📡 API Endpoints

El frontend se comunica con un backend REST. Los principales endpoints son:

### Upload
- **POST** `/upload` - Cargar un documento
- **POST** `/generate-embeddings` - Generar embeddings

### Search
- **POST** `/search` - Buscar documentos

### Ask
- **POST** `/ask` - Realizar una consulta RAG

## 🎯 Uso

### 1. Cargar un documento
Navega a la sección **Upload** e ingresa:
- Título del documento
- Contenido

### 2. Procesar embeddings
Después de cargar, se habilita el boton 'Generate Knowloedge Base' y se generarán los embeddings

### 3. Realizar una consulta
Ve a **Ask** y escribe tu pregunta. El sistema buscará documentos relevantes y generará una respuesta contextualizada

## 🏗️ Componentes Principales

### `AskComponent`
Interfaz para realizar preguntas. Entra en contacto con el `AskService` para obtener respuestas fundamentadas.

### `UploadComponent`
Permite cargar nuevos documentos y gestionar su procesamiento.

### `HomeComponent`
Página de bienvenida e información general del sistema.

## 🔌 Servicios

### `AskService`
- `ask(question: string): Observable<AskResponse>` - Realiza una consulta RAG
- Gestiona la comunicación con el endpoint de preguntas

### `UploadService`
- `uploadDocument(data: UploadRequest): Observable<UploadResponse>` - Carga un documento
- `generateEmbeddings(docId: string): Observable<GenerateEmbeddingsResponse>` - Procesa embeddings
- `search(query: string): Observable<SearchResponse>` - Busca documentos

## 📝 Interfaces

Todas las interfaces TypeScript están definidas en `src/app/interfaces/models.ts`:

- `UploadRequest` / `UploadResponse`
- `GenerateEmbeddingsRequest` / `GenerateEmbeddingsResponse`
- `SearchRequest` / `SearchResponse`
- `AskRequest` / `AskResponse`

## 🌐 Despliegue

### En Vercel

Este proyecto incluye configuración para **Vercel** (`vercel.json`):

```bash
vercel deploy
```

### En otros servicios
El proyecto puede desplegarse en cualquier servidor que soporte aplicaciones Angular/Node.js.

## 🛠️ Tecnologías Utilizadas

- **Angular 18** - Framework frontend
- **TypeScript 5.5** - Lenguaje de programación
- **RxJS 7.8** - Programación reactiva
- **Angular Router** - Enrutamiento
- **Angular Forms** - Manejo de formularios

## 📄 Licencia

Este proyecto está bajo licencia [Especificar licencia si aplica]

## 👥 Contribuciones

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 🤝 Soporte

Para reportar problemas o solicitar funcionalidades, abre un issue en el repositorio.

---

**Última actualización**: Diciembre 2025