<template>
  <div class="akreditasi-view animate-fade-in">
    <!-- Glow Background -->
    <div class="glow-spot" style="top: 20%; right: -10%;"></div>
    <div class="glow-spot" style="top: 60%; left: -10%;"></div>

    <!-- Header Section -->
    <section class="page-header section-padding text-center">
      <div class="container">
        <span class="section-badge">Akreditasi Kampus</span>
        <h1 class="gradient-text">{{ akreditasi.title }}</h1>
        <p class="page-subtitle">{{ akreditasi.subtitle }}</p>
      </div>
    </section>

    <!-- Overview Banner Section -->
    <section class="overview-section section-padding">
      <div class="container">
        <div class="akreditasi-banner glass-card">
          <div class="banner-flex">
            <div class="rating-display">
              <span class="rating-lbl">Akreditasi Institusi</span>
              <span class="rating-val">{{ akreditasi.university?.status }}</span>
            </div>
            <div class="rating-details">
              <h3>Universitas Muhammadiyah Ahmad Dahlan Cirebon</h3>
              <p class="sk-detail">
                <strong>Nomor SK BAN-PT:</strong> <code>{{ akreditasi.university?.skNumber }}</code>
              </p>
              <p class="sk-desc">
                {{ akreditasi.university?.description }} Peringkat akreditasi ini menjamin mutu perkuliahan, kompetensi dosen, dan kualitas lulusan UMMADA Cirebon.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Downloads Files Section -->
    <section class="files-section section-padding">
      <div class="container">
        <div class="section-header text-center">
          <span class="section-badge">Unduh Dokumen</span>
          <h2>Sertifikat & SK Akreditasi</h2>
          <p class="section-subtitle">Silakan unduh dokumen resmi Surat Keputusan (SK) dan Sertifikat Akreditasi untuk keperluan administrasi.</p>
        </div>

        <div class="files-grid grid-2">
          <div v-for="(doc, idx) in akreditasi.documents" :key="idx" class="file-card glass-card">
            <div class="file-icon-wrapper">
              <span class="file-type-badge">PDF</span>
            </div>
            
            <div class="file-info-wrapper">
              <h3>{{ doc.name }}</h3>
              <p>{{ doc.description }}</p>
              <span class="file-size-lbl">Format: {{ doc.size }}</span>
            </div>

            <div class="file-action-wrapper">
              <a :href="doc.fileUrl" download class="btn btn-primary btn-download">
                Unduh File
                <span class="dl-arrow">↓</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import contentAkreditasi from '../content/akreditasi.json'

const akreditasi = ref(contentAkreditasi)
</script>

<style scoped>
/* Page Header */
.page-header {
  background: radial-gradient(circle at 50% 100%, #e0f2f1 0%, var(--bg-dark) 80%);
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

/* Banner Section */
.akreditasi-banner {
  padding: 3rem;
  border-left: 4px solid var(--primary);
}

.banner-flex {
  display: flex;
  align-items: center;
  gap: 3rem;
}

@media (max-width: 768px) {
  .banner-flex {
    flex-direction: column;
    align-items: flex-start;
    gap: 2rem;
  }
}

.rating-display {
  display: flex;
  flex-direction: column;
  background-color: var(--primary-light);
  border: 1px solid var(--border-color);
  padding: 2rem 3rem;
  border-radius: 12px;
  text-align: center;
  align-self: stretch;
  justify-content: center;
  flex-shrink: 0;
}

.rating-lbl {
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  color: var(--text-secondary);
  letter-spacing: 1px;
  margin-bottom: 0.5rem;
}

.rating-val {
  font-family: var(--font-title);
  font-size: 2.5rem;
  font-weight: 800;
  color: var(--primary);
  line-height: 1;
}

.rating-details h3 {
  font-size: 1.65rem;
  margin-bottom: 1rem;
}

.sk-detail {
  font-size: 0.95rem;
  margin-bottom: 0.75rem;
}

.sk-detail code {
  background-color: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.08);
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  color: var(--primary);
  font-size: 0.85rem;
}

.sk-desc {
  color: var(--text-secondary);
  line-height: 1.6;
}

/* Files Section */
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

.files-grid {
  margin-top: 2rem;
}

.file-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2.25rem 2rem;
  height: 100%;
}

.file-icon-wrapper {
  margin-bottom: 1.25rem;
}

.file-type-badge {
  font-family: var(--font-title);
  font-weight: 800;
  font-size: 0.75rem;
  color: #000000;
  background-color: var(--primary);
  padding: 0.25rem 0.75rem;
  border-radius: 4px;
}

.file-info-wrapper h3 {
  font-size: 1.15rem;
  margin-bottom: 0.75rem;
  line-height: 1.35;
}

.file-info-wrapper p {
  color: var(--text-secondary);
  font-size: 0.9rem;
  margin-bottom: 1.5rem;
  line-height: 1.5;
}

.file-size-lbl {
  display: block;
  font-size: 0.8rem;
  color: var(--text-muted);
  margin-bottom: 1.5rem;
}

.file-action-wrapper {
  margin-top: auto;
}

.btn-download {
  width: 100%;
}

.dl-arrow {
  font-size: 1.15rem;
  transition: transform var(--transition-fast);
}

.btn-download:hover .dl-arrow {
  transform: translateY(2px);
}
</style>
