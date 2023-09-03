var select = document.querySelector('select');
var picture = document.getElementById('picture');

select.addEventListener('change', function(){
    var value = document.querySelector('select').value;
    if (value == 'Man') {
        picture.src = "Canva Designs/Man's best friend.png";
    }
    if (value == 'Woman') {
        picture.src = "Canva Designs/Woman's best friend.png";
    }
})