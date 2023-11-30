<script>
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

function makeMoo() {
    var textInput = document.getElementById("textInput");
    var text = textInput.value;
    textInput.value = text.toUpperCase();
    var sentences = text.split(". ");
    for (var i = 0; i < sentences.length; i++) {
        var words = sentences[i].split(" ");
        words[words.length - 1] += "-Moo";
        sentences[i] = words.join(" ");
    }
    textInput.value = sentences.join(". ");
}
</script>
