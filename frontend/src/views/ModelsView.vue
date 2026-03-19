<template>
  <div class="min-h-screen bg-black text-white font-sans selection:bg-primary-500/30">
    <PublicNavbar />

    <section class="relative py-28 min-h-screen overflow-hidden">
      <!-- Background Effects -->
      <div class="pointer-events-none absolute inset-0 overflow-hidden">
        <!-- Dot Grid -->
        <div class="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.1)_1px,transparent_1px)] [background-size:24px_24px] opacity-20"></div>
        <!-- Aura Glows -->
        <div class="absolute top-[10%] left-[-10%] h-[500px] w-[500px] rounded-full bg-emerald-600/10 blur-[120px]"></div>
        <div class="absolute bottom-[-10%] right-[10%] h-[600px] w-[600px] rounded-full bg-blue-600/10 blur-[120px]"></div>
      </div>

      <div class="relative z-10 mx-auto max-w-6xl px-6 flex flex-col items-center">
        <!-- Header -->
        <div class="mb-14 text-center w-full">
          <div class="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm mb-6 backdrop-blur-md">
            <span class="flex h-2 w-2 rounded-full bg-emerald-400"></span>
            <span class="text-gray-300">Supported Models</span>
          </div>
          <h1 class="mb-4 text-4xl font-medium tracking-tight text-white md:text-6xl">
            {{ t('models.title') }}
          </h1>
          <p class="mx-auto max-w-2xl text-lg text-gray-400 font-light">
            {{ t('models.subtitle') }}
          </p>
        </div>

        <!-- Platform filter -->
        <div class="mb-12 flex flex-wrap justify-center gap-3">
          <button
            v-for="platform in platforms"
            :key="platform.id"
            @click="activePlatform = platform.id"
            class="rounded-full px-6 py-2.5 text-sm font-medium transition-all hover:scale-105"
            :class="[
              activePlatform === platform.id
                ? 'bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.3)]'
                : 'bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10 hover:text-white'
            ]"
          >
            {{ platform.label }}
          </button>
        </div>

        <!-- Model pricing table -->
        <div class="w-full relative group">
          <!-- Inner Glow Outline Effect on Hover -->
          <div class="absolute -inset-0.5 rounded-[32px] bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none blur-sm"></div>

          <div class="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#131313]/90 backdrop-blur-xl shadow-2xl">
            <div class="overflow-x-auto">
              <table class="w-full text-sm">
                <thead>
                  <tr class="border-b border-white/10 bg-white/5">
                    <th class="whitespace-nowrap px-8 py-5 text-left font-medium text-gray-400 uppercase tracking-widest text-xs">
                      {{ t('models.model') }}
                    </th>
                    <th class="whitespace-nowrap px-8 py-5 text-left font-medium text-gray-400 uppercase tracking-widest text-xs">
                      {{ t('models.provider') }}
                    </th>
                    <th class="whitespace-nowrap px-8 py-5 text-right font-medium text-gray-400 uppercase tracking-widest text-xs">
                      {{ t('models.inputPrice') }}
                    </th>
                    <th class="whitespace-nowrap px-8 py-5 text-right font-medium text-gray-400 uppercase tracking-widest text-xs">
                      {{ t('models.outputPrice') }}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="model in filteredModels"
                    :key="model.name"
                    class="border-b border-white/5 transition-colors last:border-b-0 hover:bg-white/5 bg-transparent"
                  >
                    <td class="whitespace-nowrap px-8 py-5">
                      <div class="flex items-center gap-4">
                        <div
                          class="flex h-8 w-8 items-center justify-center rounded-lg text-sm font-bold text-white shadow-inner"
                          :class="model.iconBg"
                        >
                          {{ model.iconLetter }}
                        </div>
                        <span class="font-medium text-white text-base">{{ model.name }}</span>
                      </div>
                    </td>
                    <td class="whitespace-nowrap px-8 py-5 text-gray-400 text-sm">
                      {{ model.provider }}
                    </td>
                    <td class="whitespace-nowrap px-8 py-5 text-right font-mono text-gray-300 text-sm">
                      {{ model.inputPrice }}
                    </td>
                    <td class="whitespace-nowrap px-8 py-5 text-right font-mono text-gray-300 text-sm">
                      {{ model.outputPrice }}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div v-if="filteredModels.length === 0" class="py-20 text-center text-gray-500 font-light">
              No models available for this provider.
            </div>
          </div>
        </div>

        <!-- Disclaimer -->
        <div class="mt-10 text-center">
          <p class="text-sm text-gray-500 font-light">
            {{ t('models.disclaimer') }}
          </p>
        </div>
      </div>
    </section>

    <div class="border-t border-white/10 bg-[#0a0a0a]">
      <PublicFooter />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { useAuthStore, useAppStore } from '@/stores'
import PublicNavbar from '@/components/layout/PublicNavbar.vue'
import PublicFooter from '@/components/layout/PublicFooter.vue'

const { t } = useI18n()
const authStore = useAuthStore()
const appStore = useAppStore()

const activePlatform = ref('all')

interface ModelInfo {
  name: string
  provider: string
  platform: string
  inputPrice: string
  outputPrice: string
  iconLetter: string
  iconBg: string
}

const platforms = computed(() => [
  { id: 'all', label: t('models.all') },
  { id: 'anthropic', label: 'Claude' },
  { id: 'openai', label: 'GPT' },
  { id: 'gemini', label: 'Gemini' },
])

const allModels: ModelInfo[] = [
  // Claude models
  { name: 'claude-sonnet-4-20250514', provider: 'Anthropic', platform: 'anthropic', inputPrice: '$3.00 / 1M', outputPrice: '$15.00 / 1M', iconLetter: 'C', iconBg: 'bg-orange-500' },
  { name: 'claude-4-opus-20250514', provider: 'Anthropic', platform: 'anthropic', inputPrice: '$15.00 / 1M', outputPrice: '$75.00 / 1M', iconLetter: 'C', iconBg: 'bg-orange-500' },
  { name: 'claude-3-7-sonnet-20250219', provider: 'Anthropic', platform: 'anthropic', inputPrice: '$3.00 / 1M', outputPrice: '$15.00 / 1M', iconLetter: 'C', iconBg: 'bg-orange-500' },
  { name: 'claude-3-5-haiku-20241022', provider: 'Anthropic', platform: 'anthropic', inputPrice: '$0.80 / 1M', outputPrice: '$4.00 / 1M', iconLetter: 'C', iconBg: 'bg-orange-500' },
  // GPT models
  { name: 'gpt-4o', provider: 'OpenAI', platform: 'openai', inputPrice: '$2.50 / 1M', outputPrice: '$10.00 / 1M', iconLetter: 'G', iconBg: 'bg-green-600' },
  { name: 'gpt-4o-mini', provider: 'OpenAI', platform: 'openai', inputPrice: '$0.15 / 1M', outputPrice: '$0.60 / 1M', iconLetter: 'G', iconBg: 'bg-green-600' },
  { name: 'o1', provider: 'OpenAI', platform: 'openai', inputPrice: '$15.00 / 1M', outputPrice: '$60.00 / 1M', iconLetter: 'G', iconBg: 'bg-green-600' },
  { name: 'o3-mini', provider: 'OpenAI', platform: 'openai', inputPrice: '$1.10 / 1M', outputPrice: '$4.40 / 1M', iconLetter: 'G', iconBg: 'bg-green-600' },
  // Gemini models
  { name: 'gemini-2.5-pro', provider: 'Google', platform: 'gemini', inputPrice: '$1.25 / 1M', outputPrice: '$10.00 / 1M', iconLetter: 'G', iconBg: 'bg-blue-600' },
  { name: 'gemini-2.5-flash', provider: 'Google', platform: 'gemini', inputPrice: '$0.15 / 1M', outputPrice: '$0.60 / 1M', iconLetter: 'G', iconBg: 'bg-blue-600' },
  { name: 'gemini-2.0-flash', provider: 'Google', platform: 'gemini', inputPrice: '$0.10 / 1M', outputPrice: '$0.40 / 1M', iconLetter: 'G', iconBg: 'bg-blue-600' },
]

const filteredModels = computed(() => {
  if (activePlatform.value === 'all') return allModels
  return allModels.filter(m => m.platform === activePlatform.value)
})

onMounted(() => {
  authStore.checkAuth()
  if (!appStore.publicSettingsLoaded) {
    appStore.fetchPublicSettings()
  }
})
</script>
