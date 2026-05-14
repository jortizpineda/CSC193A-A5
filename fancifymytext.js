function bigger() {
    document.getElementById("textArea").style.fontSize = "24pt";
}

function fancify() {
    if (document.getElementById("fancy").checked) {
        document.getElementById("textArea").style.fontWeight = "bold";
        document.getElementById("textArea").style.color = "blue";
        document.getElementById("textArea").style.textDecoration = "underline";
    } else {
        document.getElementById("textArea").style.fontWeight = "normal";
        document.getElementById("textArea").style.color = "black";
        document.getElementById("textArea").style.textDecoration = "none";
    }
}

function moo() {
    var text = document.getElementById("textArea").value;
    text = text.toUpperCase();
    var sentences = text.split(".");
    for (var i = 0; i < sentences.length; i++) {
        var trimmed = sentences[i].trimEnd();
        if (trimmed.length > 0) {
            sentences[i] = trimmed + "-MOO";
        }
    }
    text = sentences.join(".");
    document.getElementById("textArea").value = text;
}
