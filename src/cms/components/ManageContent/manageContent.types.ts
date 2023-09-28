export interface manageContent {
  title: string;
  categoryName: string;
  categoryId?: string;
  unLocked?: boolean;
}

export interface categoriesTypes {
  categorie: string;
  subCategorie: string;
  interiorSubCategorie: string;
}

export interface filterContainFields {
  filterContainBy: string;
  searchByTitleFilter: string;
}
