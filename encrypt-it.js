console.log("Windows loaded!");
<!DOCTYPE html>
<html>
<head>
<script>
function myFunction()
{
    document.getElementById("Windows Loaded!").innerHTML="Paragraph Changed.";
}

//Implementing a basic shift cipher
var alphabet = "abcdefghijklmnopqrstuvwxyz";
var newalpha="";
function shift(n)
{
    for(let i-0;i<alphabet.length;i++)
{
let offset=(i+n)%alphabet.length;
newalpha+=alphabet[offset];
}
</script>
</head>
<body>
<h2> Javascript in head </h2>
<p id="Windows Loaded"> A Paragraph</p>
<button type="button" onclick="myFunction()">Tryit </button>
</body>
</html>

