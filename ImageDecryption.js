const fs = require('fs');

// Function to decrypt an image file
function decryptImage(filePath, encryptionKey) {
    // Read the encrypted image file
    fs.readFile(filePath, (err, data) => {
      if (err) throw err;
      
      // Convert the image data into a buffer
      const imageData = Buffer.from(data);
      
      // Loop through each byte and perform decryption
      for (let i = 0; i < imageData.length; i++) {
        // Perform decryption operation (Example: XOR with encryption key)
        imageData[i] ^= encryptionKey;
      }
      
      // Write the decrypted image data back to the file
      fs.writeFile(filePath, imageData, (err) => {
        if (err) throw err;
        console.log('Image decrypted successfully!');
      });
    });
  }

const imagePath ='F:\\ImageForEncryptionTesting\\test.jpg';
const encryptionKey = 0xAB; // Example encryption key

  // Decrypt the image
decryptImage(imagePath, encryptionKey);