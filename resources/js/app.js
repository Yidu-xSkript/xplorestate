
import { InertiaProgress } from '@inertiajs/progress/src'
import { createApp, h } from 'vue'
import { App, plugin } from '@inertiajs/inertia-vue3'

const el = document.getElementById('app')

InertiaProgress.init()

let app = createApp({
  render: () => h(App, {
    initialPage: JSON.parse(el.dataset.page),
    resolveComponent: name => import(`./Pages/${name}`).then(module => module.default),
  })
})
app.use(plugin)
app.mount(el)
