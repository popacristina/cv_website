<script setup lang="ts">
import { experience } from '../data'
import SectionTitle from './SectionTitle.vue'
</script>

<template>
  <section id="experience" class="container-x py-20">
    <SectionTitle index="02" title="Experience" />
    <div class="space-y-6">
      <div
        v-for="job in experience"
        :key="job.company"
        class="reveal rounded-xl border border-white/10 bg-card p-6"
      >
        <div class="flex flex-wrap items-baseline justify-between gap-2">
          <h3 class="text-lg font-semibold text-white">
            {{ job.role }} <span class="text-accent">@ {{ job.company }}</span>
          </h3>
          <span class="font-mono text-xs text-slate-500">{{ job.period }}</span>
        </div>
        <ul class="mt-4 space-y-2 text-sm text-muted">
          <li v-for="(point, i) in job.points" :key="i" class="flex gap-3">
            <span class="mt-1 text-accent">&#9657;</span>
            <span>{{ point }}</span>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
