const fs = require('fs');
const path = require('path');

const distDir = path.join(__dirname, 'dist', 'assets');
const files = fs.readdirSync(distDir);

const cssFile = files.find(f => f.endsWith('.css'));
const jsFile = files.find(f => f.endsWith('.js'));

if (!cssFile || !jsFile) {
  console.error('Could not find built CSS or JS in dist/assets');
  process.exit(1);
}

const css = fs.readFileSync(path.join(distDir, cssFile), 'utf8');
const js = fs.readFileSync(path.join(distDir, jsFile), 'utf8');

const faviconPath = path.join(__dirname, 'public', 'favicon.png');
const faviconBase64 = fs.existsSync(faviconPath)
  ? `data:image/png;base64,${fs.readFileSync(faviconPath).toString('base64')}`
  : './favicon.png';

const html = `<!DOCTYPE html>
<html lang="id">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/png" href="${faviconBase64}" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Luce - Perhiasan Eksklusif & Abadi</title>
    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <style>
${css}
    </style>
  </head>
  <body class="bg-stone-100 min-h-screen">
    <div id="root"></div>
    <script>
${js}
    </script>
  </body>
</html>`;

const outputPath = path.join(__dirname, 'preview.html');
fs.writeFileSync(outputPath, html, 'utf8');
console.log('Successfully generated preview.html at:', outputPath);
