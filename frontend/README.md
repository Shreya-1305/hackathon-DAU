# Hackathon Frontend

A modern, professional React application built with cutting-edge technologies and beautiful design.

## 🚀 Features

- **Modern Tech Stack**: React 18, Vite, Tailwind CSS
- **Beautiful UI**: Professional design with gradients, animations, and responsive layout
- **Routing**: React Router v6 with lazy loading for optimal performance
- **Error Handling**: Comprehensive error boundaries and 404 pages
- **Loading States**: Beautiful loading spinners and suspense fallbacks
- **Mobile Responsive**: Fully responsive design that works on all devices
- **Component Architecture**: Well-structured, reusable components

## 📁 Project Structure

```
frontend/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── AppLayout.jsx          # Main layout wrapper
│   │   │   ├── Navbar.jsx             # Navigation component
│   │   │   └── Footer.jsx             # Footer component
│   │   └── common/
│   │       ├── ErrorBoundary.jsx      # Error handling component
│   │       └── LoadingSpinner.jsx     # Loading spinner component
│   ├── pages/
│   │   ├── Home.jsx                   # Home page with features showcase
│   │   ├── Profile.jsx                # User profile page
│   │   ├── Settings.jsx               # Settings and preferences page
│   │   ├── About.jsx                  # About page with team info
│   │   └── NotFound.jsx               # 404 error page
│   ├── App.jsx                        # Main app with routing setup
│   ├── main.jsx                       # App entry point
│   └── index.css                      # Global styles
├── public/                            # Static assets
├── package.json                       # Dependencies and scripts
├── vite.config.js                     # Vite configuration
├── tailwind.config.js                 # Tailwind CSS configuration
└── .gitignore                         # Git ignore rules
```

## 🛠️ Technologies Used

- **React 18** - Modern React with hooks and concurrent features
- **Vite** - Fast build tool and development server
- **React Router v6** - Advanced routing with createBrowserRouter
- **Tailwind CSS** - Utility-first CSS framework
- **React Icons** - Beautiful icon library
- **React Error Boundary** - Error handling
- **Context API** - State management with providers
- **Axios** - HTTP client for API calls

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd hackathonnn/frontend
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎨 Design System

### Colors

- **Primary**: Purple gradient (`from-purple-600 to-blue-600`)
- **Secondary**: Pink accent (`pink-600`)
- **Background**: Gradient from blue to purple (`from-blue-50 via-white to-purple-50`)
- **Text**: Gray scale (`gray-800`, `gray-600`, `gray-400`)

### Components

- **Cards**: Glassmorphism effect with backdrop blur
- **Buttons**: Gradient backgrounds with hover effects
- **Navigation**: Sticky navbar with mobile menu
- **Loading**: Animated spinners with custom styling

## 📱 Pages

### Home (`/`)

- Hero section with animated text
- Features showcase with icons
- Call-to-action section

### Profile (`/profile`)

- User profile information
- Statistics cards
- Skills and technologies

### Settings (`/settings`)

- Appearance settings (dark mode toggle)
- Notification preferences
- Privacy and security options
- Language selection

### About (`/about`)

- Team information
- Mission statement
- Contact links

### 404 (`/*`)

- Custom 404 error page
- Navigation back to home

## 🔧 Customization

### Adding New Pages

1. Create a new component in `src/pages/`
2. Add the route in `src/App.jsx` within the children array
3. Update the navigation in `src/components/layout/Navbar.jsx`

### Routing Structure

The application uses `createBrowserRouter` with nested routes:

```javascript
const router = createBrowserRouter([
  {
    element: (
      <>
        <ScrollToTop />
        <AppProvider>
          <ErrorBoundary>
            <Suspense fallback={<PageLoader />}>
              <AppLayout />
            </Suspense>
          </ErrorBoundary>
        </AppProvider>
      </>
    ),
    children: [
      { path: "/", element: <Home /> },
      { path: "/profile", element: <Profile /> },
      // Add more routes here
    ],
  },
]);
```

### Adding Context Providers

To add new context providers, wrap them around the existing providers in the router configuration:

```javascript
element: <>
  <ScrollToTop />
  <NewProvider>
    <AppProvider>
      <ErrorBoundary>
        <Suspense fallback={<PageLoader />}>
          <AppLayout />
        </Suspense>
      </ErrorBoundary>
    </AppProvider>
  </NewProvider>
</>;
```

### Styling

- Use Tailwind CSS classes for styling
- Follow the established design system
- Use the gradient color scheme for consistency

### Error Handling

- Wrap components with ErrorBoundary
- Use the LoadingSpinner for loading states
- Implement proper error states for async operations

## 📦 Build and Deploy

### Production Build

```bash
npm run build
```

The build output will be in the `dist/` directory.

### Deployment

The application can be deployed to any static hosting service:

- Vercel
- Netlify
- GitHub Pages
- AWS S3
- Firebase Hosting

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- React team for the amazing framework
- Vite team for the fast build tool
- Tailwind CSS for the utility-first approach
- React Icons for the beautiful icon library
