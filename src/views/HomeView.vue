<template>
  <div class="home-view animate-fade-in">
    <!-- Glow Effect Spots in Background -->
    <div class="glow-spot" style="top: 10%; left: -5%;"></div>
    <div class="glow-spot" style="top: 40%; right: -5%;"></div>

    <!-- Hero Section -->
    <section class="hero-section text-center">
      <div class="container hero-container">
        <span class="section-badge">{{ home.hero?.subtitle }}</span>
        <h1 class="hero-title gradient-text">{{ home.hero?.title }}</h1>
        <p class="hero-desc">{{ home.hero?.description }}</p>
        
        <div class="hero-actions">
          <a :href="home.hero?.ctaRegisterUrl" class="btn btn-primary btn-lg-cta">
            {{ home.hero?.ctaRegisterText }}
            <span class="arrow-icon">→</span>
          </a>
          <a :href="home.hero?.ctaLoginUrl" class="btn btn-secondary btn-lg-cta">
            {{ home.hero?.ctaLoginText }}
          </a>
        </div>

        <!-- Campus Highlights stats -->
        <div class="hero-highlights grid-3">
          <div class="highlight-card glass-card">
            <span class="highlight-val">Baik Sekali</span>
            <span class="highlight-lbl">Akreditasi Universitas</span>
          </div>
          <div class="highlight-card glass-card">
            <span class="highlight-val">8</span>
            <span class="highlight-lbl">Program Studi Unggulan</span>
          </div>
          <div class="highlight-card glass-card">
            <span class="highlight-val">3 Kampus</span>
            <span class="highlight-lbl">Di Wilayah Cirebon</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Jalur Masuk Section -->
    <section class="jalur-section section-padding">
      <div class="container">
        <div class="section-header-flex">
          <div class="section-header-left">
            <span class="section-badge">Jalur Pendaftaran</span>
            <h2>Pilihan Jalur Masuk UMMADA</h2>
            <p class="section-subtitle">Tersedia berbagai pilihan jalur pendaftaran reguler maupun prestasi untuk calon mahasiswa.</p>
          </div>
          <div class="slider-controls">
            <button class="slider-btn prev-btn" @click="scrollLeft(jalurSlider)" aria-label="Previous Slide">←</button>
            <button class="slider-btn next-btn" @click="scrollRight(jalurSlider)" aria-label="Next Slide">→</button>
          </div>
        </div>

        <div class="slider-container">
          <div class="slider-track" ref="jalurSlider">
            <div v-for="jalur in home.jalurMasuk" :key="jalur.code" class="jalur-card glass-card">
              <div class="jalur-badge-code">{{ jalur.code }}</div>
              <h3>{{ jalur.name }}</h3>
              <p>{{ jalur.description }}</p>
              <div class="jalur-action-footer">
                <a :href="home.hero?.ctaRegisterUrl" class="btn btn-secondary btn-block">Pilih Jalur</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Program Studi Section -->
    <section class="prodi-section section-padding">
      <div class="container">
        <div class="section-header-flex">
          <div class="section-header-left">
            <span class="section-badge">Pilihan Program Studi</span>
            <h2>Program Studi Unggulan UMMADA</h2>
            <p class="section-subtitle">Pilih program studi masa depanmu untuk berkarir secara profesional di dunia kesehatan, sains, dan bisnis.</p>
          </div>
          <div class="slider-controls">
            <button class="slider-btn prev-btn" @click="scrollLeft(prodiSlider)" aria-label="Previous Slide">←</button>
            <button class="slider-btn next-btn" @click="scrollRight(prodiSlider)" aria-label="Next Slide">→</button>
          </div>
        </div>

        <div class="slider-container">
          <div class="slider-track" ref="prodiSlider">
            <div v-for="(prodi, index) in programStudi" :key="index" class="prodi-card glass-card">
              <div class="prodi-card-header">
                <span class="prodi-badge">Terakreditasi</span>
                <h3>{{ prodi.name }}</h3>
              </div>
              <p class="prodi-desc">{{ prodi.description }}</p>
              <div class="prodi-prospek">
                <strong>Prospek Kerja:</strong>
                <ul>
                  <li v-for="(job, idx) in prodi.prospek" :key="idx">{{ job }}</li>
                </ul>
              </div>
              <div class="prodi-action-footer">
                <router-link to="/fakultas" class="btn btn-secondary btn-block">Detail Jurusan</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Biaya Perkuliahan Section -->
    <section class="biaya-section section-padding">
      <div class="container grid-2 align-center">
        <div class="biaya-content">
          <span class="section-badge">Keuangan</span>
          <h2>{{ home.biayaPerkuliahan?.title }}</h2>
          <p class="biaya-desc">{{ home.biayaPerkuliahan?.description }}</p>
          
          <div class="biaya-cta-group">
            <a :href="home.biayaPerkuliahan?.linkBrosur" target="_blank" rel="noopener" class="btn btn-primary">
              {{ home.biayaPerkuliahan?.linkBrosurText }}
            </a>
          </div>
        </div>
        
        <div class="biaya-qr-display text-center">
          <a :href="home.biayaPerkuliahan?.linkBrosur" target="_blank" rel="noopener" class="qr-link">
            <div class="qr-wrapper">
              <img :src="qrCodeUrl" alt="QR Code Biaya PMB UMMADA" class="qr-img" />
              <div class="qr-overlay">
                <span class="scan-text">Scan QR / Klik untuk Rincian Biaya</span>
              </div>
            </div>
          </a>
          <p class="qr-caption">Brosur rincian biaya kuliah tahun akademik 2026/2027</p>
        </div>
      </div>
    </section>

    <!-- Hotline & Quick Contact Section -->
    <section class="quick-contact section-padding">
      <div class="container">
        <div class="section-header text-center">
          <span class="section-badge">Bantuan Pendaftaran</span>
          <h2>Layanan Informasi PMB</h2>
          <p class="section-subtitle">Punya pertanyaan seputar pendaftaran? Hubungi Admin PMB Fakultas masing-masing via WhatsApp.</p>
        </div>

        <div class="phone-grid grid-2">
          <div v-for="(phone, idx) in kontak.phoneLines" :key="idx" class="phone-card glass-card">
            <div class="phone-info">
              <h4>{{ phone.label }}</h4>
              <p class="phone-num">{{ phone.number }}</p>
            </div>
            <a :href="phone.waUrl" target="_blank" rel="noopener" class="btn btn-primary btn-wa">
              Chat WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import homeData from '../content/home.json'
import kontakData from '../content/kontak.json'
import qrCodeUrl from '../assets/qr-biaya.jpg'

const home = ref(homeData)
const kontak = ref(kontakData)

const jalurSlider = ref(null)
const prodiSlider = ref(null)

const scrollLeft = (sliderRef) => {
  if (sliderRef) {
    sliderRef.scrollBy({ left: -380, behavior: 'smooth' })
  }
}

const scrollRight = (sliderRef) => {
  if (sliderRef) {
    sliderRef.scrollBy({ left: 380, behavior: 'smooth' })
  }
}

const programStudi = ref([
  {
    name: "S1 Kebidanan",
    description: "Mempersiapkan sarjana kebidanan profesional dengan keahlian asuhan kebidanan klinis dan kepemimpinan di sektor kesehatan reproduksi.",
    prospek: [
      "Bidan Praktik Mandiri (BPM)",
      "Konselor Kesehatan Ibu & Anak",
      "Tenaga Pendidik / Akademisi",
      "Pengelola Klinik Bersalin"
    ]
  },
  {
    name: "Pendidikan Profesi Bidan",
    description: "Pendidikan tahap lanjut profesi bidan untuk mendapatkan sertifikasi Bidan (Bd.) dengan kompetensi klinis unggul berstandar nasional.",
    prospek: [
      "Praktisi Bidan RS / Puskesmas",
      "Pemimpin Unit Layanan Bersalin",
      "Konsultan Kebidanan Komunitas",
      "Tenaga Ahli Instansi Kesehatan"
    ]
  },
  {
    name: "D3 Keperawatan",
    description: "Membentuk perawat vokasional yang kompeten, beretika, dan memiliki ketrampilan tinggi dalam asuhan keperawatan pasien.",
    prospek: [
      "Perawat Klinis RS & Puskesmas",
      "Perawat Home Care Spesialis",
      "Asisten Medis Klinik Swasta",
      "Tenaga Perawat Luar Negeri"
    ]
  },
  {
    name: "S1 Administrasi Rumah Sakit",
    description: "Membekali mahasiswa dengan manajemen pelayanan kesehatan, tata kelola administrasi RS, dan sistem informasi klinis modern.",
    prospek: [
      "Manajer Operasional Rumah Sakit",
      "Administrator Klinik & Lab",
      "Analis Jaminan Kesehatan",
      "Konsultan Manajemen Kesehatan"
    ]
  },
  {
    name: "S1 Farmasi",
    description: "Menyelenggarakan pendidikan kefarmasian ilmiah komprehensif, desain formulasi obat, dan pelayanan kefarmasian komunitas klinis.",
    prospek: [
      "Apoteker Rumah Sakit & Klinik",
      "Quality Control Industri Farmasi",
      "Formulator Obat & Kosmetik",
      "Peneliti Laboratorium R&D"
    ]
  },
  {
    name: "D3 Farmasi",
    description: "Mencetak Asisten Apoteker yang terampil dalam meracik, menyalurkan, dan mengelola sediaan obat-obatan secara legal dan profesional.",
    prospek: [
      "Asisten Apoteker Apotek & RS",
      "Staf Gudang & Logistik Sediaan",
      "Medical Representative",
      "Staf Produksi Industri Farmasi"
    ]
  },
  {
    name: "S1 Akuntansi",
    description: "Mendidik profesional akuntansi dengan keahlian audit keuangan, perpajakan modern, akuntansi syariah, dan sistem informasi bisnis.",
    prospek: [
      "Auditor Eksternal / Internal",
      "Staf Keuangan & Pajak Bisnis",
      "Konsultan Pajak Profesional",
      "Akuntan Sektor Publik & Swasta"
    ]
  },
  {
    name: "S1 Manajemen",
    description: "Mempersiapkan calon manajer dan wirausahawan masa depan dengan keahlian bisnis digital, manajemen SDM, pemasaran, dan keuangan global.",
    prospek: [
      "Manajer Operasional & Bisnis",
      "Wirausahawan (Entrepreneur)",
      "Digital Marketing Specialist",
      "Konsultan Bisnis & Manajemen"
    ]
  }
])
</script>

<style scoped>
.home-view {
  position: relative;
  overflow: hidden;
}

/* Hero Styles */
.hero-section {
  padding: 6rem 0 4rem;
  background: radial-gradient(circle at 50% 30%, #cce5e2 0%, var(--bg-dark) 85%);
}

.hero-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.hero-title {
  font-family: var(--font-title);
  font-size: 3.5rem;
  font-weight: 800;
  max-width: 800px;
  line-height: 1.15;
  margin-bottom: 1.5rem;
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2.25rem;
  }
}

.hero-desc {
  font-size: 1.15rem;
  color: var(--text-secondary);
  max-width: 600px;
  margin-bottom: 2.5rem;
}

.hero-actions {
  display: flex;
  gap: 1.5rem;
  margin-bottom: 4.5rem;
}

@media (max-width: 480px) {
  .hero-actions {
    flex-direction: column;
    width: 100%;
    max-width: 280px;
    gap: 1rem;
  }
}

.btn-lg-cta {
  padding: 0.9rem 2.25rem;
  font-size: 1.05rem;
}

.arrow-icon {
  font-size: 1.2rem;
  transition: transform var(--transition-fast);
}

.btn-primary:hover .arrow-icon {
  transform: translateX(4px);
}

.hero-highlights {
  width: 100%;
  margin-top: 2rem;
}

.highlight-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.75rem;
}

.highlight-val {
  font-family: var(--font-title);
  font-size: 1.75rem;
  font-weight: 800;
  color: var(--primary);
  margin-bottom: 0.25rem;
}

.highlight-lbl {
  font-size: 0.85rem;
  color: var(--text-secondary);
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

/* Section Header */
.section-header {
  margin-bottom: 3.5rem;
}

.section-header h2 {
  font-size: 2.25rem;
  margin-bottom: 0.75rem;
}

.section-subtitle {
  color: var(--text-secondary);
  max-width: 600px;
  margin: 0 auto;
}

/* Jalur Masuk Cards */
.jalur-grid {
  position: relative;
  z-index: 2;
}

.jalur-card {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2.25rem 2rem;
  height: 100%;
}

.jalur-badge-code {
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  font-family: var(--font-title);
  font-size: 2.5rem;
  font-weight: 800;
  color: rgba(9, 163, 154, 0.08);
  line-height: 1;
}

.jalur-card h3 {
  font-size: 1.25rem;
  margin-bottom: 1rem;
  padding-right: 2rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  padding-bottom: 0.75rem;
}

.jalur-card p {
  color: var(--text-secondary);
  font-size: 0.925rem;
  margin-bottom: 2rem;
  flex-grow: 1;
}

/* Biaya Section */
.align-center {
  align-items: center;
}

.biaya-content h2 {
  font-size: 2.25rem;
  margin-bottom: 1.25rem;
}

.biaya-desc {
  color: var(--text-secondary);
  margin-bottom: 2rem;
  font-size: 1.05rem;
}

.biaya-qr-display {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.qr-wrapper {
  position: relative;
  border: 1px solid var(--border-color);
  padding: 1.25rem;
  background-color: #ffffff;
  border-radius: 16px;
  box-shadow: var(--shadow-lg);
  max-width: 260px;
  transition: transform var(--transition-normal);
  cursor: pointer;
}

.qr-wrapper:hover {
  transform: scale(1.03);
}

.qr-img {
  width: 100%;
  border-radius: 8px;
}

.qr-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity var(--transition-fast);
}

.qr-wrapper:hover .qr-overlay {
  opacity: 1;
}

.scan-text {
  font-family: var(--font-title);
  font-weight: 600;
  font-size: 0.85rem;
  color: #ffffff;
  text-align: center;
  padding: 0 1rem;
}

.qr-caption {
  margin-top: 1rem;
  font-size: 0.85rem;
  color: var(--text-secondary);
}

/* Phone Cards */
.phone-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.75rem;
  gap: 1.5rem;
}

@media (max-width: 576px) {
  .phone-card {
    flex-direction: column;
    align-items: flex-start;
    gap: 1.25rem;
  }
}

.phone-info h4 {
  font-size: 1.05rem;
  margin-bottom: 0.25rem;
}

.phone-num {
  font-family: var(--font-title);
  color: var(--primary);
  font-weight: 700;
  font-size: 1.15rem;
}

.btn-wa {
  flex-shrink: 0;
  padding: 0.65rem 1.25rem;
  font-size: 0.85rem;
}

/* Slider Header Controls & Track Styling */
.section-header-flex {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 2.5rem;
}

@media (max-width: 768px) {
  .section-header-flex {
    flex-direction: column;
    align-items: flex-start;
    gap: 1.5rem;
  }
}

.section-header-left {
  max-width: 700px;
}

.slider-controls {
  display: flex;
  gap: 0.75rem;
}

.slider-btn {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 1px solid var(--border-color);
  background: var(--glass-bg);
  color: var(--text-primary);
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all var(--transition-fast);
  backdrop-filter: blur(8px);
}

.slider-btn:hover {
  background: var(--primary);
  color: #ffffff;
  border-color: var(--primary);
  box-shadow: 0 4px 10px rgba(9, 163, 154, 0.2);
}

/* Slider Track styling */
.slider-container {
  width: 100%;
  overflow: hidden;
  position: relative;
  margin: 0 -1rem;
  padding: 0 1rem;
}

.slider-track {
  display: flex;
  gap: 1.5rem;
  overflow-x: auto;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;
  padding: 1rem 0.25rem 2rem;
  -webkit-overflow-scrolling: touch;
}

.slider-track::-webkit-scrollbar {
  display: none;
}

.slider-track {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

/* Slide Cards */
.jalur-card {
  flex: 0 0 360px;
  scroll-snap-align: start;
  display: flex;
  flex-direction: column;
  height: auto;
}

@media (max-width: 480px) {
  .jalur-card {
    flex: 0 0 290px;
  }
}

.prodi-card {
  flex: 0 0 360px;
  scroll-snap-align: start;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 440px;
}

@media (max-width: 480px) {
  .prodi-card {
    flex: 0 0 290px;
    min-height: 480px;
  }
}

.prodi-card-header {
  margin-bottom: 1rem;
}

.prodi-badge {
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  color: #ffffff;
  background-color: var(--primary);
  padding: 0.2rem 0.6rem;
  border-radius: 4px;
  display: inline-block;
  margin-bottom: 0.5rem;
}

.prodi-desc {
  font-size: 0.95rem;
  color: var(--text-secondary);
  line-height: 1.5;
  margin-bottom: 1.25rem;
}

.prodi-prospek {
  margin-bottom: 1.5rem;
}

.prodi-prospek strong {
  display: block;
  font-size: 0.9rem;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
}

.prodi-prospek ul {
  list-style: none;
  padding-left: 0;
}

.prodi-prospek li {
  font-size: 0.9rem;
  color: var(--text-secondary);
  position: relative;
  padding-left: 1.25rem;
  margin-bottom: 0.4rem;
}

.prodi-prospek li::before {
  content: '⚡';
  position: absolute;
  left: 0;
  font-size: 0.8rem;
  color: var(--primary);
}

.prodi-action-footer {
  margin-top: auto;
}
</style>
