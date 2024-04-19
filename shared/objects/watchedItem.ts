import UniqueSelectionValue from '../types/uniqueSelectionValue';

export default class WatchList {
    usvs: Set<WatchedItem>;

    constructor() {
        this.usvs = new Set<WatchedItem>();
    }

    addItemToWatchList(usv: WatchedItem) {
        if (!this.usvs.has(usv)) {
            console.log("hithere");
            this.usvs.add(usv);
        }
    }

    addItemToWatchList2(usv: WatchedItem) {
        this.usvs.add(usv);
    }

    // Add this iterator method
    *[Symbol.iterator]() {
        yield* this.usvs;
    }


    addItemsToWatchList(newUsvs: WatchedItem[]) {
        newUsvs.forEach(usv => {
            if (!this.usvs.has(usv)) {
                this.usvs.add(usv);
            }
        });
    }

    addItemsToWatchList2(newUsvs: WatchedItem[]) {
        newUsvs.forEach(usv => {
            this.addItemToWatchList2(usv);
        });
    }
}

class WatchedItem {
    usv: UniqueSelectionValue

    constructor(usv: UniqueSelectionValue) {
        this.usv = usv;
    }

    // Override the equals method to define custom equality logic
    equals(other: WatchedItem): boolean {
        // Compare each property of UniqueSelectionValue for equality
        console.log("hellowold");
        return (
            this.usv.productChoiceId === other.usv.productChoiceId &&
            this.usv.productDisplayName === other.usv.productDisplayName &&
            this.usv.colorDisplayName === other.usv.colorDisplayName &&
            this.usv.groupCode === other.usv.groupCode &&
            this.usv.groupDisplayName === other.usv.groupDisplayName &&
            this.usv.sizeCode === other.usv.sizeCode &&
            this.usv.sizeDisplayName === other.usv.sizeDisplayName
        );
    }
}

export {WatchedItem};
