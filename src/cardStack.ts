import * as PIXI from 'pixi.js';
import { Card } from './card';

export enum StackLayouts {
    column,
    row,
    pile
}
export class CardStack {
    private layout: StackLayouts;
    private cards: Card[] = [];
    private offset: number = 50;

    sprite: PIXI.Container;

    constructor(layout: StackLayouts) {
        this.layout = layout;

        this.sprite = new PIXI.Container();
    }

    addCard = (card: Card) => {
        this.cards.push(card);
        card.sprite.x = 0;
        card.sprite.y = (this.cards.length - 1) * this.offset;
        this.sprite.addChild(card.sprite);
    }
}