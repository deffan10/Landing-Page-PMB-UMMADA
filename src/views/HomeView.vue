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
        <div class="section-header text-center">
          <span class="section-badge">Jalur Pendaftaran</span>
          <h2>Pilihan Jalur Masuk UMMADA</h2>
          <p class="section-subtitle">Tersedia berbagai pilihan jalur pendaftaran reguler maupun prestasi untuk calon mahasiswa.</p>
        </div>

        <!-- Desktop Tabs Layout (Visible > 900px) -->
        <div class="desktop-only-tabs tabs-container grid-2" @mouseenter="stopAutoplay" @mouseleave="startAutoplay">
          <!-- Left Column: Tabs List -->
          <div class="tabs-list-wrapper">
            <button 
              v-for="(jalur, index) in home.jalurMasuk" 
              :key="jalur.code"
              class="tab-item-btn"
              :class="{ 'active': activeJalurIndex === index }"
              @click="selectJalur(index)"
            >
              <span class="tab-code">{{ jalur.code }}</span>
              <span class="tab-name">{{ jalur.name }}</span>
            </button>
          </div>

          <!-- Right Column: Active Card -->
          <div class="tab-content-wrapper">
            <transition name="fade-slide" mode="out-in">
              <div 
                v-if="home.jalurMasuk?.[activeJalurIndex]" 
                :key="activeJalurIndex"
                class="tab-detail-card glass-card"
              >
                <div class="card-glow-spot"></div>
                <span class="badge-accent">Jalur {{ home.jalurMasuk[activeJalurIndex].code }}</span>
                <h3>{{ home.jalurMasuk[activeJalurIndex].name }}</h3>
                <p class="tab-desc">{{ home.jalurMasuk[activeJalurIndex].description }}</p>
                <div class="tab-action-footer">
                  <a :href="home.hero?.ctaRegisterUrl" class="btn btn-primary">Pilih Jalur Ini</a>
                </div>
              </div>
            </transition>
          </div>
        </div>

        <!-- Mobile Card Slider Layout (Visible <= 900px) -->
        <div class="mobile-only-slider slider-container">
          <div class="slider-track">
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
        <div class="section-header text-center">
          <span class="section-badge">Pilihan Program Studi</span>
          <h2>Program Studi Unggulan UMMADA</h2>
          <p class="section-subtitle">Pilih program studi masa depanmu untuk berkarir secara profesional di dunia kesehatan, sains, dan bisnis.</p>
        </div>

        <!-- Desktop Tabs Layout (Visible > 900px) -->
        <div class="desktop-only-tabs tabs-container grid-2" @mouseenter="stopAutoplay" @mouseleave="startAutoplay">
          <!-- Left Column: Tabs List -->
          <div class="tabs-list-wrapper">
            <button 
              v-for="(prodi, index) in programStudi" 
              :key="index"
              class="tab-item-btn"
              :class="{ 'active': activeProdiIndex === index }"
              @click="selectProdi(index)"
            >
              <span class="tab-icon">⚡</span>
              <span class="tab-name">{{ prodi.name }}</span>
            </button>
          </div>

          <!-- Right Column: Active Card -->
          <div class="tab-content-wrapper">
            <transition name="fade-slide" mode="out-in">
              <div 
                v-if="programStudi[activeProdiIndex]" 
                :key="activeProdiIndex"
                class="tab-detail-card glass-card prodi-detail-card"
              >
                <div class="card-glow-spot"></div>
                <div class="prodi-card-header">
                  <span class="prodi-badge">Terakreditasi</span>
                  <h3>{{ programStudi[activeProdiIndex].name }}</h3>
                </div>
                <p class="tab-desc">{{ programStudi[activeProdiIndex].description }}</p>
                
                <div class="prodi-prospek">
                  <strong>Prospek Karir Lulusan:</strong>
                  <ul>
                    <li v-for="(job, idx) in programStudi[activeProdiIndex].prospek" :key="idx">
                      {{ job }}
                    </li>
                  </ul>
                </div>
                <div class="tab-action-footer">
                  <router-link to="/fakultas" class="btn btn-primary">Informasi Fakultas</router-link>
                </div>
              </div>
            </transition>
          </div>
        </div>

        <!-- Mobile Card Slider Layout (Visible <= 900px) -->
        <div class="mobile-only-slider slider-container">
          <div class="slider-track">
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

    <!-- Alur Pendaftaran Section -->
    <section class="alur-section section-padding">
      <div class="container">
        <div class="section-header text-center">
          <span class="section-badge">Prosedur</span>
          <h2>Alur Pendaftaran Mahasiswa Baru</h2>
          <p class="section-subtitle">Ikuti langkah-langkah berikut untuk melakukan pendaftaran secara lengkap dan resmi di UMMADA.</p>
        </div>

        <div class="timeline-wrapper">
          <div class="timeline-grid">
            <div 
              v-for="(step, idx) in alurPendaftaran" 
              :key="idx" 
              class="timeline-node glass-card"
            >
              <div class="node-num">{{ idx + 1 }}</div>
              <h3>{{ step.title }}</h3>
              <p>{{ step.desc }}</p>
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
import { ref, onMounted, onUnmounted } from 'vue'
import homeData from '../content/home.json'
import kontakData from '../content/kontak.json'
import qrCodeUrl from '../assets/qr-biaya.jpg'

const home = ref(homeData)
const kontak = ref(kontakData)

const activeJalurIndex = ref(0)
const activeProdiIndex = ref(0)

let jalurInterval = null
let prodiInterval = null

const startAutoplay = () => {
  stopAutoplay() // Prevent overlaps
  jalurInterval = setInterval(() => {
    if (home.value.jalurMasuk && home.value.jalurMasuk.length > 0) {
      activeJalurIndex.value = (activeJalurIndex.value + 1) % home.value.jalurMasuk.length
    }
  }, 5000)

  prodiInterval = setInterval(() => {
    if (programStudi.value.length > 0) {
      activeProdiIndex.value = (activeProdiIndex.value + 1) % programStudi.value.length
    }
  }, 5000)
}

const stopAutoplay = () => {
  if (jalurInterval) clearInterval(jalurInterval)
  if (prodiInterval) clearInterval(prodiInterval)
}

const selectJalur = (index) => {
  activeJalurIndex.value = index
  clearInterval(jalurInterval)
  jalurInterval = setInterval(() => {
    if (home.value.jalurMasuk && home.value.jalurMasuk.length > 0) {
      activeJalurIndex.value = (activeJalurIndex.value + 1) % home.value.jalurMasuk.length
    }
  }, 7000) // Delay restart after click
}

const selectProdi = (index) => {
  activeProdiIndex.value = index
  clearInterval(prodiInterval)
  prodiInterval = setInterval(() => {
    if (programStudi.value.length > 0) {
      activeProdiIndex.value = (activeProdiIndex.value + 1) % programStudi.value.length
    }
  }, 7000) // Delay restart after click
}

onMounted(() => {
  startAutoplay()
})

onUnmounted(() => {
  stopAutoplay()
})

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

const alurPendaftaran = ref([
  { title: "Bikin Akun", desc: "Buat akun pendaftaran PMB dengan mengisi email aktif dan password." },
  { title: "Isi Biodata", desc: "Lengkapi data diri dasar secara benar untuk inisialisasi akun." },
  { title: "Pilih Jalur", desc: "Tentukan jalur masuk (Reguler/PPMB/RPL) yang sesuai persyaratan." },
  { title: "Bayar Formulir", desc: "Lakukan pembayaran biaya formulir pendaftaran melalui bank mitra." },
  { title: "Biodata Tambahan", desc: "Lengkapi data riwayat sekolah, data orang tua, dan berkas pendukung." },
  { title: "Upload Berkas", desc: "Unggah dokumen persyaratan (scan rapor, ijazah, KTP/KK, foto)." },
  { title: "Tahap Seleksi", desc: "Mengikuti evaluasi seleksi nilai rapor atau ujian berbasis CBT." },
  { title: "Daftar Ulang", desc: "Pengumuman kelulusan, registrasi administrasi, dan verifikasi akhir." }
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

.btn-wa {
  flex-shrink: 0;
  padding: 0.65rem 1.25rem;
  font-size: 0.85rem;
}

/* Vertical Tabs Layout (Desktop Only) */
.tabs-container {
  align-items: stretch;
  gap: 2.5rem;
}

.tabs-list-wrapper {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  max-height: 480px;
  overflow-y: auto;
  padding-right: 0.5rem;
}

/* Scrollbar styles for tabs list */
.tabs-list-wrapper::-webkit-scrollbar {
  width: 6px;
}
.tabs-list-wrapper::-webkit-scrollbar-track {
  background: transparent;
}
.tabs-list-wrapper::-webkit-scrollbar-thumb {
  background: rgba(9, 163, 154, 0.2);
  border-radius: 4px;
}
.tabs-list-wrapper::-webkit-scrollbar-thumb:hover {
  background: rgba(9, 163, 154, 0.4);
}

.tab-item-btn {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.1rem 1.5rem;
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  border-radius: 12px;
  color: var(--text-primary);
  text-align: left;
  cursor: pointer;
  transition: all var(--transition-normal);
  font-family: var(--font-title);
  font-weight: 600;
  font-size: 0.98rem;
  box-shadow: var(--shadow-sm);
  backdrop-filter: blur(8px);
}

.tab-item-btn:hover {
  background: var(--bg-surface-hover);
  border-color: rgba(9, 163, 154, 0.3);
  transform: translateX(4px);
}

.tab-item-btn.active {
  background-color: var(--primary);
  color: #ffffff;
  border-color: var(--primary);
  box-shadow: 0 4px 15px rgba(9, 163, 154, 0.3);
}

.tab-code {
  background: rgba(255, 255, 255, 0.2);
  color: inherit;
  width: 28px;
  height: 28px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.85rem;
  font-weight: 700;
  flex-shrink: 0;
}

.tab-icon {
  font-size: 1.1rem;
  flex-shrink: 0;
}

.tab-name {
  flex: 1;
}

/* Detail Active Card */
.tab-content-wrapper {
  position: relative;
}

.tab-detail-card {
  padding: 3rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.tab-detail-card h3 {
  font-size: 2.25rem;
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 1.25rem;
  color: var(--text-primary);
}

.tab-desc {
  font-size: 1.05rem;
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 2rem;
}

.badge-accent {
  display: inline-block;
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  color: var(--primary);
  background-color: var(--primary-light);
  padding: 0.3rem 0.75rem;
  border-radius: 6px;
  margin-bottom: 0.75rem;
}

.tab-action-footer {
  margin-top: auto;
}

/* Mobile vs Desktop Display Toggle Rules */
@media (min-width: 901px) {
  .mobile-only-slider {
    display: none !important;
  }
}

@media (max-width: 900px) {
  .desktop-only-tabs {
    display: none !important;
  }
  
  .mobile-only-slider {
    display: block !important;
  }
}

/* Mobile Slider styling */
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
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.slider-track::-webkit-scrollbar {
  display: none;
}

.mobile-only-slider .jalur-card {
  flex: 0 0 320px;
  scroll-snap-align: start;
  display: flex;
  flex-direction: column;
}

.mobile-only-slider .prodi-card {
  flex: 0 0 320px;
  scroll-snap-align: start;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 440px;
}

@media (max-width: 480px) {
  .mobile-only-slider .jalur-card,
  .mobile-only-slider .prodi-card {
    flex: 0 0 270px;
  }
}

/* Prodi Active Details (Desktop) */
.prodi-detail-card {
  justify-content: flex-start;
}

.prodi-detail-card h3 {
  font-size: 2rem;
  margin-bottom: 0.5rem;
}

.prodi-badge {
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  color: #ffffff;
  background-color: var(--primary);
  padding: 0.25rem 0.65rem;
  border-radius: 4px;
  display: inline-block;
  margin-bottom: 0.5rem;
}

.prodi-prospek {
  margin-bottom: 2rem;
  background: rgba(9, 163, 154, 0.04);
  padding: 1.5rem;
  border-radius: 12px;
  border: 1px dashed rgba(9, 163, 154, 0.2);
}

.prodi-prospek strong {
  display: block;
  font-size: 0.95rem;
  color: var(--text-primary);
  margin-bottom: 0.75rem;
}

.prodi-prospek ul {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.75rem;
  list-style: none;
  padding-left: 0;
}

@media (max-width: 576px) {
  .prodi-prospek ul {
    grid-template-columns: 1fr;
  }
}

.prodi-prospek li {
  font-size: 0.9rem;
  color: var(--text-secondary);
  position: relative;
  padding-left: 1.25rem;
}

.prodi-prospek li::before {
  content: '⚡';
  position: absolute;
  left: 0;
  font-size: 0.8rem;
  color: var(--primary);
}

/* Timeline / Alur Pendaftaran (Desktop vs Mobile swipe) */
.timeline-wrapper {
  margin-top: 3.5rem;
}

.timeline-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
}

.timeline-node {
  padding: 2rem;
  position: relative;
  transition: all var(--transition-normal);
}

.timeline-node:hover {
  transform: translateY(-5px);
  border-color: var(--primary);
  box-shadow: var(--shadow-lg);
}

.node-num {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--primary) 0%, #00d2c4 100%);
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  font-size: 1.1rem;
  margin-bottom: 1.25rem;
  box-shadow: 0 4px 10px rgba(9, 163, 154, 0.3);
}

.timeline-node h3 {
  font-size: 1.25rem;
  margin-bottom: 0.75rem;
  color: var(--text-primary);
}

.timeline-node p {
  font-size: 0.9rem;
  color: var(--text-secondary);
  line-height: 1.5;
}

/* Responsive Mobile Carousel for Timeline/Alur */
@media (max-width: 992px) {
  .timeline-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .timeline-grid {
    display: flex;
    gap: 1.25rem;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    padding: 1rem 0.25rem 2rem;
    margin: 0 -1rem;
    padding-left: 1rem;
    padding-right: 1rem;
    -webkit-overflow-scrolling: touch;
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  
  .timeline-grid::-webkit-scrollbar {
    display: none;
  }
  
  .timeline-node {
    flex: 0 0 280px;
    scroll-snap-align: start;
  }
}

/* Transition Animations */
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.3s cubic-bezier(0.55, 0, 0.1, 1);
}

.fade-slide-enter-from {
  opacity: 0;
  transform: translateX(20px);
}

.fade-slide-leave-to {
  opacity: 0;
  transform: translateX(-20px);
}
</style>
