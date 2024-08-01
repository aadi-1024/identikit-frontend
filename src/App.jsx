
import Register from './pages/register';
import Login from './pages/login';
import Snippets from './pages/snippets';
import SecAnalysis from './pages/SecAnalysis';
import Create from './pages/create';
import Get from './pages/get';
import Docs from './pages/documentation';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navb from './pages/navbar';


import{createBrowserRouter,RouterProvider} from 'react-router-dom';
function App() {
  const router=createBrowserRouter([
    
    {
      path: "/register",
      element:<><Navb/><Register/></>
    },
    {
      path: "/",
      element:<><Navb/><Login/></>
    },
    {
      path: "/snippets",
      element:<><Navb/><Snippets/></>
    },
    {
      path: "/snippets/create-snippets",
      element:<><Navb/><Create/></>
    },
    {
      path: "/snippets/get-snippets",
      element:<><Navb/><Get/></>
    },
    {
     
      path: `/snippets/generate-documentation/:id`,
      element:<><Navb/><Docs/></>
    },
    {
      path: `/snippets/generate-security-analysis/:id`,
      element:<><Navb/><SecAnalysis/></>
    }
    
  ])

  return (
    <>
       <RouterProvider router={router}/>
    </>
  )
}

export default App
