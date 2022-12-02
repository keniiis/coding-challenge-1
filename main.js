(function() {
    let boton = document.getElementById("btn");
    boton.addEventListener("click", myf1);

    let contador = 0;

    function myf1() {
    if (contador % 2 ==0) {
        boton.classList = "folown"
        boton.textContent="Following"
    } else {
        boton.classList = "btn"
        boton.textContent="Follow"
    }
    contador += 1;
    }
})();