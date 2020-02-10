import red_card from "../assets/png/red_card.png";
import blue_card from "../assets/png/blue_card.png";
import pink_card from "../assets/png/pink_card.png";
import FastAverageColor from 'fast-average-color';

const fac = new FastAverageColor();

const getColor = (img: HTMLImageElement) => {
    img.crossOrigin = "Anonymous";
    let result = "";
    fac.getColorAsync(img)
        .then(color => {
            // result = getCardImage(color.value);
        })
        .catch(function(e) {
            console.log(e);
        });
    return result;
};
export default getColor;


export const getCardsImage = (imagesDominantColor: Array<Array<number>>) => {
    const red = [[246, 106, 206], [247, 72, 87], [248, 181, 63]];
    const blue = [[77, 133, 228], [51, 164, 195], [44, 216, 141]];
    const pink = [[106, 94, 194], [129, 75, 196], [191, 106, 212]];

    const getColorDistance = (cardColor: Array<Array<number>>, imageDominantColor: Array<number>) => {
        const getColorDistancePart = (cardColor: Array<number>) => {
            return Math.sqrt((cardColor[0] - imageDominantColor[0]) * (cardColor[0] - imageDominantColor[0])
                + (cardColor[1] - imageDominantColor[1]) * (cardColor[1] - imageDominantColor[1])
                + (cardColor[2] - imageDominantColor[2]) * (cardColor[2] - imageDominantColor[2]));
        };
        return Math.min(getColorDistancePart(cardColor[0]),
                        getColorDistancePart(cardColor[1]),
                        getColorDistancePart(cardColor[2]));
    };

    let cardImages: Array<string> = [];

    imagesDominantColor.forEach((imageDominantColor: Array<number>) => {
        let redD = {card: red_card, distance: getColorDistance(red, imageDominantColor)};
        let blueD = {card: blue_card, distance: getColorDistance(blue, imageDominantColor)};
        let pinkD = {card: pink_card, distance: getColorDistance(pink, imageDominantColor)};

        let minDist = Math.min(redD.distance, blueD.distance, pinkD.distance);
        let cardColorObj = [redD, blueD, pinkD].find((element, index) => {
            return element.distance === minDist
        });
        cardImages.push(cardColorObj!.card);
    });
    return cardImages;
};