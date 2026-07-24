<script setup lang="ts">
defineProps<{ index: string; title: string }>()
</script>

<template>
  <div class="mb-10 flex items-center gap-4">
    <h2 class="heading">
      <span class="section-label mr-2">{{ index }}.</span>
      {{ title }}
    </h2>
    <span class="h-px flex-1 bg-white/10" />
  </div>
</template>
