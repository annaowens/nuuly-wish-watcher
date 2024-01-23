export interface SearchResponse {
    choices: Choice[]
}

export interface Choice {
    choiceId: string
    imageUrls: string[]
    color: Color
    sizeGroups: SizeGroup[]
    previouslyRented: any
    inCloset: boolean
    inBox: boolean
    colorFacet: ColorFacet
    productsRelatedToColor: any[]
}

export interface Color {
    code: string
    displayName: string
    hexCode: string
    imageUrl: string
}

export interface SizeGroup {
    groupCode: string
    displayName: string
    includedSkus: IncludedSku[]
}

export interface IncludedSku {
    skuId: string
    skuCode: string
    size: Size
    sizeFilters: SizeFilter[]
    availableInventory: number
    isAvailable: boolean
}

export interface Size {
    code: string
    displayName: string
}

export interface SizeFilter {
    id: string
    name: string
}

export interface ColorFacet {
    colorways: Colorway[]
    colorId: string
}

export interface Colorway {
    hexColor: string
    name: string
    mappingAlias: string
    swatchURL: string
}
