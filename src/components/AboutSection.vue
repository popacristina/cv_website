<script setup lang="ts">
import { about, education } from '../data'
import SectionTitle from './SectionTitle.vue'
</script>

<template>
  <section id="about" class="container-x py-20">
    <SectionTitle index="01" title="About" />
    <div class="grid gap-8 md:grid-cols-3">
      <div class="space-y-4 text-muted md:col-span-2">
        <p v-for="(paragraph, i) in about" :key="i" class="leading-relaxed">
          {{ paragraph }}
        </p>
      </div>
      <div class="rounded-xl border border-white/10 bg-card p-5">
        <p class="font-mono text-xs uppercase tracking-wider text-accent">Education</p>
        <p class="mt-3 font-semibold text-white">{{ education.school }}</p>
        <p class="mt-1 text-sm text-muted">{{ education.degree }}</p>
        <p class="mt-2 font-mono text-xs text-slate-500">{{ education.period }}</p>
      </div>
    </div>
  </section>
</template>
