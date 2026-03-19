<template>
  <div class="min-h-screen bg-black text-white font-sans selection:bg-primary-500/30">
    <PublicNavbar />

    <section class="relative py-28 overflow-hidden min-h-screen">
      <!-- Background Effects -->
      <div class="pointer-events-none absolute inset-0 overflow-hidden">
        <!-- Dot Grid -->
        <div class="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.1)_1px,transparent_1px)] [background-size:24px_24px] opacity-20"></div>
        <!-- Aura Glows -->
        <div class="absolute top-[-10%] left-[10%] h-[600px] w-[600px] rounded-full bg-blue-600/10 blur-[120px]"></div>
        <div class="absolute bottom-[-10%] right-[10%] h-[600px] w-[600px] rounded-full bg-purple-600/10 blur-[120px]"></div>
      </div>

      <div class="relative z-10 mx-auto max-w-7xl px-6">
        <!-- Header -->
        <div class="mb-20 text-center">
          <div class="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm mb-6 backdrop-blur-md">
            <span class="flex h-2 w-2 rounded-full bg-blue-400"></span>
            <span class="text-gray-300">Pricing Models</span>
          </div>
          <h1 class="mb-4 text-4xl font-medium tracking-tight text-white md:text-6xl">
            {{ t('pricing.title') }}
          </h1>
          <p class="mx-auto max-w-2xl text-lg text-gray-400 font-light">
            {{ t('pricing.subtitle') }}
          </p>
        </div>

        <!-- Loading -->
        <div v-if="loading" class="flex justify-center py-20">
          <div class="h-8 w-8 animate-spin rounded-full border-4 border-white/20 border-t-white"></div>
        </div>

        <!-- Pricing Cards -->
        <div
          v-else-if="plans.length > 0"
          class="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto"
        >
          <div
            v-for="plan in plans"
            :key="plan.id"
            class="group relative flex flex-col rounded-[40px] border p-10 transition-all duration-300 backdrop-blur-xl"
            :class="[
              plan.highlighted
                ? 'border-white/20 bg-[#171717] shadow-[0_0_50px_-12px_rgba(255,255,255,0.1)] scale-105 z-10'
                : 'border-white/10 bg-[#131313] hover:-translate-y-1 hover:border-white/20 hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.05)]'
            ]"
          >
            <!-- Card inner glow on hover -->
            <div class="absolute inset-0 rounded-[40px] bg-gradient-to-br from-white/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none"></div>

            <!-- Popular badge -->
            <div
              v-if="plan.highlighted"
              class="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full border border-white/10 bg-white text-black px-5 py-1.5 text-xs font-bold uppercase tracking-widest shadow-[0_0_20px_rgba(255,255,255,0.3)]"
            >
              {{ t('pricing.popular') }}
            </div>

            <div class="mb-8 relative mt-2">
              <h3 class="mb-2 text-2xl font-medium text-white">
                {{ plan.name }}
              </h3>
              <p v-if="plan.description" class="text-sm text-gray-400 font-light">
                {{ plan.description }}
              </p>
            </div>

            <!-- Rate info -->
            <div class="mb-10 relative flex items-baseline gap-2">
              <span class="text-5xl font-medium tracking-tight" :class="plan.highlighted ? 'text-white' : 'text-gray-200'">
                {{ plan.rateDisplay }}
              </span>
              <span v-if="plan.rateUnit" class="text-base font-medium text-gray-500">
                {{ plan.rateUnit }}
              </span>
              <span v-else class="text-sm font-medium text-gray-500 uppercase tracking-wider">
                {{ t('pricing.rateMultiplier') }}
              </span>
            </div>

            <!-- Features -->
            <ul class="mb-12 flex-1 space-y-5 relative">
              <li
                v-for="(feature, fi) in plan.features"
                :key="fi"
                class="flex items-start gap-4 text-sm text-gray-300"
              >
                <div class="mt-0.5 rounded-full bg-white/5 p-1 flex-shrink-0 border border-white/5" :class="{'opacity-50 grayscale': feature.includes('不支持')}">
                   <svg v-if="feature.includes('不支持')" class="h-3 w-3 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                     <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                   </svg>
                   <svg v-else class="h-3 w-3 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                     <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                   </svg>
                </div>
                <span class="leading-relaxed" :class="{'line-through text-gray-500': feature.includes('不支持')}">{{ feature }}</span>
              </li>
            </ul>

            <!-- CTA -->
            <router-link
              :to="isAuthenticated ? '/dashboard' : '/register'"
              class="relative mt-auto block w-full rounded-full py-4 text-center text-sm font-medium transition-transform hover:scale-105"
              :class="[
                plan.highlighted
                  ? 'bg-white text-black'
                  : 'bg-white/5 border border-white/10 text-white hover:bg-white/10'
              ]"
            >
              {{ isAuthenticated ? t('pricing.manage') : t('pricing.getStarted') }}
            </router-link>
          </div>
        </div>

        <!-- Empty state -->
        <div v-else class="py-20 text-center">
          <p class="text-gray-400">{{ t('pricing.noPlans') }}</p>
        </div>

        <!-- Additional info -->
        <div class="mt-24 mx-auto max-w-4xl relative">
          <!-- Glow -->
          <div class="absolute inset-0 rounded-[40px] bg-gradient-to-b from-blue-500/10 to-purple-500/10 blur-2xl pointer-events-none"></div>
          
          <div class="relative rounded-[40px] border border-white/10 bg-[#131313]/90 p-12 text-center backdrop-blur-xl hover:border-white/20 transition-colors">
            <h3 class="mb-4 text-2xl font-medium text-white md:text-3xl">
              {{ t('pricing.customTitle') }}
            </h3>
            <p class="mb-10 text-base text-gray-400 max-w-lg mx-auto font-light leading-relaxed">
              {{ t('pricing.customDesc') }}
            </p>
            <button
              @click="isContactModalOpen = true"
              class="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-10 py-4 text-sm font-medium text-white transition-all hover:bg-white/10 hover:scale-105"
            >
              {{ t('pricing.contactUs') }}
            </button>
          </div>
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
import { ref, computed, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { useAuthStore, useAppStore } from '@/stores'
import { getAvailable } from '@/api/groups'
import type { Group } from '@/types'
import PublicNavbar from '@/components/layout/PublicNavbar.vue'
import PublicFooter from '@/components/layout/PublicFooter.vue'
import ContactModal from '@/components/common/ContactModal.vue'

const { t } = useI18n()
const authStore = useAuthStore()
const appStore = useAppStore()

const loading = ref(true)
const isContactModalOpen = ref(false)
const groups = ref<Group[]>([])
const isAuthenticated = computed(() => authStore.isAuthenticated)

interface PricingPlan {
  id: number
  name: string
  description: string | null
  rateDisplay: string
  rateUnit?: string
  features: string[]
  highlighted: boolean
}

const plans = computed<PricingPlan[]>(() => {
  if (groups.value.length === 0) return getDefaultPlans()

  return groups.value.map((g, i) => {
    const features: string[] = []
    features.push(t('pricing.feature.platform', { platform: g.platform }))
    features.push(t('pricing.feature.rate', { rate: g.rate_multiplier }))
    if (g.daily_limit_usd) features.push(t('pricing.feature.dailyLimit', { limit: g.daily_limit_usd }))
    if (g.monthly_limit_usd) features.push(t('pricing.feature.monthlyLimit', { limit: g.monthly_limit_usd }))
    if (g.subscription_type === 'subscription') features.push(t('pricing.feature.subscription'))
    else features.push(t('pricing.feature.standard'))

    return {
      id: g.id,
      name: g.name,
      description: g.description,
      rateDisplay: g.rate_multiplier + 'x',
      features,
      highlighted: i === 1
    }
  })
})

function getDefaultPlans(): PricingPlan[] {
  return [
    {
      id: 1,
      name: t('pricing.defaultPlans.basic.name'),
      description: t('pricing.defaultPlans.basic.desc'),
      rateDisplay: t('pricing.defaultPlans.basic.rateDisplay'),
      rateUnit: t('pricing.defaultPlans.basic.rateUnit'),
      features: [
        t('pricing.defaultPlans.basic.f1'),
        t('pricing.defaultPlans.basic.f2'),
        t('pricing.defaultPlans.basic.f3'),
        t('pricing.defaultPlans.basic.f4'),
        t('pricing.defaultPlans.basic.f5'),
      ],
      highlighted: false
    },
    {
      id: 2,
      name: t('pricing.defaultPlans.pro.name'),
      description: t('pricing.defaultPlans.pro.desc'),
      rateDisplay: t('pricing.defaultPlans.pro.rateDisplay'),
      rateUnit: t('pricing.defaultPlans.pro.rateUnit'),
      features: [
        t('pricing.defaultPlans.pro.f1'),
        t('pricing.defaultPlans.pro.f2'),
        t('pricing.defaultPlans.pro.f3'),
        t('pricing.defaultPlans.pro.f4'),
        t('pricing.defaultPlans.pro.f5'),
      ],
      highlighted: true
    },
    {
      id: 3,
      name: t('pricing.defaultPlans.enterprise.name'),
      description: t('pricing.defaultPlans.enterprise.desc'),
      rateDisplay: t('pricing.defaultPlans.enterprise.rateDisplay'),
      rateUnit: t('pricing.defaultPlans.enterprise.rateUnit'),
      features: [
        t('pricing.defaultPlans.enterprise.f1'),
        t('pricing.defaultPlans.enterprise.f2'),
        t('pricing.defaultPlans.enterprise.f3'),
        t('pricing.defaultPlans.enterprise.f4'),
        t('pricing.defaultPlans.enterprise.f5'),
      ],
      highlighted: false
    }
  ]
}

onMounted(async () => {
  authStore.checkAuth()
  if (!appStore.publicSettingsLoaded) {
    appStore.fetchPublicSettings()
  }

  if (isAuthenticated.value) {
    try {
      groups.value = await getAvailable()
    } catch {
      // Fall back to default plans
    }
  }
  loading.value = false
})
</script>
