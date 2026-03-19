<template>
  <footer class="bg-transparent text-gray-400 font-sans">
    <div class="mx-auto max-w-7xl px-6 py-16">
      <div class="grid gap-10 md:grid-cols-4 lg:grid-cols-5">
        <!-- Brand -->
        <div class="md:col-span-2 lg:pr-8">
          <div class="mb-6 flex items-center gap-3">
            <div class="h-9 w-9 overflow-hidden rounded-lg shadow-sm border border-white/10 bg-white/5 p-1">
              <img :src="siteLogo || '/logo.png'" alt="Logo" class="h-full w-full object-contain filter brightness-110" />
            </div>
            <span class="text-xl font-medium tracking-tight text-white">{{ siteName }}</span>
          </div>
          <p class="text-sm leading-relaxed text-gray-500 font-light max-w-sm">
            {{ t('publicFooter.tagline') }}
          </p>
        </div>

        <!-- Product -->
        <div>
          <h3 class="mb-6 text-xs font-semibold tracking-widest text-white uppercase">
            {{ t('publicFooter.product') }}
          </h3>
          <ul class="space-y-4">
            <li>
              <router-link to="/pricing" class="text-sm text-gray-400 transition-colors hover:text-white">
                {{ t('publicNav.pricing') }}
              </router-link>
            </li>
            <li>
              <router-link to="/models" class="text-sm text-gray-400 transition-colors hover:text-white">
                {{ t('publicNav.models') }}
              </router-link>
            </li>
            <li>
              <a :href="docUrl || '/docs'" target="_blank" rel="noopener noreferrer" class="text-sm text-gray-400 transition-colors hover:text-white">
                {{ t('home.docs') }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Resources -->
        <div>
          <h3 class="mb-6 text-xs font-semibold tracking-widest text-white uppercase">
            {{ t('publicFooter.resources') }}
          </h3>
          <ul class="space-y-4">
            <li>
              <router-link to="/key-usage" class="text-sm text-gray-400 transition-colors hover:text-white">
                {{ t('publicFooter.keyUsage') }}
              </router-link>
            </li>
            <li>
              <a :href="githubUrl" target="_blank" rel="noopener noreferrer" class="text-sm text-gray-400 transition-colors hover:text-white">
                GitHub
              </a>
            </li>
          </ul>
        </div>

        <!-- Account -->
        <div>
          <h3 class="mb-6 text-xs font-semibold tracking-widest text-white uppercase">
            {{ t('publicFooter.account') }}
          </h3>
          <ul class="space-y-4">
            <li>
              <router-link to="/login" class="text-sm text-gray-400 transition-colors hover:text-white">
                {{ t('home.login') }}
              </router-link>
            </li>
            <li>
              <router-link to="/register" class="text-sm text-gray-400 transition-colors hover:text-white">
                {{ t('publicFooter.register') }}
              </router-link>
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom bar -->
      <div class="mt-16 border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p class="text-xs text-gray-600 font-light tracking-wide">
          &copy; {{ currentYear }} {{ siteName }}. {{ t('publicFooter.allRightsReserved') || t('home.footer.allRightsReserved') || 'All Rights Reserved.' }}
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useAppStore } from '@/stores'

const { t } = useI18n()
const appStore = useAppStore()

const siteName = computed(() => appStore.cachedPublicSettings?.site_name || appStore.siteName || 'Pingjoku')
const siteLogo = computed(() => appStore.cachedPublicSettings?.site_logo || appStore.siteLogo || '')
const docUrl = computed(() => appStore.cachedPublicSettings?.doc_url || appStore.docUrl || '')
const githubUrl = 'https://github.com/Wei-Shaw/sub2api'
const currentYear = computed(() => new Date().getFullYear())
</script>
