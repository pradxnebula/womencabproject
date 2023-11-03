
const car = document.querySelector('.car');
const girlImage = document.querySelector('.girl-img');

// Function to hide the girl image
function hideGirlImage() {
  girlImage.style.display = 'none';
}


// Function to show the girl image
function showGirlImage() {
  girlImage.style.display = 'inline';
}
var toggle = true;

function girlHide() {
  setInterval(() => {
    toggle ? hideGirlImage() : showGirlImage();
    toggle = !toggle;
  }, 5000);
}
setInterval(() => {
  document.querySelector('.loader-bg').style.display = 'none';
}, 8000);
girlHide()
showGirlImage();


function switchFunction() {
location.href="sign-up.html"
}