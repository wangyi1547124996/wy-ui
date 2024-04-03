import WyBotton from "./components/wy-botton.vue";
import type {App} from 'vue'

const components = [
    WyBotton
]

export function install(app : App) {
    components.forEach(component => {
        app.component(component.name , component)
    })
}

export default {
    install
}
  
export {
    WyBotton
}