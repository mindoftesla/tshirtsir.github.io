let uploadedImg = document.getElementById('uploaded-img');
        let inputFile = document.getElementById('button');

        inputFile.onchange = function(){
            uploadedImg.src = URL.createObjectURL(inputFile.files[0]);
            document.getElementById('uploaded-img').style.display = 'block';
            document.getElementById('check-out').style.display = 'block';
            button.style.display = 'none';
        }

var button = document.querySelector('label');