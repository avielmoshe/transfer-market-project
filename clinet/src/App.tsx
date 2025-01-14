import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import Layout from "./pages/Layout";
import SearchPage from "./pages/SearchPage";
import AboutPage from "./pages/AboutPage";
import CompetitionPage from "./pages/CompetitionPage.js";
import ClubPage from "./pages/ClubPage.js";
import PlayerPage from "./pages/PlayerPage.js";
import RefereePage from "./pages/RefereePage.js";
import CompetitionOverview from "./components/competition-components/CompetitionOverview.js";

function App() {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        { path: "/", element: <HomePage /> },
        { path: "/SearchPage", element: <SearchPage /> },
        {
          path: "/competitionProfile/:id",
          element: <CompetitionPage />,
          children: [
            {
              path: "/competitionProfile/:id/overview",
              element: <CompetitionOverview />,
            },
          ],
        },
        {
          path: "/clubProfile/:id",
          element: <ClubPage />,
          children: [
            {
              path: "/clubProfile/:id/overview",
              element: <div>baba</div>,
            },
          ],
        },
        {
          path: "/playerProfile/:id",
          element: <PlayerPage />,
          children: [
            {
              path: "/playerProfile/:id/profile",
              element: <div>baba</div>,
            },
          ],
        },
        { path: "/refereeProfile/:id", element: <RefereePage /> },
        { path: "/about", element: <AboutPage /> },
      ],
    },
  ]);
  return (
    <div className="flex items-center justify-center">
      <div className="w-full max-w-[1030px]">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
