import './css/styles.css';
import banner from './assets/images/banner.jpg';

import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";

import React from 'react';

// Import Components
import NavBar from './components/NavBar';
import Footer from './components/Footer';

// Import Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Admin from "./pages/Admin";
import Signup from './pages/Signup';
import Login from './pages/Login';
import EditProject from './pages/EditProject';

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <div className="font-serif bg-cover bg-no-repeat backdrop-brightness-10" style={{ backgroundImage: `url(${banner})`}}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/services",
        element: <Services />
      },
      {
        path: "/projects",
        element: <Projects />
      },
      {
        path: "/admin",
        element: <Admin />
      },
      {
        path: "/signup",
        element: <Signup />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/add-project",
        element: <EditProject />
      },
      {
        path: "/edit-project/:id",
        element: <EditProject />
      }
    ]
  }
]);

function App() {
  return (
    <div className="w-full h-screen">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
