<template>
  <div class="min-h-screen flex flex-col bg-black text-white font-sans selection:bg-primary-500/30">
    <PublicNavbar />

    <div class="mx-auto flex w-full max-w-[90rem] flex-1 items-start justify-center px-4 sm:px-6 lg:px-8">
      <!-- Left Sidebar -->
      <aside class="sticky top-16 hidden w-64 shrink-0 overflow-y-auto border-r border-white/10 py-10 pr-6 lg:block scrollbar-hide" style="height: calc(100vh - 4rem);">
        <nav class="space-y-8">
          <div v-for="group in documentGroups" :key="group.name">
            <h3 class="mb-3 text-xs font-bold tracking-widest text-gray-400 uppercase">{{ group.name }}</h3>
            <ul class="space-y-1 border-l border-white/10">
              <li v-for="doc in group.docs" :key="doc.id">
                <button
                  @click="activeDocId = doc.id"
                  class="block w-full text-left -ml-px border-l px-4 py-1.5 text-sm transition-colors"
                  :class="[
                    activeDocId === doc.id
                      ? 'font-medium border-white text-white'
                      : 'border-transparent text-gray-500 hover:border-gray-600 hover:text-gray-300'
                  ]"
                >
                  {{ doc.title }}
                </button>
              </li>
            </ul>
          </div>
        </nav>
      </aside>

      <!-- Mobile Doc Selector -->
      <div class="lg:hidden w-full pt-6 pb-2 px-2">
        <select
          v-model="activeDocId"
          class="w-full rounded-lg border border-white/10 bg-[#131313] px-4 py-2.5 text-sm text-white"
        >
          <optgroup v-for="group in documentGroups" :key="group.name" :label="group.name">
            <option v-for="doc in group.docs" :key="doc.id" :value="doc.id">{{ doc.title }}</option>
          </optgroup>
        </select>
      </div>

      <!-- Main Content -->
      <main class="flex-1 min-w-0 py-10 lg:pl-10 lg:pr-6 max-w-4xl">
        <article v-if="activeDoc" class="docs-article prose prose-invert max-w-none prose-headings:scroll-mt-24 prose-h1:text-4xl prose-h1:font-extrabold prose-h1:tracking-tight prose-h2:border-b prose-h2:border-white/10 prose-h2:pb-3 prose-h2:text-2xl prose-h2:font-bold prose-a:text-blue-400 hover:prose-a:text-blue-300 prose-pre:bg-transparent prose-pre:p-0 prose-pre:m-0 prose-pre:rounded-none prose-code:before:content-none prose-code:after:content-none prose-strong:text-white prose-li:marker:text-gray-500">
          <div v-html="activeDoc.content"></div>
        </article>
      </main>

      <!-- Right Sidebar (TOC) -->
      <aside v-if="activeDoc" class="sticky top-16 hidden w-56 shrink-0 overflow-y-auto py-10 pl-6 xl:block scrollbar-hide" style="height: calc(100vh - 4rem);">
        <h4 class="mb-4 text-xs font-bold tracking-widest text-gray-500 uppercase">本页大纲</h4>
        <nav>
          <ul class="space-y-3 text-sm">
            <li v-for="(heading, index) in activeDoc.headings" :key="index">
              <a :href="`#${heading.id}`" class="text-gray-500 hover:text-white transition-colors">
                {{ heading.text }}
              </a>
            </li>
            <li v-if="!activeDoc.headings?.length">
              <span class="text-gray-600">暂无大纲</span>
            </li>
          </ul>
        </nav>
      </aside>
    </div>

    <div class="mt-auto border-t border-white/10 bg-[#0a0a0a]">
      <PublicFooter />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import PublicNavbar from '@/components/layout/PublicNavbar.vue'
import PublicFooter from '@/components/layout/PublicFooter.vue'
import { documentGroups, allDocs, defaultDocId } from '@/docs'

const activeDocId = ref(defaultDocId)

const activeDoc = computed(() => {
  return allDocs.find(d => d.id === activeDocId.value) ?? allDocs[0]
})
</script>

<style scoped>
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

/* Inline code: cyan pill on dark glass */
.docs-article :deep(code:not(pre code)) {
  background-color: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 0.375rem;
  padding: 0.125rem 0.5rem;
  font-size: 0.875em;
  font-weight: 500;
  color: rgb(56 189 248);
}

/* Code blocks inside wrapper divs: reset prose defaults */
.docs-article :deep(pre code) {
  background: transparent;
  padding: 0;
  font-size: 0.875rem;
  line-height: 1.7;
  color: rgb(209 213 219);
  border: none;
}

/* Prose table styling for dark theme */
.docs-article :deep(table) {
  width: 100%;
  border-collapse: collapse;
}
.docs-article :deep(th) {
  background-color: rgba(255, 255, 255, 0.05);
  padding: 0.75rem 1rem;
  text-align: left;
  font-weight: 600;
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: rgb(156 163 175);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}
.docs-article :deep(td) {
  padding: 0.75rem 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  color: rgb(209 213 219);
}
.docs-article :deep(tbody tr:hover) {
  background-color: rgba(255, 255, 255, 0.03);
}
</style>
