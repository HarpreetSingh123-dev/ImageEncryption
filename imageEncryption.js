const fs = require('fs');

// Function to encrypt an image file
function encryptImage(filePath, encryptionKey) {
  // Read the image file
  fs.readFile(filePath, (err, data) => {
    if (err) throw err;
    
    // Convert the image data into a buffer
    const imageData = Buffer.from(data);
    
    // Loop through each byte and perform encryption
    for (let i = 0; i < imageData.length; i++) {
      // Perform encryption operation (Example: XOR with encryption key)
      imageData[i] ^= encryptionKey;
    }
    
    // Write the encrypted image data back to the file
    fs.writeFile(filePath, imageData, (err) => {
      if (err) throw err;
      console.log('Image encrypted successfully!');
    });
  });
}

//F:\\ImageForEncryptionTesting\\test.jpg//
const imagePath ='Your file path here';
const encryptionKey = 0xAB; // Example encryption key

// Encrypt the image
encryptImage(imagePath, encryptionKey);


