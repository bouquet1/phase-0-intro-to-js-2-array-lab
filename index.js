// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
//is assigned an initial value of ["Milo", "Otis", "Garfield"]
// console cats; outcome [ 'Milo', 'Otis', 'Garfield' ]


function destructivelyAppendCat(name) {
    cats.push("Ralph");
} // new way; const destructivelyAppendCat = (name) => cats.push("Ralph");
//appends -eklemek- a cat to the end of the cats array. adds "Ralph". Return value= the length of the modified array so return value is 4.
//console cats; outcome [ 'Milo', 'Otis', 'Garfield', 'Ralph' ]


function destructivelyPrependCat(name) {
    cats.unshift("Bob");
} // new way; const destructivelyPrependCat = (name) => cats.unshift("Bob");
//prepends - basa ekler-  a cat to the beginning of the cats array. Return value= the length of the modified array so return value is 4.
//console cats; outcome [ 'Bob', 'Milo', 'Otis', 'Garfield' ]


function destructivelyRemoveLastCat() {
    cats.pop();
}  // new way; const destructivelyRemoveLastCat = (name) => cats.pop();
//removes the last cat from the cats array. Return value= the removed element so return value is 'Garfield'.
////console cats; outcome [ 'Milo', 'Otis' ]


function destructivelyRemoveFirstCat() {
    cats.shift();
}  // new way; const destructivelyRemoveFirstCat = (name) => cats.shift();
// removes the first cat from the cats array. Return value= the removed element so return value is 'Milo'.
//console cats; outcome [ 'Otis', 'Garfield' ]

function appendCat(name) {
    return [...cats, "Broom"];
}  // const appendCat = (name) => [...cats, "Broom"]
//Spread Operator (...) appends a cat to the cats array and returns a new array, leaving the cats array unchanged. Return value new array. Return value and console.log is same for appendCat which is [ 'Milo', 'Otis', 'Garfield', 'Broom' ]. console log for cats is the original unchanged array ["Milo", "Otis", "Garfield"].


function  prependCat(name) {
    return ["Arnold", ...cats];
} // const prependCat = (name) => ["Arnold", ...cats]
// prepends a cat to the cats array and returns a new array, leaving the cats array unchanged. Return value new array. Return value and console.log is same for prependCat which is [ 'Arnold', 'Milo', 'Otis', 'Garfield' ]. console log for cats is the original unchanged array ["Milo", "Otis", "Garfield"].


function removeLastCat(name) {
    const copyCats = cats.slice()
    return copyCats.slice(0, copyCats.length - 1);
}  // const removeLastCat = (name) => {const copyCats = cats.slice(); return copyCats.slice(0, copyCats.length-1)}
//removes the last cat in the cats array and returns a new array, leaving the cats array unchanged. return value [ 'Milo', 'Otis' ]


function removeFirstCat(name) {
    const copyCats = cats.slice()
    return copyCats.slice(1);
} //const removeFirstCat = (name) => {
    //const copyCats = cats.slice();
    //return copyCats.slice(1);
    // }
//removes the first cat from the cats array and returns a new array, leaving the cats array unchanged. return value [ 'Otis', 'Garfield' ]


