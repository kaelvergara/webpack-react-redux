
function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export function reRender() {
    return {
        type: 'UPDATE_VALUE',
        y: randomIntFromInterval(0, 60),
        x: randomIntFromInterval(0, 170),
        value: 'X'
    };
}
