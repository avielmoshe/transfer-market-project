import React, { useEffect, useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { ImHome } from "react-icons/im";
import { FaTshirt } from "react-icons/fa";
import player from "../assets/img/bc-players.svg";
import flag from "../assets/img/bc-countries.svg";
import cup from "../assets/img/bc-competitions.svg";
import { RxDoubleArrowRight } from "react-icons/rx";
import { IoSearch } from "react-icons/io5";
import { BiSolidUpArrow } from "react-icons/bi";
import { BiSolidDownArrow } from "react-icons/bi";
import {
  fetchDataOfClubsFromCom,
  fetchDataOfSquadFromClub,
  fetchTransferMarketData,
} from "../utils/api";
import { useNavigate } from "react-router-dom";

const Filter = () => {
  const [isCountryOpen, setIsCountryOpen] = useState(false);
  const [isCompetitionOpen, setIsCompetitionOpen] = useState(false);
  const [isClubsOpen, setIsClubsOpen] = useState(false);
  const [isPlayerOpen, setIsPlayerOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchCompetitionTerm, setSearchCompetitionTerm] = useState("");
  const [searchClubTerm, setSearchClubTerm] = useState("");
  const [searchPlayerTerm, setSearchPlayerTerm] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("Country");
  const [selectedCompetition, setSelectedCompetition] = useState("Competition");
  const [selectedClub, setSelectedClub] = useState("Club");
  const [selectedPlayer, setSelectedPlayer] = useState("Player");
  const [clubs, setClubs] = useState([]);
  const [players, setPlayers] = useState([]);
  const [competitionId, setCompetitionId] = useState<String>("[]");
  const [clubId, setClubId] = useState<String>("");
  const [playerId, setPlayerId] = useState<String>("");
  const competitionsNames: competitionsNames[] = [];

  const navigate = useNavigate();

  interface competitionsNames {
    name: String;
    id: String;
  }

  const { data } = useQuery({
    queryKey: ["transferMarketCompetitionData", { selectedCountry }],
    queryFn: () => fetchTransferMarketData(selectedCountry, "1"),
  });

  if (data) {
    data.competitions?.map((comp) =>
      competitionsNames.push({ name: comp.competitionName, id: comp.id })
    );
  }

  const handleClick = async (competition: competitionsNames) => {
    handleCompetitionSelect(competition.name);
    setCompetitionId(competition.id);

    const data = await fetchDataOfClubsFromCom(competition.id);

    setClubs(data.clubs);
  };

  const handleClubClick = async (club) => {
    handleClubSelect(club.name);
    setClubId(club.id);

    const data = await fetchDataOfSquadFromClub(club.id);
    setPlayers(data.squad);
  };

  const countries = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "American Samoa",
    "American Virgin Islands",
    "Andorra",
    "Angola",
    "Anguilla",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Aruba",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bermuda",
    "Bhutan",
    "Bolivia",
    "Bonaire",
    "Bosnia-Herzegovina",
    "Botswana",
    "Brazil",
    "British India",
    "British Virgin Islands",
    "Brunei Darussalam",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Cape Verde",
    "Cayman Islands",
    "Central African Republic",
    "Chad",
    "Chile",
    "China",
    "Chinese Taipei",
    "Christmas Island",
    "Colombia",
    "Comoros",
    "Congo",
    "Cookinseln",
    "Costa Rica",
    "Cote d'Ivoire",
    "Crimea",
    "Croatia",
    "CSSR",
    "Cuba",
    "Curacao",
    "Cyprus",
    "Czech Republic",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "DR Congo",
    "East Germany (GDR)",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "England",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Eswatini",
    "Ethiopia",
    "Falkland Islands",
    "Faroe Islands",
    "Federated States of Micronesia",
    "Fiji",
    "Finland",
    "France",
    "French Guiana",
    "Gabon",
    "Georgia",
    "Germany",
    "Ghana",
    "Gibraltar",
    "Greece",
    "Greenland",
    "Grenada",
    "Guadeloupe",
    "Guam",
    "Guatemala",
    "Guernsey",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Haiti",
    "Honduras",
    "Hongkong",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland",
    "Isle of Man",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jersey",
    "Jordan",
    "Jugoslawien (SFR)",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Korea, North",
    "Korea, South",
    "Kosovo",
    "Kuwait",
    "Kyrgyzstan",
    "Laos",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Macao",
    "Macedonia",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands",
    "Martinique",
    "Mauritania",
    "Mauritius",
    "Mayotte",
    "Mexico",
    "Moldova",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Montserrat",
    "Morocco",
    "Mozambique",
    "Myanmar",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands",
    "Netherlands Antilles",
    "Netherlands East India",
    "Neukaledonien",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "Niue",
    "North Macedonia",
    "Northern Ireland",
    "Northern Mariana Islands",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "People's republic of the Congo",
    "Peru",
    "Philippines",
    "Poland",
    "Portugal",
    "Puerto Rico",
    "Qatar",
    "Réunion",
    "Romania",
    "Russia",
    "Rwanda",
    "Saarland",
    "Saint-Martin",
    "Samoa",
    "San Marino",
    "Sao Tome and Principe",
    "Saudi Arabia",
    "Scotland",
    "Senegal",
    "Serbia",
    "Serbia and Montenegro",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Sint Maarten",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "Southern Sudan",
    "Spain",
    "Sri Lanka",
    "St. Kitts & Nevis",
    "St. Lucia",
    "St. Vincent & Grenadinen",
    "Sudan",
    "Suriname",
    "Swaziland",
    "Sweden",
    "Switzerland",
    "Syria",
    "Tahiti",
    "Tajikistan",
    "Tanzania",
    "Thailand",
    "The Gambia",
    "Tibet",
    "Timor-Leste",
    "Togo",
    "Tonga",
    "Trinidad and Tobago",
    "Tunisia",
    "Türkiye",
    "Turkmenistan",
    "Turks- and Caicosinseln",
    "Tuvalu",
    "UdSSR",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "United States",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Vatican",
    "Venezuela",
    "Vietnam",
    "Wales",
    "Western Sahara",
    "Yemen",
    "Yugoslavia (Republic)",
    "Zaire",
    "Zambia",
    "Zanzibar",
    "Zimbabwe",
  ];

  const filteredCountries = countries.filter((country) =>
    country.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const filteredCompetitions = competitionsNames.filter((competition) =>
    competition.name.toLowerCase().includes(searchCompetitionTerm.toLowerCase())
  );
  const filteredClubs = clubs?.filter((club) =>
    club.name.toLowerCase().includes(searchClubTerm.toLowerCase())
  );
  const filteredPlayers = players?.filter((player) =>
    player.name.toLowerCase().includes(searchPlayerTerm.toLowerCase())
  );
console.log(players);
console.log(clubs);

  const toggleDropdown = () => {
    setIsCountryOpen(!isCountryOpen);
    setIsCompetitionOpen(false);
    setIsClubsOpen(false);
    setIsPlayerOpen(false);
  };

  const handleCountrySelect = (country: string) => {
    setSelectedCountry(country);
    setIsCountryOpen(false);
    setSearchTerm("");
    setSelectedCompetition("Competition");
    setTimeout(() => setIsCompetitionOpen(true), 2000);
  };
  const handleCompetitionSelect = (competition: string) => {
    setSelectedCompetition(competition);

    setIsCompetitionOpen(false);
    setSearchCompetitionTerm("");
    setSelectedClub("Club");
    setTimeout(() => setIsClubsOpen(true), 2000);
  };
  const handleClubSelect = (club: string) => {
    setSelectedClub(club);
    setIsClubsOpen(false);
    setSearchClubTerm("");
    setTimeout(() => setIsPlayerOpen(true), 2000);
  };
  const handlePlayersSelect = (player: string) => {
    setSelectedPlayer(player);
    console.log(player);
    setIsPlayerOpen(false);
    setSearchPlayerTerm("");
    setPlayerId(player.id);
  };

  return (
    <div className="bg-[#fff] h-[55px] p-[10px] hidden sm:flex">
      <div className="flex gap-[18px] item-center">
        <button
          className="h-[35px] w-[35px] bg-[#e9e9e9] flex justify-center items-center"
          onClick={() => navigate(`/`)}
        >
          <ImHome className="text-[#00193f] text-[20px]" />
        </button>
        <div className="flex relative">
          <div className="bg-[#00193f] h-[35px] w-[35px] text-[#fff] flex justify-center items-center">
            <img src={flag} alt="player" />
          </div>
          {/* Dropdown Component */}
          <div
            onClick={toggleDropdown}
            className="text-[#1A3151] font-bold text-[12px] bg-[#F2F2F2] h-[35px] p-[10px] flex justify-center items-center cursor-pointer"
          >
            {selectedCountry}
            <div className="pl-1">
              {isCountryOpen ? (
                <BiSolidUpArrow className="text-[hsl(0,0%,83%)] text-[10px]" />
              ) : (
                <BiSolidDownArrow className="text-[hsl(0,0%,83%)] text-[10px]" />
              )}
            </div>
          </div>
          {isCountryOpen && (
            <div className="absolute top-[40px] left-0 bg-white shadow-lg  border-[1px] border-black z-50 w-[225px]">
              <div className="relative p-[5px]">
                <IoSearch className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 text-[12px] font-bold" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-2  border-[1.5px] border-[#0EB1EE] rounded-md text-[12px] focus:outline-none focus:ring-[0.2px] focus:ring-[#0EB1EE]"
                />
              </div>
              <ul className="max-h-[225px] overflow-y-scroll scrollbar-hidden">
                {filteredCountries.length > 0 ? (
                  filteredCountries.map((country) => (
                    <li
                      key={country}
                      onClick={() => handleCountrySelect(country)}
                      className={`py-[1px] m-[5px] pl-[8px] hover:bg-[#00193f] hover:text-white text-[14px] text-[hsl(196,89%,30%)] cursor-pointer`}
                    >
                      {country}
                    </li>
                  ))
                ) : (
                  <li className="p-[10px] text-gray-500 text-[12px]">
                    No countries found
                  </li>
                )}
              </ul>
            </div>
          )}
          <button
            className="bg-[#DDDDDD] h-[35px] w-[25px] flex justify-center items-center text-[18px] text-[#0EB1EE] hover:bg-[#0EB1EE] hover:text-[#DDDDDD]"
            onClick={() => {
              navigate(`/SearchPage?query=${selectedCountry}`);
              setIsCountryOpen(false);
              setIsCompetitionOpen(false);
              setIsClubsOpen(false);
              setIsPlayerOpen(false);
            }}
            disabled={selectedCountry === "Country"}
          >
            <RxDoubleArrowRight />
          </button>
        </div>
        <div
          className={`flex relative ${
            selectedCountry === "Country" && "opacity-50"
          }`}
        >
          <div
            className={`bg-[#00193f] h-[35px] w-[35px] text-[#fff] flex justify-center items-center`}
          >
            <img src={cup} alt="player" />
          </div>
          <div
            onClick={() => {
              if (selectedCountry !== "Country") {
                setIsCompetitionOpen((prev) => !prev);
              }
              setIsCountryOpen(false);
              setIsClubsOpen(false);
              setIsPlayerOpen(false);
            }}
            className={`text-[#1A3151] font-bold text-[12px] bg-[#F2F2F2] h-[35px] p-[10px] flex justify-center items-center ${
              selectedCountry !== "Country"
                ? "cursor-pointer"
                : "cursor-default"
            }`}
          >
            {selectedCompetition}
            <div className="pl-1">
              {isCompetitionOpen ? (
                <BiSolidUpArrow className="text-[hsl(0,0%,83%)] text-[10px]" />
              ) : (
                <BiSolidDownArrow className="text-[hsl(0,0%,83%)] text-[10px]" />
              )}
            </div>
          </div>
          {isCompetitionOpen && (
            <div className="absolute top-[40px] left-0 bg-white shadow-lg  border-[1px] border-black z-50 w-[225px]">
              {/* Search Input */}
              <div className="relative p-[5px]">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-2  border-[1.5px] border-[#0EB1EE] rounded-md text-[12px] focus:outline-none focus:ring-[0.2px] focus:ring-[#0EB1EE]"
                />
              </div>

              {/* Country List */}
              <ul className="max-h-[225px] overflow-y-scroll scrollbar-hidden">
                {filteredCompetitions.length > 0 ? (
                  filteredCompetitions.map((competition: competitionsNames) => (
                    <li
                      key={competition.id}
                      onClick={() => {
                        handleClick(competition);
                      }}
                      className={`py-[1px] m-[5px] pl-[8px] hover:bg-[#00193f] hover:text-white text-[14px] text-[hsl(196,89%,30%)] cursor-pointer`}
                    >
                      {competition.name}
                    </li>
                  ))
                ) : (
                  <li className="p-[10px] text-gray-500 text-[12px]">
                    No competitions found
                  </li>
                )}
              </ul>
            </div>
          )}
          <button
            className={`bg-[#DDDDDD] h-[35px] w-[25px] flex justify-center items-center text-[18px] text-[#0EB1EE]  ${
              selectedCountry !== "Country"
                ? "hover:bg-[#0EB1EE] hover:text-[#DDDDDD] cursor-pointer"
                : "cursor-default"
            } `}
            onClick={() => {
              navigate(`/competitionProfile/${competitionId}/overview/2024`);
              setIsCountryOpen(false);
              setIsCompetitionOpen(false);
              setIsClubsOpen(false);
              setIsPlayerOpen(false);
            }}
            disabled={selectedCompetition === "Competition"}
          >
            <RxDoubleArrowRight />
          </button>
        </div>
        <div
          className={`flex relative ${
            selectedCompetition === "Competition" && "opacity-50"
          }`}
        >
          <div className="bg-[#00193f] h-[35px] w-[35px] text-[#fff] flex justify-center items-center">
            <FaTshirt />
          </div>
          <div
            onClick={() => {
              if (selectedCompetition !== "Competition") {
                setIsClubsOpen((prev) => !prev);
              }
              setIsCountryOpen(false);
              setIsCompetitionOpen(false);
              setIsPlayerOpen(false);
            }}
            className={`text-[#1A3151] font-bold text-[12px] bg-[#F2F2F2] h-[35px] p-[10px] flex justify-center items-center ${
              selectedCompetition !== "Competition"
                ? "cursor-pointer"
                : "cursor-default"
            }`}
          >
            {selectedClub}
            <div className="pl-1">
              {isClubsOpen ? (
                <BiSolidUpArrow className="text-[hsl(0,0%,83%)] text-[10px]" />
              ) : (
                <BiSolidDownArrow className="text-[hsl(0,0%,83%)] text-[10px]" />
              )}
            </div>
          </div>
          {isClubsOpen && (
            <div className="absolute top-[40px] left-0 bg-white shadow-lg  border-[1px] border-black z-50 w-[225px]">
              {/* Search Input */}
              <div className="relative p-[5px]">
                <IoSearch className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 text-[12px] font-bold" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-2  border-[1.5px] border-[#0EB1EE] rounded-md text-[12px] focus:outline-none focus:ring-[0.2px] focus:ring-[#0EB1EE]"
                />
              </div>

              {/* Country List */}
              <ul className="max-h-[225px] overflow-y-scroll scrollbar-hidden">
                {filteredClubs.length > 0 ? (
                  filteredClubs.map((club) => (
                    <li
                      key={club.id}
                      onClick={() => handleClubClick(club)}
                      className={`py-[1px] m-[5px] pl-[8px] hover:bg-[#00193f] hover:text-white text-[14px] text-[hsl(196,89%,30%)] cursor-pointer`}
                    >
                      {club.name}
                    </li>
                  ))
                ) : (
                  <li className="p-[10px] text-gray-500 text-[12px]">
                    No clubs found
                  </li>
                )}
              </ul>
            </div>
          )}
          <button
            className={`bg-[#DDDDDD] h-[35px] w-[25px] flex justify-center items-center text-[18px] text-[#0EB1EE]  ${
              selectedCompetition !== "Competition"
                ? "hover:bg-[#0EB1EE] hover:text-[#DDDDDD] cursor-pointer"
                : "cursor-default"
            } `}
            onClick={() => {
              navigate(`/clubProfile/${clubId}/overview/2024`);
              setIsCountryOpen(false);
              setIsCompetitionOpen(false);
              setIsClubsOpen(false);
              setIsPlayerOpen(false);
            }}
            disabled={selectedClub === "Club"}
          >
            <RxDoubleArrowRight />
          </button>
        </div>
        <div
          className={`flex relative ${selectedClub === "Club" && "opacity-50"}`}
        >
          <div className="bg-[#00193f] h-[35px] w-[35px] text-[#fff] flex justify-center items-center">
            <img src={player} alt="player" />
          </div>
          <div
            onClick={() => {
              if (selectedClub !== "Club") {
                setIsPlayerOpen((prev) => !prev);
              }
              setIsCountryOpen(false);
              setIsCompetitionOpen(false);
              setIsClubsOpen(false);
            }}
            className={`text-[#1A3151] font-bold text-[12px] bg-[#F2F2F2] h-[35px] p-[10px] flex justify-center items-center ${
              selectedClub !== "Club" ? "cursor-pointer" : "cursor-default"
            }`}
          >
            {selectedPlayer.name ? selectedPlayer.name : "Player"}
            <div className="pl-1">
              {isPlayerOpen ? (
                <BiSolidUpArrow className="text-[hsl(0,0%,83%)] text-[10px]" />
              ) : (
                <BiSolidDownArrow className="text-[hsl(0,0%,83%)] text-[10px]" />
              )}
            </div>
          </div>
          {isPlayerOpen && (
            <div className="absolute top-[40px] left-0 bg-white shadow-lg  border-[1px] border-black z-50 w-[225px]">
              {/* Search Input */}
              <div className="relative p-[5px]">
                <IoSearch className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 text-[12px] font-bold" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-2  border-[1.5px] border-[#0EB1EE] rounded-md text-[12px] focus:outline-none focus:ring-[0.2px] focus:ring-[#0EB1EE]"
                />
              </div>

              {/* Country List */}
              <ul className="max-h-[225px] overflow-y-scroll scrollbar-hidden">
                {filteredPlayers.length > 0 ? (
                  filteredPlayers.map((player) => (
                    <li
                      key={player.id}
                      onClick={() => handlePlayersSelect(player)}
                      className={`py-[1px] m-[5px] pl-[8px] hover:bg-[#00193f] hover:text-white text-[14px] text-[hsl(196,89%,30%)] cursor-pointer`}
                    >
                      {player.name}
                    </li>
                  ))
                ) : (
                  <li className="p-[10px] text-gray-500 text-[12px]">
                    No players found
                  </li>
                )}
              </ul>
            </div>
          )}
          <button
            className={`bg-[#DDDDDD] h-[35px] w-[25px] flex justify-center items-center text-[18px] text-[#0EB1EE]  ${
              selectedClub !== "Club"
                ? "hover:bg-[#0EB1EE] hover:text-[#DDDDDD] cursor-pointer"
                : "cursor-default"
            } `}
            onClick={() => {
              navigate(`/playerProfile/${playerId}/profile`);
              setIsCountryOpen(false);
              setIsCompetitionOpen(false);
              setIsClubsOpen(false);
              setIsPlayerOpen(false);
            }}
            disabled={selectedPlayer === "Player"}
          >
            <RxDoubleArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
