<script lang="ts">
  import { setContext } from 'svelte'
  import { writable } from 'svelte/store'
  import { CTheme } from 'Constants/Contexts'
  import { LightTheme, DarkTheme } from './Theme'
  
  export let currentTheme = LightTheme
  
  const Theme = writable(currentTheme)
  
  setContext(CTheme, {
    theme: Theme,
    toggle: () => {
      Theme.update(current => {
        if (current === LightTheme) {
          return DarkTheme
        }
        return LightTheme
      })
    }
  })
</script>

<slot></slot>
