// 1. Génération clé AES 256 bits + IV aléatoire
const aesKey = crypto.randomBytes(32); // 32 bytes = 256 bits
const iv = crypto.randomBytes(16);     // 16 bytes = 128 bits

// 2. Fonction chiffrement AES
function encryptAES(text) {
  const cipher = crypto.createCipheriv('aes-256-gcm', aesKey, iv);
  const encrypted = Buffer.concat([cipher.update(text, 'utf8'), cipher.final()]);
  const tag = cipher.getAuthTag(); // Auth tag pour l'intégrité
  return { encrypted, iv, tag };
}

// 3. Fonction déchiffrement AES
function decryptAES(encrypted, iv, tag) {
  const decipher = crypto.createDecipheriv('aes-256-gcm', aesKey, iv);
  decipher.setAuthTag(tag); // Nécessaire pour vérifier intégrité
  const decrypted = Buffer.concat([decipher.update(encrypted), decipher.final()]);
  return decrypted.toString();
}

// 4. Test AES
const { encrypted, iv: ivAES, tag } = encryptAES("Hello AES!");
console.log('Encrypted (AES):', encrypted.toString('base64'));

const decrypted = decryptAES(encrypted, ivAES, tag);
console.log('Decrypted (AES):', decrypted);
