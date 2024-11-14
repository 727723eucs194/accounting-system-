// App.js
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginSignup from '../src/Components/LoginSignup/LoginSignup';
import HomePage from '../src/Components/LoginSignup/Home';
import Report from '../src/Components/LoginSignup/report'

function App() {
  const route = createBrowserRouter([
    {
      path: '/',
      element: <LoginSignup />
    },
    {
      path: '/homepage',
      element: <HomePage />
    },
    {
      path: '/reports',
      element: <Report />
    }
  ]);

  return (
    <div>
      <RouterProvider router={route}></RouterProvider>
    </div>
  );
}

export default App;
