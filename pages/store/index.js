import create from 'zustand'

export const useStore = create(set => ({
    theme: 'dark',
    setTheme() {
        set(state => {
            if(state.theme === 'dark') {
                return state.theme = 'light'
            } else {
                return state.theme = 'dark'
            }
        })
    },
})
)