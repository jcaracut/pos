export interface User {
    user: Detail,
    token: string
}

export interface Detail {
    details: UserDetail
}

interface UserDetail {
    email: string,
    status: string,
    profile: UserProfile,
    empCard: UserEmployeeCard
}

interface UserProfile {
    name: string,
    address_line_1: string,
    address_line_2: string,
    city: string,
    state: string,
    postal: string,
    country: string
}

interface UserEmployeeCard {
    date_hired: Date,
    role: string,
    is_owner: number
}


