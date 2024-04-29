const catImage = () => {
    const imgSrc = `https://cataas.com/cat/gif?uId=${Math.floor(Math.random() * 10000)}`;
    return `<img alt="A random cat" src=${imgSrc} onclick="replaceCat()" />`;
};

const cat = $('#cat');

$(document).ready(() => {
    cat.append(catImage());
})

function replaceCat() {
    console.log('Cat clicked!');
    $('#cat > img').replaceWith(catImage());
}

function hideCat() {
    cat.hide()
}

function showCat() {
    cat.show()
}

function swapText() {
    const textA = $('#title').text();
    const textB = $('#clickMe').text();

    $('#title').text(textB);
    $('#clickMe').text(textA);
}
