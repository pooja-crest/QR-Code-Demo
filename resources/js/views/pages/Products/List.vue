<template>
  <div class="content-compact--container">
    <div class="w-full">
      <div class="flex">
        <div class="w-full page-title--container">
          <span class="page-title--text">Product List</span>
        </div>
      </div>
      <div class="separator"></div>
      <card-custom v-if="authenticatedUser.role == 'admin'" title="Actions" class="mb-10" content-class="mt-4" alias="message3">
        <div v-if="!conditions.loadings.products" class=" w-full flex">
          <div v-if="!inputs.file_upload.name" class="flex mr-2">
            <button @click="showInputProductModal()" class="btn btn-primary ">
              <span class="btn--text custom-text-bold">Add Product</span>
            </button>
          </div>
        </div>
        <div v-else class="loading-placeholder loading-placeholder__rectangle" style="height: 40px"></div>
      </card-custom>
      <card-custom title="Search ">
        <div class="flex flex-col w-full">
          <div class="w-full mb-2 mt-4 flex">
            <div class="flex flex-1">
              <input
                type="text"
                class="input w-full"
                placeholder="Search Product Label"
                v-model="inputs.filters.search"
                :class="[inputs.filters.search == '' ? 'input-empty' : '']"
                v-on:keyup.enter="searchData()"
              />
            </div>
            <div class>
              <button @click="searchData()" class="btn btn-primary ml-5" :class="[inputs.filters.search == '' ? 'disabled' : '']">
                <span class="btn--text custom-text-bold">
                  <template>Search</template>
                </span>
              </button>
            </div>
            <div v-if="conditions.search_active" class>
              <button @click="searchData(false)" class="btn btn-outline-danger ml-5">
                <span class="btn--text custom-text-bold">
                  <template>Clear</template>
                </span>
              </button>
            </div>
          </div>
        </div>
      </card-custom>
      <card-custom class="mt-10">
        <div class="products">
          <div class="products__content">
            <div class="products__table">
              <div class="products__table__header">
                <template v-if="!conditions.loadings.products">
                  <p class="products__table__header__item w-1/4">Lable #</p>
                  <p class="products__table__header__item w-1/4">Date Created</p>
                  <p class="products__table__header__item w-1/4">Date Last Edited</p>
                  <p class="products__table__header__item w-1/4 justify-center">Actions</p>
                </template>
                <p v-else class="products__table__header__item w-full loading-placeholder loading-placeholder__rectangle" style="height: 30px"></p>
              </div>
              <div class="products__table__content">
                <template v-if="!conditions.loadings.products">
                  <template v-if="datas.products.length > 0">
                    <div :class="{ 'text-danger': product.status == 'inactive' }" class="products__table__content__item" :key="index" v-for="(product, index) in datas.products">
                      <p class="w-1/4">{{ product.label == null ? "-" : product.label }}</p>
                      <p class="w-1/4">{{ product.created_at_date }}</p>
                      <p class="w-1/4">{{ product.updated_at_date }}</p>
                      <p class="w-1/4 flex justify-center">
                        <button @click="showInputProductModal(product)" class="btn btn-outline-primary p-1 flex items-center justify-center" style="min-width: initial">
                          <span class="btn--text custom-text-bold flex items-center justify-center">
                            <icon-custom icon="edit" classes="pr-0 h-4 w-4"></icon-custom>
                          </span>
                        </button>

                        <a :href="product.pdf_path" class="btn btn-outline-primary p-1 flex items-center justify-center ml-2" target="_blank" style="min-width: initial">
                          <span class="btn--text custom-text-bold flex items-center justify-center">
                            <feather-icon icon="EyeIcon" svgClasses="h-4 w-4"></feather-icon>
                          </span>
                        </a>
                        <a :href="product.pdf_path" class="btn btn-outline-primary p-1 flex items-center justify-center ml-2" target="_blank" style="min-width: initial" download>
                          <span class="btn--text custom-text-bold flex items-center justify-center">
                            <feather-icon icon="DownloadIcon" svgClasses="h-4 w-4"></feather-icon>
                          </span>
                        </a>
                        <a :href="product.qr_code_path" class="btn btn-outline-primary p-1 flex items-center justify-center ml-2" target="_blank" style="min-width: initial" download>
                          <span class="btn--text custom-text-bold flex items-center justify-center">
                            <feather-icon icon="ImageIcon" svgClasses="h-4 w-4"></feather-icon>
                          </span>
                        </a>
                        <button @click="deleteProduct(product)" class="btn btn-outline-danger p-1 flex items-center justify-center ml-2" style="min-width: initial">
                          <span class="btn--text custom-text-bold flex items-center justify-center">
                            <icon-custom icon="trash" classes="pr-0 h-4 w-4"></icon-custom>
                          </span>
                        </button>
                        <button class="btn btn-outline-danger p-1 flex items-center justify-center ml-6 invisible" style="min-width: initial;"></button>
                      </p>
                    </div>
                  </template>
                  <div v-else class="products__table__content__item">
                    <p class="w-full flex justify-center">No data found.</p>
                  </div>
                  <divider-custom></divider-custom>
                  <div v-if="!conditions.loadings.products" class="table-custom--footer">
                    <div class="w-1/2 flex justify-start">
                      <button v-if="paginations.current_page > paginations.first_page" @click="goToPage(parseInt(paginations.current_page) - 1)" class="btn btn-outline-primary w-1/5 mr-4">
                        <feather-icon icon="ChevronLeftIcon" svgClasses="h-4 w-4"></feather-icon>
                        <span class="btn--text custom-text-bold">Previous</span>
                      </button>
                    </div>
                    <div v-if="paginations.current_page < paginations.last_page" class="w-1/2 flex justify-end">
                      <button @click="goToPage(parseInt(paginations.current_page) + 1)" class="btn btn-outline-primary w-1/5">
                        <span class="btn--text custom-text-bold">Next</span>
                        <feather-icon icon="ChevronRightIcon" svgClasses="h-4 w-4"></feather-icon>
                      </button>
                    </div>
                  </div>
                </template>
                <div v-else class="products__table__content__item loading-placeholder loading-placeholder__rectangle my-1" style="height: 30px" :key="i" v-for="i in 5"></div>
              </div>
            </div>
          </div>
        </div>
      </card-custom>
    </div>
    <!-- Pop up -->
    <popup-custom show-variable="show_modal_input_product" :title="conditions.edit_product ? 'Edit product' : 'Add product'" content-width="1000" content-height="auto">
      <template slot="content">
        <form action="#" enctype="multipart/form-data" method="post">
          <div class="w-full block">
              <div class="tablecustom-content--container w-full flex mt-4">
                  <div class="tablecustom-content--content w-6/12 mr-2">
                      <div class="w-full">
                          <span class="uppercase font-medium text-xs text-spacing-md line-height-md text-color-secondary">Title</span>
                      </div>
                      <div class="w-full mt-2">
                          <input type="text" class="input w-full" placeholder="Product title" v-model="inputs.product.title"  :class="[inputs.product.title == '' ? 'input-empty' : '']" @blur="getLabelName" />
                      </div>
                  </div>
                  <div class="tablecustom-content--content w-6/12">
                      <div class="w-full">
                          <span class="uppercase font-medium text-xs text-spacing-md line-height-md text-color-secondary">Item #</span>
                      </div>
                      <div class="w-full mt-2">
                          <input type="text" class="input w-full" placeholder="Item" v-model="inputs.product.item_no"  @keypress="alphaNumberic($event)" :class="[inputs.product.description == '' ? 'input-empty' : '']" />
                      </div>
                  </div>
              </div>
              <div class="tablecustom-content--container w-full flex mt-4">
                  <div class="tablecustom-content--content w-6/12 mr-2">
                    <div class="w-full">
                          <span class="uppercase font-medium text-xs text-spacing-md line-height-md text-color-secondary">Product Detail</span>
                      </div>
                      <div class="w-full mt-2">
                          <textarea class="input w-full" placeholder="description" v-model="inputs.product.description" :class="[inputs.product.description == '' ? 'input-empty' : '']"></textarea>
                      </div>
                  </div>
                  <div class="tablecustom-content--content w-6/12">
                      <div class="w-full">
                          <span class="uppercase font-medium text-xs text-spacing-md line-height-md text-color-secondary">Supplier</span>
                      </div>
                      <div class="w-full mt-2">
                        <select class="custom-select input w-full"  v-model="inputs.product.supplier" name="supplier" :class="[!inputs.product.supplier ? 'input-empty' : '']">
                            <option value="" selected="selected">Select Supplier</option>
                            <option v-for="supplier in datas.suppliers" :value="supplier.id" :key="supplier.id">{{supplier.name}}</option>
                        </select>
                      </div>
                  </div>
              </div>
              <div class="tablecustom-content--container w-full flex mt-4">
                  <div class="tablecustom-content--content w-6/12 mr-2">
                      <div class="w-full">
                          <span class="uppercase font-medium text-xs text-spacing-md line-height-md text-color-secondary">Quantity</span>
                      </div>
                      <div class="w-full mt-2">
                          <input type="text" class="input w-full" placeholder="Quantity" v-model="inputs.product.quantity" @keypress="numberType($event)" :class="[inputs.product.quantity == '' ? 'input-empty' : '']" />
                      </div>
                  </div>
                  <div class="tablecustom-content--content w-6/12">
                      <div class="w-full">
                          <span class="uppercase font-medium text-xs text-spacing-md line-height-md text-color-secondary">Location</span>
                      </div>
                      <div class="w-full mt-2">
                          <input type="text" class="input w-full" placeholder="Location" v-model="inputs.product.location" :class="[inputs.product.location == '' ? 'input-empty' : '']" />
                      </div>
                  </div>
              </div>
              <div class="tablecustom-content--container w-full flex mt-4">
                  <div class="tablecustom-content--content w-6/12 mr-2">
                      <div class="w-full">
                          <span class="uppercase font-medium text-xs text-spacing-md line-height-md text-color-secondary">Lead Time</span>
                      </div>
                      <div class="w-full mt-2">
                          <input type="text" class="input w-full" placeholder="Lead Time" v-model="inputs.product.lead_time" :class="[inputs.product.lead_time == '' ? 'input-empty' : '']" />
                      </div>
                  </div>
                  <div class="tablecustom-content--content w-6/12">
                      <div class="w-full">
                          <span class="uppercase font-medium text-xs text-spacing-md line-height-md text-color-secondary">Image</span>
                      </div>
                      <div class="w-full mt-2">
                          <img :src="uploaded_img" v-if="uploaded_img != null" height="100" width="100" />
                          <input type="file" name="image" @change="onChangeFileUpload"  accept="image/*" class="input w-full"  :class="[inputs.product.image == '' ? 'input-empty' : '']" />
                      </div>
                  </div>
              </div>
              <div class="tablecustom-content--container w-full flex mt-4">
                  <div class="tablecustom-content--content w-6/12">
                      <div class="w-full">
                          <span class="uppercase font-medium text-xs text-spacing-md line-height-md text-color-secondary">QR Code</span>
                      </div>
                      <div class="w-full mt-2">
                          <button type="button" @click="generateQRCode" class="btn" :disabled="inputs.product.label==='' || inputs.product.label === null" v-if="generated_qr_image === null">Generate QR Code</button>
                          <img :src="generated_qr_image" height="100" width="100" v-else/>
                      </div>
                  </div>
                  <div class="tablecustom-content--content w-6/12 mr-2">
                      <div class="w-full">
                          <span class="uppercase font-medium text-xs text-spacing-md line-height-md text-color-secondary">Label#</span>
                      </div>
                      <div class="w-full mt-2">
                          <input type="text" class="input w-full" placeholder="Label" name="label" value="" v-model="inputs.product.label" :class="[inputs.product.label == '' ? 'input-empty' : '']" disabled/>
                      </div>
                  </div>
              </div>
          </div>
        </form>
      </template>

      <template slot="footer">
        <div class="w-full flex justify-end">
          <button @click="show_modal_input_product = false; resetProductsInputs();" class="btn btn-default">
            <span class="btn--text custom-text-bold">Cancel</span>
          </button>
          <button v-if="allowSubmitAddUProduct && !conditions.edit_product" @click="submitAddProduct()" class="btn btn-primary ml-5">
            <span class="btn--text custom-text-bold">Add product</span>
          </button>
          <button v-else-if="allowSubmitUpdateProduct" @click="submitUpdateProduct()" class="btn btn-primary ml-5">
            <span class="btn--text custom-text-bold">Update product</span>
          </button>
          <button v-else class="btn btn-primary ml-5 disabled">
            <span class="btn--text custom-text-bold">
              <template v-if="!conditions.edit_product">Add product</template>
              <template v-else>Update product</template>
            </span>
          </button>
        </div>
      </template>
    </popup-custom>
    <!-- End Pop up -->
  </div>
</template>

<script>
import productApi from "@/apis/productApi";
import supplierApi from "@/apis/supplierApi";
import userApi from "@/apis/userApi";
import authenticationApi from "@/apis/authenticationApi";
import {numberType,alphaNumberic} from "@/Helpers/validationHelper";

export default {
  name: "ProductList",
  mixins: [userApi, authenticationApi,productApi,supplierApi],
  data() {
    return {
      conditions: {
        data_each_page: 50,
        loadings: {
          products: false,
          logs: false,
        },
        edit_product: false,
        search_active: false,
      },
      datas: {
        products: [],
        suppliers: [],
        logs: [],
      },
      generated_qr_image:null,
      uploaded_img:null,
      inputs: {
        filters: {
          search: "",
          status: null,
        },
        file_upload: {
          type: null,
          name: null,
        },
        product: {
          selected_product:null,
          supplier: "",
          title: "",
          description: "",
          item_no: "",
          quantity: "",
          location: "",
          lead_time: "",
          image: "",
          label: "",
          qr_code: null,
        }
      },
      paginations: {
        first_page: 1,
        current_page: 1,
        last_page: 1,
      },
      inactive_user_details: null,
      show_modal_input_product: false,
      show_modal_inactive_product: false
    };
  },
  watch: {
    show_modal_inactive_product: function(value) {
      if (!value) this.inactive_user_details = null;
    },
    "inputs.filters.status": function(value) {
      this.paginations.current_page = 1;
      this.getProductsDatas();
    },
    show_modal_input_product: function(value) {
      if(value == false){
        this.resetProductsInputs();
      }
    }
  },
  computed: {
    allowSubmitAddUProduct() {
      if (this.inputs.product.title != ""&& this.inputs.product.qr_code != "" && this.inputs.product.description != "" && this.inputs.product.item_no != "" && this.inputs.product.quantity != "" && this.inputs.product.location != "" && this.inputs.product.image != "") {
        return true;
      }
      return false;
    },
    allowSubmitUpdateProduct() {
      if (this.inputs.product.title != "" && this.inputs.product.description != "" && this.inputs.product.item_no != "" && this.inputs.product.quantity != "" && this.inputs.product.location != "" ) {
        return true;
      }
      return false;
    },
  },
  methods: {
    numberType,
    alphaNumberic,
    deleteProduct(product) {
      this.$swal({
        title: `Are you sure?`,
        text: `Please confirm to delete ${product.label}`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          this.conditions.edit_product = false;
          let loading = this.$loading.show({
            container: null,
            color: "var(--color-primary)",
          });
          this.delete(product.id)
            .then(({ data }) => {
              this.show_modal_input_product = false;
              this.resetProductsInputs();
              this.getProductsDatas();
            })
            .finally(() => loading.hide());
        }
      });
    },
    generateQRCode(event){
      event.preventDefault();
      const params = {
        item_no:this.inputs.product.label
      }
      this.generateQRCodes(params)
        .then(({ success,data }) => {
          if(success){
            this.generated_qr_image = data.image
            this.inputs.product.qr_code = data.image_name
          }
        });
    },
    removeQrCode(){
      this.generated_qr_image = null
      this.inputs.product.qr_code = null;
    },
    getLabelName(){
      if(this.inputs.product.label === undefined || this.inputs.product.label === "" || this.inputs.product.label === null){
        this.getNewLabel()
          .then(({ success,data }) => {
            if(success){
              this.inputs.product.label = data
            }
          });
      }
    },
    getProductsDatas() {
      this.conditions.loadings.products = true;
      const params = {
        page: this.paginations.current_page,
        search: this.inputs.filters.search,
        status: this.inputs.filters.status,
      };
      this.getAll(params)
        .then(({ data }) => {
          this.datas.products = data.data;
          this.paginations.last_page = data.last_page;
        })
        .finally(() => (this.conditions.loadings.products = false));
    },
    async getSuppliers() {
      await this.getAllSuppliers()
        .then(({ data }) => {
          this.datas.suppliers = data;
        })
        .finally();
    },
    goToPage(page_number) {
      this.paginations.current_page = page_number;
      this.getProductsDatas();
    },
    resetProductsInputs(product = null) {
      this.inputs.product = {
        selected_product:null,
        supplier: "",
        title: "",
        description: "",
        item_no: "",
        quantity: "",
        location: "",
        lead_time: "",
        image: "",
        label: "",
        qr_code: "",
      };
      if (product != null) {
        this.inputs.product.selected_product = product.id;
        this.inputs.product.supplier = product.supplier_id;
        this.inputs.product.title = product.title;
        this.inputs.product.description = product.description;
        this.inputs.product.item_no = product.item_no;
        this.inputs.product.quantity = product.quantity;
        this.inputs.product.location = product.location;
        this.inputs.product.lead_time = product.lead_time;
        this.inputs.product.label = product.label;
        this.inputs.product.qr_code = product.qr_code;
        this.generated_qr_image = (product.qr_code != null && product.qr_code != '')?product.qr_code_path:null;
      }else{
        this.uploaded_img = null;
        this.removeQrCode()
      }
    },
    searchData(search_active = true) {
      this.paginations.current_page = 1;
      this.conditions.search_active = search_active;
      if (!search_active) {
        this.inputs.filters.search = "";
      }
      this.getProductsDatas();
    },
    async showInputProductModal(product = null) {
      await this.getSuppliers();
      this.show_modal_input_product = true;
      this.conditions.edit_product = false;
      this.resetProductsInputs(product);
      if (product != null) {
        this.generated_qr_image = product.qr_code_path
        this.uploaded_img = product.image_path
        this.conditions.edit_product = true;
      }
    },
    onChangeFileUpload($event) {
        this.inputs.product.image = $event.target.files[0];

        if ($event.target.files) {
          var reader = new FileReader();
          reader.onload = (e) => {
            this.uploaded_img = e.target.result;
          }
          reader.readAsDataURL($event.target.files[0]);
        }
    },
    submitAddProduct() {
      this.conditions.edit_product = false;
      let loading = this.$loading.show({
        container: null,
        color: "var(--color-primary)",
      });
      const fd = new FormData();
      fd.append("title", this.inputs.product.title);
      fd.append("supplier_id", this.inputs.product.supplier);
      fd.append("quantity", this.inputs.product.quantity);
      fd.append("description", this.inputs.product.description);
      fd.append("image", this.inputs.product.image);
      fd.append("location", this.inputs.product.location);
      fd.append("item_no", this.inputs.product.item_no);
      fd.append("label", this.inputs.product.label);
      fd.append("lead_time", this.inputs.product.lead_time);
      fd.append("qr_code", this.inputs.product.qr_code);

      this.create(fd)
        .then((response) => {
            if (!response.success) {
                this.$notify({
                    group: "notification",
                    type: "warn",
                    title: "Warning",
                    text: response.message,
                });
            } else {
                this.show_modal_input_product = false;
                this.resetProductsInputs();
                this.getProductsDatas();
                this.$notify({
                    group: "notification",
                    type: "success",
                    title: "success",
                    text: response.message,
                });
            }
        })
        .finally(() => loading.hide());
    },
    submitUpdateProduct() {
      let loading = this.$loading.show({
        container: null,
        color: "var(--color-primary)",
      });
      const fd = new FormData();
      fd.append("_method",'PATCH' );
      fd.append("title", this.inputs.product.title);
      fd.append("supplier_id", this.inputs.product.supplier);
      fd.append("quantity", this.inputs.product.quantity);
      fd.append("description", this.inputs.product.description);
      if(this.inputs.product.image !== '' && this.inputs.product.image != null){
        fd.append("image", this.inputs.product.image);
      }
      fd.append("location", this.inputs.product.location);
      fd.append("item_no", this.inputs.product.item_no);
      fd.append("label", this.inputs.product.label);
      fd.append("lead_time", this.inputs.product.lead_time);
      fd.append("qr_code", this.inputs.product.qr_code);

      this.update(this.inputs.product.selected_product,fd)
        .then((response) => {
            if (!response.success) {
                this.$notify({
                    group: "notification",
                    type: "warn",
                    title: "Warning",
                    text: response.message,
                });
            } else {
                this.conditions.edit_product = false;
                this.show_modal_input_product = false;
                this.resetProductsInputs();
                this.getProductsDatas();
                this.$notify({
                    group: "notification",
                    type: "success",
                    title: "success",
                    text: response.message,
                });
            }
        })
        .finally(() => loading.hide());
    }
  },
  async created() {
    if (!["admin"].includes(this.authenticatedUser.role)) {
      this.$router.push("/");
    } else {
      await this.getProductsDatas();
    }
  },
};
</script>

<style lang="scss">
form{
  width:100%;
}
.products {
  display: flex;
  flex-direction: column;
  width: 100%;
  &__header {
    width: 100%;
    display: flex;
    &__filter {
      width: 50%;
    }
    &__action {
      width: 50%;
      display: flex;
      justify-content: flex-end;
    }
  }
  &__content {
    width: 100%;
    display: flex;
    margin: 16px 0px;
  }
  &__table {
    width: 100%;
    display: flex;
    flex-direction: column;
    &__header {
      display: flex;
      width: 100%;
      border-top: 1px solid var(--color-border);
      border-bottom: 1px solid var(--color-border);
      &__item {
        display: flex;
        font-weight: 500;
      }
    }
    &__content {
      &__item {
        display: flex;
        align-items: center;
      }
    }
  }
}
.role-input {
  padding: 7px 8px !important;
}
</style>
