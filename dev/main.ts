import { createApp } from 'vue'
import App from './App.vue'
import VueDiff from '../src'

const app = createApp(App)
app.use(VueDiff)
app.mount('#app')
