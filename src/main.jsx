import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx'


import './index.css'
import Intro from './pages/Intro.jsx';
import Loader from './components/Loader.jsx';
import Detail from './pages/Detail.jsx';
import ErrorPage from './pages/Error-page.jsx';

const router = createBrowserRouter([

  {
    path:"/",
    element:<Intro/>,
    errorElement:<ErrorPage/>
  },
 {
    path:"/pet",
    element:<App/>,
    errorElement:<ErrorPage/>
  },{
    path:"/pet/detail/:id",
    element:<Detail/>,
  
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
<RouterProvider router={router} fallbackElement={<Loader/>} />
  </StrictMode>,
)
