let cel = document.getElementById("ileft");
let fah = document.getElementById("iright");

cel.addEventListener('input', function() {
    let c = cel.value;
    let f = (c * 9 / 5) + 32;
    fah.value = f;
});
fah.addEventListener('input', function() {
    let f1 = this.value;
    let c1 = (f1 - 32) * 5 / 9;
    cel.value = c1;
});