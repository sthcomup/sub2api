<template>
  <header
    class="sticky top-0 z-50 border-b border-white/5 bg-[#0a0a0a]/80 backdrop-blur-xl transition-all duration-300 font-sans"
  >
    <nav class="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
      <!-- Left: Logo + Site Name -->
      <router-link to="/home" class="flex items-center gap-3 transition-transform hover:scale-[1.02]">
        <div class="h-9 w-9 overflow-hidden rounded-xl border border-white/10 bg-white/5 p-1 flex items-center justify-center">
          <img :src="siteLogo || '/logo.png'" alt="Logo" class="h-full w-full object-contain filter brightness-110" />
        </div>
        <span class="text-xl font-medium tracking-tight text-white">{{ siteName }}</span>
      </router-link>

      <!-- Center: Navigation Links (desktop) -->
      <div class="hidden items-center gap-2 md:flex">
        <router-link
          v-for="link in navLinks"
          :key="link.path"
          :to="link.path"
          class="rounded-full px-5 py-2 text-sm font-medium transition-all duration-300"
          :class="[
            isActiveRoute(link.path)
              ? 'bg-white/10 text-white shadow-[0_0_15px_rgba(255,255,255,0.05)]'
              : 'text-gray-400 hover:bg-white/5 hover:text-white'
          ]"
        >
          {{ link.label }}
        </router-link>
        <a
          :href="docUrl || '/docs'"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-1.5 rounded-full px-5 py-2 text-sm font-medium text-gray-400 transition-all duration-300 hover:bg-white/5 hover:text-white"
        >
          {{ t('publicNav.docs') }}
          <svg class="h-3.5 w-3.5 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
          </svg>
        </a>
      </div>

      <!-- Right: Actions -->
      <div class="flex items-center gap-3">
        <div class="hidden sm:block text-gray-400 hover:text-white transition-colors">
          <LocaleSwitcher />
        </div>



        <!-- Mobile menu toggle -->
        <button
          @click="mobileMenuOpen = !mobileMenuOpen"
          class="rounded-full p-2.5 text-gray-400 transition-colors hover:bg-white/10 md:hidden"
        >
          <Icon :name="mobileMenuOpen ? 'x' : 'menu'" size="md" />
        </button>

        <!-- Auth button (desktop) -->
        <router-link
          v-if="isAuthenticated"
          :to="dashboardPath"
          class="hidden items-center gap-2 rounded-full bg-white px-6 py-2.5 text-sm font-medium text-black transition-transform hover:scale-105 md:inline-flex"
        >
          {{ t('home.dashboard') }}
          <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </router-link>
        <router-link
          v-else
          to="/login"
          class="hidden rounded-full border border-white/20 bg-white/5 px-6 py-2.5 text-sm font-medium text-white backdrop-blur-md transition-all hover:bg-white/10 hover:scale-105 md:inline-flex"
        >
          {{ t('home.login') }}
        </router-link>
      </div>
    </nav>

    <!-- Mobile menu -->
    <transition name="slide-down">
      <div
        v-if="mobileMenuOpen"
        class="border-t border-white/5 bg-[#0a0a0a]/95 backdrop-blur-3xl px-6 py-4 md:hidden absolute w-full left-0 origin-top shadow-2xl"
      >
        <div class="flex flex-col gap-2">
          <router-link
            v-for="link in navLinks"
            :key="link.path"
            :to="link.path"
            class="rounded-xl px-4 py-3 text-base font-medium transition-colors"
            :class="[
              isActiveRoute(link.path)
                ? 'bg-white/10 text-white'
                : 'text-gray-400 hover:bg-white/5 hover:text-white'
            ]"
            @click="mobileMenuOpen = false"
          >
            {{ link.label }}
          </router-link>
          <a
            :href="docUrl || '/docs'"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center justify-between rounded-xl px-4 py-3 text-base font-medium text-gray-400 transition-colors hover:bg-white/5 hover:text-white"
            @click="mobileMenuOpen = false"
          >
            {{ t('publicNav.docs') }}
            <svg class="h-4 w-4 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
          </a>
          <div class="my-3 h-px w-full bg-white/5"></div>
          
          <div class="pb-2 pt-1 flex flex-col gap-3">
             <router-link
               v-if="isAuthenticated"
               :to="dashboardPath"
               class="flex w-full justify-center rounded-full bg-white px-4 py-3.5 text-center text-base font-medium text-black transition-transform active:scale-95"
               @click="mobileMenuOpen = false"
             >
               {{ t('home.dashboard') }}
             </router-link>
             <router-link
               v-else
               to="/login"
               class="flex w-full justify-center rounded-full bg-white/10 border border-white/10 px-4 py-3.5 text-center text-base font-medium text-white transition-transform active:scale-95 hover:bg-white/20"
               @click="mobileMenuOpen = false"
             >
               {{ t('home.login') }}
             </router-link>
          </div>
        </div>
      </div>
    </transition>
  </header>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { useAuthStore, useAppStore } from '@/stores'
import LocaleSwitcher from '@/components/common/LocaleSwitcher.vue'
import Icon from '@/components/icons/Icon.vue'

const { t } = useI18n()
const route = useRoute()
const authStore = useAuthStore()
const appStore = useAppStore()

const mobileMenuOpen = ref(false)


const siteName = computed(() => appStore.cachedPublicSettings?.site_name || appStore.siteName || 'Pingjoku')
const siteLogo = computed(() => appStore.cachedPublicSettings?.site_logo || appStore.siteLogo || '')
const docUrl = computed(() => appStore.cachedPublicSettings?.doc_url || appStore.docUrl || '')
const isAuthenticated = computed(() => authStore.isAuthenticated)
const isAdmin = computed(() => authStore.isAdmin)
const dashboardPath = computed(() => (isAdmin.value ? '/admin/dashboard' : '/dashboard'))

const navLinks = computed(() => [
  { path: '/home', label: t('publicNav.home') },
  { path: '/pricing', label: t('publicNav.pricing') },
  { path: '/models', label: t('publicNav.models') },
])

function isActiveRoute(path: string) {
  return route.path === path
}


</script>

<style scoped>
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.slide-down-enter-from,
.slide-down-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
