import { createBrowserRouter } from "react-router-dom";
// import NotFound from "../../Pages/NotFound/NotFound"
import Home from "../../Pages/Home/Home";
import Wishlist from "../../Pages/Wishlist/Wishlist";


const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Home />, 
      children: [
        {
          path: "/Wishlist",
          element: <Wishlist />,
        },
        // {
        //   path: "*",
        //   element: < NotFound/>,
        // },
      ],
    },
  ],
  {
    future: {
      v7_startTransition: true,
    },
  }
);

export default router;
