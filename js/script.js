// File JavaScript

// Wellcome Name
function replaceName(){
    let name = prompt("Hi there! Who's your name?","");
    document.getElementById("name").innerHTML=name
    }
    
    replaceName();

// Form Validation
function formValidation() {
    let nameInput = document.getElementById('name-input').value;
    let birthInput = document.getElementById('birth-input').value;
    let genderInput = document.getElementById('gender-input').value;
    let messageInput = document.getElementById('message-input').value;

    if (nameInput == '' || birthInput == '' || genderInput == '' || messageInput =='') {
        alert('Please fill every blank field')
    } else {
        console.log(nameInput)
        console.log(birthInput)
        console.log(genderInput)
        console.log(messageInput)
    }
}

let indexSlide = 1;
showBanner(1);

function nextSlide(n) {
    showBanner(indexSlide += n);
}

function showBanner(indexBanner) {
    let listImage = document.getElementsByClassName('banner-img');
    if (indexBanner > listImage.length) indexSlide = 1;

    let index=0;
    while (index < listImage.length) {
        listImage[index].style.display ='none';
        index++;
    }

    listImage[indexSlide - 1].style.display = 'block';
}

setInterval(() => nextSlide(1), 3000);



// Formulir Function


document.getElementsByClassName('form-container').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent Auto-submit


    //Current Date
    const now = new Date();
    const dateTimeString = now.toLocaleString();
   

    // Take Value of The Form
   
    const nama = document.getElementById('name-input').value;
    const tglLahir = document.getElementById('birth-input').value;
    const jenisKelamin = document.querySelector('input[name="gender"]:checked').value;
    const pesan = document.getElementById('message-input').value;

    // Generate text
    const resultText = `Date/time: ${dateTimeString}\n \nName: ${nama}\nBirthday: ${tglLahir}\nGender: ${jenisKelamin}\nMessage:\n${pesan}`;

    // Show result to Text Area
    document.getElementById('result').value = resultText;

    // Shoiw Allert
    alert('Submitted');
    document.getElementById('name-input').value ="";
    document.getElementById('irth-input').value ="";
    document.getElementById('message-input').value ="";
    
});

