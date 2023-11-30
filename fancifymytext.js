function new_function()
{
	document.getElementById("text_id").style.fontSize="2em"; 
	if(document.getElementById('fancy_radio_button').checked==true)
	{
		document.getElementById("text_id").style.fontWeight="bold"; // Set font weight to bold
		document.getElementById("text_id").style.color="blue";
		document.getElementById("text_id").style.textDecoration="underline";
	}
	if(document.getElementById('boring_radio_button').checked==true)
	{
		document.getElementById("text_id").style.fontWeight="normal"; 
	}
}

function moo() {
   var inputValue = document.getElementById("text").value;
    var sentences = inputValue.split('.');
    for (var i = 0; i < sentences.length; i++) {
        sentences[i] = sentences[i].toUpperCase().trim();
        if (i < sentences.length - 1) {
            sentences[i] += ". -Moo";
        }
    }
    var modifiedText = sentences.join("");
    document.getElementById("text").value = modifiedText;
}
