// Generated by https://quicktype.io

export interface ProductsDBResponse {
  id:          number;
  title:       string;
  price:       number;
  description: string;
  category:    Category;
  image:       string;
}

export enum Category {
  Electronics = "electronics",
  Jewelery = "jewelery",
  MenSClothing = "men's clothing",
  WomenSClothing = "women's clothing",
}
