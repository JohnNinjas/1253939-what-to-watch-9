export enum AppRoutes {
  Main=  '/',
  SignIn = '/login',
  MyList = '/mylist',
  Film = '/films/:id',
  AddReview = '/films/:id/addreview',
  Player = '/player/:id',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const ONE_SECOND_IN_MILLISECONDS = 1000;
export const FILMS_COUNT = 8;
export const ALL_GENRES_TITLE = 'All genres';
export const TIMEOUT_SHOW_ERROR = 2000;

export enum TabNames {
  Overview = '#overview',
  Details = '#details',
  Reviews = '#reviews',
}

export enum APIRoute {
  Films = '/films',
  Promo = '/promo',
}

export enum HTTP_CODE {
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  NOT_FOUND = 404,
}
