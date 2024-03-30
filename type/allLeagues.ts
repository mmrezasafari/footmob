type LeagueTemplate = {
  code: string;
  leagues: Array<League>;
  localizedName: string;
  name: string;
};

type League = {
  id: number;
  localizedName: string;
  name: string;
  pageUrl: string;
};

type AllLeagues = {
  countries: Array<LeagueTemplate>;
  favourite: null;
  international: Array<LeagueTemplate>;
  popular: Array<League>;
  userSettings: null;
};
