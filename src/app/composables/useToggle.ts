import { ref } from 'vue'


const useToggle = (initialValue: boolean = false) => {
    const state = ref(initialValue)
    const toggle = () => state.value = !state.value
    return {
        toggle,
        state
    }
}

export default useToggle
