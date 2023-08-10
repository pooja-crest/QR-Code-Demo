<template>
    <li
        :class="{'selected':isSelected, 'multiple':multiple}"
        class="select-item-custom--item"
        @click="selectItem(value)"
        :value="value"
    >
        <button class="select-item-custom--button w-full">
            <span class="select-item-custom--text float-left">{{text}}</span>
            <span
                v-if="multiple"
                :class="{'selected':isSelected}"
                class="select-item-custom--checkbox float-right"
            >
                <feather-icon
                    v-if="isSelected"
                    class="select-item-custom--check-icon h-4 w-4"
                    icon="CheckIcon"
                ></feather-icon>
            </span>
        </button>
    </li>
</template>

<script>
export default {
    name: "SelectItemCustom",
    props: {
        value: {
            default: null
        },
        text: {
            type: String,
            default: ""
        },
        multiple: {
            default: false,
            type: Boolean
        }
    },
    data() {
        return {
            selectedValue: 0
        };
    },
    computed: {
        isSelected() {
            if (!this.multiple) {
                if (this.value == this.$parent.$parent.inputValue) {
                    return true;
                } else {
                    return false;
                }
            } else {
                return this.$parent.filteredDatas.includes(this.value);
            }
        }
    },
    methods: {
        selectItem(value) {
            if (!this.multiple) {
                this.selectedValue = value;
                this.$parent.$parent.inputValue = value;
            } else {
                if (this.$parent.filteredDatas.includes(value)) {
                    let filteredSelectedData = this.$parent.filteredDatas.filter(
                        data => {
                            return data != value;
                        }
                    );
                    this.$parent.selected = filteredSelectedData;
                    this.$parent.$parent.inputValue = filteredSelectedData;
                } else {
                    this.$parent.selected.push(value);
                }
            }
        }
    }
};
</script>

<style lang="scss">
.select-item-custom--item {
    cursor: pointer;
    list-style: none;
    padding: 10px;
    margin-top: 1px;
    .select-item-custom--button {
        cursor: inherit;
        background: transparent;
        border: none;
        outline: none;
        .select-item-custom--text {
            cursor: inherit;
            color: var(--color-text);
            font-family: Rubik;
            font-size: 15px;
            line-height: 18px;
        }
        .select-item-custom--checkbox {
            padding: 10px;
            background: white;
            -webkit-border-radius: 4px;
            -moz-border-radius: 4px;
            border-radius: 4px;
            border: 1px solid #e0e7ff;
            width: 22px;
            height: 22px;
            box-sizing: border-box;
            display: inline-flex;
            position: relative;
            .select-item-custom--check-icon {
                bottom: 7px;
                color: var(--color-primary);
                right: 7px;
            }
        }
    }
    &.selected {
        .select-item-custom--button {
            .select-item-custom--text {
                font-weight: 500;
            }
        }
        &.multiple {
            // background-color: #F4F6FC;
            .select-item-custom--button {
                .select-item-custom--text {
                    font-weight: 400;
                    color: var(--color-primary);
                }
            }
        }
    }
    &:hover {
        background-color: #f4f6fc;
        .select-item-custom--button {
            .select-item-custom--text {
                // color: var(--color-primary);
            }
        }
    }
}
</style>
