import {createBrowserRouter} from 'react-router-dom';
import ErrorElement from '../components/ErrorElement';
import Completed from '../components/Completed';
import Main from '../pages/Main';

const baseroute = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      errorElement:<ErrorElement/>,
      
    },{
      path:"/completed",
        element:<Completed />,
        errorElement:<ErrorElement/>
    }
  ]);

  export {baseroute}
  
  