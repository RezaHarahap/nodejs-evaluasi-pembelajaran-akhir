# Node.js — Evaluasi Pembelajaran Akhir

Repository ini berisi kumpulan latihan evaluasi akhir pembelajaran Node.js yang mencakup konsep inti seperti Buffer, Stream, File System, Process, OS, Child Process, dan Unit Testing.

Project disusun sebagai kumpulan latihan terpisah agar setiap topik dapat dijalankan dan dipelajari secara mandiri.

## Materi yang Dicakup

- Membuat dan menggunakan `Buffer`
- Membuat `Transform Stream`
- Menggunakan `pipe()` pada stream
- Membaca direktori dan menulis file dengan File System
- Menghentikan proses Node.js dengan exit code
- Membaca uptime dan memory menggunakan modul `os`
- Menggunakan environment variable pada Child Process
- Mengelola `stdio` pada Child Process
- Unit testing fungsi synchronous
- Unit testing fungsi callback
- Unit testing fungsi Promise

## Struktur Repository

```text
.
├── 08-1-create-buffer/
├── 09-1-transform-stream/
├── 09-2-piping-stream/
├── 10-1-read-dir-and-write-file/
├── 11-1-exiting-process/
├── 11-2-os-uptime-and-memory/
├── 12-1-child-process-env-var/
├── 12-2-child-process-stdio/
├── 13-1-unit-testing-synchronous/
├── 13-2-unit-testing-callback/
└── 13-3-unit-testing-promise/
```

## Menjalankan Latihan

Masuk ke folder latihan yang ingin dijalankan, kemudian jalankan file utama menggunakan Node.js.

Contoh:

```bash
cd 08-1-create-buffer
node app.js
```

Untuk latihan yang memiliki `package.json`, install dependency terlebih dahulu:

```bash
npm install
npm test
```

## Catatan

Setiap folder berisi `README.md` masing-masing yang menjelaskan instruksi latihan. Beberapa folder juga memiliki file `validate.js` untuk memvalidasi hasil implementasi.

## Author

**Muhammad Reza Pahlevi Harahap**  
GitHub: https://github.com/RezaHarahap

---

Repository ini dibuat sebagai dokumentasi hasil pembelajaran dan evaluasi akhir materi Node.js.