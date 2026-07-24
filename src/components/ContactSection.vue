<script setup lang="ts">
import { profile } from '../data'
</script>

<template>
  <section id="contact" class="container-x py-24 text-center">
    <p class="section-label">05. What's next</p>
    <h2 class="mt-3 text-3xl font-bold text-white sm:text-4xl">Let's build something</h2>
    <p class="mx-auto mt-4 max-w-xl text-muted">
      I'm open to backend and full-stack opportunities. The fastest way to reach me is
      email &mdash; I'll get back to you.
    </p>
    <a
      :href="`mailto:${profile.email}`"
      class="mt-8 inline-block rounded-md border border-accent/50 px-7 py-3 font-mono text-sm text-accent transition-colors hover:bg-accent/10"
    >
      {{ profile.email }}
    </a>
    <div class="mt-8 flex justify-center gap-6 text-sm text-slate-400">
      <a :href="profile.github" target="_blank" rel="noreferrer" class="hover:text-accent">GitHub</a>
      <a :href="profile.linkedin" target="_blank" rel="noreferrer" class="hover:text-accent">LinkedIn</a>
      <span class="text-slate-600">{{ profile.location }}</span>
    </div>
  </section>
</template>
