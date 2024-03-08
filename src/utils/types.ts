export interface CategoryType {
  Id: number;
  Name: string;
  IsAuthorize?: number;
  Update080819: number;
  Update130919: number;
  SubCategories?: SubCategoryType[];
}

export interface SubCategoryType {
  Id: number;
  Name: string;
  Product: ProductType[];
}

export interface ProductType {
  Name: string;
  PriceCode: string;
  ImageName: string;
  Id: number;
}
