import { Product } from "src/app/features/products/models/Product";
import { Customer } from "../features/customers/models/Customer";

export interface State {
    products: Product[],
    customers: Customer[],
}

export const initialState: State = {
    products: [],
    customers: [],
};