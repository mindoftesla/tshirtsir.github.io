var select = document.querySelector('select');
var picture = document.getElementById('picture');

select.addEventListener('change', function(){
    var value = document.querySelector('select').value;
    if (value == 'yellow') {
        picture.src = 'I Love Dogs.png';
    }
    if (value == 'grey') {
        picture.src = 'Dog variants/grey-variant.png';
    }
    if (value == 'red') {
        picture.src = 'Dog variants/red-variant.png';
    }
})