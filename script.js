const textArea = document.querySelector(".text-area");
const message = document.querySelector(".message");
const copyButton = document.querySelector(".copy");
copyButton.style.display = "none";

function validateText() {
  let inputText = document.querySelector(".text-area").value;
  let validator = inputText.match(/^[a-z]*$/);

  if (!validator || validator === 0) {
    alert("Only lowercase letters without accents are allowed");
    location.reload();
    return true;
  }
}

function btnEncrypt() {
  if (!validateText()) {
    const encryptedText = encrypt(textArea.value);
    message.value = encryptedText;
    message.style.backgroundImage = "none";
    textArea.value = "";
    copyButton.style.display = "block";
  }
}

// Encryption keys
// `The letter "e" is converted to "enter"`
// `The letter "i" is converted to "imes"`
// `The letter "a" is converted to "ai"`
// `The letter "o" is converted to "ober"`
// `The letter "u" is converted to "ufat"`

function encrypt(encryptedString) {
  let codeMatrix = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];
  encryptedString = encryptedString.toLowerCase();

  for (let i = 0; i < codeMatrix.length; i++) {
    if (encryptedString.includes(codeMatrix[i][0])) {
      encryptedString = encryptedString.replaceAll(
        codeMatrix[i][0],
        codeMatrix[i][1]
      );
    }
  }
  return encryptedString;
}

function btnDecrypt() {
  const decryptedText = decrypt(textArea.value);
  message.value = decryptedText;
  textArea.value = "";
}

function decrypt(decryptedString) {
  let codeMatrix = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];
  decryptedString = decryptedString.toLowerCase();

  for (let i = 0; i < codeMatrix.length; i++) {
    if (decryptedString.includes(codeMatrix[i][1])) {
      decryptedString = decryptedString.replaceAll(
        codeMatrix[i][1],
        codeMatrix[i][0]
      );
    }
  }
  return decryptedString;
}

function copy() {
  message.select();
  navigator.clipboard.writeText(message.value);
  message.value = "";
  alert("Text Copied");
}
