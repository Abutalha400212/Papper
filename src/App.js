import { RouterProvider } from 'react-router-dom';
import { router } from './routes/Route';


function App() {
  return (
    <div className='p-5'>
      <RouterProvider router={router}>

</RouterProvider>
    </div>
  );
}

export default App;
