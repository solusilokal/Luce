# Luce Fine Jewelry - Mini Website

Website interaktif perhiasan mewah Luce (Tugas Magang Solusilokal.Id).

## Cara Menjalankan & Preview

Ada beberapa cara mudah untuk melihat preview website ini:

### 1. Langsung Buka File Preview (Paling Cepat / Tanpa Terminal)
Cukup klik ganda (double-click) file **`preview.html`** di folder ini menggunakan browser pilihan Anda (Google Chrome, Microsoft Edge, Mozilla Firefox, dll).
File ini sudah berisi seluruh aset (React + Tailwind CSS + Lucide Icons) dalam satu berkas HTML mandiri (*standalone*).

### 2. Melalui Local Development Server (Vite)
Jalankan server lokal untuk mendapatkan fitur *Hot Module Replacement* (perubahan kode langsung terlihat seketika):

```bash
npm run dev
```

Buka URL di browser:
👉 **[http://localhost:3000](http://localhost:3000)**

### 3. Build & Regenerate Preview
Jika Anda mengubah konten atau komponen di [luce_jewelry.tsx](file:///c:/Users/U%20S%20E%20R/Downloads/Tugas%20Magang%20Solusilokal.Id/Mini%20Website/jual%20perhiasan/luce_jewelry.tsx):

```bash
npm run build
```

Perintah ini akan mengompilasi proyek Vite ke folder `dist/` dan otomatis memperbarui file [preview.html](file:///c:/Users/U%20S%20E%20R/Downloads/Tugas%20Magang%20Solusilokal.Id/Mini%20Website/jual%20perhiasan/preview.html).

---

## Struktur Berkas Proyek

- **[luce_jewelry.tsx](file:///c:/Users/U%20S%20E%20R/Downloads/Tugas%20Magang%20Solusilokal.Id/Mini%20Website/jual%20perhiasan/luce_jewelry.tsx)**: Komponen utama halaman perhiasan Luce.
- **[preview.html](file:///c:/Users/U%20S%20E%20R/Downloads/Tugas%20Magang%20Solusilokal.Id/Mini%20Website/jual%20perhiasan/preview.html)**: File HTML mandiri siap pakai untuk preview langsung di browser tanpa server.
- **[src/App.tsx](file:///c:/Users/U%20S%20E%20R/Downloads/Tugas%20Magang%20Solusilokal.Id/Mini%20Website/jual%20perhiasan/src/App.tsx)**: Penghubung modul Vite ke `luce_jewelry.tsx`.
- **[src/main.tsx](file:///c:/Users/U%20S%20E%20R/Downloads/Tugas%20Magang%20Solusilokal.Id/Mini%20Website/jual%20perhiasan/src/main.tsx)**: Entry point React DOM.
- **[src/index.css](file:///c:/Users/U%20S%20E%20R/Downloads/Tugas%20Magang%20Solusilokal.Id/Mini%20Website/jual%20perhiasan/src/index.css)**: Konfigurasi Tailwind CSS dan font Google (Playfair Display & Plus Jakarta Sans).
- **[tailwind.config.js](file:///c:/Users/U%20S%20E%20R/Downloads/Tugas%20Magang%20Solusilokal.Id/Mini%20Website/jual%20perhiasan/tailwind.config.js)**: Konfigurasi styling Tailwind CSS.
- **[vite.config.ts](file:///c:/Users/U%20S%20E%20R/Downloads/Tugas%20Magang%20Solusilokal.Id/Mini%20Website/jual%20perhiasan/vite.config.ts)**: Konfigurasi server Vite.
