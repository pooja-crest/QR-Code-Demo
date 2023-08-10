<template>
  <div class="content-compact--container">
    <div class="w-full">
      <div class="flex">
        <div class="w-full page-title--container">
          <span class="page-title--text">User List</span>
        </div>
      </div>
      <div class="separator"></div>
      <card-custom v-if="authenticatedUser.role == 'admin'" title="Actions" class="mb-10" content-class="mt-4" alias="message3">
        <div v-if="!conditions.loadings.users" class=" w-full flex">
          <div v-if="!inputs.file_upload.name" class="flex mr-2">
            <button @click="showInputUserModal()" class="btn btn-primary ">
              <span class="btn--text custom-text-bold">Add user</span>
            </button>
          </div>
          <div :class="['w-full flex']">
            <input
              ref="uploadFile"
              type="file"
              class="hidden"
              @change="onFileChanged"
              accept=".xls, .xlsx, .csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
            />
            <template v-if="!inputs.file_upload.name">
              <div class="flex justify-between"></div>
              <div class="flex justify-end invisible">
                <button @click="prepareForUpload('billing-shipping')" class="btn btn-outline-primary px-4">
                  <span class="btn--text custom-text-bold">Upload Default Billing And Shipping</span>
                </button>
              </div>
              <div class="flex ml-2 invisible">
                <button @click="prepareForUpload('shippings')" class="btn btn-outline-primary px-4">
                  <span class="btn--text custom-text-bold">Upload Additional Shippings</span>
                </button>
              </div>
            </template>
            <template v-else>
              <div class="flex-1 flex">
                <button @click="prepareForUpload(inputs.file_upload.type)" class="btn btn-outline-primary w-full mr-2">
                  <span class="btn--text custom-text-bold">{{ inputs.file_upload.name }}</span>
                </button>
              </div>
              <div class="flex justify-end">
                <button @click="resetUploadFile()" class="btn btn-outline-danger w-1/3 mr-2">
                  <span class="btn--text custom-text-bold">cancel</span>
                </button>
                <button @click="processUploadFile()" class="btn btn-primary w-1/3">
                  <span class="btn--text custom-text-bold">Submit</span>
                </button>
              </div>
            </template>
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
                placeholder="Search Username or Name"
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
          <div class="w-full mb-2 mt-8 flex hidden">
            <div class="flex w-1/2 items-center justify-start">
              <div class="w-1/6 mr-2">
                <span>Filter Status</span>
              </div>
              <div class="w-1/3 mr-2">
                <select-custom
                  ref="filterstatus"
                  input-placeholder="All status"
                  input-class="w-full"
                  input-style="padding:10px 16px;background-color:#FFFFFF"
                  :data="variables.status"
                  menu-style="z-index:302!important"
                  v-model="inputs.filters.status"
                ></select-custom>
              </div>
            </div>
          </div>
        </div>
      </card-custom>
      <card-custom class="mt-10">
        <div class="users">
          <div class="users__content">
            <div class="users__table">
              <div class="users__table__header">
                <template v-if="!conditions.loadings.users">
                  <p class="users__table__header__item w-1/4">Username</p>
                  <p class="users__table__header__item w-1/4">Name</p>
                  <p class="users__table__header__item w-1/4">Role</p>
                  <p class="users__table__header__item w-1/4 justify-center">Actions</p>
                </template>
                <p v-else class="users__table__header__item w-full loading-placeholder loading-placeholder__rectangle" style="height: 30px"></p>
              </div>
              <div class="users__table__content">
                <template v-if="!conditions.loadings.users">
                  <template v-if="datas.users.length > 0">
                    <div :class="{ 'text-danger': user.status == 'inactive' }" class="users__table__content__item" :key="index" v-for="(user, index) in datas.users">
                      <p class="w-1/4">{{ user.code == null ? "-" : user.code }}</p>
                      <p class="w-1/4">{{ user.name }}</p>
                      <p class="w-1/4 uppercase">{{ user.role.replace('_', ' ') }}</p>
                      <p class="w-1/4 flex justify-center">
                        <button v-if="user.status == 'active'" @click="showInputUserModal(user)" class="btn btn-outline-primary p-1 flex items-center justify-center" style="min-width: initial">
                          <span class="btn--text custom-text-bold flex items-center justify-center">
                            <icon-custom icon="edit" classes="pr-0 h-4 w-4"></icon-custom>
                          </span>
                        </button>
                        <button v-else @click="showInactiveUserDetail(user)" class="btn btn-outline-primary p-1 flex items-center justify-center" style="min-width: initial">
                          <span class="btn--text custom-text-bold flex items-center justify-center">
                            <feather-icon icon="EyeIcon" svgClasses="h-4 w-4"></feather-icon>
                          </span>
                        </button>
                        <button @click="deleteUser(user)" class="btn btn-outline-danger p-1 flex items-center justify-center ml-2" style="min-width: initial" v-if="user.id != authenticatedUser.id">
                          <span class="btn--text custom-text-bold flex items-center justify-center">
                            <icon-custom icon="trash" classes="pr-0 h-4 w-4"></icon-custom>
                          </span>
                        </button>
                        <button v-else class="btn btn-outline-danger p-1 flex items-center justify-center ml-6 invisible" style="min-width: initial;"></button>
                      </p>
                    </div>
                  </template>
                  <div v-else class="users__table__content__item">
                    <p class="w-full flex justify-center">No data found.</p>
                  </div>
                  <divider-custom></divider-custom>
                  <div v-if="!conditions.loadings.users" class="table-custom--footer">
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
                <div v-else class="users__table__content__item loading-placeholder loading-placeholder__rectangle my-1" style="height: 30px" :key="i" v-for="i in 5"></div>
              </div>
            </div>
          </div>
        </div>
      </card-custom>
    </div>
    <!-- Pop up -->
    <popup-custom show-variable="show_modal_input_user" :title="conditions.edit_user ? 'Edit user' : 'Add user'" content-width="1000" content-height="auto">
      <template slot="content">
        <div class="w-full block">
            <div class="tablecustom-content--container w-full flex mt-4">
                <div class="tablecustom-content--content w-6/12 mr-2">
                    <div class="w-full">
                        <span class="uppercase font-medium text-xs text-spacing-md line-height-md text-color-secondary">Username</span>
                    </div>
                    <div class="w-full mt-2">
                        <input type="text" class="input w-full" placeholder="User code" v-model="inputs.user.code" :disabled="conditions.edit_user" :class="[inputs.user.code == '' ? 'input-empty' : '']" />
                    </div>
                </div>
                <div class="tablecustom-content--content w-6/12">
                    <div class="w-full">
                        <span class="uppercase font-medium text-xs text-spacing-md line-height-md text-color-secondary">Name</span>
                    </div>
                    <div class="w-full mt-2">
                        <input type="text" class="input w-full" placeholder="Name" v-model="inputs.user.name" :class="[inputs.user.name == '' ? 'input-empty' : '']" />
                    </div>
                </div>
            </div>
            <div class="tablecustom-content--container w-full flex mt-4">
                <div class="tablecustom-content--content w-6/12 mr-2">
                    <div class="w-full">
                        <span class="uppercase font-medium text-xs text-spacing-md line-height-md text-color-secondary">Email</span>
                    </div>
                    <div class="w-full mt-2">
                        <input type="email" class="input w-full" placeholder="Email" v-model="inputs.user.email" :class="[inputs.user.email == '' ? 'input-empty' : '']" />
                    </div>
                </div>
                <div class="tablecustom-content--content w-6/12">
                    <div class="w-full">
                        <span class="uppercase font-medium text-xs text-spacing-md line-height-md text-color-secondary">Contact person</span>
                    </div>
                    <div class="w-full mt-2">
                        <input type="text" class="input w-full" placeholder="Contact person" v-model="inputs.user.contact_person" :class="[inputs.user.contact_person == '' ? 'input-empty' : '']" />
                    </div>
                </div>
            </div>
            <div class="tablecustom-content--container w-full flex mt-4">
                <div class="tablecustom-content--content w-6/12 mr-2">
                    <div class="w-full">
                        <span class="uppercase font-medium text-xs text-spacing-md line-height-md text-color-secondary">Phone</span>
                    </div>
                    <div class="w-full mt-2">
                        <input type="text" class="input w-full" placeholder="Phone" v-model="inputs.user.contact_number" :class="[inputs.user.contact_number == '' ? 'input-empty' : '']" />
                    </div>
                </div>
                <div class="tablecustom-content--content w-6/12">
                    <div class="w-full">
                        <span class="uppercase font-medium text-xs text-spacing-md line-height-md text-color-secondary">Password</span>
                    </div>
                    <div class="w-full mt-2">
                        <input type="password" class="input w-full" placeholder="Type password" v-model="inputs.user.password" :class="[inputs.user.password == '' ? 'input-empty' : '']" />
                    </div>
                </div>
            </div>
            <div v-if="authenticatedUser.role == 'admin'" class="tablecustom-content--container w-full flex mt-4">
                <div class="tablecustom-content--content w-6/12">
                    <div class="w-full block">
                        <div class="w-full">
                            <span class="uppercase font-medium text-xs text-spacing-md line-height-md text-color-secondary">Role</span>
                        </div>
                        <div class="w-full mt-2">
                            <v-select
                                class="input w-full role-input"
                                :class="[!inputs.user.role ? 'input-empty' : '']"
                                :options="variables.roles"
                                v-model="inputs.user.role"
                                placeholder="Select role"
                                label="text"
                                :reduce="(role) => role.value"
                                :clearable="false"
                            ></v-select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </template>
      <template slot="footer">
        <div class="w-full flex justify-end">
          <button @click="show_modal_input_user = false; resetUserInputs();" class="btn btn-default">
            <span class="btn--text custom-text-bold">Cancel</span>
          </button>
          <button v-if="allowSubmitAddUser && !conditions.edit_user" @click="submitAddUser()" class="btn btn-primary ml-5">
            <span class="btn--text custom-text-bold">Add user</span>
          </button>
          <button v-else-if="allowSubmitAddUser" @click="submitUpdateUser()" class="btn btn-primary ml-5">
            <span class="btn--text custom-text-bold">Update user</span>
          </button>
          <button v-else class="btn btn-primary ml-5 disabled">
            <span class="btn--text custom-text-bold">
              <template v-if="!conditions.edit_user">Add user</template>
              <template v-else>Update user</template>
            </span>
          </button>
        </div>
      </template>
    </popup-custom>
    <!-- End Pop up -->
  </div>
</template>

<script>
import userApi from "@/apis/userApi";
// import customerApi from "@/apis/customerApi";
import authenticationApi from "@/apis/authenticationApi";
export default {
  name: "UserList",
  mixins: [userApi, authenticationApi],
  data() {
    return {
      conditions: {
        data_each_page: 50,
        loadings: {
          users: false,
          logs: false,
        },
        edit_user: false,
        search_active: false,
      },
      datas: {
        users: [],
        logs: [],
      },
      inputs: {
        filters: {
          search: "",
          status: null,
        },
        file_upload: {
          type: null,
          name: null,
        },
        user: {
          selected_user: null,
          code: "",
          name: "",
          email: "",
          contact_person: "",
          contact_number: "",
          password: "",
          role: "viewer",
        }
      },
      paginations: {
        first_page: 1,
        current_page: 1,
        last_page: 1,
      },
      inactive_user_details: null,
      show_modal_input_user: false,
      show_modal_inactive_user: false,
      variables: {
        customers: [],
        reps: [],
        roles: [
          { value: "admin", text: "Admin" },
          { value: "purchaser", text: "Purchaser" },
          { value: "viewer", text: "Viewer" },
          { value: "receiving", text: "Receiving" },
          { value: "display", text: "Display" },
          { value: "order_tracking", text: "Order Tracking" }
        ],
        status: [
          { value: null, text: "All status" },
          { value: "active", text: "Active" },
          { value: "inactive", text: "Inactive" },
        ],
      },
    };
  },
  watch: {
    show_modal_inactive_user: function(value) {
      if (!value) this.inactive_user_details = null;
    },
    "inputs.filters.status": function(value) {
      this.paginations.current_page = 1;
      this.getUserDatas();
    },
    show_modal_input_user: function(value) {
      if(value == false){
        this.resetUserInputs();
      }
    }
  },
  computed: {
    allowSubmitAddUser() {
      if (this.inputs.user.code != "" && this.inputs.user.name != "" && this.inputs.user.email != "" && this.inputs.user.contact_person != "" && this.inputs.user.contact_number != "" && this.inputs.user.role != "") {
        return true;
      }
      return false;
    },
  },
  methods: {
    deleteUser(user) {
      this.$swal({
        title: `Are you sure?`,
        text: `Please confirm to delete ${user.code}`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          this.conditions.edit_user = false;
          let loading = this.$loading.show({
            container: null,
            color: "var(--color-primary)",
          });
          this.userApi_delete(user.id)
            .then(({ data }) => {
              this.show_modal_input_user = false;
              this.resetUserInputs();
              this.getUserDatas();
            })
            .finally(() => loading.hide());
        }
      });
    },
    getUserDatas() {
      this.conditions.loadings.users = true;
      const params = {
        page: this.paginations.current_page,
        search: this.inputs.filters.search,
        status: this.inputs.filters.status,
      };
      this.userApi_getAll(params)
        .then(({ data }) => {
          this.datas.users = data.data;
          this.paginations.last_page = data.last_page;
        })
        .finally(() => (this.conditions.loadings.users = false));
    },
    goToPage(page_number) {
      this.paginations.current_page = page_number;
      this.getUserDatas();
    },
    resetUserInputs(user = null) {
      this.inputs.user = {
        selected_user: null,
        code: "",
        name: "",
        email: "",
        contact_person: "",
        contact_number: "",
        password: "",
        role: "viewer"
      };
      if (user != null) {
        this.inputs.user.selected_user = user.id;
        this.inputs.user.code = user.code;
        this.inputs.user.name = user.name;
        this.inputs.user.email = user.email;
        this.inputs.user.contact_person = user.contact_person;
        this.inputs.user.contact_number = user.contact_number;
        this.inputs.user.role = user.role;
      }
    },
    searchData(search_active = true) {
      this.paginations.current_page = 1;
      this.conditions.search_active = search_active;
      if (!search_active) {
        this.inputs.filters.search = "";
      }
      this.getUserDatas();
    },
    showInputUserModal(user = null) {
      this.show_modal_input_user = true;
      this.conditions.edit_user = false;
      this.resetUserInputs(user);
      if (user != null) {
        this.conditions.edit_user = true;
      }
    },
    showInactiveUserDetail(user) {
      if (!user.register_details) {
        this.$notify({
          group: "notification",
          type: "error",
          title: "Error",
          text: "Cannot find registration details",
        });
        return;
      }
      this.inactive_user_details = JSON.parse(user.register_details);
      this.inactive_user_details.id = user.id;
      this.show_modal_inactive_user = true;
    },
    submitAddUser() {
      this.conditions.edit_user = false;
      let loading = this.$loading.show({
        container: null,
        color: "var(--color-primary)",
      });
      this.userApi_create(this.inputs.user)
        .then((response) => {
            if (!response.success) {
                this.$notify({
                    group: "notification",
                    type: "warn",
                    title: "Warning",
                    text: response.message,
                });
            } else {
                this.show_modal_input_user = false;
                this.resetUserInputs();
                this.getUserDatas();
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
    submitUpdateUser() {
      let loading = this.$loading.show({
        container: null,
        color: "var(--color-primary)",
      });
      this.userApi_update(this.inputs.user.selected_user, this.inputs.user)
        .then((response) => {
            if (!response.success) {
                this.$notify({
                    group: "notification",
                    type: "warn",
                    title: "Warning",
                    text: response.message,
                });
            } else {
                this.conditions.edit_user = false;
                this.show_modal_input_user = false;
                this.resetUserInputs();
                this.getUserDatas();
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
    inactiveUserApproval(approval = true) {
      let loading = this.$loading.show({
        container: null,
        color: "var(--color-primary)",
      });
      this.authenticationApi_inactiveUserApproval(this.inactive_user_details.id, approval)
        .then(({ data }) => {
          this.show_modal_inactive_user = false;
          this.getUserDatas();
        })
        .finally(() => loading.hide());
    },
    prepareForUpload(type) {
      this.inputs.file_upload.type = type;
      this.$refs.uploadFile.click();
    },
    getFileExtension(filename) {
      var filenames = filename.split(".");
      return filenames[filenames.length - 1];
    },
    processUploadFile() {
      let loading = this.$loading.show({
        container: null,
        color: "var(--color-primary)",
      });
      // var uploadApiHandler = this.inputs.file_upload.type == "billing-shipping" ? this.customerApi_handleUploadBillingAndShipping() : this.customerApi_handleUploadShipping();
      // uploadApiHandler
      //   .then((response) => {
      //     if (response.success) {
      //       this.$notify({
      //         group: "notification",
      //         type: "success",
      //         title: "Success",
      //         text: response.message,
      //       });
      //     }
      //   })
      //   .finally(() => {
      //     loading.hide();
      //     this.resetUploadFile();
      //   });
    },
    resetUploadFile() {
      this.formData = new FormData();
      this.$refs.uploadFile.type = "text";
      this.$refs.uploadFile.type = "file";
      this.inputs.file_upload.name = null;
      this.inputs.file_upload.type = null;
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
      this.inputs.file_upload.name = file.name;
    },
  },
  async created() {
    if (!["admin"].includes(this.authenticatedUser.role)) {
      this.$router.push("/");
    } else {
      await this.getUserDatas();
    }
  },
};
</script>

<style lang="scss">
.users {
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
