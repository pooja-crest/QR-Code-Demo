import CustomComponent from './DropdownCustom'
import CustomComponent2 from './DropdownMenuCustom'
import CustomComponent3 from './DropdownItemCustom'
import CustomComponent4 from './DropdownGroupCustom'

export default Vue => {
    Vue.component(CustomComponent.name, CustomComponent)
    Vue.component(CustomComponent2.name, CustomComponent2)
    Vue.component(CustomComponent3.name, CustomComponent3)
    Vue.component(CustomComponent4.name, CustomComponent4)
}
