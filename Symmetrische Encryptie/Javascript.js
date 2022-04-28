
function encrypteer() {

  var encrypted = CryptoJS.AES.encrypt("**MySEcret stuff", "Secret Passphrase");
    console.log("encrypted",encrypted);
var decrypted = CryptoJS.AES.decrypt(encrypted, "Secret Passphrase");
console.log("decrypted", CryptoJS.enc.Utf8.stringify( decrypted));

  //var key = CryptoJS.enc.Hex.parse(generateKey(32));
  var key = generateKey(32);
  document.getElementById("key").innerHTML = key //gaat het encryptiesleutel tonen
  
  var msg = document.getElementById("text").value;

  var enc = CryptoJS.AES.encrypt(msg,key);

  // TODO: CALL API to store ENC and retrieve ID
  var id = 0;

  // TODO: show url to user : "/index.html#id=" + id + "&key="+ key

  // for debugging purposes 
  document.getElementById("EncryptedValue").innerHTML =  enc //gaat het geëncypteerd bericht tonen
}

function decrypteer() {
  var encryptedMessage = document.getElementById("EncryptedValue").innerHTML;
  var key = document.getElementById("key").innerHTML; //krijgt een string terug
  // var hexkey = stringToHex(key)

  var decrypt = CryptoJS.AES.decrypt(encryptedMessage, key);
  document.getElementById("decrypted").innerHTML = decrypt;//toont het bericht
  console.log(decrypt)
  
}

const generateKey = size => {
  let result = [];
  let hexRef = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];

  for (let i = 0; i < size; i++) {
    result.push(hexRef[Math.floor(Math.random() * 16)]);
  }
  console.log(result)
  return result.join('');
}

// function stringToHex(key){
//   let result = [];

//   for (let i = 0; i < key.length; i++) {
//     result.push(key[i] = " " + key[i]);
//   }
//   console.log(result)

//   return result.join('');
// }

//dit maakt een random 16 bit hexa getal aan. Die we nodig hebben voor een random Encryptie sleutel





// wachtwoord, encrypteerd bericht slaan we op in een databank.
// het probleem hier is dat er geen random code aangemaakt word waarmee er geëncrypteerd word.