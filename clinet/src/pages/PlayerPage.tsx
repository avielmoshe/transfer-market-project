import NavSearch from "@/components/NavSearch";
import { DataForNavSearch } from "@/types/types";
import { Outlet, useNavigate, useParams } from "react-router-dom";

function PlayerPage() {
  const navigate = useNavigate();
  const { id } = useParams();
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
      name: "RUMOURS",
      onClick: () => {
        navigate(`/playerProfile/${id}/rumours`);
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
    {
      name: "CAREER",
      onClick: () => {
        navigate(`/playerProfile/${id}/career`);
      },
    },
  ];
  return (
    <>
      <NavSearch dataOfNavSearch={dataOfNavSearch} />
      <Outlet />
    </>
  );
}

export default PlayerPage;
