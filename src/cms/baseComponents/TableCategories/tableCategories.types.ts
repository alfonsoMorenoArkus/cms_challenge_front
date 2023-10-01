export interface categoriesBody {
  name: string;
  display: string;
}

export interface tableCategoriesProps {
  dataBody: categoriesBody[];
}

export interface interiorSubCategorie {
  id: number;
  interiorSubCategorieName: string;
}

export interface subCategorie {
  id: number;
  subCategorieName: string;
  interiorSubCategorieArray?: interiorSubCategorie[];
}

export interface categoriesList {
  id: number;
  categorieName: string;
  subCategoriesArray?: subCategorie[];
}

export interface categoriesArrayList {
  categoriesInformation: categoriesList[];
}
