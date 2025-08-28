import React, { Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";

// Layout Components
import AppLayout from "./components/layout/AppLayout";

// Common Components
import LoadingSpinner from "./components/common/LoadingSpinner";
import ErrorBoundaryComponent from "./components/common/ErrorBoundary";
import ScrollToTop from "./components/common/ScrollToTop";

// Context Providers
import { AppProvider } from "./context/AppContext";
import { AuthProvider } from "./context/AuthContext";

// Lazy load components for better performance
const LazyHome = React.lazy(() => import("./pages/Home"));
const LazyLogin = React.lazy(() => import("./pages/Login"));
const LazyNotFound = React.lazy(() => import("./pages/NotFound"));

// Loading component for Suspense fallback
const PageLoader = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-zinc-50 flex items-center justify-center">
    <LoadingSpinner size="lg" text="Loading page..." />
  </div>
);

// Error fallback component
const ErrorFallback = ({ error, resetErrorBoundary }) => (
  <ErrorBoundaryComponent
    error={error}
    resetErrorBoundary={resetErrorBoundary}
  />
);

// Main router configuration
const router = createBrowserRouter([
  {
    // Main application routes with AppLayout
    element: (
      <>
        <ScrollToTop />
        <AppProvider>
          <AuthProvider>
            <ErrorBoundary FallbackComponent={ErrorFallback}>
              <Suspense fallback={<PageLoader />}>
                <AppLayout />
              </Suspense>
            </ErrorBoundary>
          </AuthProvider>
        </AppProvider>
      </>
    ),
    errorElement: <ErrorBoundaryComponent />,
    children: [
      {
        path: "/",
        element: <LazyHome />,
      },
    ],
  },
  {
    // Login route - no layout
    path: "/login",
    element: (
      <>
        <ScrollToTop />
        <AppProvider>
          <AuthProvider>
            <ErrorBoundary FallbackComponent={ErrorFallback}>
              <Suspense fallback={<PageLoader />}>
                <LazyLogin />
              </Suspense>
            </ErrorBoundary>
          </AuthProvider>
        </AppProvider>
      </>
    ),
  },
  {
    // 404 route - no layout
    path: "*",
    element: (
      <>
        <ScrollToTop />
        <LazyNotFound />
      </>
    ),
  },
]);

function App() {
  return (
    <RouterProvider router={router} future={{ v7_startTransition: true }} />
  );
}

export default App;
