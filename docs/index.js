let mode = document.getElementById("mode");
let dark = true;
mode.addEventListener("click", function() {
    if (dark) {
        this.innerHTML = `<i class="fa-solid fa-moon fa-xl mode"></i>`
        dark = false;
        document.getElementsByTagName("body")[0].style.backgroundColor = "white";
        document.getElementsByTagName("body")[0].style.color = "black";
        document.getElementById("cont").style.backgroundColor = "white";
        document.getElementById("cont").style.color = "black";
        document.getElementsByTagName("i")[0].style.backgroundColor = "white";
        document.getElementsByTagName("i")[0].style.color = "black";
        let c = document.getElementsByClassName("v");
        Array.from(c).forEach(ele => {
            ele.style.color = "black";
        });




    } else {
        this.innerHTML = `<i class="fa-solid fa-circle-half-stroke fa-xl mode"></i>
`
        document.getElementsByTagName("body")[0].style.backgroundColor = "black";
        document.getElementsByTagName("body")[0].style.color = "white";

        document.getElementById("cont").style.backgroundColor = "black";
        document.getElementById("cont").style.color = "white";
        let c = document.getElementsByClassName("v");
        Array.from(c).forEach(ele => {
            ele.style.color = "white";
        });

        dark = true;

    }
});
