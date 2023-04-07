<template>
  <b-overlay :show="loading">
    <b-container>
      <b-row>
        <b-col xl="5" lg="5" md="6" sm="12" cols="12">
          <search-filter :countries="countries" @filter="update($event)" @loading="loading = true" />
        </b-col>
        <b-col xl="7" lg="7" md="6" sm="12" cols="12" class="d-flex flex-row flex-md-row-reverse mt-3 mt-md-0 pl-2">
          <regions-filter :regions="regions" @update="filterByRegion($event)" @loading="loading = true"></regions-filter>
          <sort-dropdown :filtered-countries="filteredCountries" @update="update($event)"></sort-dropdown>
        </b-col>
      </b-row>
      <b-row class="mt-5">
        <b-col v-for="(country, index) in filteredCountries" :key="index" cols="12" xl="3" lg="4" md="4" sm="6">
          <NuxtLink :to="`/${country.cca2}`">
            <country-card :info="country" />
          </NuxtLink>
        </b-col>
      </b-row>
    </b-container>
  </b-overlay>
</template>
<script>
import CountryCard from '~/components/CountryCard'
import RegionsFilter from '~/components/RegionsFilter'
import SortDropdown from '~/components/SortDropdown'
import { getAllCountries } from '~/services'

export default {
  components: {
    CountryCard,
    RegionsFilter,
    SortDropdown,
  },
  async asyncData() {
    const countries = await getAllCountries()
    const filteredCountries = countries
    return { countries, filteredCountries }
  },
  data() {
    return {
      loading: false,
      regions: [],
    }
  },
  async mounted() {
    if (!this.countries.length) {
      this.countries = await getAllCountries()
      this.filteredCountries = this.countries
    }
    this.setRegions()
  },
  methods: {
    setRegions() {
      this.countries.forEach((item) => {
        if (!this.regions.includes(item.region)) {
          this.regions.push(item.region)
        }
      })
    },
    filterByRegion(e) {
      this.filteredCountries = e === "All" ? this.countries : this.countries.filter((item) => item.region === e)
      this.stopLoading()
    },
    update(e) {
      this.filteredCountries = e
      this.stopLoading()
    },
    stopLoading() {
      setTimeout(() => {
        this.loading = false
      }, 100)
    },
  },
}
</script>        
<style lang="scss" scoped>
a:hover {
  text-decoration: none;
}
</style> 
