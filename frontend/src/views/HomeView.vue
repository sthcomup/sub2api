<template>
  <!-- Custom Home Content -->
  <div v-if="homeContent" class="min-h-screen bg-black">
    <iframe v-if="isHomeContentUrl" :src="homeContent.trim()" class="h-screen w-full border-0" allowfullscreen></iframe>
    <div v-else v-html="homeContent"></div>
  </div>

  <!-- Default Home Page -->
  <div v-else class="min-h-screen bg-black text-white font-sans selection:bg-primary-500/30">
    <PublicNavbar />

    <!-- Hero Section -->
    <section class="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <!-- Background Effects -->
      <div class="pointer-events-none absolute inset-0 overflow-hidden">
        <!-- Dot Grid -->
        <div class="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.15)_1px,transparent_1px)] [background-size:24px_24px] opacity-20"></div>
        <!-- Aura Glows -->
        <div class="absolute top-[-10%] left-[-10%] h-[600px] w-[600px] rounded-full bg-blue-600/20 blur-[120px]"></div>
        <div class="absolute bottom-[-10%] right-[-10%] h-[600px] w-[600px] rounded-full bg-purple-600/20 blur-[120px]"></div>
        <div class="absolute top-[20%] right-[20%] h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[100px]"></div>
      </div>

      <div class="relative w-full mx-auto max-w-7xl px-6 py-20 z-10">
        <div class="flex flex-col items-center justify-center text-center">
          <div class="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm mb-8 backdrop-blur-md">
            <span class="flex h-2 w-2 rounded-full bg-green-400"></span>
            <span class="text-gray-300">Stitch-inspired Design</span>
          </div>
          
          <h1 class="mb-6 max-w-5xl text-5xl font-medium tracking-tight text-white md:text-7xl lg:text-8xl" style="line-height: 1.1;">
            {{ siteName }} <br/><span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 pb-2">Platform</span>
          </h1>
          
          <p class="mb-10 max-w-2xl text-lg text-gray-400 md:text-xl font-light">
            {{ t('home.heroDescription') }}
          </p>

          <div class="flex flex-col gap-4 sm:flex-row sm:justify-center items-center">
            <router-link
              :to="isAuthenticated ? dashboardPath : '/login'"
              class="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-base font-medium text-black transition-transform hover:scale-105"
            >
              {{ isAuthenticated ? t('home.goToDashboard') : t('home.getStarted') }}
              <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </router-link>
            <a
              v-if="docUrl || true"
              :href="docUrl || '/docs'"
              class="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-8 py-4 text-base font-medium text-white backdrop-blur-md transition-colors hover:bg-white/10"
            >
              {{ t('home.viewDocs') }}
            </a>
          </div>
        </div>

        <!-- Terminal / AI Input Box Graphic -->
        <div class="mt-24 mx-auto max-w-4xl">
          <div class="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#131313] shadow-2xl backdrop-blur-xl transition-transform hover:scale-[1.01] duration-500">
             <div class="flex items-center space-x-2 px-6 py-4 border-b border-white/5 bg-white/5">
                <div class="h-3 w-3 rounded-full bg-red-500/80"></div>
                <div class="h-3 w-3 rounded-full bg-yellow-500/80"></div>
                <div class="h-3 w-3 rounded-full bg-green-500/80"></div>
                <div class="ml-4 text-xs text-gray-500 font-mono">terminal</div>
             </div>
             <div class="p-8 font-mono text-sm leading-relaxed text-gray-300">
                <div class="flex gap-4">
                   <span class="text-blue-400">~</span>
                   <span class="text-gray-500">System initialized...</span>
                </div>
                <div class="flex gap-4 mt-2">
                   <span class="text-green-400">➜</span>
                   <span class="text-purple-400">curl -X POST /v1/chat/completions</span>
                </div>
                <div class="mt-4 p-4 rounded-xl bg-black/50 border border-white/5 text-gray-400">
                  { "status": 200, "message": "Ready to stitch services together." }
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="relative py-32 overflow-hidden">
      <!-- Glow effect -->
      <div class="absolute left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-900/10 blur-[120px] pointer-events-none"></div>

      <div class="relative mx-auto max-w-7xl px-6 z-10">
        <div class="mb-20 text-center">
          <h2 class="mb-4 text-4xl font-medium tracking-tight text-white md:text-5xl">
            {{ t('home.features.sectionTitle') }}
          </h2>
          <p class="mx-auto max-w-2xl text-lg text-gray-400 font-light">
            {{ t('home.features.sectionDesc') }}
          </p>
        </div>

        <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div
            v-for="(feature, i) in features"
            :key="i"
            class="group relative overflow-hidden rounded-[32px] border border-white/10 bg-[#131313] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.1)]"
          >
            <!-- Card inner glow -->
            <div class="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none"></div>
            
            <div
              class="relative mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5 border border-white/10"
            >
              <component :is="feature.icon" class="h-6 w-6 text-blue-400" />
            </div>
            <h3 class="relative mb-3 text-xl font-medium text-white">
              {{ feature.title }}
            </h3>
            <p class="relative text-sm leading-relaxed text-gray-400">
              {{ feature.desc }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="border-y border-white/5 bg-[#0a0a0a] py-20 relative">
      <div class="mx-auto max-w-7xl px-6">
        <div class="grid grid-cols-2 gap-8 lg:grid-cols-4">
          <div v-for="(stat, i) in stats" :key="i" class="text-center group">
            <div class="mb-2 text-4xl font-medium tracking-tight text-white md:text-5xl transition-transform group-hover:scale-110">
              {{ stat.value }}
            </div>
            <div class="text-sm font-medium uppercase tracking-wider text-gray-500">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="py-32 relative">
      <div class="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>
      <div class="mx-auto max-w-4xl px-6 relative z-10">
        <div class="mb-16 text-center">
          <h2 class="mb-4 text-4xl font-medium tracking-tight text-white">
            {{ t('home.faq.title') }}
          </h2>
        </div>

        <div class="space-y-4">
          <div
            v-for="(item, i) in faqItems"
            :key="i"
            class="overflow-hidden rounded-[24px] border border-white/10 bg-[#131313] transition-colors hover:border-white/20"
          >
            <button
              @click="toggleFaq(i)"
              class="flex w-full items-center justify-between px-8 py-6 text-left focus:outline-none"
            >
              <span class="text-lg text-gray-200">{{ item.q }}</span>
              <svg
                class="h-6 w-6 flex-shrink-0 text-gray-500 transition-transform duration-300"
                :class="{ 'rotate-45': openFaqs.includes(i) }"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="1.5"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
            </button>
            <transition name="faq-expand">
              <div v-show="openFaqs.includes(i)" class="px-8 pb-6 text-gray-400">
                <p class="text-base leading-relaxed whitespace-pre-line">{{ item.a }}</p>
              </div>
            </transition>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-32 relative overflow-hidden">
      <!-- Glow effect -->
      <div class="absolute top-1/2 left-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/10 blur-[120px] pointer-events-none"></div>
      
      <div class="relative mx-auto max-w-5xl px-6 z-10">
        <div class="rounded-[40px] border border-white/10 bg-[#131313]/90 p-12 text-center backdrop-blur-xl md:p-20 shadow-[0_0_50px_-20px_rgba(255,255,255,0.1)]">
          <h2 class="mb-6 text-4xl font-medium tracking-tight text-white md:text-5xl">
            {{ t('home.cta.title') }}
          </h2>
          <p class="mb-10 text-lg text-gray-400 max-w-2xl mx-auto font-light">
            {{ t('home.cta.description') }}
          </p>
          <router-link
            to="/register"
            class="inline-flex items-center gap-2 rounded-full bg-white px-10 py-5 text-base font-medium text-black transition-transform hover:scale-105"
          >
            {{ t('home.cta.button') }}
            <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </router-link>
        </div>
      </div>
    </section>

    <div class="border-t border-white/10 bg-[#0a0a0a]">
      <PublicFooter />
    </div>
    
    <ContactModal :is-open="isContactModalOpen" @close="isContactModalOpen = false" />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, h } from 'vue'
import { useI18n } from 'vue-i18n'
import { useAuthStore, useAppStore } from '@/stores'
import PublicNavbar from '@/components/layout/PublicNavbar.vue'
import PublicFooter from '@/components/layout/PublicFooter.vue'
import ContactModal from '@/components/common/ContactModal.vue'

const { t } = useI18n()
const authStore = useAuthStore()
const appStore = useAppStore()

const isContactModalOpen = ref(false)

const siteName = computed(() => appStore.cachedPublicSettings?.site_name || appStore.siteName || 'Pingjoku')
const docUrl = computed(() => appStore.cachedPublicSettings?.doc_url || appStore.docUrl || '')
const homeContent = computed(() => appStore.cachedPublicSettings?.home_content || '')
const isHomeContentUrl = computed(() => {
  const content = homeContent.value.trim()
  return content.startsWith('http://') || content.startsWith('https://')
})

const isAuthenticated = computed(() => authStore.isAuthenticated)
const isAdmin = computed(() => authStore.isAdmin)
const dashboardPath = computed(() => (isAdmin.value ? '/admin/dashboard' : '/dashboard'))

// Feature icons as render functions
const ServerIcon = { render: () => h('svg', { fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', 'stroke-width': '1.5' }, [h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', d: 'M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z' })] ) }
const ShieldIcon = { render: () => h('svg', { fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', 'stroke-width': '1.5' }, [h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', d: 'M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z' })] ) }
const CurrencyIcon = { render: () => h('svg', { fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', 'stroke-width': '1.5' }, [h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', d: 'M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z' })] ) }
const RouteIcon = { render: () => h('svg', { fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', 'stroke-width': '1.5' }, [h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', d: 'M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5' })] ) }

const features = computed(() => [
  {
    title: t('home.features.unifiedGateway'),
    desc: t('home.features.unifiedGatewayDesc'),
    icon: ServerIcon
  },
  {
    title: t('home.features.multiAccount'),
    desc: t('home.features.multiAccountDesc'),
    icon: ShieldIcon
  },
  {
    title: t('home.features.balanceQuota'),
    desc: t('home.features.balanceQuotaDesc'),
    icon: CurrencyIcon
  },
  {
    title: t('home.features.smartRouting'),
    desc: t('home.features.smartRoutingDesc'),
    icon: RouteIcon
  }
])

const stats = computed(() => [
  { value: t('home.stats.modelsValue'), label: t('home.stats.modelsLabel') },
  { value: t('home.stats.uptimeValue'), label: t('home.stats.uptimeLabel') },
  { value: t('home.stats.latencyValue'), label: t('home.stats.latencyLabel') },
  { value: t('home.stats.providersValue'), label: t('home.stats.providersLabel') }
])

const faqItems = computed(() => [
  { q: t('home.faq.q1'), a: t('home.faq.a1') },
  { q: t('home.faq.q2'), a: t('home.faq.a2') },
  { q: t('home.faq.q3'), a: t('home.faq.a3') },
  { q: t('home.faq.q4'), a: t('home.faq.a4') },
  { q: t('home.faq.q5'), a: t('home.faq.a5') },
  { q: t('home.faq.q6'), a: t('home.faq.a6') }
])

const openFaqs = ref<number[]>([0])
function toggleFaq(index: number) {
  if (openFaqs.value.includes(index)) {
    openFaqs.value = openFaqs.value.filter(i => i !== index)
  } else {
    openFaqs.value.push(index)
  }
}

onMounted(() => {
  authStore.checkAuth()
  if (!appStore.publicSettingsLoaded) {
    appStore.fetchPublicSettings()
  }
})
</script>

<style scoped>
.faq-expand-enter-active,
.faq-expand-leave-active {
  transition: all 0.3s ease-in-out;
  overflow: hidden;
}
.faq-expand-enter-from,
.faq-expand-leave-to {
  opacity: 0;
  max-height: 0;
  padding-top: 0;
  padding-bottom: 0;
}
.faq-expand-enter-to,
.faq-expand-leave-from {
  opacity: 1;
  max-height: 500px;
}
</style>
