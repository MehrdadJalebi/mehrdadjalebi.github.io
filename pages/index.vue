<template>
  <div>
    <div v-for="(country, index) in countries" :key="index">
      <span>{{ country.name }}</span>
    </div>
  </div>
</template>


<script>
import { getAllCountries } from '~/services'
export default {
  async asyncData() {
    const countries = await getAllCountries()
    return { countries }
  },
  async mounted() {
    if (!this.countries.length) {
      this.countries = await getAllCountries()
    }
  },
}
</script>

