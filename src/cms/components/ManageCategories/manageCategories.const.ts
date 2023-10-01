import { categoriesArrayList } from "../../baseComponents/TableCategories";
export const categoriesBodyList: categoriesArrayList = {
  categoriesInformation: [
    {
      id: Math.random() * 100,
      categorieName: "Marketing",
      subCategoriesArray: [
        {
          id: Math.random() * 100,
          subCategorieName: "Open house",
          interiorSubCategorieArray: [
            {
              id: Math.random() * 100,
              interiorSubCategorieName: "Postcards",
            },
            {
              id: Math.random() * 100,
              interiorSubCategorieName: "Holiday Postcards",
            },
            {
              id: Math.random() * 100,
              interiorSubCategorieName: "New Story Documents",
            },
          ],
        },
      ],
    },
    {
        id: Math.random() * 100,
        categorieName: "Postcards",
        subCategoriesArray: [
          {
            id: Math.random() * 100,
            subCategorieName: "Propecting",
            interiorSubCategorieArray: [
              {
                id: Math.random() * 100,
                interiorSubCategorieName: "Attraction Material",
              },
              {
                id: Math.random() * 100,
                interiorSubCategorieName: "Open House Resources",
              },
              {
                id: Math.random() * 100,
                interiorSubCategorieName: "Consumer Facing",
              },
            ],
          },
        ],
      },
      {
        id: Math.random() * 100,
        categorieName: "Products",
        subCategoriesArray: [
          {
            id: Math.random() * 100,
            subCategorieName: "Helpful Documents",
            interiorSubCategorieArray: [
              {
                id: Math.random() * 100,
                interiorSubCategorieName: "Attraction Material",
              },
              {
                id: Math.random() * 100,
                interiorSubCategorieName: "Open House Resources",
              },
              {
                id: Math.random() * 100,
                interiorSubCategorieName: "Consumer Facing",
              },
            ],
          },
        ],
      },
      {
        id: Math.random() * 100,
        categorieName: "Social media",
        subCategoriesArray: [
          {
            id: Math.random() * 100,
            subCategorieName: "Postcards",
            interiorSubCategorieArray: [
              {
                id: Math.random() * 100,
                interiorSubCategorieName: 'Open house',
              },
              {
                id: Math.random() * 100,
                interiorSubCategorieName: "Open House Resources",
              },
              {
                id: Math.random() * 100,
                interiorSubCategorieName: "Consumer Facing",
              },
            ],
          },
        ],
      },
  ],
};
