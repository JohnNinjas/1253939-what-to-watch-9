export type Film = {
  backgroundColor: string,
  backgroundImage: string
  description: string,
  director: string,
  runTime: number,
  genre: string,
  id: number,
  isFavorite: boolean,
  videoLink: string,
  posterImage: string,
  previewImage: string,
  previewVideoLink: string,
  rating: number,
  released: number,
  scoresCount: number,
  starring: string[],
  name: string,
};

export type Films = Film[];
