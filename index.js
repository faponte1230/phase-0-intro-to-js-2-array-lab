const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(){
    return cats.push('Ralph')
}

function destructivelyPrependCat(){
    return cats.unshift('Bob')
}

function destructivelyRemoveLastCat(){
    return cats.pop()
}

function destructivelyRemoveFirstCat(){
    return cats.shift()
}

function appendCat(){
    const moreCats = [...cats, 'Broom']
    return moreCats
}

function prependCat(){
    const newMoreCats = ['Arnold', ...cats]
    return newMoreCats
}

function removeLastCat(){
    const slicedLastCat = cats.slice(0,2)
    return slicedLastCat
}

function removeFirstCat(){
    const slicedFirstCat = cats.slice(-2)
    return slicedFirstCat
}