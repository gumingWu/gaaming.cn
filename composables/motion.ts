export function useHomeMotion() {
  const introRef = ref()
  const imageRef = ref()

  useMotion(introRef, {
    initial: {
      y: 1000,
      opacity: 0
    },
    enter: {
      y: 0,
      opacity: 1
    }
  })

  useMotion(imageRef, {
    initial: {
      scale: 0,
      opacity: 0,
    },
    enter: {
      scale: 1,
      opacity: 1,
      transition: {
        delay: 500,
      },
    }
  })

  return {
    introRef,
    imageRef
  }
}