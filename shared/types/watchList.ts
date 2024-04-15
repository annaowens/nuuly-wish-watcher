export default interface WatchedItem {
    productSkuId: string,
    productDisplayName: string,
    usv: UniqueSelectionValue
}

export interface UniqueSelectionValue {
    colorCode: string
    colorDisplayName: string
    groupCode: string
    groupDisplayName: string
    skuCode: string
    skuDisplayName: string
}