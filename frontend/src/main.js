import { createApp } from 'vue'
import App from './App.vue'
import './css/tailwind.css'
import {
    Progress,

} from 'ant-design-vue'
import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css';



const app = createApp(App)
app.config.productionTip = false
app.use(Progress)
app.component('v-select', vSelect)
app.mount('#app')