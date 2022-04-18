import * as PIXI from 'pixi.js';
import { Card, Suites } from './card';
import { CardStack, StackLayouts } from './cardStack';

const app = new PIXI.Application({
    backgroundAlpha: 1,
    antialias: true,
});

app.renderer.backgroundColor = 0x23395D;
app.loader.add('cards', './playingCards.json')
app.loader.add('cardBack', './cardBack_red.png')
app.loader.load((loader, resources) => {
        const backTexture = PIXI.Texture.from('cardBack_red.png');
        const cardStack = new CardStack(StackLayouts.column);
        const cards = [
            new Card(Suites.spades, "K", backTexture),
            new Card(Suites.hearts, "Q", backTexture),
            new Card(Suites.clubs, "J", backTexture),
            new Card(Suites.diamonds, "10", backTexture),
            new Card(Suites.spades, "9", backTexture),
            new Card(Suites.hearts, "8", backTexture),
            new Card(Suites.clubs, "7", backTexture),
            new Card(Suites.diamonds, "6", backTexture),
        ]
        cards.forEach(card => {
            cardStack.addCard(card);
        });
        const clubTwoCard = new Card(Suites.clubs, "2", backTexture);
        const clubTwoSprite = clubTwoCard.sprite;
        const heartKingCard = new Card(Suites.hearts, "K", backTexture);
        const heartKingSprite = heartKingCard.sprite;
        clubTwoSprite.x = 160;
        heartKingSprite.x = 320;
        app.stage.addChild(cardStack.sprite);
        app.stage.addChild(clubTwoSprite);
        app.stage.addChild(heartKingSprite);
    })
    .onError.add((...args)=> console.error({args}));

document.body.append(app.view);