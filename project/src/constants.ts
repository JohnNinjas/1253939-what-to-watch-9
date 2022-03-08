export enum AppRoutes {
  Main=  '/',
  SignIn = '/login',
  MyList = '/mylist',
  Films = '/films',
  FilmOverview = ':id/overview',
  FilmDetails = ':id/details',
  FilmReviews = ':id/reviews',
  AddReview = ':id/addreview',
  Player = '/player/:id',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const ONE_SECOND_IN_MILLISECONDS = 1000;

export enum TabNames {
  Overview = '/overview',
  Details = '/details',
  Reviews = '/reviews',
}
