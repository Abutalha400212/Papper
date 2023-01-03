import { RouterProvider } from 'react-router-dom';
import { router } from './routes/Route';


function App() {
  return (
    <div className='p-3'>
      <RouterProvider router={router}>

</RouterProvider>
    </div>
  );
}

export default App;
