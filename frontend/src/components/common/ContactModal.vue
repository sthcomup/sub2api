<template>
  <transition name="modal-fade">
    <div v-if="isOpen" class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 sm:p-0" @click.self="close">
      <div class="relative w-full max-w-sm rounded-2xl bg-white p-8 text-center shadow-2xl dark:bg-dark-800" role="dialog" aria-modal="true">
        <button
          @click="close"
          class="absolute right-4 top-4 rounded-lg p-2 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600 dark:hover:bg-dark-700 dark:hover:text-gray-300"
        >
          <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <h3 class="mb-4 text-xl font-bold text-gray-900 dark:text-white">联系客服</h3>
        <p class="mb-6 text-sm text-gray-500 dark:text-dark-400">请扫描下方二维码添加客服微信进行专属咨询与购买</p>
        <div class="mx-auto flex aspect-square w-48 items-center justify-center overflow-hidden rounded-xl border border-gray-200 bg-gray-50 dark:border-dark-700 dark:bg-dark-900">
          <img src="https://via.placeholder.com/300?text=Wechat+QR+Code" alt="Wechat QR Code" class="h-full w-full object-cover" />
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'

defineProps<{
  isOpen: boolean
}>()

const emit = defineEmits<{
  (e: 'close'): void
}>()

function close() {
  emit('close')
}
</script>

<style scoped>
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
  transform: scale(0.95);
}
</style>
