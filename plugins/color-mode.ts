// https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/meta/name/theme-color

export default defineNuxtPlugin(() => {
  const colorMode = useColorMode()
  useHead({
    meta: [{
      id: 'theme-color',
      name: 'theme-color',
      content: () => colorMode.value === 'dark' ? '#111111' : '#fafafa',
    }],
  })
})