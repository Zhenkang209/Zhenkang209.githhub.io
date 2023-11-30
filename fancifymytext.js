function new_function()
{
	// Font size is increased to 24pt which is equivalent to 2em
	document.getElementById("text_id").style.fontSize="2em"; 
	
	 
	// Check that which radio button is selected.
	// If FancyShmancy is checked then change the styles in text area.
	// If BoringBetty is checked then font weight should go back to normal.
	
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

function moo()
{
// Change the text to uppercase.
var text=document.getElementById("text_id").value;
var uppercase_text=text.toUpperCase();

// Add a suffix -Moo to the last word of each sentence.
// Consider that the sentence ends with a period character ".".
var split_text=uppercase_text.split(".");
suffixed_text=split_text.join("_Moo");
document.getElementById("text_id").value=suffixed_text;
}
