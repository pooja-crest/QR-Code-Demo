<script>
import * as icons from 'vue-feather-icons'

export default {
    name: 'feather-icon',
    props: {
        icon: { type: String, required: true },
        svgClasses: { type: [String, Object, Array], default: "" },
        badge: {}
    },
    render(h) {
        let svg = h(icons[this.icon], {class: this.svgClasses});
        let badgeEl = h('span', {class: 'feather-icon-badge bg-danger text-white h-5 w-5 absolute rounded-full text-xs flex items-center justify-center', style: 'top: -7px; right: -10px'}, [this.badge]);
        let attr = {
            class: ['feather-icon select-none relative'],
            on: {
                click: this.clickFeather,
                mouseover: this.mouseoverFeather,
                mouseout: this.mouseoutFeather,
            }
        };
        let children = [svg]
        if(this.badge) children.push(badgeEl)
        return h('span', attr, children)
    },
    methods: {
        clickFeather(event) {
            this.$emit('click',event);
        },
        mouseoverFeather(event) {
            this.$emit('mouseover',event)
        },
        mouseoutFeather(event) {
            this.$emit('mouseout',event)
        },
    }
}

</script>

<style lang="scss">
@import "@sass/featherIcon.scss"
</style>
