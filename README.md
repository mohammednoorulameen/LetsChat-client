# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```



<!-- -------------------------------------------------------------------------------------- -->


<!-- 
src/
├── assets/                      # Static assets (images, icons, fonts)
│
├── components/                  # Global reusable UI components
│   ├── common/                  # Atomic components (Button, Input, Avatar, etc.)
│   ├── layout/                  # App shell layouts (Sidebar, Header, Drawer, etc.)
│   └── modal/                   # Modal components (ConfirmModal, ChatCreateModal, etc.)
│
├── features/                    # Feature-driven modular domain separation
│   ├── shared/                  # Shared between user and admin
│   │   ├── auth/                # Login, signup, JWT, OTP, forgot password
│   │   │   ├── components/
│   │   │   ├── hooks/
│   │   │   ├── slices/
│   │   │   └── services/
│   │   ├── settings/           # Profile settings, theme, privacy
│   │   ├── notifications/      # Toasts, push notifications
│   │   └── chat/               # Core chat logic (used in both sides if needed)
│   │       ├── components/
│   │       ├── hooks/
│   │       ├── slices/
│   │       └── services/
│
│   ├── user/                    # User-specific features
│   │   ├── home/                # Home screen, recent chats
│   │   ├── chatbox/             # Chat UI (messages, input, file sharing)
│   │   ├── group/               # Group creation, members, permissions
│   │   └── call/                # Call UI (video/audio, ringing)
│
│   └── admin/                   # Admin-specific features
│       ├── dashboard/           # Chat stats, activity logs
│       ├── userManagement/      # Manage user list, ban/block
│       ├── chatMonitoring/      # Read-only view of chats
│       └── reports/             # Flagged chats or user reports
│
├── routes/                      # Routing setup
│   ├── AppRouter.jsx            # Top-level routes
│   ├── UserRouter.jsx           # User routes
│   ├── AdminRouter.jsx          # Admin routes
│   ├── ProtectedRoute.jsx       # Auth guard
│   └── RoleBasedRoute.jsx       # Role-based route control
│
├── store/                       # Redux store config
│   ├── index.js
│   ├── slices/                  # Global slices (if any)
│   └── middleware/              # Custom middlewares (e.g., socket)
│
├── services/                    # External logic
│   ├── socket.js                # Socket.IO client config
│   ├── api.js                   # Axios or RTK Query base API
│   └── firebase.js              # If using Firebase for file upload/notifications
│
├── lib/                         # Global utilities
│   ├── axiosInstance.js
│   ├── authUtils.js             # JWT handling, token refresh, etc.
│   └── validators.js            # Form/input validation
│
├── hooks/                       # Global custom hooks
│   └── useSocket.js             # Manage socket connections
│
├── context/                     # React context (Theme, AuthContext)
│
├── types/                       # Global TypeScript types / interfaces
│
├── i18n/                        # Language localization files
│
├── tests/                       # Unit & integration tests
│
├── App.jsx                      # Root app component
├── main.jsx                     # ReactDOM entry
└── index.css / tailwind.css     # Styling setup -->
