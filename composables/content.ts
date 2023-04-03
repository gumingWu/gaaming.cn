import { defineStore } from 'pinia'

export const useContentMd = defineStore('contentMd', () => {
  // const contentMd = ref<any[]>([])
  const contentMd = useSessionStorage<any[]>('content-md', [])

  const saveContentMd = (md: any[]) => {
    contentMd.value = md
  }

  const getContentMdInfo = (route: string) => {
    return contentMd.value.find(content => content._path === route)
  }

  return {
    saveContentMd,
    getContentMdInfo,
  }
})