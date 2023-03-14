import { generate } from '@ant-design/colors'

export function useColor() {
  const defaultColor = getRandomColor()
  const color = ref(defaultColor)

  const colorList = computed(() => {
    return generate(color.value)
  })

  return {
    color,
    colorList
  }
}

// get random rgb color 
export function getRandomColor() {
  return `#${Math.floor(Math.random() * 16 * Math.pow(10, 6)).toString(16)}`
}

// get random rgba color
export function getRandomColorWithTransparent() {
  return `#${Math.floor(Math.random() * 16 * Math.pow(10, 8)).toString(16)}`
}

// get random rgba color with actual transparent
export function getRandomColorWithActualTransparent() {
  
}