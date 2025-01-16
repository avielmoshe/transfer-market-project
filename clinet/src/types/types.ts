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

export interface gameListData {
  clubName: string;
  id: string;
  playClubMatches: Array<any>;
  seasonID: string;
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
  suspension: string;
  captain: string;
  injury: {
    description: string;
    until: string;
  };
  marketValue: {
    currency: string;
    value: number;
  };
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
export type achievementData = {
  playerAchievements: Array<any>;
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
    leagueID: string;
    name: string;
  };
}

export type clubsDataFromCom = {
  clubs: Array<any>;
};
interface TableRow {
  id: string; // Unique identifier for the club
  clubName: string; // Name of the club
  clubImage: string; // URL of the club's image
  matches: number; // Total number of matches played
  wins: number; // Total number of wins
  draw: number; // Total number of draws
  losses: number; // Total number of losses
  goals: number; // Total goals scored
  goalsConceded: number; // Total goals conceded
  goalDifference: number; // Difference between goals scored and conceded
  points: number; // Total points
  rank: number; // Current rank of the club
  oldRank: number; // Previous rank
  markClass: string; // Class name for marking
  markColor: string; // Color code for marking
  markDescription: string; // Description of the marking
  markID: string; // ID for the marking
  group: string | null;
}

export interface TableData {
  table: TableRow[];
}

export type SquadFromClub = {
  squad: Array<any>;
};
export interface SuccessData {
  number: string; // Assuming the number is a string (e.g., '9', '6', etc.)
  name: string; // The name of the achievement
  id: string; // Assuming the id is a string
  additionalData: Record<string, any>; // Placeholder for the structure of additionalData
}
export interface PlayerProfileInfo {
  playerProfile: PlayerProfile;
}

export interface PlayerProfile {
  playerID: string;
  playerImage: string;
  playerName: string;
  playerFullName: string;
  birthplace: string;
  dateOfBirth: string;
  dateOfDeath: string | null;
  playerShirtNumber: string;
  birthplaceCountry: string;
  birthplaceCountryImage: string;
  age: string;
  height: string;
  foot: string;
  internationalTeam: string;
  internationalTeamImage: string;
  internationalTeamStatus: string;
  internationalGames: string;
  internationalGoals: string;
  internationalTeamShortTag: string;
  internationalShirtNumber: string;
  internationalWmMember: boolean;
  internationalValueRank: number;
  country: string;
  countrynameEN: string;
  countryImage: string;
  countryShortName: string;
  secondCountry: string;
  secondCountryImage: string;
  league: string;
  leaguenameEN: string;
  leagueLogo: string;
  clubImage: string;
  club: string;
  clubnameEN: string;
  clubID: string;
  loan: {
    loan: string;
    loanStart: string;
    loanUntil: string;
  };
  contractOptions: string;
  ownerName: string;
  ownerID: string;
  ownerImage: string;
  ownerContractUntil: string;
  contractExpiryDate: string;
  agent: string;
  agentId: string;
  agentVerificationStatus: string;
  agentVerificationDate: number;
  outfitter: string;
  positionGroup: string;
  playerMainPosition: string;
  playerSecondPosition: string;
  playerThirdPosition: string;
  marketValue: string;
  marketValueCurrency: string;
  marketValueNumeral: string;
  marketValueLastChange: string;
  relatedness?: unknown; // Specify the type if you have details about relatedness
  injury: {
    id: string;
    title: string;
    until: string;
    rehabilitationFlag: string;
  };
  absence: {
    id: string;
    title: string;
    until: string;
    competitionID: string;
    matches: string;
  };
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
  num?: string;
}

interface NavCategory {
  name: string;
  onClick: () => void;
}

interface NavCategory {
  name: string;
  onClick: () => void;
}
interface LegendItem {
  // Define the properties of each item in the `legend` array
  // Example: Replace `key` and `value` with the actual property names and types
  key: string;
  value: string;
}

interface Share {
  title: string;
  url: string;
  description: string;
}

interface TableItem {
  // Define the properties of each item in the `table` array
  // Example: Replace `id` and `name` with the actual property names and types
  id: string;
  name: string;
  [key: string]: any; // Additional dynamic properties if needed
}

export interface DataStructure {
  legend: LegendItem[];
  share: Share;
  table: TableItem[];
}

export interface DataForNavSearch extends Array<NavCategory> {}

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

interface ResultObject {
  result: string; // "1:0"
  goalsHome: string; // "1"
  goalsAway: string; // "0"
  minute: number; // 0
  state: string; // "100"
  destinationValue: number; // 2
  destinationDescription: string; // "Spielbericht"
}

interface PlayDayMatch {
  id: string; // "4361460"
  scoreradarID: string | null; // יכול להיות null
  competitionID: string; // "GB1"
  competitionName: string; // "Premier League"
  competitionImage: string; // URL לתמונת לוגו
  tournamentFlag: string; // "0"
  round: string; // ""
  group: string; // ""
  matchDay: string; // "15"
  matchDate: string; // "Dec 7, 2024"
  fullMatchDate: string; // "Saturday, December 7, 2024"
  matchTime: string; // "4:00 PM"
  timestamp: number; // 1733583600
  homeClubID: string; // "405"
  homeClubName: string; // "Aston Villa"
  homeClubImage: string; // URL לתמונת הקבוצה הביתית
  awayClubID: string; // "180"
  awayClubName: string; // "Southampton"
  awayClubImage: string; // URL לתמונת הקבוצה האורחת
  result: string; // "1:0"
  postponed: boolean; // false
  nextRound: string; // ""
  resultObject: ResultObject; // אובייקט תוצאה
}

export interface GameListData {
  playDayMatches: PlayDayMatch[]; // מערך משחקים של היום
}

interface GamePlanPlayDay {
  id: string; // The unique identifier of the play day
  name: string; // The name of the play day (e.g., "1.", "2.", etc.)
  description: string; // A description of the play day (e.g., "1.Spieltag")
  dateString: string; // The date range as a string (e.g., "12.09.20 - 20.01.21")
}
export interface GamePlanData {
  gamePlanPlayDays: GamePlanPlayDay[]; // Array of play days
}
