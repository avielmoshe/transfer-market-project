import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Layout from "./pages/Layout";
import SearchPage from "./pages/SearchPage";
import AboutPage from "./pages/AboutPage";

function App() {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/SearchPage",
          element: <SearchPage />,
        },
        {
          path: "/about",
          element: <AboutPage />,
        },
      ],
    },
  ]);
  return (
    <div className="max-w-[920px] ">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
