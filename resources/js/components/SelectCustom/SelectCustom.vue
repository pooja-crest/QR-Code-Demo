<template>
  <div
    ref="selectcustom"
    @click="changeActive()"
    :class="{ active: dropdownVisible }"
    class="input-select-custom--parent input-select-custom--container flex items-center justify-end"
    v-bind:value="value"
  >
    <input type="hidden" v-model="inputValue" />
    <template v-if="!customButton">
      <input
        type="text"
        readonly
        :placeholder="inputPlaceholder"
        class="input-select-custom--input"
        :class="[inputClass, dropdownVisible ? 'active' : '']"
        :style="inputStyle"
        v-model="getInputText"
      />
      <button ref="selectcustom_dropdownicon" class="select-custom--dropdown-icon-container">
        <feather-icon
          :class="[iconClasses, dropdownVisible ? 'rotate180' : '']"
          icon="ChevronDownIcon"
          class="input-select-custom--dropdown-icon cursor-pointer h-4 w-4"
          :style="iconStyles"
        ></feather-icon>
      </button>
    </template>
    <template v-else>
      <slot name="custom-button"></slot>
    </template>

    <div class="select-item-custom--container">
      <select-menu-custom
        tabindex="-1"
        :class="menuClass"
        :search="search"
        :multiple="multiple"
        :data="data"
        :selected-data="inputValue"
        :style="menuStyle"
        :insert-to-parent="insertToParent"
      ></select-menu-custom>
    </div>
  </div>
</template>

<script>
export default {
  name: "SelectCustom",
  props: {
    inputClass: {
      type: String,
      default: "",
    },
    inputStyle: {
      type: String,
      default: "",
    },
    multiple: {
      type: Boolean,
      default: false,
    },
    data: {
      default: null,
    },
    value: {
      default: null,
    },
    search: {
      default: false,
      type: Boolean,
    },
    iconClasses: {
      default: "",
      type: String,
    },
    iconStyles: {
      default: "",
      type: String,
    },
    searchPlaceholder: {
      default: "Search",
      type: String,
    },
    inputPlaceholder: {
      default: "any",
      type: String,
    },
    customButton: {
      default: false,
      type: Boolean,
    },
    menuStyle: {
      default: "",
      type: String,
    },
    menuClass: {
      default: "",
      type: String,
    },
    widthx: {
      default: 0,
      type: Number,
    },
    insertToParent: {
      default: false,
      type: Boolean,
    },
  },
  data() {
    return {
      dropdownVisible: false,
      inputValue: this.value,
    };
  },
  mounted() {
    // if (!this.multiple && !this.search) {
    // if (!this.multiple) {
    document.addEventListener("click", this.clickx);
    // }
  },
  beforeDestroy() {
    // if (!this.multiple && !this.search) {
    // if (!this.multiple) {
    document.removeEventListener("click", this.clickx);
    // }
  },
  watch: {
    dropdownVisible: function(value) {
      if (value) {
        this.changeSelectPosition();
        // if (!this.multiple && !this.search) {
        // if (!this.multiple) {
        document.addEventListener("click", this.clickx);
        // }
      }
      let [selectMenu] = this.$children.filter((item) => {
        return item.hasOwnProperty("dropdownVisible");
      });
      selectMenu.dropdownVisible = value;
    },
    value: function(value) {
      if (value !== this.inputValue) {
        this.inputValue = value;
        this.$forceUpdate();
      }
    },
    inputValue: function(value) {
      this.$emit("input", value);
    },
  },
  computed: {
    getInputText() {
      if (this.inputValue == null) return "";
      if (this.multiple) {
        let selected_data = this.data.filter((item) => {
          return this.inputValue.includes(item.value);
        });
        let inputTexts = [];
        selected_data.forEach((data) => {
          inputTexts.push(data.text);
        });
        return inputTexts.join(", ");
      } else {
        let selected_data = this.data.filter((item) => {
          return item.value == this.inputValue;
        });
        return selected_data[0].text;
      }
    },
  },
  methods: {
    changeActive() {
      if (!this.multiple || !this.dropdownVisible) {
        this.dropdownVisible = !this.dropdownVisible;
      } else if (
        event.target.parentNode === this.$refs.selectcustom ||
        event.target.parentNode === this.$refs.selectcustom_dropdownicon ||
        event.target.parentNode.parentNode === this.$refs.selectcustom_dropdownicon
      ) {
        this.dropdownVisible = !this.dropdownVisible;
      }
    },
    changeSelectPosition() {
      let [selectMenu] = this.$children.filter((item) => {
        return item.hasOwnProperty("dropdownVisible");
      });

      selectMenu.widthx = this.widthx !== 0 ? this.widthx : this.$refs.selectcustom.clientWidth;
      if (this.$refs.selectcustom.getBoundingClientRect().top + 300 >= window.innerHeight) {
        this.$nextTick(() => {
          selectMenu.topx = this.$refs.selectcustom.getBoundingClientRect().top - selectMenu.$el.clientHeight - 7 + window.scrollY;
        });
      } else {
        selectMenu.topx = this.$refs.selectcustom.getBoundingClientRect().top + this.$refs.selectcustom.clientHeight + window.scrollY;
      }

      if (this.$refs.selectcustom.getBoundingClientRect().right < selectMenu.$el.clientWidth + 25) {
        selectMenu.leftx = selectMenu.$el.clientWidth + 25;
        return;
      }
      selectMenu.leftx = this.$refs.selectcustom.getBoundingClientRect().left + (this.vsDropRight ? selectMenu.$el.clientWidth : this.$refs.selectcustom.clientWidth);
    },
    clickx(evt) {
      let [selectMenu] = this.$children.filter((item) => {
        return item.hasOwnProperty("dropdownVisible");
      });
      if (this.dropdownVisible) {
        if (
          evt.target !== this.$refs.selectcustom &&
          evt.target.parentNode !== this.$refs.selectcustom &&
          evt.target.parentNode.parentNode !== this.$refs.selectcustom &&
          evt.target.parentNode.parentNode !== this.$refs.selectcustom_dropdownicon
        ) {
          if (
            (!evt.target.closest(".input-select-custom--container") && !this.multiple) ||
            (!evt.target.closest(".select-menu-custom--container") && !evt.target.closest(".select-item-custom--check-icon"))
          ) {
            selectMenu.dropdownVisible = this.dropdownVisible = false;
            document.removeEventListener("click", this.clickx);
          }
        }
      }
    },
  },
};
</script>

<style scoped lang="scss">
.input-select-custom--container {
  .input-select-custom--input {
    padding: 12px 16px;
    width: 100%;
    border-radius: 5px;
    border: 1px solid #e0e7ff;
    background-color: rgba(224, 231, 255, 0.2);
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    cursor: pointer;
    &.active {
    }
  }

  .select-custom--dropdown-icon-container {
    border: none;
    background: transparent;
    z-index: 100;
    outline: none;
    position: absolute;
    .input-select-custom--dropdown-icon {
      // right: 22px;
    }
  }
}
</style>
