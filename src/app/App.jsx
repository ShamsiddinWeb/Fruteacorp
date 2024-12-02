import { RouterProvider } from "react-router-dom";
import router from "./provider/router";
import '../index.css'
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <div>
      <ToastContainer position="top-center" />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
