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
export interface Transfer {
  id: string;
  playerName: string;
  playerImage: string;
  position: string;
  positionsdetail?: string;
  age: number;
  clubName: string;
  clubImage: string;
  countryImage: string;
  transferFee: string;
  loan: string;
  transferFeeUnformatted: string;
  clubID: string;
}

export interface CurrentSeason {
  transferArrivals: Transfer[];
  transferDepartures: Transfer[];
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
    id:string
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
  clubs: Array<{ id: string;
    image: string;
    name: string;}>;
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

export interface AdditionalData {
  clubID: string;
  competitionID: string;
  competitionTypeID: string;
  countryID: string | null;
  cycle: string;
  seasonID: string;
  type: string;
}

export interface Achievement {
  achievementID: string;
  additionalData: AdditionalData[];
  title: string;
  value: string;
}

export interface Achievements {
  achievements: Achievement[];
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
  id:string
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
export interface NewsByCompetition {
  news: Array<NewsItem>;
  share: {
    title: string;
  };
}
interface MarketValue {
  value: string;
  currency: string;
  numeral: string;
  progression?: any; // Could be a specific type if details are available
  unformatted?: any; // Could be a specific type if details are available
}

interface TransferExpenditure {
  value: string;
  currency: string;
  numeral: string;
}

interface ClubComparison {
  id: string;
  name: string;
  fullName?: string;
  image: string;
  nationalTeam?: any; // Could be a specific type if details are available
  mainCompetition: {
    id: string;
    image: string;
    isTournament?: any; // Could be a specific type if details are available
    leagueLevel: string;
    name: string;
    shortName?: string;
  };
  coachName: string;
  flag?: any; // Could be a specific type if details are available
  marketValue: MarketValue;
  transferExpenditure: TransferExpenditure;
}

interface CustomLinkBox {
  headline: string;
  url: string;
  text: string;
}

interface GalleryImage {
  url: string;
  caption?: string;
}

interface Gallery {
  id: string;
  url: string;
  title: string;
  images: GalleryImage[];
}

interface PlayerPerformance {
  player: {
    id: string;
    name: string;
    position: string;
    image: string;
  };
  club: {
    id: string;
    name: string;
    image: string;
  };
  competition: {
    id: string;
    name: string;
    image: string;
  };
  performance: {
    games: number;
    goals: number;
    assists: number;
  };
  season: {
    id: string;
    name: string;
  };
}

export interface NewsData {
  adFlag: string;
  author: string;
  categoryID: string;
  categoryTag: string;
  categoryTagEN: string;
  countReplies: number | null;
  firstImage: string;
  headline: string;
  heroImage: string;
  heroImageSource: string;
  id: string;
  secondImage: string;
  source: string;
  text: Record<string, string>; // Keys like text-0, text-1
  threadUrl: string;
  timestamp: number;
  timestamp_updated: number;
  trackingCompetitions: string;
  transferFlag: string;
  updateFlag: string;
  widgetData: {
    clubComparison_1934497067: ClubComparison[];
    customLinkBox_2029678016: CustomLinkBox;
    gallery_892040392: Gallery;
    playerPerformanceValueBox_19335831: PlayerPerformance;
    playerPerformanceValueBox_1170933375: PlayerPerformance;
  };
}

export interface NewsItem {
  fullNewsDate: string; // Full formatted date, e.g., "Friday, January 10, 2025"
  id: string; // Unique identifier for the news item
  newsAdFlag: string; // Ad flag, e.g., "0" (could use a boolean if appropriate)
  newsCategoryID: string; // ID for the news category
  newsCategoryTag: string; // Tag for the news category
  newsDate: string; // Date of the news in a shorter format, e.g., "Jan 10, 2025"
  newsFirstImage: string; // URL for the first news image
  newsHeadline: string; // Headline of the news article
  newsSecondImage: string; // URL for the second news image
  newsShortMessageFlag: string | null; // Short message flag, nullable
  newsSource: string; // Source of the news, e.g., "Transfermarkt"
  newsSpotlightFirstImage: string; // Spotlight first image URL (can be empty)
  newsSpotlightSecondImage: string; // Spotlight second image URL (can be empty)
  newsStartPageFlag: string | null; // Start page flag, nullable
  newsTeaser: string; // Teaser for the news article, e.g., "Announced"
  newsTickerFlag: string; // Ticker flag, e.g., "1" (could use a boolean if appropriate)
  newsTime: string; // Time of the news, e.g., "22:32"
  newsUpdateFlag: string; // Update flag, e.g., "1" (could use a boolean if appropriate)
  spotlightPriority: string; // Priority for spotlighting the news (can be empty)
  timestamp: number; // Unix timestamp, e.g., 1736544748
}
export interface news {
  news: NewsData;
}
export interface DataStructure {
  legend: LegendItem[];
  share: Share;
  table: TableItem[];
}
export interface BestCompetitions {
  defaultCompetitions: Array<defaultCompetitions>;
}
export interface defaultCompetitions {
  id: string;
  image: string;
  title: string;
}
export interface ClubsTransfers {
  currentSeason: {
    transferArrivals: Array<any>;
    transferDepartures: Array<any>;
  };
}
export interface historyTransfers {
  transferHistory: Array<TransferDetails>;
}

export interface PlayerMarket {
  share: {
    title: string;
  };
  marketValueDevelopment: Array<any>;
}
export interface TransferDetails {
  countryID: string; // The ID of the country
  countryImage: string; // URL for the country flag image
  date: string; // Date of the transfer
  loan: string; // Indicates if the transfer is a loan (e.g., "ist")
  newClubCountryImage: string; // URL for the new club's country flag image
  newClubCountryName: string; // Name of the new club's country
  newClubID: string; // The ID of the new club
  newClubImage: string; // URL for the new club's logo
  newClubName: string; // Name of the new club
  oldClubID: string; // The ID of the old club
  oldClubImage: string; // URL for the old club's logo
  oldClubName: string; // Name of the old club
  playerID: string; // The ID of the player
  playerImage: string; // URL for the player's image
  playerName: string; // Name of the player
  season: string; // The season during which the transfer occurred
  transferFeeCurrency: string; // Currency of the transfer fee
  transferFeeNumeral: string | number; // Numerical value of the transfer fee
  transferFeeValue: string | number; // Combined value of the transfer fee, can be empty
}
export interface PlayerTransfer {
  fromClubID: string; // The ID of the club the player is transferring from
  fromCompetitionID: string; // The ID of the competition the player is transferring from
  id: string; // Unique identifier for the transfer
  isLoan: boolean | null; // Indicates if the transfer is a loan
  playerID: string; // The ID of the player
  season: string; // The season of the transfer
  toClubID: string; // The ID of the club the player is transferring to
  toCompetitionID: string; // The ID of the competition the player is transferring to
  transferFee: {
    value: string | number; // Transfer fee value, can be '?' or a number
    currency: string; // Currency of the transfer fee
  };
  transferMarketValue: {
    value: number; // Market value of the player
    currency: string; // Currency of the market value
    progression: number | null; // Progression in market value
  };
  transferredAt: number; // Unix timestamp of the transfer date
  wasLoan: boolean | null; // Indicates if the player was previously on loan
}
export interface Transfers {
  player: Array<PlayerTransfer>;
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

interface Competition {
  id: string;
  name: string;
  shortName: string;
  image: string;
  leagueLevel: string | null;
  isTournament: boolean | null;
}

interface Performance {
  ownGoals: string;
  yellowCards: string;
  yellowRedCards: string;
  redCards: string;
  minutesPlayed: number;
  penaltyGoals: string;
  minutesPerGoal: number;
  matches: string;
  goals: string;
  assists: string;
  toNil: number;
  concededGoals: number;
  isGoalkeeper: boolean | null;
}

interface Club {
  id: string;
  name: string;
  fullName: string;
  image: string;
  nationalTeam: string;
  flag: string | null;
  marketValue: string | null;
  mainCompetition: string | null;
}

interface CompetitionPerformanceSummary {
  competition: Competition;
  performance: Performance;
  clubs: Club[];
}

export interface DeliveredSeason {
  deliveredSeasonID: string;
  competitionPerformanceSummery: CompetitionPerformanceSummary[];
}

export interface Player {
  clubID: string;
  clubName: string;
  clubShortName: string;
  clubImage: string;
  id: string;
  playerImage: string;
  playerName: string;
  firstName: string;
  lastName: string;
  alias: string;
  personID: string;
  currentPositionShort: string;
  currentPosition: string;
  mainPositionShort: string;
  mainPosition: string;
  secondaryPosition1Short: string;
  secondaryPosition1: string;
  secondaryPosition2Short: string;
  secondaryPosition2: string;
  age: string;
  birthday: string;
  marketValue: string;
  marketValueCurrency: string;
  marketValueNumeral: string;
  marketValueUnformatted: number;
  shirtNumber: string;
  countryImage: string;
}

export interface Players {
  players: Player[];
}

interface Team {
  number: number;
  id: string;
  countryName: string;
  countryImage: string;
  competitionID: string;
  competitionName: string;
  clubName: string;
  clubImage: string;
  avgAge: string;
  marketValue: string;
  marketValueCurrency: string;
  marketValueNumeral: string;
  marketValueUnformatted: number;
  progression: number;
}

export interface Teams {
  teams: Team[];
}

export interface NewsItem {
  id: string;
  newsHeadline: string;
  timestamp: number;
  newsSecondImage: string;
  newsDate: string;
  fullNewsDate: string;
  newsTime: string;
  newsSource: string;
  newsStartPageFlag: string | null;
  newsShortMessageFlag: string | null;
  newsTeaser: string;
  newsFirstImage: string;
  newsSpotlightFirstImage: string;
  newsSpotlightSecondImage: string;
  newsCategoryID: string;
  newsCategoryTag: string;
  newsTickerFlag: string;
  newsUpdateFlag: string;
  newsAdFlag: string;
}

export interface NewsItems {
  news: NewsItem[];
}

export interface TeamWorld {
  id: number;
  countryImage: string;
  countryName: string;
  totalPoints: number;
  confederation: string;
  rank: number;
}

export interface TeamsWorld {
  teams : TeamWorld[]
}
export interface TeamsWorldArr {
  teams : TeamsWorld[]
}

interface TeamFive {
  id: string;
  countryImage: string;
  countryName: string;
  totalPoints: number;
  points2024: number;
  points2023: number;
  points2022: number;
  points2021: number;
  points2020: number;
  totalTeams: number;
  teamsCl: number;
  teamsEl: number;
}

export interface TeamsFive {
  teams : TeamFive[]
}

interface BestPlayer {
  year: number;
  playerName: string;
  firstName: string;
  lastName: string;
  alias: string;
  clubID: string;
  clubName: string;
  clubImage: string;
  id: string;
  playerImage: string;
  mainPositionID: string;
  mainPosition: string;
  countryID: string;
  countryImage: string;
  ageAtThisTime: string;
  marketValueAtThisTime: string;
  marketValueAtThisTimeCurrency: string;
  marketValueAtThisTimeNumeral: string;
}

export interface BestPlayers {
  player : BestPlayer[]
}

interface PlayerStats {
  id: string;
  seasonID: string;
  clubID: string;
  matches: string;
  points: string;
  goals: string;
  goalsPerMatch: string;
  factor: string;
  cycle: string;
  competitionID: string;
  competitionCountryID: string;
  clubs: string;
  playerName: string;
  firstName: string;
  lastName: string;
  alias: string;
  playerAge: string;
  playerImage: string;
  mainPositionID: string;
  mainPosition: string;
  countryID: number;
  countryImage: string;
  clubName: string;
  clubImage: string;
}

export interface PlayersStats {
  player : PlayerStats[]
}


