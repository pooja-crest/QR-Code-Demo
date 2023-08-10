import CustomComponent from './SelectCustom'
import CustomComponent2 from './SelectItemCustom'
import CustomComponent3 from './SelectMenuCustom'

export default Vue => {
    Vue.component(CustomComponent.name, CustomComponent)
    Vue.component(CustomComponent2.name, CustomComponent2)
    Vue.component(CustomComponent3.name, CustomComponent3)
}
