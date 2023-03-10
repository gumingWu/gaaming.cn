<script setup lang="ts">
defineProps({
  left: String,
  right: String
})

const emits = defineEmits(['click'])
</script>

<template>
  <button flex items-center overflow-hidden rounded-md bg="white/70 hover:white/90 dark:slate-700 dark:hover:slate-900" p="x-3 y-2" @click="emits('click')" >
    <div v-if="left" :class="left" text-2xl ></div>
    <div class="text" text="xl md:2xl" >
      <slot>文字</slot>
    </div>
    <div v-if="right" class="right-icon" :class="right" text-2xl ></div>
  </button>
</template>

<style scoped>
button {
  transition: color .1s ease;
}

.text {
  transform: translateX(0.5rem);
  transition: transform .3s ease;
}

.right-icon {
  transform: translateX(2rem);
  transition: transform .3s ease;
}

button:hover .text {
  transform: translateX(0);
}
button:hover .right-icon {
  transform: translateX(0);
}
</style>
