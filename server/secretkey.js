


const crypto = require('crypto');

const generateSecretKey = () => {
  const buffer = crypto.randomBytes(32); // Generate a 32-byte buffer
  return buffer.toString('base64'); // Encode buffer to base64 string
};

const secretKey = generateSecretKey();
console.log('JWT Secret Key:', secretKey);
