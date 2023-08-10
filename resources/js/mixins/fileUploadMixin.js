import itemApi from "@/apis/itemApi";
import orderApi from "@/apis/orderApi";
import vendorApi from "@/apis/vendorApi";
export default {
  mixins: [itemApi, orderApi, vendorApi],
  data() {
    return {
      file_upload: {
        type: null,
        name: null,
      },
    };
  },
  methods: {
    initiateUploadFile(type = "item-availabilities") {
      this.file_upload.type = type;
      this.$refs.uploadFile.click();
    },
    getFileExtension(filename) {
      var filenames = filename.split(".");
      return filenames[filenames.length - 1];
    },
    processUploadFile() {
      let loading = this.$loading.show({ container: null, color: "var(--color-primary)" });
      let uploadFunction = null;
      switch (this.file_upload.type) {
        case "item-availabilities":
          uploadFunction = this.itemApi_uploadAvailability;
          break;
        case "item-links":
          uploadFunction = this.itemApi_uploadLinks;
          break;
        case "ship-complete":
          uploadFunction = this.orderApi_uploadShipComplete;
          break;
        case "vendor-complete":
          uploadFunction = this.vendorApi_uploadVendorComplete;
          break;
      }
      if (uploadFunction == null) {
        this.$notify({ group: "notification", type: "error", title: "Failed", text: "Failed to upload file" });
        loading.hide();
        return;
      }
      uploadFunction()
        .then((response) => {
          if (response.success) {
            this.$notify({ group: "notification", type: "success", title: "Success", text: response.message });
            this.resetUploadFile();
            this.onFileUploaded(); // handle this on the parent file ( the one that import this file )
          }
        })
        .finally(() => {
          this.resetUploadFile();
          loading.hide();
        });
    },
    resetUploadFile() {
      this.formData = new FormData();
      this.file_upload.name = null;
      this.file_upload.type = null;
      if (this.$refs.uploadFile && this.$refs.uploadFile.type) {
        this.$refs.uploadFile.type = "text";
        this.$refs.uploadFile.type = "file";
      }
    },
    onFileChanged(e) {
      const file = this.$refs.uploadFile.files[0];
      if (!file) {
        e.preventDefault();
        this.$notify({
          group: "notification",
          type: "warn",
          title: "Upload failed",
          text: "No file chosen!",
        });
        return;
      }
      const allowed_files = ["xlsx", "csv", "xls"];
      if (!allowed_files.includes(this.getFileExtension(file.name))) {
        e.preventDefault();
        this.$notify({
          group: "notification",
          type: "warn",
          title: "Upload failed",
          text: "This file is not supported, only upload .xls .xlsx or .csv",
        });
        return;
      }
      this.formData = new FormData();
      this.formData.append("file", file);
      this.file_upload.name = file.name;
    },
  },
};
