
import Register from './pages/register';
import Login from './pages/login';
import Snippets from './pages/snippets';
import SecAnalysis from './pages/SecAnalysis';
import Create from './pages/create';
import Get from './pages/get';
import Docs from './pages/documentation';
import 'bootstrap/dist/css/bootstrap.min.css';


import{createBrowserRouter,RouterProvider} from 'react-router-dom';
function App() {
  const router=createBrowserRouter([
    
    {
      path: "/register",
      element:<><Register/></>
    },
    {
      path: "/login/dashboard",
      element:<><Login/></>
    },
    {
      path: "/snippets",
      element:<><Snippets/></>
    },
    {
      path: "/snippets/create-snippets",
      element:<><Create/></>
    },
    {
      path: "/snippets/get-snippets",
      element:<><Get/></>
    },
    {
     
      path: `/snippets/generate-documentation/:id`,
      element:<><Docs/></>
    },
    {
      path: `/snippets/generate-security-analysis/:id`,
      element:<><SecAnalysis/></>
    }
    
  ])

  return (
    <>
       <RouterProvider router={router}/>
    </>
  )
}

export default App
