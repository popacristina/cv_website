<script setup lang="ts">
import { projects } from '../data'
import SectionTitle from './SectionTitle.vue'
</script>

<template>
  <section id="projects" class="container-x py-20">
    <SectionTitle index="03" title="Selected Work" />
    <div class="grid gap-6 sm:grid-cols-2">
      <article
        v-for="p in projects"
        :key="p.title"
        class="reveal group flex flex-col rounded-xl border border-white/10 bg-card p-6 transition-colors hover:border-accent/40"
      >
        <h3 class="text-base font-semibold text-white group-hover:text-accent">{{ p.title }}</h3>
        <p class="mt-2 text-sm text-muted">{{ p.summary }}</p>
        <ul class="mt-4 space-y-2 text-sm text-slate-300">
          <li v-for="(highlight, i) in p.highlights" :key="i" class="flex gap-2">
            <span class="mt-1 text-accent">&#9657;</span>
            <span>{{ highlight }}</span>
          </li>
        </ul>
        <div class="mt-5 flex flex-wrap gap-2">
          <span v-for="s in p.stack" :key="s" class="tag">{{ s }}</span>
        </div>
      </article>
    </div>
  </section>
</template>
