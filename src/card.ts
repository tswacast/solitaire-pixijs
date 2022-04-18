import * as PIXI from 'pixi.js';
import { Howl } from 'howler';
export enum Suites {
    hearts,
    clubs,
    diamonds,
    spades
}

const flipSound = new Howl({
    src: './cardPlace1.wav',
})
export class Card {
    private suite: Suites;
    private value: string;
    private faceTexture: PIXI.Texture;
    private backTexture: PIXI.Texture;
    private isFaceUp: boolean = true;
    sprite: PIXI.Sprite;
    constructor(suite: Suites, value: string, backTexture: PIXI.Texture) {
        this.suite = suite;
        this.value = value;
        this.faceTexture = PIXI.Texture.from(`${Suites[suite]}${value}.png`);
        this.backTexture = backTexture;
        this.sprite = new PIXI.Sprite(this.faceTexture);
        this.sprite.interactive = true;
        this.sprite.on('click', this.flip);
    }

    flip = () => {
        flipSound.play();
        this.isFaceUp = !this.isFaceUp;
        this.sprite.texture = this.isFaceUp ? this.faceTexture : this.backTexture;
    }
}