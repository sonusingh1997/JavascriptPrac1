const strBtn = document.querySelector("#strBtn");
const stpBtn = document.querySelector("#stpBtn");
stpBtn.style.display = "none";
const rstBtn = document.querySelector("#rstBtn");
let h = m = s = ms = "0" + 0;
let startTimer;


// function call for button event
strBtn.addEventListener("click", strBtnFunc);
stpBtn.addEventListener("click", stpBtnFunc);
rstBtn.addEventListener("click", rstBtnFunc);


//function for start button
function strBtnFunc() {
    startTimer = setInterval(() => {
        ms++;
        ms = ms < 10 ? "0" + ms : ms;
        if (ms == 100) {
            s++;
            s = s < 10 ? "0" + s : s;
            ms = "0" + 0;
        }
        if (s == 60) {
            m++;
            m = m < 10 ? "0" + m : m;
            s = "0" + 0;

        }
        if (m == 60) {
            h++;
            h = h < 10 ? "0" + h : h;
            m = "0" + 0;

        }
        strBtn.style.display = "none";
        stpBtn.style.display = "block";
        setValue();
    }, 10);
}

// function for stop
function stpBtnFunc() {
    strBtn.style.display = "block";
    stpBtn.style.display = "none";
    clearInterval(startTimer);


}

//function for reset
function rstBtnFunc() {
    clearInterval(startTimer);
    h = m = s = ms = "0" + 0;
    setValue();
}

// function set value in dom;
const setValue = () => {
    document.querySelector("#msec").innerHTML = ms + " " + "Ms";
    document.querySelector("#sec").innerHTML = s + " " + "Sec";
    document.querySelector("#min").innerHTML = m + " " + "Min";
    document.querySelector("#hrs").innerHTML = h + " " + "Hrs";
}