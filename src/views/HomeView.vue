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
            <span class="highlight-val">14+</span>
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
          <p class="section-subtitle">Tersedia berbagai pilihan jalur masuk untuk memfasilitasi kebutuhan calon mahasiswa baru.</p>
        </div>

        <div class="jalur-grid grid-3">
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
          <div class="qr-wrapper">
            <img :src="home.biayaPerkuliahan?.qrCodeImage" alt="QR Code Biaya PMB UMMADA" class="qr-img" />
            <div class="qr-overlay">
              <span class="scan-text">Scan QR / Klik untuk Rincian Biaya</span>
            </div>
          </div>
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

const home = ref(homeData)
const kontak = ref(kontakData)
</script>

<style scoped>
.home-view {
  position: relative;
  overflow: hidden;
}

/* Hero Styles */
.hero-section {
  padding: 6rem 0 4rem;
  background: radial-gradient(circle at 50% 30%, #0d2624 0%, var(--bg-dark) 80%);
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
</style>
