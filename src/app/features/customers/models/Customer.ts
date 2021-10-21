export interface Customer {
    id: number
    details: Details
}

interface Details {
    name: string,
    address_line_1: string,
    address_line_2: string,
    city: string,
    state: string,
    postal: string,
    country: string
}
