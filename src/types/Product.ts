
type typeProduct = 'ramo' | 'otro' | 'box'
export interface Product {
    [x: string]: any;
    id: string;
    nameProduct: string;
    extra?: string;
    price: number;
    images: string[];
    description: string;
    type: typeProduct
}