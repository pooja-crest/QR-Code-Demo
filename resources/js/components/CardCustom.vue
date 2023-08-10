<template>
  <div ref="customcard" class="card">
    <div class="card-header" v-if="hasHeader">
      <div class="card-header-title" :class="[(!!this.$slots['action']) ? 'w-1/2':'']">
        <span class="card-header-title--text">{{title}}</span><i title="click" class="info-popup" v-if="tooltips && tooltips[alias]" @click="show_modal_detail_log=true">i</i>
      </div>
      <div v-if="this.$slots['action']" class="card-action--container">
        <slot name="action"></slot>
      </div>
    </div>
    <div class="card-content flex w-full" :class="contentClass" :style="contentStyle">
      <slot></slot>
    </div>
    <popup-custom v-if="tooltips && tooltips[alias]" show-variable="show_modal_detail_log" title="" content-width="750" content-height="70%" style-height="autoHeightBlock">
      <template slot="content">
        <div class="w-full textareashow" v-if="!canEdit" v-html="tooltips[alias]" />
        <div class="w-full" v-if="canEdit" >
          <textarea ref="textareaedit" class="textareaedit w-full p-2 overflow-y-auto" @keydown="startKeyUp" :value="tooltips[alias]"></textarea>
        </div>
      </template>
      <template slot="footer">
        <div class="w-full flex justify-end">
          <button v-if="['admin'].includes(authenticatedUser.role)" @click="changeTooltip(alias)" class="btn btn-primary mr-1">
            <span class="btn--text custom-text-bold">{{ startEdit ? 'Save' : 'Edit' }}</span>
          </button>
          <button @click="show_modal_detail_log = false" class="btn btn-primary">
            <span class="btn--text custom-text-bold">Close</span>
          </button>
        </div>
      </template>
    </popup-custom>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: "CardCustom",
  props: {
    title: String,
    subtitle: String,
    display: {
      default: "flex",
      type: String
    },
    contentClass: {
      default: "",
      type: String
    },
    contentStyle: {
      default: "",
      type: String
    },
    alias: {
      default: "",
      type: String
    }
  },
  data() {
    return {
      show_modal_detail_log: false,
      canEdit: false,
      startEdit:false
    }
  },
  computed: {
    ...mapGetters([
      'tooltips'
    ]),
    hasHeader() {
      return this.title || this.subtitle;
    }
  },
  methods: {
    changeTooltip (alias) {
      if(this.startEdit) {
        let message = this.$refs.textareaedit.value
        this.$store.dispatch('updateToolip', {alias, message})
        this.canEdit = false
        this.startEdit = false
      } else {
        this.canEdit = true
      }
    },
    startKeyUp () {
      if(!this.startEdit) {
        this.startEdit = true;
      }
    }
  }
};
</script>

<style scoped>
    .info-popup {
        color: #3f80ff;
        background: #ffffff;
        width: 17px;
        height: 17px;
        font-style: normal;
        line-height: 18px;
        text-align: center;
        display: inline-block;
        border-radius: 20px;
        margin-left: 5px;
        cursor: pointer;
        border: 1px solid #3f80ff;
        font-weight: bold;
    }
    .info-popup:hover {
         background: var(--color-default);
     }
    .autoHeightBlock {
        height: auto !important;
        max-height: 100vh !important;
    }
    .textareashow {
        white-space: pre;
    }
    .textareaedit {
        min-height: 100px;
    }
</style>
