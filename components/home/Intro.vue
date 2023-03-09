<script setup lang="ts">
const hiRef = ref()
const imRef = ref()
const fendRef = ref()

useMotion(hiRef, {
  initial: {
    x: -100,
    opacity: 0
  },
  enter: {
    x: 0,
    opacity: 1,
  }
})

useMotion(imRef, {
  initial: {
    x: -100,
    opacity: 0
  },
  enter: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 100,
    },
  }
})

useMotion(fendRef, {
  initial: {
    x: -100,
    opacity: 0
  },
  enter: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 200,
    },
  }
})
</script>

<template>
  <div >
      <div ref="hiRef" flex text="3xl md:4xl xl:5xl" >
        Hi!
        <div i-twemoji:man-superhero-light-skin-tone dark:i-twemoji:ninja-light-skin-tone ></div>
      </div>
      <div ref="imRef" text="5xl md:6xl xl:7xl" font="700" >
        I'm GaamingWu
      </div>
      <div ref="fendRef" text="xl md:2xl xl:3xl" >
        <div>
        A front-end developer
        </div>
        <div>
          who keen to explore interesting UI!
        </div>
      </div>
  </div>
</template>

<style scoped></style>
