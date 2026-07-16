# PMB UMMADA Cirebon - Landing Page SPA

Repositori ini berisi SPA (Single Page Application) untuk Landing Page Informasi Penerimaan Mahasiswa Baru (PMB) Universitas Muhammadiyah Ahmad Dahlan Cirebon (UMMADA). Dibangun menggunakan **Vue 3**, **Vite**, dan **Vue Router**.

Proyek ini hanya mengurusi halaman informasi statis. Pendaftaran akun, login, biodata, dan API dinamis ditangani oleh sistem vendor pihak ketiga melalui konfigurasi Reverse Proxy di server Nginx.

---

## 📁 Struktur Konten (Single Source of Truth)

Semua konten teks, alamat, kontak, dan tautan dokumen diisolasi di folder `/src/content/`. Anda dapat memperbarui informasi di website tanpa menyentuh kode komponen Vue.

- **`src/content/home.json`**: Copywriting Hero section, list Jalur Masuk, dan link biaya kuliah.
- **`src/content/profil.json`**: Sejarah singkat penggabungan, Visi, Misi, Tujuan, dan Sasaran Strategis.
- **`src/content/fakultas.json`**: Pengelompokan program studi per fakultas, jenjang (S1/D3/Profesi), durasi, dan lokasi perkuliahan.
- **`src/content/akreditasi.json`**: Status akreditasi institusi, nomor SK, dan daftar dokumen PDF pendukung.
- **`src/content/kontak.json`**: Email resmi, link media sosial (IG/FB/YT), alamat lengkap 3 kampus, dan nomor WhatsApp admin PMB.

---

## 🛠️ Pengembangan Lokal & Build

### Persyaratan Sistem
- Node.js v20+
- npm v10+

### Langkah-langkah
1. **Instalasi Dependensi**
   ```bash
   npm install
   ```

2. **Jalankan Development Server**
   ```bash
   npm run dev
   ```
   Akses di browser pada: `http://localhost:5173/`

3. **Build untuk Produksi**
   ```bash
   npm run build
   ```
   Hasil build berupa file HTML, CSS, dan JS statis akan digenerate ke dalam folder `/dist/`.
   *Catatan: Seluruh asset hasil build otomatis diisolasi di dalam folder `/dist/asetvue/` untuk menghindari bentrok dengan asset sistem vendor.*

---

## 🌐 Panduan Deployment di Debian 13

Berikut adalah panduan lengkap cara deploy static build SPA ini di server Debian 13 bersandingan dengan sistem vendor.

### 1. Instalasi Stack (Nginx, MariaDB, PHP 8.4, PM2)
Jalankan perintah berikut di Debian 13:
```bash
# Update repository
sudo apt update && sudo apt upgrade -y

# Instal Nginx & MariaDB
sudo apt install nginx mariadb-server curl git unzip -y

# Tambahkan repository Ondřej Surý untuk PHP 8.4
sudo apt install apt-transport-https lsb-release ca-certificates gnupg2 -y
sudo wget -O /etc/apt/trusted.gpg.d/php.gpg https://packages.sury.org/php/apt.gpg
echo "deb https://packages.sury.org/php/ $(lsb_release -sc) main" | sudo tee /etc/apt/sources.list.d/php.list
sudo apt update
sudo apt install php8.4-fpm php8.4-mysql php8.4-mbstring php8.4-xml php8.4-curl php8.4-gd -y

# Instal Node.js & PM2
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install nodejs -y
sudo npm install pm2 -g
```

### 2. Konfigurasi Nginx (Reverse Proxy & Fallback Routing)
SPA ini akan dideploy di subdomain `pmb-test.ummada.ac.id` (atau nantinya `pmb.ummada.ac.id`). Semua path statis diarahkan ke folder `/var/www/pmb-ummada/dist`, sedangkan path fungsional dialihkan ke backend vendor di `pmb.stfmuhammadiyahcirebon.civitas.id`.

Buat file konfigurasi block Nginx:
```bash
sudo nano /etc/nginx/sites-available/pmb-ummada
```

Salin konfigurasi berikut:
```nginx
server {
    listen 80;
    server_name pmb-test.ummada.ac.id;

    root /var/www/pmb-ummada/dist;
    index index.html;

    # 1. Routing Static Assets SPA
    location /asetvue/ {
        alias /var/www/pmb-ummada/dist/asetvue/;
        access_log off;
        expires 365d;
        add_header Cache-Control "public, no-transform";
    }

    location /document/ {
        alias /var/www/pmb-ummada/dist/document/;
        access_log off;
        expires 30d;
    }

    # 2. Reverse Proxy untuk Halaman / Aksi Fungsional Vendor
    # Path-path ini tidak ditangani oleh Vue Router melainkan dikirim langsung ke vendor
    location ~* ^/(login|register|beranda|biodata|pendaftaran|riwayat-pendaftaran|api|__suteki-pmb) {
        proxy_pass https://pmb.ummada.ac.id;
        proxy_set_header Host pmb.ummada.ac.id;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;

        # Penyesuaian SSL untuk proxy pass
        proxy_ssl_server_name on;
        proxy_ssl_session_reuse off;
        
        # Buffer tweaks
        proxy_buffer_size 128k;
        proxy_buffers 4 256k;
        proxy_busy_buffers_size 256k;
    }

    # 3. Fallback Vue Router (History Mode)
    # Untuk rute informasi statis SPA seperti /, /profil, /fakultas, /akreditasi
    location / {
        try_files $uri $uri/ /index.html;
    }

    # Logging
    error_log  /var/log/nginx/pmb_ummada_error.log error;
    access_log /var/log/nginx/pmb_ummada_access.log;
}
```

Aktifkan konfigurasi dan restart Nginx:
```bash
sudo ln -s /etc/nginx/sites-available/pmb-ummada /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

### 3. Setup SSL dengan Certbot (Optional)
```bash
sudo apt install python3-certbot-nginx -y
sudo certbot --nginx -d pmb-test.ummada.ac.id
```

### 4. PM2 & PHP-FPM Service Management
Meskipun SPA ini berupa file statis html/css/js, PHP 8.4-FPM dan PM2 siap berjalan di server untuk service backend internal lainnya jika dibutuhkan di masa mendatang:
- **Cek Status PHP-FPM**: `sudo systemctl status php8.4-fpm`
- **Jalankan Aplikasi Node (PM2)**: `pm2 start app.js --name "internal-api"` (bila ada)
- **Simpan Startup PM2**: `pm2 save && pm2 startup`
