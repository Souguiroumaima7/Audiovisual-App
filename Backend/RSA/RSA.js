const crypto = require('crypto');

// 1. Génération d'une paire RSA 2048 bits
const { publicKey, privateKey } = crypto.generateKeyPairSync('rsa', {
  modulusLength: 2048,                   // Taille clé
  publicKeyEncoding: { type: 'pkcs1', format: 'pem' },
  privateKeyEncoding: { type: 'pkcs1', format: 'pem' }
});

console.log('Public Key:\n', publicKey);    // à partager
console.log('Private Key:\n', privateKey);  // à garder secrète

// 2. Chiffrement avec clé publique
const message = "Hello RSA!";
const encryptedRSA = crypto.publicEncrypt(publicKey, Buffer.from(message));
console.log('Encrypted (RSA):', encryptedRSA.toString('base64'));

// 3. Déchiffrement avec clé privée
const decryptedRSA = crypto.privateDecrypt(privateKey, encryptedRSA);
console.log('Decrypted (RSA):', decryptedRSA.toString());
