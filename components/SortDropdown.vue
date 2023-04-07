<template>
  <div class="filter">
    <b-form-select v-model="selectedSortType" :options="options" class="sort-filter" @change="update()">
    </b-form-select>
    <font-awesome-icon icon="fa-angle-down" class="arrow" />
  </div>
</template>

<script>
export default {
  props: {
    filteredCountries: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      options: [
        { value: '', text: "Sort by", disabled: true },
        { value: "None", text: "None" },
        { value: "Country Name", text: "Country Name" },
        { value: "Population", text: "Population" },
      ],
      selectedSortType: '',
    }
  },
  methods: {
    update() {
      this.$emit('loading')
      const sortedCountries = [...this.filteredCountries]
      if (this.selectedSortType === 'Population') {
        sortedCountries.sort((a, b) => b.population - a.population);
      } else if (this.selectedSortType === 'Country Name') {
        sortedCountries.sort((a, b) => a.name.common.localeCompare(b.name.common));
      }
      setTimeout(() => {
        this.$emit('update', sortedCountries)
      }, 100)
    },
  },
}
</script >
<style lang="scss" scoped>
.filter {
  position: relative;

  .sort-filter {
    width: 10rem;
    margin-left: 5px;
    height: 3.25rem;
    border: none;
    font-size: 0.9rem;
    background-color: var(--elements-primary);
    color: var(--text-primary);
    box-shadow: 0px 2px 10px 0 rgb(0 0 0 / 10%);
    background-image: none;

    &:focus {
      border: 0;
    }
  }

  .arrow {
    position: absolute;
    right: 10px;
    top: 20px;
  }
}


@media screen and (max-width: 568px) {
  .filter {
    margin-left: 0;
    margin-right: 5px;
  }
}
@media (max-width: 414px) {
  .filter .sort-filter {
    width: 45vw;
  }
}
</style>
