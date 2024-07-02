// const { Crypto } = require('webcrypto'); // or 'webcrypto'

const key = 'Nx123OTT0876J129Nx123OTT0876J129'; // Nx123OTT0876J129Nx123OTT0876J129 // T20TSportsANDNex
const salt = 'Nx123OTT0910';

// export function encryptData(data) {
//   const jsonString = JSON.stringify(data);
//   let keys = CryptoJS.enc.Utf8.parse(key);
//   let encrypted = CryptoJS.AES.encrypt(jsonString, keys, {
//     mode: CryptoJS.mode.ECB,
//     padding: CryptoJS.pad.Pkcs7,
//   });
//   const ciphertext = encrypted.toString();
//   return ciphertext;
// }





async function importKey(key) {
  const keyBuffer = Buffer.from(key, 'utf8');
  return await crypto.subtle.importKey(
    'raw',
    keyBuffer,
    { name: 'AES-GCM' },
    true,
    ['decrypt']
  );
}



export async function dataDecript(encryptedDataBase64) {
  const keyObject = await importKey(key);
  const iv = Buffer.from(salt, 'utf8');
  const encryptedData = Buffer.from(encryptedDataBase64, 'base64');
  try {
    const decrypted = await crypto.subtle.decrypt(
      {
        name: 'AES-GCM',
        iv: iv,
      },
      keyObject,
      encryptedData
    );

    return Buffer.from(decrypted).toString('utf8');
  } catch (error) {
    throw new Error('Decryption error: ' + error.message);
  }
}