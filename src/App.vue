<template>
  <div class="layout-wrapper">
    <!-- Navbar Header -->
    <header class="navbar-header" :class="{ 'scrolled': isScrolled }">
      <div class="container navbar-container">
        <router-link to="/" class="navbar-logo">
          <img src="/logo-ummada.png" alt="Logo UMMADA Cirebon" class="logo-img" />
          <div class="logo-text">
            <span class="logo-title">UMMADA</span>
            <span class="logo-subtitle">PMB Portal</span>
          </div>
        </router-link>

        <!-- Desktop Menu -->
        <nav class="desktop-nav">
          <router-link to="/" class="nav-link">Beranda</router-link>
          <router-link to="/profil" class="nav-link">Profil</router-link>
          <router-link to="/fakultas" class="nav-link">Fakultas</router-link>
          <router-link to="/akreditasi" class="nav-link">Akreditasi</router-link>
        </nav>

        <div class="navbar-actions">
          <a href="/login" class="btn-login-link">Login</a>
          <a href="/register" class="btn btn-primary btn-nav-cta">Daftar</a>
          
          <!-- Mobile Menu Toggle Button -->
          <button @click="toggleMobileMenu" class="mobile-toggle" aria-label="Toggle Menu" :class="{ 'active': mobileMenuOpen }">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      <!-- Mobile Navigation Drawer -->
      <transition name="slide">
        <div v-if="mobileMenuOpen" class="mobile-menu-drawer">
          <nav class="mobile-nav">
            <router-link to="/" class="mobile-link" @click="closeMobileMenu">Beranda</router-link>
            <router-link to="/profil" class="mobile-link" @click="closeMobileMenu">Profil</router-link>
            <router-link to="/fakultas" class="mobile-link" @click="closeMobileMenu">Fakultas</router-link>
            <router-link to="/akreditasi" class="mobile-link" @click="closeMobileMenu">Akreditasi</router-link>
            <hr class="mobile-divider" />
            <a href="/login" class="mobile-link action-link" @click="closeMobileMenu">Masuk (Login)</a>
            <a href="/register" class="btn btn-primary btn-block" @click="closeMobileMenu">Daftar Sekarang</a>
          </nav>
        </div>
      </transition>
    </header>

    <!-- Main View Content -->
    <main class="main-content">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>

    <!-- Footer Section -->
    <footer class="footer-section">
      <div class="container footer-grid">
        <div class="footer-col brand-col">
          <div class="footer-logo">
            <img src="/logo-ummada.png" alt="Logo UMMADA" class="logo-img" />
            <h3>UMMADA Cirebon</h3>
          </div>
          <p class="brand-desc">
            Universitas Muhammadiyah Ahmad Dahlan Cirebon. Kampus unggul, islami, dan berorientasi kesehatan untuk masa depan gemilang.
          </p>
          <div class="social-links">
            <a v-if="kontak.socials?.instagram" :href="kontak.socials.instagram" target="_blank" rel="noopener" class="social-icon-btn" aria-label="Instagram">
              Instagram
            </a>
            <a v-if="kontak.socials?.facebook" :href="kontak.socials.facebook" target="_blank" rel="noopener" class="social-icon-btn" aria-label="Facebook">
              Facebook
            </a>
            <a v-if="kontak.socials?.youtube" :href="kontak.socials.youtube" target="_blank" rel="noopener" class="social-icon-btn" aria-label="YouTube">
              YouTube
            </a>
          </div>
        </div>

        <div class="footer-col link-col">
          <h4>Tautan Informasi</h4>
          <ul class="footer-links">
            <li><router-link to="/">Beranda PMB</router-link></li>
            <li><router-link to="/profil">Profil & Visi Misi</router-link></li>
            <li><router-link to="/fakultas">Daftar Fakultas</router-link></li>
            <li><router-link to="/akreditasi">Status Akreditasi</router-link></li>
            <li><a href="/register">Registrasi Akun</a></li>
          </ul>
        </div>

        <div class="footer-col contact-col">
          <h4>Hubungi Kami</h4>
          <p class="contact-email">
            <strong>Email:</strong> <a :href="`mailto:${kontak.email}`">{{ kontak.email }}</a>
          </p>
          <div class="contact-phones">
            <strong>PMB Admin Support:</strong>
            <ul>
              <li v-for="(phone, index) in kontak.phoneLines?.slice(0, 2)" :key="index">
                <a :href="phone.waUrl" target="_blank" rel="noopener">{{ phone.label }}: {{ phone.number }}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="footer-bottom text-center">
        <p>&copy; 2026 Universitas Muhammadiyah Ahmad Dahlan Cirebon. All Rights Reserved.</p>
        <p class="vendor-tag">PMB Portal Powered by UMMADA IT Team</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import kontakData from './content/kontak.json'

const kontak = ref(kontakData)
const isScrolled = ref(false)
const mobileMenuOpen = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  // Hide loading spinner if it exists
  const spinner = document.getElementById('app-loading-state')
  if (spinner) {
    spinner.style.display = 'none'
  }
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.layout-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content {
  flex: 1;
  padding-top: 80px; /* Offset for fixed header */
  position: relative;
  z-index: 1;
}

/* Header Styles */
.navbar-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 80px;
  background-color: rgba(7, 13, 12, 0.7);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(9, 163, 154, 0.08);
  z-index: 100;
  transition: all 0.3s ease;
}

.navbar-header.scrolled {
  height: 70px;
  background-color: rgba(7, 13, 12, 0.9);
  border-bottom-color: rgba(9, 163, 154, 0.2);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
}

.navbar-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
}

.navbar-logo {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.logo-img {
  width: 42px;
  height: 42px;
  object-fit: contain;
}

.logo-text {
  display: flex;
  flex-direction: column;
}

.logo-title {
  font-family: var(--font-title);
  font-size: 1.25rem;
  font-weight: 800;
  letter-spacing: 0.5px;
  color: var(--primary);
  line-height: 1;
}

.logo-subtitle {
  font-size: 0.75rem;
  color: var(--text-secondary);
  font-weight: 500;
  letter-spacing: 0.5px;
}

.desktop-nav {
  display: flex;
  gap: 2rem;
}

@media (max-width: 900px) {
  .desktop-nav {
    display: none;
  }
}

.navbar-actions {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.btn-login-link {
  font-family: var(--font-title);
  font-weight: 600;
  font-size: 0.95rem;
  color: var(--text-secondary);
}

.btn-login-link:hover {
  color: var(--primary);
}

.btn-nav-cta {
  padding: 0.5rem 1.25rem;
  font-size: 0.875rem;
}

@media (max-width: 600px) {
  .btn-login-link, .btn-nav-cta {
    display: none;
  }
}

/* Mobile Hamburger Menu */
.mobile-toggle {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 24px;
  height: 18px;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 110;
}

.mobile-toggle span {
  width: 100%;
  height: 2px;
  background-color: var(--text-primary);
  border-radius: 2px;
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
}

@media (max-width: 900px) {
  .mobile-toggle {
    display: flex;
  }
}

.mobile-toggle.active span:nth-child(1) {
  transform: translateY(8px) rotate(45deg);
  background-color: var(--primary);
}

.mobile-toggle.active span:nth-child(2) {
  opacity: 0;
}

.mobile-toggle.active span:nth-child(3) {
  transform: translateY(-8px) rotate(-45deg);
  background-color: var(--primary);
}

/* Mobile Drawer */
.mobile-menu-drawer {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(7, 13, 12, 0.98);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  z-index: 90;
  display: flex;
  align-items: center;
  justify-content: center;
}

.mobile-nav {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.75rem;
  width: 100%;
  max-width: 320px;
  padding: 2rem;
  text-align: center;
}

.mobile-link {
  font-family: var(--font-title);
  font-size: 1.35rem;
  font-weight: 600;
  color: var(--text-secondary);
}

.mobile-link:hover, .mobile-link.router-link-active {
  color: var(--primary);
}

.mobile-divider {
  width: 60px;
  border: none;
  border-top: 1px solid var(--border-color);
  margin: 0.5rem 0;
}

.mobile-link.action-link {
  font-size: 1.1rem;
  font-weight: 500;
}

/* Transitions */
.slide-enter-active, .slide-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.slide-enter-from, .slide-leave-to {
  opacity: 0;
  transform: scale(0.95);
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

/* Footer Styles */
.footer-section {
  background-color: var(--bg-surface);
  border-top: 1px solid var(--border-color);
  padding: 4.5rem 0 2rem;
  z-index: 10;
  position: relative;
}

.footer-grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 3.5rem;
  margin-bottom: 3.5rem;
}

@media (max-width: 768px) {
  .footer-grid {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
}

.footer-col h4 {
  font-family: var(--font-title);
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: var(--text-primary);
  border-left: 3px solid var(--primary);
  padding-left: 0.75rem;
}

.footer-logo {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
}

.footer-logo h3 {
  font-size: 1.35rem;
  font-weight: 700;
  color: var(--text-primary);
}

.brand-desc {
  color: var(--text-secondary);
  font-size: 0.9rem;
  margin-bottom: 1.5rem;
  max-width: 380px;
}

.social-links {
  display: flex;
  gap: 0.75rem;
}

.social-icon-btn {
  font-size: 0.8rem;
  font-family: var(--font-title);
  font-weight: 600;
  color: var(--primary);
  background-color: var(--primary-light);
  border: 1px solid var(--border-color);
  padding: 0.4rem 0.8rem;
  border-radius: 6px;
}

.social-icon-btn:hover {
  background-color: var(--primary);
  color: #000000;
  transform: translateY(-2px);
}

.footer-links {
  list-style: none;
}

.footer-links li {
  margin-bottom: 0.75rem;
}

.footer-links a {
  font-size: 0.9rem;
  color: var(--text-secondary);
}

.footer-links a:hover {
  color: var(--primary);
  padding-left: 4px;
}

.contact-email a {
  color: var(--primary);
}

.contact-email a:hover {
  text-decoration: underline;
}

.contact-phones {
  margin-top: 1rem;
  font-size: 0.9rem;
}

.contact-phones ul {
  list-style: none;
  margin-top: 0.5rem;
}

.contact-phones li {
  margin-bottom: 0.5rem;
}

.contact-phones a {
  color: var(--text-secondary);
}

.contact-phones a:hover {
  color: var(--primary);
}

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  padding-top: 2rem;
  font-size: 0.85rem;
  color: var(--text-muted);
}

.vendor-tag {
  margin-top: 0.5rem;
  font-size: 0.75rem;
  letter-spacing: 0.5px;
}
</style>
