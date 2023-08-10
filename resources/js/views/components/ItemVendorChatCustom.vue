<template>
  <div class="card mt-3" id="chat-card">
    <div class="card-content flex w-full">
      <div class="w-full flex-col">
        <div class="w-full h-64" :class="[chats.length>0 ? 'overflow-y-scroll' : '']" ref="chatBox" id="chatbox">
          <div class="flex flex-col" v-if="chats.length>0">
            <div v-for="(chat,index) in chats" :key="index" :class="[index===0 ? '' : 'mt-4']">
              <span>
                <span class="font-medium">{{ chat.sender.name }} -</span>
                <span class="text-xs text-secondary">{{$moment(chat.created_at).format("MMMM DD, YYYY")}} at {{$moment(chat.created_at).format("HH:MM")}}</span>
              </span>
              <p class="mt-2" v-if="chat.filename">
                <a :href="apiLink + '/public/chat/download?fileName=' + chat.filename" target="_blank" class="btn btn-outline-primary no-underline p-1" :title="chat.filename">
                  <span class="btn--text custom-text-bold break-all">{{ chat.filename }}</span>
                </a>
              </p>
              <p class="mt-2" v-else>{{ chat.message }}</p>
            </div>
          </div>
          <div class="empty-chat" v-else>
            <span>start chatting...</span>
          </div>
        </div>
        <div class="w-full flex mt-4">
          <input ref="uploadFile" type="file" class="hidden" @change="onFileChanged()" />

          <button v-if="!!inputs.chat.file_upload" @click="initiateUploadFile()" class="btn btn-outline-primary w-full mr-2" id="chat-upload-file">
            <span class="btn--text custom-text-bold">{{ inputs.chat.file_upload }}</span>
          </button>
          <input v-else type="text" class="input w-full mr-2" placeholder="Write Message..." v-model="inputs.chat.message" :class="[inputs.chat.message == '' ? 'input-empty' : '']" v-on:keyup.enter="submitChat()" />         

          <button v-if="!inputs.chat.file_upload" class="btn btn-outline-primary p-1 mr-2" style="min-width: initial" @click="initiateUploadFile()">
            <span class="btn--text flex">
              <feather-icon icon="FileIcon" class="cursor-pointer h-4 w-4"></feather-icon>
            </span>
          </button>
          <button v-else class="btn btn-outline-danger p-1 mr-2" style="min-width: initial" @click="resetUploadFile()">
            <span class="btn--text flex">
              <feather-icon icon="FileMinusIcon" class="cursor-pointer h-4 w-4"></feather-icon>
            </span>
          </button>

          <button class="btn btn-primary btn-send" @click="submitChat()">
            <span class="btn--text custom-text-bold">Send</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import itemApi from "@/apis/itemApi";
export default {
  name: "ItemVendorChatCustom",
  props:{
    itemId:{
      default: null,
      type:Number
    },
    vendorId:{
      default: null,
      type:Number
    }
  },
  mixins: [itemApi],
  data(){
    return{
      chats:[],
      inputs: {
        chat:{
          item_id:null,
          vendor_id:null,
          message:null,
          file_upload:null
        }
      },
      form_data: new FormData(),
      apiLink: process.env.MIX_API_ENDPOINT,
    }
  },
  computed:{},
  methods:{
    initiateUploadFile() {
      this.$refs.uploadFile.click();
		},
    getFileExtension(filename) {
			var filenames = filename.split(".");
			return filenames[filenames.length - 1];
		},
    onFileChanged() {
      let file = this.$refs.uploadFile.files[0];
      const allowed_files = ["pdf","csv","xls","xlsx","jpg","jpeg","png"];
      if(!!file){
        var fileSize = ((1024 * 50)*1024); // size mb to bytes
        if (!allowed_files.includes(this.getFileExtension(file.name))) {
          this.$notify({
            group: "notification",
            type: "warn",
            title: "Warnning",
            text: 'Please select file from following extensions pdf,csv,xls,xlsx,jpg,jpeg,png',
          });
        } else {
          if(file.size > fileSize){
            this.$notify({
              group: "notification",
              type: "warn",
              title: "Warnning",
              text: 'You can select file lower than 50mb size',
            });
          } else {
            this.form_data.append("chat_file", file);
            this.inputs.chat.file_upload = file.name;
          }
        }
      }
    },
    resetUploadFile(){
      this.inputs.chat.file_upload = null;
      this.form_data.delete("chat_file");
    },
    getItemVendorChats(){
      this.itemApi_getItemVendorChats(this.itemId,this.vendorId)
      .then((response) => {
        if(response.success == true && response.data.length>0){
          this.chats = response.data;
          const container = this.$el.querySelector('#chatbox');
          this.$nextTick(() => {
            container.scrollTop = container.scrollHeight;
          });
        }
      });
    },
    submitChat(){
      if(!!this.inputs.chat.message || !!this.inputs.chat.file_upload){
        this.form_data.append('chat',JSON.stringify(this.inputs.chat));
        this.itemApi_sendItemVendorMessage(this.form_data).then((response)=>{
          if(response.success){
            this.inputs.chat.message = null;
            this.inputs.chat.file_upload = null;
            this.form_data.delete("chat");
            this.form_data.delete("chat_file");
            this.getItemVendorChats(this.itemId,this.vendorId);
          }
        });
      }
    }
  },
  mounted(){
    if(!!this.itemId && !!this.vendorId){
      this.inputs.chat.item_id = this.itemId,
      this.inputs.chat.vendor_id = this.vendorId,
      this.getItemVendorChats();
    }
  }
}
</script>
<style lang="scss" scoped>
#chat-card{
	border: 1px solid #e0e7ff !important;
	padding: 20px;
	box-shadow:none;
	border-radius: 5px;
}
#chat-card .btn-send{
	min-width: 85px !important;
}
.empty-chat{
  height: 100%;
  width: 100%;
}
.empty-chat span {
  margin: 0;
  position: relative;
  top: 40%;
  left: 30%;
  transform: translate(-50%, -50%);
  color: gray;
  text-transform: capitalize;
}
#chat-upload-file{
  word-break: break-all;
}
</style>