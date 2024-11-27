export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'e-liquids' | 'devices' | 'accessories';
}

export interface NavItem {
  title: string;
  href: string;
  image?: string;
  description?: string;
}