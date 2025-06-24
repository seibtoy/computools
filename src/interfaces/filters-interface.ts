export interface FiltersData {
  [category: string]: {
    [key: string]: (string | number)[];
  };
}
