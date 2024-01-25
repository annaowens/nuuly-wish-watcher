export default interface SearchResponse {
    products: Product[]
    pagination: Pagination
    filterGroups: FilterGroup[]
    sortOptions: SortOption[]
    redirectUrl: string
    responseId: string
}

export interface Product {
    displayName: string
    productSlug: string
    images: string[]
    brand: string
    colorDisplayName: string
    choiceId: string
    colorCode: string
    sizeId: string
    sizeDisplayName: string
    skuCode: string
    skuId: string
    styleNumber: string
    merchandiseClass: string
    msrpValue: number
    removeForLegalReasons: boolean
    availableToRent: boolean
    previouslyRented: any
    inCloset: boolean
    inBox: boolean
    overallRatingCount: number
    overallRatingAverage: number
    vendorBrands: string[]
    isAvailable: boolean
    availabilityStatus: string
    isVintage: boolean
    productsRelatedToColor: any[]
}

export interface Pagination {
    totalPages: number
    itemsPerPage: number
    itemsOnPage: number
    pageNumber: number
    totalItems: number
    totalItemsBeforeFilters: number
}

export interface FilterGroup {
    displayName: string
    name: string
    filterValues: string[]
}

export interface SortOption {
    displayName: string
    name: string
}
