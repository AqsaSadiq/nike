export interface Product {
    id: string;
    name: string;
    price: number;
    category: string;
    imageUrl: string;
    description: string;
    sizes: string[];
    colors: string[];
    gender?: string;  
    kids?: string;  
    priceRange?: string; 
    sale?: string;
  }