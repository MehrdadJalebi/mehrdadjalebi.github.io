<template>
  <div>
    <main-header />
    <Nuxt class="nuxt" />
  </div>
</template>

<script>
import MainHeader from '~/components/MainHeader'

export default {
  components: {
    MainHeader,
  },
}
</script>

<style>
:root {
  --text-primary: hsl(200, 15%, 8%);
  --background-primary: hsl(0, 0%, 98%);
  --elements-primary: hsl(0, 0%, 100%);
  --input-primary: hsl(0, 0%, 52%);
}

:root.dark {
  --text-primary: hsl(0, 0%, 100%);
  --background-primary: hsl(207, 26%, 17%);
  --elements-primary: hsl(209, 23%, 22%);
  --input-primary: hsl(0, 0%, 52%);
}

body {
  background-color: var(--background-primary);
}

.nuxt {
  margin-top: 7rem;
  min-height: calc(100vh - 7rem);
}
</style>
