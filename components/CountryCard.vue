<template>
  <b-card body-class="country-card">
    <b-card-img-lazy :src="info.flags.png" :img-alt="info.flag" blank-color="gray" blank-height="150" />
    <b-card-body class="info">
      <b-card-text class="country-name">
        <span v-b-tooltip.hover :title="info?.name?.common">
          {{ countryName }}
        </span>
      </b-card-text>
      <b-card-group class="attr mt-2">
        <b-card-text class="title">Population:</b-card-text>
        <b-card-text class="value">{{ info?.population.toLocaleString("en-US") }}</b-card-text>
      </b-card-group>
      <b-card-group class="attr">
        <b-card-text class="title">Region:</b-card-text>
        <b-card-text class="value">{{ info?.region }}</b-card-text>
      </b-card-group>
      <b-card-group class="attr">
        <b-card-text class="title">Capital:</b-card-text>
        <b-card-text class="value">
          {{ capital }}
        </b-card-text>
      </b-card-group>
    </b-card-body>
  </b-card>
</template>
<script>
import { truncate } from '~/utils'
export default {
  props: {
    info: {
      type: Object,
      default: () => { }
    },
  },
  computed: {
    capital() {
      return this.info?.capital?.length ? this.info.capital[0] : 'Unknown'
    },
    countryName() {
      return truncate(this.info?.name?.common, 20)
    },
  },
}
</script>
<style lang="scss">
.card {
  box-shadow: 0px 2px 10px 0 rgb(0 0 0 / 10%);
  background: var(--elements-primary);
  border-radius: 0.5em;
  color: var(--text-primary);
  height: 20rem;
  margin-bottom: 2rem;

  .country-card {
    padding: 0;

    .info {
      padding: 1.5rem;
    }

    img {
      aspect-ratio: 5/3;
      border-radius: 0.5em 0.5em 0 0;
    }

    .country-name {
      font-weight: 800;
      font-size: 1.2rem;
    }

    .attr {
      display: flex;

      .title,
      .value {
        font-size: 0.85rem;
        margin-bottom: 0;
      }

      .title {
        font-weight: 600;
      }

      .value {
        margin-left: 0.25rem;
      }
    }
  }
}

@media (max-width: 575px) {
  .card {
    height: auto;
    min-height: 20rem;
    max-width: 80vw;
    margin: 0 auto 2rem;
  }
}</style> 
