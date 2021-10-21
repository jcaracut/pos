export interface Product {
    id: number,
    name: string,
    sku: number,
    avatar: string,
    description: string,
    short: string,
    srp_price: number,
    discounted_price: number,
    status: string,
    created_at: Date
}