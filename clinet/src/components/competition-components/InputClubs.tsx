import { fetchDataOfClubsFromCom } from "@/utils/api";
import { useQuery } from "@tanstack/react-query";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

type Club = {
  name: string | undefined;
  id: string | undefined;
};

export type Params = {
  competitionId?: string;
  clubId?: string;
  id?: string;
  seasonId?: string;
};

interface InputSeasonProp {
  category: string;
  profile: string;
  setClubId: React.Dispatch<React.SetStateAction<string | undefined>>;
  clubId: string;
}

export default function InputClubs({
  category,
  profile,
  setClubId,
  clubId,
}: InputSeasonProp) {
  const navigate = useNavigate();
  const { competitionId, seasonId } = useParams<Params>();

  const { data, error, isLoading } = useQuery({
    queryKey: ["fetchDataOfClubsFromTable", competitionId],
    queryFn: () => fetchDataOfClubsFromCom(competitionId),
    enabled: !!competitionId, // Prevent the query from running if competitionId is missing
  });

  const [clubName, setClubName] = useState<string | undefined>("");
  const [currentId, setCurrentId] = useState<string | undefined>("");

  useEffect(() => {
    if (data?.clubs?.length) {
      const defaultClub = data.clubs[0];
      if (defaultClub) {
        setClubId(defaultClub.id || "");
        setClubName(defaultClub.name);
      }
    }
  }, [data, setClubId]);

  if (error) {
    console.error(error);
    return (
      <p className="text-red-500">
        Failed to load data. Please try again later.
      </p>
    );
  }

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!data || !data.clubs?.length) {
    return <p>No data available for the selected competition.</p>;
  }

  const clubs: Club[] = data.clubs;

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedId = event.target.value;
    const selectedClub = clubs.find((club) => club.id === selectedId);
    if (selectedClub) {
      setClubName(selectedClub.name);
      setCurrentId(selectedId);
    }
  };

  const handleShowClick = () => {
    navigate(`/${profile}/${competitionId}/${category}/${seasonId}`);
    setClubId(currentId);
  };

  return (
    <div>
      <h2 className="bg-[#00193f] text-white px-2 font-bold">{`Info`}</h2>
      <div className="p-[25px] m-[10px] bg-white flex gap-[250px] text-[15px] items-center">
        <label htmlFor="club-select">Filter by season:</label>
        <div className="flex">
          <select
            className="border-[1px] h-[25px] border-[#9aadb5] font-bold w-[150px] text-[#147da3] text-[12px] focus:outline-none focus:ring-[0.2px] focus:ring-[#0EB1EE]"
            id="club-select"
            value={currentId}
            onChange={handleSelectChange}
          >
            {clubs.map((club) => (
              <option key={club.id} value={club.id}>
                {club.name}
              </option>
            ))}
          </select>
          <button
            className="ml-[10px] border-[1px] border-[#9aadb5] h-[25px] p-[5px] px-[10px] text-white bg-[#147da3] flex items-center"
            onClick={handleShowClick}
          >
            Show
          </button>
        </div>
      </div>
    </div>
  );
}
