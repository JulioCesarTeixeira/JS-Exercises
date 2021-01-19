// to get the value of an input: document.getElementById("element-id").value


document.getElementById("addition").addEventListener("click", function () {
    //addition
    alert(parseInt(document.getElementById("op-one").value) + parseInt(document.getElementById("op-two").value));
});

document.getElementById("substraction").addEventListener("click", function () {
    // perform an substraction
    alert(parseInt(document.getElementById("op-one").value) - parseInt(document.getElementById("op-two").value));
});

document.getElementById("multiplication").addEventListener("click", function () {
    // perform an multiplication
    alert(parseInt(document.getElementById("op-one").value) * parseInt(document.getElementById("op-two").value));
});

document.getElementById("division").addEventListener("click", function () {
    // perform an division
    alert(parseInt(document.getElementById("op-one").value) / parseInt(document.getElementById("op-two").value));
});


