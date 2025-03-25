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
import CompetitionsPage from "./pages/CompetitionsPage.js";
import TransfersPage from "./pages/TransfersPage.js";
import MarketValue from "./pages/MarketValuePage.js";
import StatisticsPage from "./pages/StatisticsPage.js";
import MarketValuePage from "./pages/MarketValuePage.js";
import CommunityPage from "./pages/CommunityPage.js";
import GamingPage from "./pages/GamingPage.js";
import NewsPage from "./pages/NewsPage.js";
import LoginPage from "./pages/LoginPage.js";
import SignupPage from "./pages/SignupPage.js";
import { useEffect } from "react";
import { isUserValid } from "./utils/api.js";
import { useAuth } from "./providers/auth-provider.js";
import ProfilePage from "./pages/ProfilePage.js";
import FilterResponsive from "./pages/FilterResponsive.js";
import FavoritePage from "./pages/FavoritePage.js";

function App() {
  const { setUser, user } = useAuth();
  useEffect(() => {
    (async () => {
      const dataAuth = await isUserValid();
      if (dataAuth) {
        setUser({
          id: dataAuth.id,
          username: dataAuth.username,
          email: dataAuth.email,
        });
      } else {
        setUser(null);
      }
    })();
  }, []);

  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        { path: "/", element: <HomePage /> },
        { path: "/SearchPage", element: <SearchPage /> },
        { path: "/FilterPage", element: <FilterResponsive /> },
        {
          path: "/competitionProfile/:competitionId",
          element: <CompetitionPage />,
          children: [
            {
              path: "overview/:seasonId",
              element: <CompetitionOverview />,
            },
            {
              path: "history/:seasonId",
              element: <CompetitionnHistory />,
            },
            {
              path: "InformationFacts/:seasonId",
              element: <CompetitionInformationFacts />,
            },
            {
              path: "Transfers/:seasonId",
              element: <CompetitionTransfers />,
            },
            {
              path: "Clubs/:seasonId",
              element: <CompetitionClubs />,
            },
            {
              path: "Tables/:seasonId",
              element: <CompetitionTables />,
            },
            {
              path: "Players/:seasonId",
              element: <CompetitionPlayers />,
            },
            {
              path: "Tables/:seasonId",
              element: <CompetitionTables />,
            },
            {
              path: "News/:seasonId",
              element: <CompetitionNews />,
            },
            {
              path: "MarketValues/:seasonId",
              element: <CompetitionMarketValues />,
            },
          ],
        },
        {
          path: "/clubProfile/:clubId",
          element: <ClubPage />,
          children: [
            {
              path: "history/:seasonId",
              element: <ClubHistory />,
            },
            {
              path: "overview/:seasonId",
              element: <ClubOverview />,
            },
            {
              path: "fixtures/:seasonId",
              element: <ClubFixtures />,
            },
            {
              path: "forum/:seasonId",
              element: <ClubForum />,
            },
            {
              path: "news/:seasonId",
              element: <ClubNews />,
            },
            {
              path: "squad/:seasonId",
              element: <ClubSquad />,
            },
            {
              path: "stadium/:seasonId",
              element: <ClubStadium />,
            },
            {
              path: "transfersRumours/:seasonId",
              element: <ClubTransfersRumours />,
            },
            {
              path: "informationFacts/:seasonId",
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
        { path: "/competitions", element: <CompetitionsPage /> },
        { path: "/transfers", element: <TransfersPage /> },
        { path: "/marketValues", element: <MarketValuePage /> },
        { path: "/statistics", element: <StatisticsPage /> },
        { path: "/community", element: <CommunityPage /> },
        { path: "/gaming", element: <GamingPage /> },
        { path: "/signup", element: <SignupPage /> },
        { path: "/login", element: <LoginPage /> },
        { path: "/news/:newsId", element: <NewsPage /> },
        { path: "/profile/:userId", element: <ProfilePage /> },
        { path: "/favorite/:userId", element: <FavoritePage /> },
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
