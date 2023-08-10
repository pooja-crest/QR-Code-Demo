import Vue from "vue";
import Notifications from 'vue-notification';
import FeatherIcon from "../components/FeatherIcon.vue";
import IconCustom from "../components/IconCustom.vue";
import DividerCustom from "../components/DividerCustom.vue";
import CardCustom from "../components/CardCustom.vue";
import LoginAsComponent from "../components/LoginAsComponent.vue";
import InputCustom from "../components/InputCustom.vue";
import InputRadioCustom from "../components/InputRadioCustom.vue";
import ToggleCustom from "../components/ToggleCustom.vue";
import DropdownCustom from "../components/DropdownCustom/index";
import SelectCustom from "../components/SelectCustom/index";
import ModalCustom from "../components/ModalCustom/index";
import PopupCustom from "../components/PopupCustom/index";
import CustomTable from "../components/CustomTable/index";
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import vSelect from 'vue-select';
import 'vue-select/dist/vue-select.css';
import vueLoading from "vue-loading-overlay";

Vue.component(FeatherIcon.name, FeatherIcon);
Vue.component(IconCustom.name, IconCustom);
Vue.component(DividerCustom.name, DividerCustom);
Vue.component(CardCustom.name, CardCustom);
Vue.component(LoginAsComponent.name, LoginAsComponent);
Vue.component(InputCustom.name, InputCustom);
Vue.component(InputRadioCustom.name, InputRadioCustom);
Vue.component(ToggleCustom.name, ToggleCustom);
Vue.use(DropdownCustom);
Vue.use(SelectCustom);
Vue.use(ModalCustom);
Vue.use(PopupCustom);
Vue.use(Notifications);
Vue.use(Loading);
Vue.component('v-select', vSelect);
Vue.use(CustomTable);