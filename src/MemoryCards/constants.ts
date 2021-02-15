export enum CardState {
    UNMATCHED,
    MATCHING,
    MATCHED,
}

export interface CardInformation {
    uid: number,
    gid: number,
    state: CardState,
}
