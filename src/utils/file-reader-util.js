
var CryptoJS = require('crypto-js')

export default class FileReaderUtil {
  decode = (encString) => {
    const base64EncodedKeyFromJava = 'MWFlMjIzNDJhYjAzMWE3ZTUzNDEyZjkyMTYwYjc4NGU=';
    const keyForCryptoJS = CryptoJS.enc.Base64.parse(base64EncodedKeyFromJava);
    const decodeBase64 = CryptoJS.enc.Base64.parse(encString)


    const decryptedData = CryptoJS.AES.decrypt(
      {
        ciphertext: decodeBase64
      },
      keyForCryptoJS,
      {
        mode: CryptoJS.mode.ECB
      }
    );

    const decryptedText = decryptedData.toString(CryptoJS.enc.Utf8);
    return decryptedText;
  } 
}
