export function setupPageHeader() {
  useHead({
    titleTemplate: (title) => {
      let titleTemplate = title ?? ''

      if(titleTemplate.length)
        titleTemplate += ' | '
      
      titleTemplate += 'Gaaming'

      return titleTemplate
    }
  })
}
