<template>
    <label
        :class="[`input-radio-custom--${color}`, (centerItem) ? 'justify-center' : '']"
        class="custom-component input-radio-custom--container items-center">
        <input
            v-bind="$attrs"
            :checked="isChecked"
            :value="value"
            :name="componentName || value"
            type="radio"
            class="input-radio-custom--input"
            v-on="listeners">
        <span class="input-radio-custom--radio">
            <span :style="styles"
                class="input-radio-custom--border">
            </span>
            <span :style="styleCircle"
              class="input-radio-custom--fill">
            </span>
        </span>
        <span class="input-radio-custom--label">
            <slot/>
        </span>
    </label>
</template>

<script>
    import _color from '../../assets/utils/color.js'
    export default {
        name:'InputRadioCustom',
        inheritAttrs:false,
        props:{
            value:{},
            componentValue:{},
            componentName:{},
            color:{
                default:'primary',
                type:String
            },
            centerItem:{
                default:true,
                type:Boolean
            }
        },
        computed:{
            listeners(){
                return {
                    ...this.$listeners,
                    input: () => this.$emit('input', this.componentValue),
                    click: () => this.$emit('input', this.componentValue)
                }
            },
            attrs(){
                let attrsx = JSON.parse(JSON.stringify(this.$attrs))
                return {
                    attrsx
                }
            },
            isChecked(){
                return this.componentValue == this.value
            },
            styles(){
                return {
                    'border': `2px solid ${this.isChecked?_color.getColor(this.color,1):'rgb(200, 200, 200)'}`
                }
            },
            styleCircle(){
                return {
                    'background': _color.getColor(this.color,1),
                    'box-shadow': `0px 3px 12px 0px ${_color.getColor(this.color,.4)}`
                }
            }
        },
        methods:{
            giveColor(color,opacity){
                return _color.rColor(color,opacity)
            }
        },
    }
</script>

<style lang="scss">

</style>
