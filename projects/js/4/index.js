let uname = document.getElementById("uname");
let upass = document.getElementById("upass");
let submit = document.getElementById("submit");

uname.addEventListener('input', function() {
    let uvalue = uname.value;
    let ulength = uvalue.length;
    if (ulength < 5) {
        document.getElementById("utext").innerText = "the username must be 5 units";
    } else {
        document.getElementById("utext").innerText = "";
    }
});
upass.addEventListener('input', function() {
    let pvalue = upass.value;
    let plength = pvalue.length;
    if (plength < 5) {
        document.getElementById("ptext").innerText = "the password must be 5 units";
    } else {
        document.getElementById("ptext").innerText = "";
    }
});
submit.addEventListener('click', function() {
    uname.value = "";
    upass.value = "";
    document.getElementById("utext").innerText = "";
    document.getElementById("ptext").innerText = "";

})