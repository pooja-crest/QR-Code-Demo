<template>
  <transition v-if="$parent[showVariable]" name="from-top">
    <div class="popupcustom--container fixed w-full h-screen flex items-center justify-center">
      <card-custom class="popupcustom-main--container flex" :class="styleHeight" :style="{ width: contentWidth + 'px', height: computedHeight, 'overflow-y': 'auto' }">
        <div class="popupcustom-header--container">
          <div class="w-11/12">
            <span class="text-heading font-light">{{ title }}</span>
          </div>
          <div class="justify-end items-center flex w-1/12">
            <feather-icon @click="$parent[showVariable] = false" icon="XIcon" svg-classes="text-icon cursor-pointer"></feather-icon>
          </div>
        </div>
        <div class="popupcustom-content--container popupcustom-content--container flex-auto flex items-center flex-col justify-center">
          <slot name="content"></slot>
        </div>
        <div class="popupcustom-footer--container flex items-end">
          <slot name="footer"></slot>
        </div>
      </card-custom>
    </div>
  </transition>
</template>

<script>
export default {
  name: "PopupCustom",
  props: {
    showVariable: {
      default: "",
      type: String,
    },
    title: {
      default: "",
      type: String,
    },
    subtitle: {
      default: "",
      type: String,
    },
    contentWidth: {
      default: "400",
      type: String,
    },
    contentHeight: {
      default: "500",
      type: String,
    },
    styleHeight: {
        default:'',
        type: String
    }
  },
  data() {
    return {
      scrollbarSettings: {
        maxScrollbarLength: 30,
        wheelSpeed: 0.5,
      },
    };
  },
  computed: {
    computedHeight() {
      if (this.contentHeight != "full") {
        if (this.contentHeight.includes("%")) {
          return this.contentHeight;
        }

        return this.contentHeight + "px";
      }
      return "100vh";
    },
  },
  mounted() {
    this.insertBody();
  },
  methods: {
    insertBody() {
      let elp = this.$el;
      this.parentNode = this.$el.parentNode;
      document.body.insertBefore(elp, document.body.firstChild);
    },
  },
};
</script>

<style lang="scss">
.popupcustom--container {
  z-index: 301;
  background: rgba(244, 246, 252, 0.8);
  .popupcustom-main--container {
    .card-content {
      flex-direction: column;
      .popupcustom-header--container {
        display: flex;
      }
      .popupcustom-content--container {
        margin-top: 40px;
        margin-bottom: 40px;
      }
      .popupcustom-footer--container {
        margin-bottom: 20px;
      }
    }
  }
}

.from-top-enter,
.from-top-leave-to {
  opacity: 0;
  transform: translateY(-100px);
}
.from-top-enter-to {
  transition: all 0.6s;
  transform: translateY(0px);
}
.from-top-leave-to {
  transition: all 0.3s;
}
</style>
