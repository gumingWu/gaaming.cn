import { generate } from '@ant-design/colors'
import { defineStore } from 'pinia'
import type { ProjectListType } from '~~/types'

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

export const useProjectColor = defineStore('project', () => {
  // const projectListColor = ref<Record<string, any>>(new Map())
  const projectListColor = useSessionStorage<Record<string, any>>('project-color', new Map())

  const getProjectListColor = (projectList: ProjectListType) => {
    if(projectListColor.value.size) return projectListColor

    for(let i=0; i<projectList.length; i++) {
      const randomColor = useColor()
      projectListColor.value.set(projectList[i].title, randomColor)
    }
    return projectListColor
  }

  const getCurProjectColor = (title: string) => {
    return projectListColor.value.get(title)
  }

  return {
    getProjectListColor,
    getCurProjectColor,
  }
})

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