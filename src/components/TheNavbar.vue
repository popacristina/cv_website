<script setup lang="ts">
import { profile } from '../data'

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
]
</script>

<template>
  <header class="sticky top-0 z-50 border-b border-white/5 bg-bg/80 backdrop-blur">
    <nav class="container-x flex h-16 items-center justify-between">
      <a href="#top" class="font-mono text-sm font-semibold text-white">
        <span class="text-accent">~/</span>cristina
      </a>
      <ul class="hidden gap-7 text-sm text-slate-300 sm:flex">
        <li v-for="n in navItems" :key="n.id">
          <a :href="`#${n.id}`" class="transition-colors hover:text-accent">{{ n.label }}</a>
        </li>
      </ul>
      <a
        :href="profile.github"
        target="_blank"
        rel="noreferrer"
        class="rounded-md border border-accent/40 px-3 py-1.5 font-mono text-xs text-accent transition-colors hover:bg-accent/10"
      >
        GitHub
      </a>
    </nav>
  </header>
</template>
