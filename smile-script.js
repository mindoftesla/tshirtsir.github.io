var select = document.querySelector('select');
var picture = document.getElementById('picture');

select.addEventListener('change', function(){
    var value = document.querySelector('select').value;
    if (value == 'black') {
        picture.src = 'Canva Designs/Take time to smile-black.png';
    }
    if (value == 'white') {
        picture.src = 'Canva Designs/Take time to smile-white.png';
    }
})