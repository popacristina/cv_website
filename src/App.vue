<script setup lang="ts">
import { profile } from './data'
import { useReveal } from './composables/useReveal'
import TheNavbar from './components/TheNavbar.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import ContactSection from './components/ContactSection.vue'

useReveal()

const year = new Date().getFullYear()
</script>

<template>
  <TheNavbar />
  <main>
    <HeroSection />
    <AboutSection />
    <ExperienceSection />
    <ProjectsSection />
    <SkillsSection />
    <ContactSection />
  </main>
  <footer class="border-t border-white/5 py-8 text-center font-mono text-xs text-slate-600">
    Designed &amp; built by {{ profile.name }} &middot; {{ year }}
  </footer>
</template>
