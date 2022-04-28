
function encrypteer() {

  var key = generateKey(32); //gaat een random string aanmaken en deze gebruiken als encryptiesleutel
  document.getElementById("key").innerHTML = key //gaat het encryptiesleutel tonen
  
  var msg = document.getElementById("text").value; //gaat het bericht ophalen

  var enc = CryptoJS.AES.encrypt(msg,key);

  // TODO: CALL API to store ENC and retrieve ID
  var id = 0;

  // TODO: show url to user : "/index.html#id=" + id + "&key="+ key

  // for debugging purposes 
  document.getElementById("EncryptedValue").innerHTML =  enc //gaat het geëncypteerd bericht tonen
}

function decrypteer() {
  var encryptedMessage = document.getElementById("EncryptedValue").innerHTML; //gaat het geëncrypteerd bericht ophalen
  var key = document.getElementById("key").innerHTML; //Gaat de key ophalen

  var decrypt = CryptoJS.AES.decrypt(encryptedMessage, key); //gaat encrypted message decrypteren met behulp van de key
  document.getElementById("decrypted").innerHTML = CryptoJS.enc.Utf8.stringify(decrypt); //toont het bericht
}

const generateKey = size => {
  let result = [];
  let hexRef = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];

  for (let i = 0; i < size; i++) {
    result.push(hexRef[Math.floor(Math.random() * 16)]);
  }
  return result.join('');
}

//dit is de simpele versie
// var encrypted = CryptoJS.AES.encrypt("**MySEcret stuff", "Secret Passphrase");
// console.log("encrypted",encrypted);
// var decrypted = CryptoJS.AES.decrypt(encrypted, "Secret Passphrase");
// console.log("decrypted", CryptoJS.enc.Utf8.stringify( decrypted));