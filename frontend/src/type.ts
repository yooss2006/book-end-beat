export type BookAPIData = {
  authors: string[];
  contents: string;
  datetime: string;
  isbn: string;
  price: number;
  publisher: string;
  sale_price: number;
  status: string;
  thumbnail: string;
  title: string;
  translators: string[];
  url: string;
};

export type BookFilterData = {
  authors: string[];
  isbn: string;
  publisher: string;
  thumbnail: string;
  title: string;
};
