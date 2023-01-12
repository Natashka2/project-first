import React from 'react';
import { Route, RouteProps, Navigate, Routes } from 'react-router-dom';

import { LoginPage, HomePage } from './pages';
import { Loader } from './components/common';

const isAuthenticated = true;

const ProtectedRoute: React.FC<
  {
    element: React.ReactNode;
  } & RouteProps
> = ({ element, ...args }) => {
  return isAuthenticated ? (
    // <RequireAuth>
    <Route element={element} {...args} />
  ) : (
    // </RequireAuth>
    <Navigate to="/" />
  );
};

const App = () => {
  if (!isAuthenticated) {
    return <Loader />;
  }

  return (
    // <AuthProvider>
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <ProtectedRoute path="/home" element={<HomePage />} />
      {/* TODO: create NotFoundPage */}
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
    // </AuthProvider>
  );
};

export default App;
