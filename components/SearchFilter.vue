<template>
  <div>
    <b-input-group>
      <b-input-group-prepend>
        <b-button @click="searchByCountry()">
          <font-awesome-icon icon="fa-search" />
        </b-button>
      </b-input-group-prepend>
      <b-form-input v-model="searchText" placeholder="search for a country..." @keyup="checkIsEmpty()"
        @keyup.enter="searchByCountry()" />

    </b-input-group>
  </div>
</template>
<script>
import { stringSimilarity } from "string-similarity-js";

export default {
  props: {
    countries: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      searchText: '',
    }
  },
  methods: {
    checkIsEmpty() {
      if (!this.searchText.length) {
        this.$emit('loading')
        setTimeout(() => {
          this.$emit('filter', this.countries)
        }, 100)
      }
    },
    searchByCountry() {
      this.$emit('loading')
      const search = this.searchText.toLowerCase()
      const searchChars = [...new Set(search.split(''))]
      const filteredCountries = this.countries.filter((item) => {
        const lowerName = item.name.common.toLowerCase()
        const isIncludes = lowerName.includes(search)
        const isSimilar = stringSimilarity(lowerName, search) >= 0.4
        const isShorter = search.length <= lowerName.length
        const isSubstring = searchChars.every((char) => {
          return lowerName.includes(char)
        })
        return isShorter && isSubstring && (isIncludes || isSimilar)
      });
      this.$emit('filter', filteredCountries)
    },
  },
}
</script>
<style lang="scss" scoped>
.input-group {
  box-shadow: 0px 2px 10px 0 rgb(0 0 0 / 10%);

  input,
  button {
    border: 0;
    background-color: var(--elements-primary);
    color: var(--text-primary);
    height: 3.25rem;
  }

  input {
    padding-left: 10px;
  }

  button {
    padding-left: 20px;
  }
}

.form-control:focus,
.btn:focus {
  box-shadow: none;
}

.btn:active {
  background-color: var(--elements-primary);
  color: var(--text-primary);
}

@media screen and (max-width: 568px) {
  .input-group {
    margin-bottom: 10px;
  }
}</style> 
