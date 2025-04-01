export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  discountedPrice?: number;
  currency: string;
  image: string;
  category: ProductCategory;
  region: string;
  weight: string;
  rating: number;
  labTested: boolean;
  seasonal: boolean;
  availabilityPeriod?: string;
  createdAt: string;
  properties?: {
    [key: string]: string;
  };
  stock: number;
}

export type ProductCategory = 
  | 'raw-honey'
  | 'specialty-honey'
  | 'herbal-honey'
  | 'gift-sets'
  | 'premium-honey';

export interface ProductFilter {
  category?: ProductCategory;
  region?: string;
  labTested?: boolean;
  seasonal?: boolean;
  priceRange?: {
    min: number;
    max: number;
  };
}
