# 📝 FrontHub Blog

**A simple blog built to explore GraphQL, Apollo Client, and a headless CMS.**

[![React](https://img.shields.io/badge/-React-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![GraphQL](https://img.shields.io/badge/GraphQL-API-E10098?logo=graphql&logoColor=white)](https://graphql.org/)
[![Apollo Client](https://img.shields.io/badge/-Apollo_Client-311C87?logo=apollographql&logoColor=white)](https://www.apollographql.com/docs/react/)
[![Hygraph](https://img.shields.io/badge/CMS-Hygraph-6C47FF)](https://hygraph.com/)
[![MUI](https://img.shields.io/badge/UI-Material_UI-007FFF?logo=mui&logoColor=white)](https://mui.com/)

---

## ✨ About the project

FrontHub Blog is a small React application where readers can explore authors, read their blog posts, and leave comments. Its main purpose is educational: practicing **GraphQL queries and mutations** and integrating a Hygraph API with **Apollo Client**.

## 🚀 Features

- 👥 Browse authors and view their details and posts
- 📚 Explore blog posts and read full articles
- 💬 View comments and submit a comment on a post
- 🌐 Use a right-to-left layout with Material UI

## 🛠️ Tech stack

| Technology | Role |
| --- | --- |
| [React](https://react.dev/) | User interface |
| [Create React App](https://create-react-app.dev/) | Project setup and scripts |
| [GraphQL](https://graphql.org/) | API query language |
| [Apollo Client](https://www.apollographql.com/docs/react/) | GraphQL requests and in-memory caching |
| [Hygraph](https://hygraph.com/) | Headless CMS and GraphQL API |
| [React Router](https://reactrouter.com/) | Client-side routing |
| [Material UI](https://mui.com/) and Emotion | UI components, styling, and RTL support |
| [sanitize-html](https://www.npmjs.com/package/sanitize-html) | HTML sanitization |
| React Toastify and React Loader Spinner | Notifications and loading indicators |

## 🏁 Getting started

### Prerequisites

- Node.js and npm installed on your machine
- A Hygraph project with content models and API permissions compatible with this application's queries and mutation

### 1. Get the project

Clone the repository using its URL from the repository's **Code** button:

```bash
git clone <repository-url>
cd blog
```

Replace `<repository-url>` with the actual URL. If the cloned directory has a different name, use that name instead of `blog`.

### 2. Install dependencies

```bash
npm install
```

### 3. Configure the environment

Create a `.env` file in the project root and add your Hygraph GraphQL endpoint:

```dotenv
REACT_APP_GRAPHCMS_URI=https://your-hygraph-endpoint
```

Replace the example URL with your actual endpoint. Restart the development server after changing the `.env` file.

> **Security note:** Do not commit your `.env` file. In Create React App, variables prefixed with `REACT_APP_` are included in the client bundle and can be inspected by users. Never put secret tokens or credentials in them. Configure Hygraph permissions carefully, especially for public comment creation.

### 4. Start the app

```bash
npm start
```

The development server usually runs at [http://localhost:3000](http://localhost:3000).

## 📜 Available scripts

| Command | Description |
| --- | --- |
| `npm start` | Run the app in development mode |
| `npm run build` | Create an optimized production build in `build/` |
| `npm test` | Launch the test runner in interactive mode |

## 🗂️ Project structure

```text
src/
├── components/
│   ├── author/      # Author-related components
│   ├── blog/        # Blog post components
│   ├── comment/     # Comment components
│   ├── home/        # Home page components
│   ├── layouts/     # Shared page layout
│   └── shared/      # Shared components
├── graphql/
│   ├── queries.js   # GraphQL queries
│   └── mutations.js # GraphQL mutations
├── Mui/             # Material UI theme configuration
├── styles/          # Global styles and fonts
├── App.js           # Main app component
├── index.js         # Entry point and providers
└── routes.js        # Application routes
```

## 🧭 Routes

| Route | Page |
| --- | --- |
| `/` | Home |
| `/authors/:authorSlug` | Author details |
| `/blogs/:blogSlug` | Blog post details |

## 🔌 GraphQL integration

The operations in `src/graphql/queries.js` fetch posts, authors, individual author and post details, and comments. The `SEND_COMMENT` mutation in `src/graphql/mutations.js` creates a comment and connects it to a post using its slug.

Apollo Client is configured in `src/index.js` with `HttpLink` and `InMemoryCache`. To use your own Hygraph project, its schema must match the fields and relationships used by these operations, and its API permissions must allow the required requests. Whether a newly submitted comment appears in queries also depends on your Hygraph publishing and permission settings.

---

Made as a learning project to get hands-on experience with GraphQL and Apollo Client. ✨
