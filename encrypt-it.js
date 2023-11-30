// Function to handle encryption using shift cipher
function shiftCipher(text) {
  text = text.toLowerCase();
  let result = "";
  for (let i = 0; i < text.length; i++) {
    if (text[i] < 'a' || text[i] > 'z') {
      result += text[i];
    } else if (text[i] === 'z') {
      result += 'a';
    } else { // letter is between 'a' and 'y'
      let letter = text.charCodeAt(i);
      let resultLetter = String.fromCharCode(letter + 1);
      result += resultLetter;
    }
  }
  return result;
}

// Function to handle click on Encrypt-It! button
function handleClick() {
  const inputText = document.getElementById('input-text').value;
  const encryptedText = shiftCipher(inputText);
  document.getElementById('result').textContent = encryptedText;
}

// Function to handle click on Reset button
function handleReset() {
  document.getElementById('input-text').value = ''; // Clear input textarea
  document.getElementById('result').textContent = ''; // Clear result output
}

// Event listeners
window.addEventListener('load', function() {
  console.log("Window loaded!");
});

document.getElementById('encrypt-button').addEventListener('click', handleClick);
document.getElementById('reset-button').addEventListener('click', handleReset);
