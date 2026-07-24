<script setup lang="ts">
import { skills } from '../data'
import SectionTitle from './SectionTitle.vue'
</script>

<template>
  <section id="skills" class="container-x py-20">
    <SectionTitle index="04" title="Skills" />
    <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <div
        v-for="g in skills"
        :key="g.group"
        class="rounded-xl border border-white/10 bg-card p-5"
      >
        <p class="font-mono text-xs uppercase tracking-wider text-accent">{{ g.group }}</p>
        <div class="mt-3 flex flex-wrap gap-2">
          <span v-for="item in g.items" :key="item" class="tag">{{ item }}</span>
        </div>
      </div>
    </div>
  </section>
</template>
