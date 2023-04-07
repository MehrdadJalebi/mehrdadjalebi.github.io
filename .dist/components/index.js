export const CountryCard = () => import('../../components/CountryCard.vue' /* webpackChunkName: "components/country-card" */).then(c => wrapFunctional(c.default || c))
export const MainHeader = () => import('../../components/MainHeader.vue' /* webpackChunkName: "components/main-header" */).then(c => wrapFunctional(c.default || c))
export const RegionsFilter = () => import('../../components/RegionsFilter.vue' /* webpackChunkName: "components/regions-filter" */).then(c => wrapFunctional(c.default || c))
export const SearchFilter = () => import('../../components/SearchFilter.vue' /* webpackChunkName: "components/search-filter" */).then(c => wrapFunctional(c.default || c))
export const SortDropdown = () => import('../../components/SortDropdown.vue' /* webpackChunkName: "components/sort-dropdown" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
