import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Inventory from './Components/Inventory/Inventory';
import Order from './Components/Orders/Order';
import Shop from './Components/Shop/Shop';
import Main from './layout/Main';
import { productAndCartLoader } from './loaders/loader';
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';
import Shipping from './Components/Shipping/Shipping';
import PrivateRoutes from './routes/PrivateRoutes';

function App() {
  const router = createBrowserRouter([
    {path: '/',
      element: <Main></Main>,
      children:[
        {
         path: '/', 
         loader: () =>  fetch('products.json'),
         element: <Shop></Shop>
        },
        {
          path: '/order',
          loader: productAndCartLoader,
           element: <Order></Order>
         },
         {
          path: '/shipping',
           element: <PrivateRoutes><Shipping></Shipping></PrivateRoutes>
         },
         
         {
          path: '/inventory', element: <Inventory></Inventory>
         },
         {
          path: '/login', element: <Login></Login>
         },
         {
          path: '/signup', element: <SignUp></SignUp>
         }
    ]
  },
  ])
  return (
    <div>
        <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
   
            