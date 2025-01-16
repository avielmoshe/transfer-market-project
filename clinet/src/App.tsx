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
import CompetitionnHistory from "./components/competition-components/CompetitionnHistory.js";
import CompetitionInformationFacts from "./components/competition-components/CompetitionInformationFacts.js";
import CompetitionTransfers from "./components/competition-components/CompetitionTransfers.js";
import CompetitionClubs from "./components/competition-components/CompetitionClubs.js";
import CompetitionTables from "./components/competition-components/CompetitionTables.js";
import CompetitionPlayers from "./components/competition-components/CompetitionPlayers.js";
import CompetitionNews from "./components/competition-components/CompetitionNews.js";
import CompetitionMarketValues from "./components/competition-components/CmpotitionMarketValues.js";
import ClubHistory from "./components/club-components/ClubHistory.js";
import ClubOverview from "./components/club-components/ClubOverview.js";
import ClubFixtures from "./components/club-components/ClubFixtures.js";
import ClubForum from "./components/club-components/ClubForum.js";
import ClubNews from "./components/club-components/ClubNews.js";
import ClubSquad from "./components/club-components/ClubSquad.js";
import ClubStadium from "./components/club-components/ClubStadium.js";
import ClubTransfersRumours from "./components/club-components/ClubTransfersRumours.js";
import ClubInformationFacts from "./components/club-components/ClubInformationFacts.js";
import PlayerAchievements from "./components/player-components/PlayerAchievements.js";
import PlayerProfile from "./components/player-components/PlayerProfile.js";
import PlayerCareer from "./components/player-components/PlayerCareer.js";
import PlayerMarketValue from "./components/player-components/PlayerMarketValue.js";
import PlayerNationalTeam from "./components/player-components/PlayerNationalTeam.js";
import PlayerNews from "./components/player-components/PlayerNews.js";
import PlayerRumours from "./components/player-components/PlayerRumours.js";
import PlayerStats from "./components/player-components/PlayerStats.js";
import PlayerTransfers from "./components/player-components/PlayerTransfers.js";

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
              path: "/competitionProfile/:id/overview/:seasonId",
              element: <CompetitionOverview />,
            },
            {
              path: "/competitionProfile/:id/history/:seasonId",
              element: <CompetitionnHistory />,
            },
            {
              path: "/competitionProfile/:id/InformationFacts/:seasonId",
              element: <CompetitionInformationFacts />,
            },
            {
              path: "/competitionProfile/:id/Transfers/:seasonId",
              element: <CompetitionTransfers />,
            },
            {
              path: "/competitionProfile/:id/Clubs/:seasonId",
              element: <CompetitionClubs />,
            },
            {
              path: "/competitionProfile/:id/Tables/:seasonId",
              element: <CompetitionTables />,
            },
            {
              path: "/competitionProfile/:id/Players/:seasonId",
              element: <CompetitionPlayers />,
            },
            {
              path: "/competitionProfile/:id/Tables/:seasonId",
              element: <CompetitionTables />,
            },
            {
              path: "/competitionProfile/:id/News/:seasonId",
              element: <CompetitionNews />,
            },
            {
              path: "/competitionProfile/:id/MarketValues/:seasonId",
              element: <CompetitionMarketValues />,
            },
          ],
        },
        {
          path: "/clubProfile/:id",
          element: <ClubPage />,
          children: [
            {
              path: "history",
              element: <ClubHistory />,
            },
            {
              path: "overview",
              element: <ClubOverview />,
            },
            {
              path: "fixtures",
              element: <ClubFixtures />,
            },
            {
              path: "forum",
              element: <ClubForum />,
            },
            {
              path: "news",
              element: <ClubNews />,
            },
            {
              path: "squad",
              element: <ClubSquad />,
            },
            {
              path: "stadium",
              element: <ClubStadium />,
            },
            {
              path: "transfersRumours",
              element: <ClubTransfersRumours />,
            },
            {
              path: "informationFacts",
              element: <ClubInformationFacts />,
            },
          ],
        },
        {
          path: "/playerProfile/:id",
          element: <PlayerPage />,
          children: [
            {
              path: "achievements",
              element: <PlayerAchievements />,
            },
            {
              path: "profile",
              element: <PlayerProfile />,
            },
            {
              path: "career",
              element: <PlayerCareer />,
            },
            {
              path: "marketValues",
              element: <PlayerMarketValue />,
            },
            {
              path: "nationalTeam",
              element: <PlayerNationalTeam />,
            },
            {
              path: "news",
              element: <PlayerNews />,
            },
            {
              path: "rumours",
              element: <PlayerRumours />,
            },
            {
              path: "stats",
              element: <PlayerStats />,
            },
            {
              path: "transfers",
              element: <PlayerTransfers />,
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
