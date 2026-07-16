<template>
  <div class="fakultas-view animate-fade-in">
    <!-- Glow spots -->
    <div class="glow-spot" style="top: 15%; left: -10%;"></div>
    <div class="glow-spot" style="top: 60%; right: -10%;"></div>

    <!-- Header Section -->
    <section class="page-header section-padding text-center">
      <div class="container">
        <span class="section-badge">Akademik</span>
        <h1 class="gradient-text">{{ fakultasData.title }}</h1>
        <p class="page-subtitle">{{ fakultasData.subtitle }}</p>
      </div>
    </section>

    <!-- Faculty List Section -->
    <section class="faculties-list-section section-padding">
      <div class="container">
        <div class="faculties-column">
          <div v-for="(fak, index) in fakultasData.fakultas" :key="index" class="faculty-group-card glass-card">
            <!-- Faculty Header -->
            <div class="faculty-header">
              <div class="faculty-title-info">
                <span class="fac-abbr-badge">{{ fak.abbreviation }}</span>
                <h2>{{ fak.name }}</h2>
              </div>
              <p class="fac-desc">{{ fak.description }}</p>
            </div>

            <!-- Locations -->
            <div class="faculty-locations">
              <h5>📍 Lokasi Perkuliahan:</h5>
              <ul>
                <li v-for="(loc, lIdx) in fak.locations" :key="lIdx">{{ loc }}</li>
              </ul>
            </div>

            <!-- Study Programs List -->
            <div class="prodi-list-wrapper">
              <h5>🎓 Program Studi Pilihan:</h5>
              <div class="prodi-grid">
                <div v-for="(prodi, pIdx) in fak.prodi" :key="pIdx" class="prodi-item-card">
                  <div class="prodi-main">
                    <span class="prodi-level-badge" :class="prodi.level.toLowerCase()">
                      {{ prodi.level }}
                    </span>
                    <span class="prodi-name">{{ prodi.name }}</span>
                  </div>
                  <span class="prodi-duration">{{ prodi.duration }}</span>
                </div>
              </div>
            </div>

            <!-- Faculty Action Footer -->
            <div class="faculty-footer text-right">
              <a href="/register" class="btn btn-primary">Daftar di {{ fak.abbreviation }}</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import contentFakultas from '../content/fakultas.json'

const fakultasData = ref(contentFakultas)
</script>

<style scoped>
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

/* Faculty Cards list */
.faculties-column {
  display: flex;
  flex-direction: column;
  gap: 3.5rem;
}

.faculty-group-card {
  padding: 3rem;
}

.faculty-group-card:hover {
  transform: none; /* disable default translateY hover for large blocks */
}

.faculty-header {
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  padding-bottom: 1.5rem;
  margin-bottom: 1.75rem;
}

.faculty-title-info {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 0.75rem;
}

@media (max-width: 600px) {
  .faculty-title-info {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
}

.fac-abbr-badge {
  font-family: var(--font-title);
  background-color: var(--primary-light);
  border: 1px solid var(--border-color);
  color: var(--primary);
  font-size: 0.85rem;
  font-weight: 700;
  padding: 0.25rem 0.75rem;
  border-radius: 6px;
  text-transform: uppercase;
}

.faculty-header h2 {
  font-size: 1.85rem;
}

.fac-desc {
  color: var(--text-secondary);
  font-size: 1rem;
  line-height: 1.6;
}

/* Locations list */
.faculty-locations {
  margin-bottom: 2rem;
  background-color: rgba(255, 255, 255, 0.01);
  border: 1px solid rgba(255, 255, 255, 0.03);
  padding: 1.25rem 1.5rem;
  border-radius: 12px;
}

.faculty-locations h5 {
  font-size: 0.95rem;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
}

.faculty-locations ul {
  list-style: none;
}

.faculty-locations li {
  font-size: 0.9rem;
  color: var(--text-secondary);
  margin-bottom: 0.25rem;
  position: relative;
  padding-left: 1.25rem;
}

.faculty-locations li::before {
  content: '•';
  position: absolute;
  left: 0.25rem;
  color: var(--primary);
}

/* Study Programs Grid */
.prodi-list-wrapper {
  margin-bottom: 2.5rem;
}

.prodi-list-wrapper h5 {
  font-size: 0.95rem;
  color: var(--text-primary);
  margin-bottom: 1rem;
}

.prodi-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

@media (max-width: 768px) {
  .prodi-grid {
    grid-template-columns: 1fr;
  }
}

.prodi-item-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.04);
  padding: 1rem 1.25rem;
  border-radius: 8px;
  transition: all var(--transition-fast);
}

.prodi-item-card:hover {
  background-color: var(--primary-light);
  border-color: var(--border-color);
  transform: translateX(4px);
}

.prodi-main {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.prodi-level-badge {
  font-size: 0.75rem;
  font-weight: 700;
  padding: 0.15rem 0.5rem;
  border-radius: 4px;
  color: #000000;
}

.prodi-level-badge.s1 {
  background-color: #09a39a;
  color: #ffffff;
}

.prodi-level-badge.d3 {
  background-color: #f59e0b;
}

.prodi-level-badge.profesi {
  background-color: #8b5cf6;
  color: #ffffff;
}

.prodi-name {
  font-size: 0.925rem;
  font-weight: 600;
  color: var(--text-primary);
}

.prodi-duration {
  font-size: 0.85rem;
  color: var(--text-secondary);
}

.text-right {
  text-align: right;
}

@media (max-width: 480px) {
  .text-right {
    text-align: center;
  }
  .text-right .btn {
    width: 100%;
  }
}
</style>
