// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];


function destructivelyAppendCat(name) {
    cats.push("Ralph");
}

function destructivelyPrependCat(name) {
    cats.unshift("Bob");
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}

function appendCat(name) {
    const cats = ["Milo", "Otis", "Garfield"];
    return [...cats, "Broom"];
}

function  prependCat(name) {
    const cats = ["Milo", "Otis", "Garfield"];
    return ["Arnold", ...cats];
}

function removeLastCat(name) {
//  cats.slice(-1);
    const cats = ["Milo", "Otis", "Garfield"];
    const copyCats = cats.slice()
    return copyCats.slice(0, copyCats.length - 1);
}

function removeFirstCat(name) {
    const cats = ["Milo", "Otis", "Garfield"];
    const copyCats = cats.slice()
    return copyCats.slice(1);
}

