let count = 0;

const button = document.getElementById("count-button");
const countDisplay = document.getElementById("counter");

button.addEventListener("click", function () {
    count++;

    if(count===1){
        countDisplay.textContent=`You clicked on the image ${count} time!`;
    }else{
        countDisplay.textContent=`You clicked on the image ${count} times!`;
    }
});