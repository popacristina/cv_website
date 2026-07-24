<script setup lang="ts">
import { profile } from '../data'
</script>

<template>
  <section id="top" class="relative overflow-hidden">
    <div class="pointer-events-none absolute -top-32 left-1/2 h-72 w-[40rem] -translate-x-1/2 rounded-full bg-accent/20 blur-[120px]" />
    <div class="container-x relative flex min-h-[72vh] flex-col justify-center py-20">
      <p class="section-label">Hi, my name is</p>
      <h1 class="mt-3 text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
        {{ profile.name }}
      </h1>
      <h2 class="mt-2 text-2xl font-bold text-slate-400 sm:text-4xl">
        {{ profile.role }}
      </h2>
      <p class="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
        {{ profile.tagline }}
      </p>
      <div class="mt-8 flex flex-wrap gap-4">
        <a
          href="#projects"
          class="rounded-md bg-accent px-5 py-2.5 text-sm font-semibold text-bg transition-transform hover:-translate-y-0.5"
        >
          View my work
        </a>
        <a
          :href="`mailto:${profile.email}`"
          class="rounded-md border border-white/15 px-5 py-2.5 text-sm font-semibold text-slate-200 transition-colors hover:border-accent hover:text-accent"
        >
          Get in touch
        </a>
      </div>
    </div>
  </section>
</template>
