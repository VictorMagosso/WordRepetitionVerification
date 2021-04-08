let adjList = []
let objArr = []
let filteredArray = []

function addAdj(words) {
    adjList = words.split(',')
    document.querySelector('#adjetivos').innerHTML = '';
}

//create an array of objects to be more visual to identify
const verifyRepeatition = () => {
    let word
    adjList.forEach(e => {
        word = e
        objArr.push({
            palavra: word,
            repeticoes: getOccurrence(adjList, word)
        })
    })
    //let only one event per word
    filteredArray = objArr.filter((e, index, self) =>
        index === self.findIndex((t) => (
            t.palavra === e.palavra && t.repeticoes === e.repeticoes
        ))
    )
}

function getOccurrence(array, value) {
    let count = 0;
    array.forEach(v => (v === value && count++));
    return count
}

let element = document.querySelector('#downloadButton')

function download() {
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(JSON.stringify(filteredArray.sort((a, b) => a.repeticoes - b.repeticoes))));
    element.setAttribute('download', 'adjetivos.json');
}
element.addEventListener('click', () => {
    download()
})