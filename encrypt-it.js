// Part I:
window.addEventListener("load", function () {
  console.log("Window loaded!");
});
// Part II:
function handleClick() {
  console.log("Button clicked!");
}
window.addEventListener("load", function () {
  const encryptButton = document.getElementById("encrypt-it");
  encryptButton.addEventListener("click", handleClick);
});
// Part III:
function handleReset() {
  const inputTextArea = document.getElementById("input-text");
  inputTextArea.value = ""; // Clear out the input text area
}
window.addEventListener("load", function () {
  const resetButton = document.getElementById("reset");
  resetButton.addEventListener("click", handleReset);
});
// Part IV:
function handleEncrypt() {
  const inputText = document.getElementById("input-text").value;
  const encryptedText = shiftCipher(inputText);
  displayEncryptedText(encryptedText);
}

function shiftCipher(text) {
  let result = "";

  for (let i = 0; i < text.length; i++) {
    let charCode = text.charCodeAt(i);

    // Check if the character is a lowercase letter
    if (charCode >= 97 && charCode <= 122) {
      charCode = ((charCode - 97 + 1) % 26) + 97;
    }
    // Check if the character is an uppercase letter
    else if (charCode >= 65 && charCode <= 90) {
      charCode = ((charCode - 65 + 1) % 26) + 65;
    }

    result += String.fromCharCode(charCode);
  }

  return result;
}

function displayEncryptedText(encryptedText) {
  const resultArea = document.getElementById("result");
  resultArea.textContent = encryptedText;
}

window.addEventListener("load", function () {
  const encryptButton = document.getElementById("encrypt-it");
  encryptButton.addEventListener("click", handleEncrypt);
});
