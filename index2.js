// set initial count
let count = 0;

// select value and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

//console.log(btns);
// Metoda DOM 3 - reakcja na naciśnicie przycisku
btns.forEach(function (btn){
    btn.addEventListener("click",function(e){
        const styles = e.currentTarget.classList;
        if(styles.contains('decrease')){
            count--;
        }
        else if (styles.contains('increase')){
            count++;
        }
        else if (styles.contains('reset')){
            count = 0;
        }

        if (count < 0){
            value.style.color = 'red';
        }
        else if (count > 0){
            value.style.color = 'green';
        }
        else{
            value.style.color = 'black';
        }
        value.textContent = count;
    });
});

