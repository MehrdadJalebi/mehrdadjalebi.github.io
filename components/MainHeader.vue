<template>
  <b-navbar variant="faded" type="light" fixed="top">
    <b-container>
      <b-navbar-brand>
        <NuxtLink to="/">Where in the world?</NuxtLink>
      </b-navbar-brand>
      <b-navbar-nav class="ml-auto">
        <b-button class="toggle" variant="transparent" @click="changeThemeMode">
          <font-awesome-icon icon="fa-moon" /> Dark Mode
        </b-button>
      </b-navbar-nav>
    </b-container>
  </b-navbar>
</template>
<script>
export default {
  data() {
    return {
      currentTheme: 'light',
    }
  },
  methods: {
    changeThemeMode() {
      this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light'
      if (process.client) {
        document.documentElement.className = this.currentTheme
      }
    },
  },
}
</script>
<style lang="scss" scoped>
.container {
  padding: 0 15px;
}

.navbar {
  padding: 1rem 0;
  background-color: var(--elements-primary);
  box-shadow: 0px -5px 8px 0px;

  a {
    color: var(--text-primary);
    font-weight: 800;
    text-decoration: none;
  }

  .toggle {
    color: var(--text-primary);
    box-shadow: none;
    padding-right: 0;
  }
}

@media screen and (max-width: 768px) {
  .navbar {
    padding: 1rem 2rem;
  }
}

@media screen and (max-width: 412px) {
  .navbar {
    padding: 1rem 1.5rem;

    a,
    .toggle {
      font-size: 0.8em;
    }
  }
}</style> 
