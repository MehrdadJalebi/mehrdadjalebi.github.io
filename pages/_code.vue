<template>
  <b-container>
    <b-row>
      <b-col>
        <b-button class="back" @click="$router.go(-1)">
          <font-awesome-icon icon="arrow-left" class="mr-1" /> Back
        </b-button>
      </b-col>
    </b-row>
    <b-row class="mt-5">
      <b-col cols="12" lg="6" sm="12">
        <b-img-lazy :src="country?.flags?.png" :img-alt="country.flag" blank-color="gray" blank-height="360" />
      </b-col>
      <b-col cols="12" lg="6" sm="12">
        <b-row class="ml-lg-4 ml-0 country-name pt-3">
          <b-col class="pl-0">{{ country?.name?.common }}</b-col>
        </b-row>
        <b-row class="ml-lg-4 ml-0">
          <b-col cols="12" lg="6" sm="12" class="mt-3 pl-0">
            <div class="attr">
              <div class="title">Native Name:</div>
              <div class="value">{{ nativeName }}</div>
            </div>
            <div class="attr">
              <div class="title">Population:</div>
              <div class="value">{{ country?.population?.toLocaleString("en-US") }}</div>
            </div>
            <div class="attr">
              <div class="title">Region:</div>
              <div class="value">{{ (country?.region) }}</div>
            </div>
            <div class="attr">
              <div class="title">Sub Region:</div>
              <div class="value">{{ (country?.subregion) }}</div>
            </div>
            <div class="attr">
              <div class="title">Capital:</div>
              <div class="value">{{ capital }}</div>
            </div>
          </b-col>
          <b-col cols="12" lg="6" sm="12" class="mt-3 pl-0">
            <div class="attr">
              <div class="title">Top Level Domain:</div>
              <div class="value">{{ tld }}</div>
            </div>
            <div class="attr">
              <div class="title">Currencies:</div>
              <div class="value">{{ currencies }}</div>
            </div>
            <div class="attr">
              <div class="title">Languages:</div>
              <div class="value">{{ languages }}</div>
            </div>
          </b-col>
        </b-row>
        <b-row class="attr ml-lg-4 ml-0 pt-3" v-if="borderCountries.length">
          <b-col cols="12" xl="4" lg="4" md="12" sm="12" class="pl-0">
            <div class="title mb-2">
              Border Countries:
            </div>
          </b-col>
          <b-col cols="12" xl="8" lg="8" md="12" sm="12" class="pl-0">
            <NuxtLink class="border-country-box" v-for="(bc, index) of borderCountries" :key="index" :to="`/${bc.cca2}`">
              {{ bc.name.common }}
            </NuxtLink>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { getCountryByCode, getBorderCountries } from '~/services'

export default {
  async asyncData({ params }) {
    const country = await getCountryByCode(params.code)
    let borderCountries = []
    if (country?.borders?.length) {
      const codes = country.borders.join(',')
      borderCountries = await getBorderCountries(codes)
    }
    return { country, borderCountries }
  },
  async mounted() {
    if (!Object.keys(this.country).length) {
      this.country = await getCountryByCode(this.$route.params.code)
      if (this.country?.borders?.length) {
        const codes = this.country.borders.join(',')
        this.borderCountries = await getBorderCountries(codes)
      }
    }
  },
  computed: {
    nativeName() {
      const nativeName = Object.keys(this.country?.name?.nativeName)[0]
      return this.country?.name?.nativeName[nativeName].common
    },
    capital() {
      return this.country?.capital?.length ? this.country.capital[0] : 'Unknown'
    },
    tld() {
      return this.country?.tld?.length ? this.country?.tld[0] : 'Unknown'
    },
    currencies() {
      return Object.values(this.country?.currencies).map(currency => currency.name).join(', ')
    },
    languages() {
      return Object.values(this.country?.languages).join(', ')
    },
  },
};
</script>

<style lang="scss" scoped>
a {
  color: var(--text-primary);
  text-decoration: none;
}

.back {
  border: 0;
  border-radius: 5px;
  padding: 10px 15px;
  color: var(--text-primary);
  background-color: var(--elements-primary);
  box-shadow: 0 0 5px #aaa;
  min-width: 8rem;
  text-align: center;
}

img {
  width: inherit;
}

.country-name {
  font-size: 2rem;
  font-weight: 800;
  color: var(--text-primary);
}

.attr {
  display: flex;
  color: var(--text-primary);

  .title {
    font-weight: 600;
    margin-right: 5px;
    width: inherit;
  }

  .value {
    font-size: 0.9em;
    line-height: 1.7;
  }
}

.border-country-box {
  background-color: var(--elements-primary);
  color: var(--text-primary);
  box-shadow: 0 0 3px #aaa;
  padding: 2px 15px;
  margin: 0 5px 5px 0;
  border-radius: 2px;
  display: inline-block;
  text-decoration: none;
  font-size: 0.75em;
}
</style>
