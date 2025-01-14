export interface userLogin {
  username: string;
  password: string;
}

export interface User {
  firstName: string;
  lastName: string;
  username: string;
  phone: string;
  email: string;
  password?: string;
}

export interface players {
  alias: string;
  club: string;
  firstName: string;
  id: string;
  lastName: string;
  nationImage: string;
  playerImage: string;
  playerName: string;
}

export interface clubs {
  competitionID: string;
  competitionName: string;
  league: string;
  id: string;
  logoImage: string;
  name: string;
}
export interface coaches {
  club: string;
  coachImage: string;
  coachName: string;
  currentFunction: string;
  firstName: string;
  id: string;
  lastName: string;
  nationImage: string;
}
export interface referees {
  club: string;
  firstName: string;
  id: string;
  lastName: string;
  nationImage: string;
  refereeImage: string;
  refereeName: string;
}
export interface competitions {
  competitionImage: string;
  competitionName: string;
  country: string;
  countryImage: string;
  id: string;
}

export interface count {
  clubs: string;
  coaches: string;
  competitions: string;
  players: string;
  referees: string;
}

export interface DataType {
  players: Array<players>;
  clubs: Array<clubs>;
  coaches: Array<coaches>;
  count: count;
  referees: Array<referees>;
  competitions: Array<competitions>;
}

export type HeroData = {
  heroImages: Array<any>;
  performanceSeasons: Array<any>;
  playerProfile: any;
  share: any; // Specify a more precise type if possible
};
export interface ClubData {
  club: {
    countryImage: string;
    marketValueCurrency: string;
    marketValue: string;
    marketValueNumeral: string;
    clubnameEN: string;
    image: string;
    leagueImage: string;
    leagueLevel: string;
    rank: string;
    coachName: string;
    leagueName: string;
  };
}

export type clubsDataFromCom = {
  clubs: Array<any>;
};

export type SquadFromClub = {
  squad: Array<any>;
};
export interface SuccessData {
  number: string; // Assuming the number is a string (e.g., '9', '6', etc.)
  name: string; // The name of the achievement
  id: string; // Assuming the id is a string
  additionalData: Record<string, any>; // Placeholder for the structure of additionalData
}

export interface DataForHeader {
  type: string;
  title: string;
  frontImg: string;
  secondImg: string;
  secondTitle: string;
  marketValue: string;
  firstData: Array<Record<string, string | number | null>>;
  secondData: Array<Record<string, string | number | null>>;
  thirdData: Array<Record<string, string>>;
  successesData?: SuccessData[];
}

export interface DataForNavSearch extends Array<string> {}

export interface ClubProfile {
  additionalTeams: Array<Record<string, any>>; // Array of objects with unknown structure
  historicImages: string[]; // Array of image URLs as strings
  internationalTeamFlag: string; // A string, potentially empty
  mainFacts: {
    id: string;
    fullName: string;
    street: string;
    postalCode: string;
    city: string;
    [key: string]: any; // Optional for additional unknown properties
  };
  share: {
    title: string;
    url: string;
    description: string;
  };
  stadium: {
    id: string;
    name: string;
    street: string;
    postalCode: string;
    city: string;
    [key: string]: any; // Optional for additional unknown properties
  };
  successes: SuccessData[]; // Optional property for successes, if it exists
}
