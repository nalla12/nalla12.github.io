const catImage =
    '<img alt="A random cat" src="https://cataas.com/cat/gif"/>';

const cat = $('#cat');

$(document).ready(() => {

    cat.append(catImage).on('click', () => {
        $('#cat > img').replaceWith(catImage);
    })

})

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
