export const addressLabels = ["Home", "Work", "Office", "Other"] as const; 

export type AddressLabel = typeof addressLabels[number];

export type CompleteAddress = {
    houseNo: string,
    floor?: number,
    tower?: string,
    street: string,
    nearbyLandmark?: string,
    city: string,
    state: string,
    pinCode: number
}

export type Address = {
    addressLabel: AddressLabel,
    addressValue: CompleteAddress
}