export enum CardState {
    UNMATCHED,
    MATCHING,
    MATCHED,
}

export interface CardInformation {
    id: number,
    content: string,
    gid: number,
    state: CardState,
}

export type ICardInformation = Pick<CardInformation, "content">
