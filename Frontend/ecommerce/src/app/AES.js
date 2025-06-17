// Module 1: AES Encryption/Decryption (256-bit) using CryptoJS (Frontend)
// Install via npm: npm install crypto-js
import CryptoJS from 'crypto-js';

export function encryptAES(plainText, secretKey) {
  return CryptoJS.AES.encrypt(plainText, secretKey).toString();
}

export function decryptAES(cipherText, secretKey) {
  const bytes = CryptoJS.AES.decrypt(cipherText, secretKey);
  return bytes.toString(CryptoJS.enc.Utf8);
}
