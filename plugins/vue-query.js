import Vue from 'vue'
import { VueQueryPlugin, QueryClient, hydrate } from '@tanstack/vue-query'

export default (context) => {
  const queryClient = new QueryClient({
    defaultOptions: { queries: { staleTime: 5000 } },
  })
  const options = { queryClient }

  Vue.use(VueQueryPlugin, options)

  if (process.client) {
    if (context.nuxtState && context.nuxtState['vue-query']) {
      hydrate(queryClient, context.nuxtState['vue-query'])
    }
  }
}
