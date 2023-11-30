window.addEventListener("load", function () {
  console.log("Window loaded!"); // Part I:

  function handleClick() {
    console.log("Button clicked!"); // Part II:
  }

  const encryptButton = document.getElementById("encrypt-it");
  encryptButton.addEventListener("click", handleClick);

  function handleReset() {
    const inputTextArea = document.getElementById("input-text");
    inputTextArea.value = ""; // Part III:
  }

  const resetButton = document.getElementById("reset");
  resetButton.addEventListener("click", handleReset);

  function handleEncrypt() {
    const inputText = document.getElementById("input-text").value;
    const encryptedText = shiftCipher(inputText); // Part IV:
    displayEncryptedText(encryptedText);
  }

  function shiftCipher(text) {
  const shiftAmount = 3;

  let result = "";
  for (let i = 0; i < text.length; i++) {
    let charCode = text.charCodeAt(i);

    if (charCode >= 65 && charCode <= 90) {
      charCode = ((charCode - 65 + shiftAmount) % 26) + 65;
    } else if (charCode >= 97 && charCode <= 122) {
      charCode = ((charCode - 97 + shiftAmount) % 26) + 97;
    }
    result += String.fromCharCode(charCode);
  }
  return result;
}

  function displayEncryptedText(encryptedText) {
    const resultArea = document.getElementById("result");
    resultArea.textContent = encryptedText;
  }
  //
  const encryptItButton = document.getElementById("encrypt-it");
  encryptItButton.addEventListener("click", function () {
    console.log("Encrypt-It! button clicked!");
  });
});
