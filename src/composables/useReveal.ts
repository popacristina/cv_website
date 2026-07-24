import { onMounted, onUnmounted } from 'vue'

// Fade-up on scroll: reveal any `.reveal` element as it enters the viewport.
// Called from App's setup — the parent's onMounted runs after children mount,
// so the child-rendered elements are already in the DOM when we query them.
export function useReveal() {
  let observer: IntersectionObserver | null = null

  onMounted(() => {
    const els = document.querySelectorAll('.reveal')
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible')
            observer?.unobserve(e.target)
          }
        })
      },
      { threshold: 0.12 },
    )
    els.forEach((el) => observer!.observe(el))
  })

  onUnmounted(() => observer?.disconnect())
}
