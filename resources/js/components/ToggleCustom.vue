<template>
    <div class="togglecustom--container">
        <div class="togglecustom--toggle" @click="change">
            <div class="togglecustom--rectangle" :class="[(enabled) ? 'active':'', computedColor]">
            </div>
            <div class="togglecustom--knob" :class="[(enabled) ? 'active':'', computedColor]">
            </div>
        </div>
        <div class="togglecustom-text--container">
            <span class="togglecustom--text">
                {{text}}
            </span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ToggleCustom",
        props:{
            trueText:{
                default:'on',
                type:String
            },
            falseText:{
                default:'off',
                type:String
            },
            color:{
                default:'primary',
                type:String
            },
            value:{
                default:false,
                type:Boolean
            }
        },
        data(){
            return{
                enabled:this.value
            }
        },
        computed:{
            text(){
                if (this.enabled)
                    return this.trueText;
                else
                    return this.falseText;
            },
            computedColor(){
                switch(this.color) {
                    case 'primary':
                        return 'primary';
                        break;
                    default:
                        return 'default';
                        break;
                }
            }
        },
        methods:{
            change(){
                this.enabled=!this.enabled;
                this.$emit('input', this.enabled);
            }
        }
    }
</script>

<style lang="scss">
    .togglecustom--container{
        display:flex;
        align-items: center;
        .togglecustom--toggle{
            display:flex;
            cursor:pointer;
            .togglecustom--rectangle{
                height: 16px;
                width: 30px;
                opacity: 0.5;
                border-radius: 8px;
                background-color: #E4E8F0;
                &.active{
                    &.primary{
                        background:var(--color-primary);
                    }
                }
            }
            .togglecustom--knob{
                position:relative;
                bottom:1px;
                border-radius:9999px;
                height: 18px;
                width: 18px;
                box-shadow: 0 0 1px 0 rgba(0,0,0,0.12), 0 1px 1px 0 rgba(0,0,0,0.24);
                right:32px;
                background-color: #F7F9FA;
                &.active{
                    right:16px;
                    &.primary{
                        background:var(--color-primary);
                    }
                }
            }
        }
        .togglecustom-text--container{
            .togglecustom--text{
            }
        }
    }
</style>
