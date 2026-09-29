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

const ogImagePath = path.join(__dirname, 'public', 'og-image.png');
const ogImageBase64 = fs.existsSync(ogImagePath)
  ? `data:image/png;base64,${fs.readFileSync(ogImagePath).toString('base64')}`
  : 'https://solusilokal.github.io/Luce/og-image.png';

const html = `<!DOCTYPE html>
<html lang="id">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/png" href="${faviconBase64}" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    
    <!-- Primary Meta Tags -->
    <title>Luce - Perhiasan Eksklusif & Abadi</title>
    <meta name="title" content="Luce - Perhiasan Eksklusif & Abadi" />
    <meta name="description" content="Temukan kilau sejati Anda dengan koleksi perhiasan eksklusif dari Luce. Mahakarya pengrajin ahli dengan material emas murni dan berlian bersertifikat untuk setiap momen berharga Anda." />
    <meta name="keywords" content="Luce, Perhiasan, Emas 18K, Berlian GIA, Cincin Kawin, Cincin Tunangan, Kalung, Gelang, Anting, Palangka Raya, Custom Jewelry" />
    <meta name="author" content="Luce Fine Jewelry" />
    <meta name="theme-color" content="#D4AF37" />

    <!-- Open Graph / Facebook / WhatsApp -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://solusilokal.github.io/Luce/" />
    <meta property="og:title" content="Luce - Perhiasan Eksklusif & Abadi" />
    <meta property="og:description" content="Temukan kilau sejati Anda dengan koleksi perhiasan eksklusif dari Luce. Mahakarya pengrajin ahli dengan material emas murni dan berlian bersertifikat untuk setiap momen berharga Anda." />
    <meta property="og:image" content="${ogImageBase64}" />
    <meta property="og:image:width" content="800" />
    <meta property="og:image:height" content="1000" />
    <meta property="og:image:alt" content="Luce Fine Jewelry - Perhiasan Eksklusif & Abadi" />
    <meta property="og:site_name" content="Luce Fine Jewelry" />
    <meta property="og:locale" content="id_ID" />

    <!-- Twitter / X -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:url" content="https://solusilokal.github.io/Luce/" />
    <meta name="twitter:title" content="Luce - Perhiasan Eksklusif & Abadi" />
    <meta name="twitter:description" content="Temukan kilau sejati Anda dengan koleksi perhiasan eksklusif dari Luce. Mahakarya pengrajin ahli dengan material emas murni dan berlian bersertifikat untuk setiap momen berharga Anda." />
    <meta name="twitter:image" content="${ogImageBase64}" />

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
