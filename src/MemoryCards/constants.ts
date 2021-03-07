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
    image?: string,
}

export const cardContentTypes = ["sloths"];
export type CardContentType = (typeof cardContentTypes)[number];

export type ICardInformation = Pick<CardInformation, "content" | "image">
