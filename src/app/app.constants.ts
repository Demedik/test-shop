export enum ThirdPartyUrls {
  EFUKTSHIRTS = 'https://efuktshirts.com',
}

export enum CategoriesENUM {
  EFUKTSHIRTS = 'efuktshirts'
}

export interface IProductVariant     {
  id: number;
  title: string;
  option1: string | null;
  option2: string | null;
  option3: string | null;
  sku: string;
  requires_shipping: boolean;
  taxable: boolean;
  featured_image: string | null;
  available: boolean;
  price: string;
  grams: number;
  compare_at_price: string | null;
  position: number;
  product_id: number;
  created_at: string;
  updated_at: string;
}

export interface IProductImage {
  id: number;
  created_at: string;
  position: number;
  updated_at: string;
  product_id: number;
  variant_ids: any[];
  src: string;
  width: number;
  height: number;
}

export interface IProductOption {
  name: string;
  position: number;
  values: string[];
}

export interface IProduct {
  id: number;
  title: string;
  handle: string;
  body_html: string;
  published_at: string;
  created_at: string;
  updated_at: string;
  vendor: string;
  product_type: string;
  tags: string[];
  variants: IProductVariant[],
  images: IProductImage[],
  options: IProductOption[]
}

export enum SelectOptionsEnum {
  AZ = 'AZ',
  ZA = 'ZA',
  HP = 'HP',
  LP = 'LP'
}
