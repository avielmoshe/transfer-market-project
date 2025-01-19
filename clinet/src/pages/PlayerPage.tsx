import DynamicHeader from "@/components/HeaderForProfile";
import NavSearch from "@/components/NavSearch";
import { DataForHeader, DataForNavSearch } from "@/types/types";
import {
  fetchDataOfOnePlayerAchievements,
  fetchDataOfOnePlayerForRow,
} from "@/utils/api";
import { useQuery } from "@tanstack/react-query";
import { Outlet, useNavigate, useParams } from "react-router-dom";

function PlayerPage() {
  const navigate = useNavigate();
  const { id } = useParams<string>();
  const { data, error, isLoading } = useQuery({
    queryKey: ["fetchDataOfOnePlayerForRow", { id }],
    queryFn: () => fetchDataOfOnePlayerForRow(id),
  });
  const { data: achievementsData } = useQuery({
    queryKey: ["achievementsData", { id }],
    queryFn: () => fetchDataOfOnePlayerAchievements(id),
  });

  if (error instanceof Error) return null;
  if (!data) {
    return null;
  }
  if (!achievementsData) {
    return null;
  }

  const dataOfNavSearch: DataForNavSearch = [
    {
      name: "PROFILE",
      onClick: () => {
        navigate(`/playerProfile/${id}/profile`);
      },
    },
    {
      name: "STATS",
      onClick: () => {
        navigate(`/playerProfile/${id}/stats`);
      },
    },
    {
      name: "MARKET VALUES",
      onClick: () => {
        navigate(`/playerProfile/${id}/marketValues`);
      },
    },
    {
      name: "TRANSFERS",
      onClick: () => {
        navigate(`/playerProfile/${id}/transfers`);
      },
    },

    {
      name: "NATIONAL TEAM",
      onClick: () => {
        navigate(`/playerProfile/${id}/nationalTeam`);
      },
    },
    {
      name: "NEWS",
      onClick: () => {
        navigate(`/playerProfile/${id}/news`);
      },
    },
    {
      name: "ACHIEVEMENTS",
      onClick: () => {
        navigate(`/playerProfile/${id}/achievements`);
      },
    },
  ];

  const dataForHeader: DataForHeader = {
    type: "player",
    id: data.playerProfile.playerID,
    num: data.playerProfile.playerShirtNumber,
    title: data.playerProfile.playerName,
    frontImg: data.playerProfile.playerImage,
    secondImg: data.playerProfile.clubImage,
    secondTitle: data.playerProfile.clubnameEN,
    marketValue:
      data.playerProfile.marketValueCurrency +
      data.playerProfile.marketValue +
      data.playerProfile.marketValueNumeral,
    firstData: [
      { league: data.playerProfile.league },
      { contractExpiryDate: data.playerProfile.contractExpiryDate },
      { agent: data.playerProfile.agent },
    ],
    secondData: [
      {
        dateOfBirth:
          data.playerProfile.dateOfBirth + ` (${data.playerProfile.age})`,
      },
      { contractExpiryDate: data.playerProfile.contractExpiryDate },
      {
        birthplace:
          data.playerProfile.birthplace +
          " " +
          data.playerProfile.birthplaceCountry,
      },

      {
        Citizenship: data.playerProfile.birthplaceCountryImage,
      },
    ],
    thirdData: [
      {
        Height: data.playerProfile.height,
      },
      {
        Position: data.playerProfile.playerMainPosition,
      },
      {
        internationalTeam: data.playerProfile.internationalTeam,
      },
      {
        CurrentInternational:
          data.playerProfile.internationalGames +
          "/" +
          data.playerProfile.internationalGoals,
      },
    ],
    successesData: achievementsData.playerAchievements,
  };
  return (
    <>
      <DynamicHeader dataForHeader={dataForHeader} />

      <NavSearch dataOfNavSearch={dataOfNavSearch} />
      <Outlet />
    </>
  );
}

export default PlayerPage;
