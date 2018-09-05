window.onload = function() {
    document.indexes = [];

    let listBtns = document.getElementsByClassName('list-btn');
    for (let i = 0; i < listBtns.length; i++) {
        let listBtn = listBtns.item(i);
        listBtn.onclick = function() {
            document.getElementById("list-btns").style.visibility = "hidden";

            let id = this.id;
            let listId = id.replace("-btn", "");
            let list = document.getElementById(listId);

            let words = list.getElementsByClassName("word");

            for (let j = 0; j < words.length; j++) {
                let word = words.item(j);
                word.onclick = function() {
                    this.style.visibility = "hidden";

                    let list = this.parentElement;
                    let words = list.getElementsByClassName("word");
                    console.log(words);
                    let word = pickWord(words);
                    word.style.visibility = "visible";
                }
            }

            let word = pickWord(words);
            word.style.visibility = "visible";
        }
    }
}

function pickWord(words) {

    if(document.indexes.length === 0) {
        let max = words.length - 1;
        for (let i = 0; i < max; i++) {
            document.indexes[i] = 0;
        }
    }

    let indexes = lowestWordIndexes(document.indexes);
    console.log(indexes);

    let max = indexes.length - 1;
    let random = Math.random();
    let pick = Math.round(max * random);

    let index = indexes[pick];

    document.indexes[index]++;
    console.log(document.indexes);

    return words.item(index);
}

function lowestValue(array) {
    let copy = array;
    let lowest = 999999999;
    for (let i=0; i<copy.length; i++) {
        if (copy[i] < lowest) {
            lowest = copy[i];
        }
    }
    return lowest;
}

function lowestWordIndexes(array) {
    let lowest = lowestValue(array);
    let lows = [];
    for (let i=0; i<array.length; i++) {
        if (array[i] === lowest){
            lows.push(i);
        }
    }
    return lows;
}
