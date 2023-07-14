import { Categorie } from "./categorie";

export class Image {
  id?:number;
  "title":string;
  "description":string;
  "image":File;
  "tags":string
  "categorie":Categorie;

}
