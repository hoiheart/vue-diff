import { createApp } from 'vue';
import App from './App.vue';
import VueDiff from '../src';

// extend yaml language
import yaml from 'highlight.js/lib/languages/yaml';

VueDiff.hljs.registerLanguage('yaml', yaml);

const app = createApp(App);
app.use(VueDiff);
app.mount('#app');
