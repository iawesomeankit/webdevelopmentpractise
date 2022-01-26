let text = document.getElementById("textt");
text.addEventListener('input', function() {
    var texttt = this.value;
    let char = texttt.length;
    document.getElementById("char").innerHTML = char;
    texttt = texttt.trim();
    let word = texttt.split(" ");
    document.getElementById("word").innerHTML = word.length;
});