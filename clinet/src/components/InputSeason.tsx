import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

type Year = {
  input: string | undefined;
  id: string | undefined;
};

export type Params = {
  competitionId: string | undefined;
  clubId: string | undefined;
  id: string | undefined;
  seasonId: string | undefined;
};

const years: Year[] = [
  { input: "24/25", id: "2024" },
  { input: "23/24", id: "2023" },
  { input: "22/23", id: "2022" },
  { input: "21/22", id: "2021" },
  { input: "20/21", id: "2020" },
  { input: "19/20", id: "2019" },
  { input: "18/19", id: "2018" },
  { input: "17/18", id: "2017" },
  { input: "16/17", id: "2016" },
  { input: "15/16", id: "2015" },
  { input: "14/15", id: "2014" },
  { input: "13/14", id: "2013" },
  { input: "12/13", id: "2012" },
  { input: "11/12", id: "2011" },
  { input: "10/11", id: "2010" },
  { input: "09/10", id: "2009" },
  { input: "08/09", id: "2008" },
  { input: "07/08", id: "2007" },
  { input: "06/07", id: "2006" },
  { input: "05/06", id: "2005" },
  { input: "04/05", id: "2004" },
  { input: "03/04", id: "2003" },
  { input: "02/03", id: "2002" },
  { input: "01/02", id: "2001" },
  { input: "00/01", id: "2000" },
  { input: "99/00", id: "1999" },
  { input: "98/99", id: "1998" },
  { input: "97/98", id: "1997" },
  { input: "96/97", id: "1996" },
  { input: "95/96", id: "1995" },
  { input: "94/95", id: "1994" },
  { input: "93/94", id: "1993" },
  { input: "92/93", id: "1992" },
];
interface InputSeasonProp {
  category: string;
  profile: string;
}
export default function InputSeason({ category, profile }: InputSeasonProp) {
  const navigate = useNavigate();
  const { competitionId, clubId, id } = useParams<Params>();
  const { seasonId } = useParams<Params>();
  const curruntInput = years.find((year) => year.id === seasonId)?.input;

  const [season, setSeason] = useState<Year>({
    input: curruntInput,
    id: seasonId,
  });
  const [selectedSeason, setSelectedSeason] = useState<Year>(season);

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedId = event.target.value;
    const selected = years.find((year) => year.id === selectedId);
    if (selected) {
      setSeason(selected);
    }
  };

  const handleShowClick = () => {
    navigate(
      `/${profile}/${
        competitionId ? competitionId : clubId ? clubId : id
      }/${category}/${season.id}`
    );
    setSelectedSeason(season);
  };
  return (
    <div>
      <h2 className="bg-[#00193f] text-white px-2 font-bold">{`Info`}</h2>
      <div className="p-[25px] m-[10px] bg-white flex gap-[250px] text-[15px] items-center">
        <label htmlFor="year-select"> Filter by season:</label>
        <div className="flex">
          <select
            className="border-[1px] h-[25px] border-[#9aadb5] font-bold w-[150px] text-[#147da3] text-[12px] focus:outline-none focus:ring-[0.2px] focus:ring-[#0EB1EE]"
            id="year-select"
            value={season.id}
            onChange={handleSelectChange}
          >
            {years.map((year) => (
              <option key={year.id} value={year.id}>
                {year.input}
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
