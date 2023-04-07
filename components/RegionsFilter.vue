<template>
  <div class="filter">
    <b-form-select v-model="selectedRegion" :options="options" class="region-filter" @change="update()">
    </b-form-select>
    <font-awesome-icon icon="fa-angle-down" class="arrow" />
  </div>
</template>

<script>

export default {
  props: {
    regions: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      options: [
        { value: '', text: "Filter by region", disabled: true },
        { value: "All", text: "All" },
      ],
      selectedRegion: '',
    }
  },
  watch: {
    regions: {
      handler(newVal) {
        if (newVal) {
          newVal.forEach((item) => {
            this.options.push({
              value: item,
              text: item,
            });
          });
        }
      },
      immediate: true,
    },
  },
  methods: {
    update() {
      this.$emit('loading')
      setTimeout(() => {
        this.$emit('update', this.selectedRegion)
      }, 100)
    },
  },
}
</script>
<style lang="scss" scoped>
.filter {
  position: relative;

  .region-filter {
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
  .filter .region-filter {
    width: 45vw;
  }
}
</style>
