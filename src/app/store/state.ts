import { Product } from "src/app/features/products/models/Product";

export interface State {
    products: Product[],
}

export const initialState: State = {
    products: [],
};