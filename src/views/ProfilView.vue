<template>
  <div class="profil-view animate-fade-in">
    <!-- Glow Background -->
    <div class="glow-spot" style="top: 20%; right: -10%;"></div>
    <div class="glow-spot" style="top: 70%; left: -10%;"></div>

    <!-- Header Section -->
    <section class="page-header section-padding text-center">
      <div class="container">
        <span class="section-badge">Profil Kampus</span>
        <h1 class="gradient-text">Tentang UMMADA Cirebon</h1>
        <p class="page-subtitle">Mengenal lebih dekat sejarah, visi, misi, dan tujuan Universitas Muhammadiyah Ahmad Dahlan Cirebon.</p>
      </div>
    </section>

    <!-- Visi Misi Section -->
    <section class="visimisi-section section-padding">
      <div class="container grid-2">
        <div class="visi-card glass-card">
          <div class="accent-line"></div>
          <span class="card-badge">Visi Kami</span>
          <h2>{{ profil.visiMisi?.visi?.title }}</h2>
          <p class="visi-text">"{{ profil.visiMisi?.visi?.content }}"</p>
        </div>

        <div class="misi-card glass-card">
          <span class="card-badge">Misi Kami</span>
          <h2>{{ profil.visiMisi?.misi?.title }}</h2>
          <ul class="misi-list">
            <li v-for="(misiItem, idx) in profil.visiMisi?.misi?.items" :key="idx">
              <span class="misi-num">{{ idx + 1 }}</span>
              <p>{{ misiItem }}</p>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Sejarah Section -->
    <section class="sejarah-section section-padding">
      <div class="container">
        <div class="sejarah-wrapper glass-card">
          <span class="section-badge">Sejarah Singkat</span>
          <h2>{{ profil.about?.historyTitle }}</h2>
          <p class="sejarah-desc">{{ profil.about?.description }}</p>
          
          <div class="merger-institutions-grid grid-3">
            <div class="inst-card">
              <div class="inst-icon">🏥</div>
              <h4>STIKes Muhammadiyah Cirebon</h4>
              <p>Sekolah Tinggi Ilmu Kesehatan Muhammadiyah Cirebon</p>
            </div>
            <div class="inst-card">
              <div class="inst-icon">💊</div>
              <h4>STF Muhammadiyah Cirebon</h4>
              <p>Sekolah Tinggi Farmasi Muhammadiyah Cirebon</p>
            </div>
            <div class="inst-card">
              <div class="inst-icon">🩺</div>
              <h4>STIKes Ahmad Dahlan Cirebon</h4>
              <p>Sekolah Tinggi Ilmu Kesehatan Ahmad Dahlan Cirebon</p>
            </div>
          </div>

          <div class="merger-legal">
            <p><strong>Landasan Hukum Penggabungan:</strong></p>
            <p>{{ profil.about?.mergerDetail }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Tujuan & Sasaran Section -->
    <section class="tujuan-sasaran-section section-padding">
      <div class="container grid-2">
        <!-- Tujuan Column -->
        <div class="tujuan-col">
          <div class="section-header">
            <span class="section-badge">Cita-Cita</span>
            <h2>{{ profil.tujuan?.title }}</h2>
            <p>Tujuan utama institusi dalam menghasilkan lulusan, karya penelitian, pengabdian, dan tata kelola universitas.</p>
          </div>

          <div class="tujuan-list">
            <div v-for="(tujuanItem, idx) in profil.tujuan?.items" :key="idx" class="tujuan-item glass-card">
              <span class="num-badge">{{ idx + 1 }}</span>
              <p>{{ tujuanItem }}</p>
            </div>
          </div>
        </div>

        <!-- Sasaran Column -->
        <div class="sasaran-col">
          <div class="section-header">
            <span class="section-badge">Target Strategis</span>
            <h2>{{ profil.sasaran?.title }}</h2>
            <p>Sasaran strategis UMMADA Cirebon dalam jangka pendek dan menengah untuk mendukung terwujudnya visi universitas.</p>
          </div>

          <div class="sasaran-list">
            <div v-for="(sasaranItem, idx) in profil.sasaran?.items" :key="idx" class="sasaran-item">
              <span class="bullet-dot"></span>
              <p>{{ sasaranItem }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import profilData from '../content/profil.json'

const profil = ref(profilData)
</script>

<style scoped>
.profil-view {
  position: relative;
  overflow: hidden;
}

/* Page Header */
.page-header {
  background: radial-gradient(circle at 50% 100%, #cce5e2 0%, var(--bg-dark) 85%);
}

.page-header h1 {
  font-size: 2.75rem;
  margin-bottom: 1rem;
}

.page-subtitle {
  color: var(--text-secondary);
  max-width: 600px;
  margin: 0 auto;
  font-size: 1.05rem;
}

/* Visi Misi Section */
.visi-card {
  position: relative;
  overflow: hidden;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.accent-line {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 4px;
  background-color: var(--primary);
}

.card-badge {
  font-family: var(--font-title);
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: var(--primary);
  margin-bottom: 0.5rem;
}

.visi-card h2 {
  font-size: 2rem;
  margin-bottom: 1.5rem;
  letter-spacing: 1px;
}

.visi-text {
  font-family: var(--font-title);
  font-size: 1.35rem;
  font-weight: 600;
  line-height: 1.5;
  color: var(--text-primary);
  font-style: italic;
}

.misi-card h2 {
  font-size: 1.75rem;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  padding-bottom: 0.75rem;
}

.misi-list {
  list-style: none;
}

.misi-list li {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
  align-items: flex-start;
}

.misi-num {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: var(--primary);
  color: #000000;
  font-weight: 700;
  font-size: 0.8rem;
  flex-shrink: 0;
  margin-top: 2px;
}

.misi-list p {
  color: var(--text-secondary);
  font-size: 0.95rem;
}

/* Sejarah Section */
.sejarah-wrapper {
  padding: 3rem;
}

.sejarah-wrapper h2 {
  font-size: 2rem;
  margin-bottom: 1.5rem;
}

.sejarah-desc {
  font-size: 1.1rem;
  color: var(--text-secondary);
  margin-bottom: 3rem;
  line-height: 1.7;
}

.merger-institutions-grid {
  margin-bottom: 3rem;
}

.inst-card {
  background-color: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(9, 163, 154, 0.08);
  border-radius: 12px;
  padding: 1.5rem;
  text-align: center;
  transition: all var(--transition-fast);
}

.inst-card:hover {
  border-color: var(--primary);
  background-color: var(--primary-light);
  transform: translateY(-2px);
}

.inst-icon {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.inst-card h4 {
  font-size: 1.05rem;
  margin-bottom: 0.5rem;
}

.inst-card p {
  font-size: 0.85rem;
  color: var(--text-secondary);
}

.merger-legal {
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  padding-top: 1.75rem;
  font-size: 0.925rem;
  color: var(--text-secondary);
  line-height: 1.7;
}

/* Tujuan & Sasaran Section */
.tujuan-col .section-header, .sasaran-col .section-header {
  margin-bottom: 2rem;
}

.tujuan-col h2, .sasaran-col h2 {
  font-size: 1.85rem;
  margin-bottom: 0.5rem;
}

.tujuan-col p, .sasaran-col p {
  color: var(--text-secondary);
  font-size: 0.95rem;
}

.tujuan-list {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.tujuan-item {
  display: flex;
  gap: 1.25rem;
  align-items: flex-start;
  padding: 1.5rem;
}

.tujuan-item:hover {
  transform: translateX(4px);
}

.num-badge {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 8px;
  background-color: var(--primary-light);
  border: 1px solid var(--border-color);
  color: var(--primary);
  font-family: var(--font-title);
  font-weight: 700;
  font-size: 1rem;
  flex-shrink: 0;
}

.tujuan-item p {
  font-size: 0.95rem;
  color: var(--text-secondary);
  line-height: 1.5;
}

.sasaran-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  border-radius: 16px;
  padding: 2rem;
}

.sasaran-item {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
}

.bullet-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: var(--primary);
  margin-top: 9px;
  flex-shrink: 0;
}

.sasaran-item p {
  font-size: 0.95rem;
  color: var(--text-secondary);
}
</style>
