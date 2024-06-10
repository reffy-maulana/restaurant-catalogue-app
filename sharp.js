const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const target = path.resolve(__dirname, 'src/public/images');
const destination = path.resolve(__dirname, 'dist/images');

if (!fs.existsSync(destination)) {
  fs.mkdirSync(destination, { recursive: true });
}

fs.readdirSync(target).forEach((image) => {
  // Pastikan file tersebut adalah file gambar
  if (!fs.lstatSync(path.resolve(target, image)).isFile()) {
    return;
  }

  // Buat path lengkap untuk gambar asli
  const originalImagePath = path.resolve(target, image);
  const imageNameWithoutExt = path.parse(image).name;

  // Ubah ukuran gambar dengan lebar 800px, dengan suffix -medium.jpg
  sharp(originalImagePath)
    .resize(800)
    .toFile(path.resolve(destination, `${imageNameWithoutExt}-medium.jpg`), (err, info) => {
      if (err) {
        console.error(`Error processing ${image} for medium size:`, err);
      } else {
        console.log(`Processed ${image} for medium size successfully:`, info);
      }
    });

  // Ubah ukuran gambar dengan lebar 480px, dengan suffix -small.jpg
  sharp(originalImagePath)
    .resize(480)
    .toFile(path.resolve(destination, `${imageNameWithoutExt}-small.jpg`), (err, info) => {
      if (err) {
        console.error(`Error processing ${image} for small size:`, err);
      } else {
        console.log(`Processed ${image} for small size successfully:`, info);
      }
    });
});
