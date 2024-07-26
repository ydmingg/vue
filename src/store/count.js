import { reactive } from "vue"

export const count = reactive({
    count: 0,
    increment() { 
        this.count++
    }
})