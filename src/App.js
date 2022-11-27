import { router } from './Routes/Route/Route';
import { RouterProvider } from 'react-router-dom'

import './App.css';

function App() {
  return (
    <div >
      <RouterProvider router={router}>
      </RouterProvider>
    </div>
  );
}

export default App;
