<template>
  <div class="content-compact--container">
    <div class="w-full">
      <div class="flex">
        <div class="w-full page-title--container">
          <span class="page-title--text">Vendor List</span>
        </div>
      </div>
      <card-custom v-if="['admin'].includes(authenticatedUser.role)" title="Actions" alias="message2">
				<div class="flex flex-col w-full">
					<div class="w-full flex">
						<div class="w-full flex mt-4">
							<div class="w-full">
                <button class="btn btn-primary w-1/6" @click="show_modal_add_new_vendor_detail = true">
                  <span class="btn--text custom-text-bold">Add New Vendor</span>
                </button>
							</div>
						</div>
					</div>
				</div>
			</card-custom>
      <div class="separator"></div>
      <card-custom title="Search ">
        <div class="flex flex-col w-full">
          <div class="w-full mb-2 mt-4 flex">
            <div class="flex flex-1">
              <input
                type="text"
                class="input w-full"
                placeholder="Search Vendor name or Vendor # "
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
      <div class="separator"></div>
      <card-custom title="Vendor List">
        <div class="w-full">
          <div class="flex flex-col w-full">
            <div v-if="vendors.datas.length > 0 || conditions.loadings.vendors" class="w-full">
              <div class="table-custom-component">
                <div class="table-custom--container">
                  <div class="table-custom--content" style="overflow:auto">
                    <div ref="table" class="tablecustom my-8 w-full" style="min-width:800px;">
											<div class="tablecustom--container flex">
                        <div v-if="!conditions.loadings.vendors" ref="tableScrollbar" class="tablecustom-scrollable--content h-full w-full">
													<div class="tablecustom-header--container flex w-full">
														<div class="tablecustom-header--content" :class="[authenticatedUser.role == 'purchaser' ? 'w-3/12' : 'w-2/12']">
															<p class="tablecustom-header--text uppercase text-xs font-medium flex items-center">Vendor #</p>
														</div>
														<div class="tablecustom-header--content w-3/12">
															<p class="tablecustom-header--text uppercase text-xs font-medium flex items-center">Vendor Name</p>
														</div>
														<div class="tablecustom-header--content w-3/12">
															<p class="tablecustom-header--text uppercase text-xs font-medium flex items-center">Contact Person</p>
														</div>
														<div class="tablecustom-header--content" :class="[authenticatedUser.role == 'purchaser' ? 'w-3/12' : 'w-2/12']">
															<p class="tablecustom-header--text uppercase text-xs font-medium flex items-center">Telephone</p>
														</div>
														<div class="tablecustom-header--content w-2/12" v-if="['admin'].includes(authenticatedUser.role)">
															<p class="tablecustom-header--text uppercase text-xs font-medium flex items-center">Actions</p>
														</div>
													</div>
													<div class="tablecustom-content--container w-full" style="margin-bottom:12px;">
														<template v-for="(vendor, index) in vendors.datas">
															<div class="flex" :key="index">
																<div class="tablecustom-content--content" :class="[authenticatedUser.role == 'purchaser' ? 'w-2/12' : 'w-2/12']">
																	<div class="tablecustom-content--text">
																		<p class="m-0"><a @click="getVendorDetails(vendor.id)">{{ vendor.vendor_number }}</a></p>
																	</div>
																</div>
																<div class="tablecustom-content--content w-3/12">
																	<div class="tablecustom-content--text">
																		<p class="m-0">{{ vendor.name }}</p>
																	</div>
																</div>
																<div class="tablecustom-content--content w-3/12">
																	<div class="tablecustom-content--text">
																		<p class="m-0" v-if="vendor.contact_person">{{ vendor.contact_person }}</p>
																		<p class="m-0" v-else>-</p>
																	</div>
																</div>
																<div class="tablecustom-content--content" :class="[authenticatedUser.role == 'purchaser' ? 'w-3/12' : 'w-2/12']">
																	<div class="tablecustom-content--text flex items-center flex-col sm:flex-row">
																		<p class="m-0" v-if="vendor.telephone">{{ vendor.telephone }}</p>
																		<p class="m-0" v-else>-</p>
																	</div>
																</div>
																<div class="tablecustom-content--content w-2/12" v-if="['admin'].includes(authenticatedUser.role)">
                                  <div class="w-1/4 flex justify-center">
                                    <button @click="editVendorDetails(vendor.id)" class="btn btn-outline-primary p-1 flex items-center justify-center" style="min-width: initial">
                                      <span class="btn--text custom-text-bold flex items-center justify-center">
                                        <icon-custom icon="edit" classes="pr-0 h-4 w-4"></icon-custom>
                                      </span>
                                    </button>
                                    <button class="btn btn-outline-danger disabled p-1 flex items-center justify-center ml-2" style="min-width: initial" title="You can't delete this vendor because this vendor have orders" disabled v-if="vendor.orders_count>0">
                                      <span class="btn--text custom-text-bold flex items-center justify-center">
                                        <icon-custom icon="trash" classes="pr-0 h-4 w-4"></icon-custom>
                                      </span>
                                    </button>
                                    <button @click="deleteVendor(vendor)" class="btn btn-outline-danger p-1 flex items-center justify-center ml-2" style="min-width: initial" v-else>
                                      <span class="btn--text custom-text-bold flex items-center justify-center">
                                        <icon-custom icon="trash" classes="pr-0 h-4 w-4"></icon-custom>
                                      </span>
                                    </button>                                    
                                  </div>
																</div>
															</div>
														</template>
													</div>
												</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <template v-else>
							<div class="flex w-full justify-center">
								<p>No data found.</p>
							</div>
						</template>
            <div v-if="!conditions.loadings.vendors" class="table-custom--footer">
							<div class="w-1/2 flex justify-start">
								<button v-if="vendors.paginations.current_page > vendors.paginations.first_page" @click="goToPage(parseInt(vendors.paginations.current_page) - 1)" class="btn btn-outline-primary w-1/5 mr-4">
									<feather-icon icon="ChevronLeftIcon" svgClasses="h-4 w-4"></feather-icon>
									<span class="btn--text custom-text-bold">Previous</span>
								</button>
							</div>
							<div v-if="vendors.datas.length >= conditions.data_each_page" class="w-1/2 flex justify-end">
								<button v-if="vendors.paginations.current_page < vendors.paginations.last_page" @click="goToPage(parseInt(vendors.paginations.current_page) + 1)" class="btn btn-outline-primary w-1/5">
									<span class="btn--text custom-text-bold">Next</span>
									<feather-icon icon="ChevronRightIcon" svgClasses="h-4 w-4"></feather-icon>
								</button>
							</div>
						</div>
          </div>
        </div>
      </card-custom>
    </div>
    <!-- Pop up -->
    <popup-custom show-variable="show_modal_vendor_detail" title="Vendor Details" content-width="800" content-height="70%">
      <template slot="content" v-if="(show_modal_vendor_detail == true && selectedVendor !== null)">
        <div class="flex flex-row w-full">
          <div class="flex flex-col w-1/2">
            <div class="w-full block">
              <div class="w-full">
                <span class="uppercase font-medium text-xs text-spacing-md line-height-md">Vendor #</span>
              </div>
              <div class="w-full mb-2">
                <div class="input w-full input-background-disabled">{{ selectedVendor.vendor_number }}</div>
              </div>
            </div>
            <div class="w-full block">
              <div class="w-full">
                <span class="uppercase font-medium text-xs text-spacing-md line-height-md">Vendor Name</span>
              </div>
              <div class="w-full mb-2">
                <div class="input w-full input-background-disabled">{{ selectedVendor.name }}</div>
              </div>
            </div>
            <div class="w-full block" v-if="selectedVendor.address">
              <div class="w-full">
                <span class="uppercase font-medium text-xs text-spacing-md line-height-md">Address</span>
              </div>
              <div class="w-full mb-2">
                <div class="input w-full input-background-disabled">{{ selectedVendor.address }}</div>
              </div>
            </div>
            <div class="w-full block" v-if="selectedVendor.contact_person">
              <div class="w-full">
                <span class="uppercase font-medium text-xs text-spacing-md line-height-md">Contact Person</span>
              </div>
              <div class="w-full mb-2">
                <div class="input w-full input-background-disabled">{{ selectedVendor.contact_person }}</div>
              </div>
            </div>
            <div class="w-full block" v-if="selectedVendor.email">
              <div class="w-full">
                <span class="uppercase font-medium text-xs text-spacing-md line-height-md">Email</span>
              </div>
              <div class="w-full mb-2">
                <div class="input w-full input-background-disabled">{{ selectedVendor.email }}</div>
              </div>
            </div>
            <div class="w-full block" v-if="selectedVendor.telephone">
              <div class="w-full">
                <span class="uppercase font-medium text-xs text-spacing-md line-height-md">Telephone</span>
              </div>
              <div class="w-full mb-2">
                <div class="input w-full input-background-disabled">{{ selectedVendor.telephone }}</div>
              </div>
            </div>
            <div class="w-full block" v-if="selectedVendor.po_note">
              <div class="w-full">
                <span class="uppercase font-medium text-xs text-spacing-md line-height-md">PO Note</span>
              </div>
              <div class="w-full mb-2">
                <div class="input w-full input-background-disabled">{{ selectedVendor.po_note }}</div>
              </div>
            </div>
          </div>
          <div class="flex flex-col w-1/2">
            <div class="card m-5">
              <div class="card-content flex w-full">
                <div class="w-full flex-col">
                  <div class="w-full overflow-y-scroll h-64">
                    <div class="flex flex-col" v-if="chats.length>0">
                      <div v-for="(chat,index) in chats" :key="index" :class="[index===0 ? '' : 'mt-4']">
                        <span>
                          <span class="font-medium">{{ chat.sender.name }} -</span>
                          <span class="text-xs text-secondary">{{$moment(chat.created_at).format("MMMM DD, YYYY")}} at {{$moment(chat.created_at).format("HH:MM")}} </span>
                        </span>
                        <p class="mt-2">{{ chat.message }}</p>
                      </div>
                    </div>
                  </div>
                  <!-- <div class="w-full flex mt-4">
                    <input type="text" class="input w-full mr-2" placeholder="Write Message..." v-model="inputs.chat.message" :class="[inputs.chat.message == '' ? 'input-empty' : '']" v-on:keyup.enter="submitChat()" />
                    <button class="btn btn-primary" @click="submitChat()">
                      <span class="btn--text custom-text-bold">Send</span>
                    </button>
                  </div> -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
      <template slot="footer">
        <div class="w-full flex justify-end">
          <button @click="show_modal_vendor_detail = false; selectedVendor = null;" class="btn btn-default">
            <span class="btn--text custom-text-bold">Close</span>
          </button>
        </div>
      </template>
    </popup-custom>
    <popup-custom show-variable="show_modal_edit_vendor_detail" title="Edit Vendor Details" content-width="800" content-height="80%">
      <template slot="content" v-if="(show_modal_edit_vendor_detail == true && inputs.vendor.vendor_number !== null)">
        <div class="flex flex-row w-full">
          <div class="flex flex-col w-1/2">
            <div class="w-full block mb-2">
              <div class="w-full">
                <span class="uppercase font-medium text-xs text-spacing-md line-height-md">Vendor #</span>
              </div>
              <div class="w-full">
                <input type="text" class="input w-full" placeholder="Vendor Name" v-model="inputs.vendor.vendor_number" :class="[inputs.vendor.vendor_number == '' ? 'input-empty' : '']" />
              </div>
              <div class="text-danger" v-if="validation_errors.hasOwnProperty('vendor_number') && validation_errors.vendor_number.length>0">{{ validation_errors.vendor_number[0] }}</div>
            </div>
            <div class="w-full block mb-2">
              <div class="w-full">
                <span class="uppercase font-medium text-xs text-spacing-md line-height-md">Vendor Name</span>
              </div>
              <div class="w-full">
                <input type="text" class="input w-full" placeholder="Vendor Name" v-model="inputs.vendor.name" :class="[inputs.vendor.name == '' ? 'input-empty' : '']" />
              </div>
              <div class="text-danger" v-if="validation_errors.hasOwnProperty('name') && validation_errors.name.length>0">{{ validation_errors.name[0] }}</div>
            </div>
            <div class="w-full block mb-2">
              <div class="w-full">
                <span class="uppercase font-medium text-xs text-spacing-md line-height-md">Address</span>
              </div>
              <div class="w-full">
                <input type="text" class="input w-full" placeholder="Vendor Address" v-model="inputs.vendor.address" :class="[inputs.vendor.address == '' ? 'input-empty' : '']" />
              </div>
              <div class="text-danger" v-if="validation_errors.hasOwnProperty('address') && validation_errors.address.length>0">{{ validation_errors.address[0] }}</div>
            </div>
            <div class="w-full block mb-2">
              <div class="w-full">
                <span class="uppercase font-medium text-xs text-spacing-md line-height-md">Contact Person</span>
              </div>
              <div class="w-full">
                <input type="text" class="input w-full" placeholder="Contact Person" v-model="inputs.vendor.contact_person" :class="[inputs.vendor.contact_person == '' ? 'input-empty' : '']" />
              </div>
              <div class="text-danger" v-if="validation_errors.hasOwnProperty('contact_person') && validation_errors.contact_person.length>0">{{ validation_errors.contact_person[0] }}</div>
            </div>
            <div class="w-full block mb-2">
              <div class="w-full">
                <span class="uppercase font-medium text-xs text-spacing-md line-height-md">Email</span>
              </div>
              <div class="w-full">
                <input type="text" class="input w-full" placeholder="Email" v-model="inputs.vendor.email" :class="[inputs.vendor.email == '' ? 'input-empty' : '']" />
              </div>
              <div class="text-danger" v-if="validation_errors.hasOwnProperty('email') && validation_errors.email.length>0">{{ validation_errors.email[0] }}</div>
            </div>
            <div class="w-full block mb-2">
              <div class="w-full">
                <span class="uppercase font-medium text-xs text-spacing-md line-height-md">Telephone</span>
              </div>
              <div class="w-full">
                <input type="text" class="input w-full" placeholder="Telephone" v-model="inputs.vendor.telephone" :class="[inputs.vendor.telephone == '' ? 'input-empty' : '']" />
              </div>
              <div class="text-danger" v-if="validation_errors.hasOwnProperty('telephone') && validation_errors.telephone.length>0">{{ validation_errors.telephone[0] }}</div>
            </div>
            <div class="w-full block mb-2">
              <div class="w-full">
                <span class="uppercase font-medium text-xs text-spacing-md line-height-md">PO Note</span>
              </div>
              <div class="w-full">
                <input type="text" class="input w-full" placeholder="PO Note" v-model="inputs.vendor.po_note" :class="[inputs.vendor.po_note == '' ? 'input-empty' : '']" />
              </div>
              <div class="text-danger" v-if="validation_errors.hasOwnProperty('po_note') && validation_errors.po_note.length>0">{{ validation_errors.po_note[0] }}</div>
            </div>
          </div>
          <div class="flex flex-col w-1/2">
            <div class="card m-5">
              <div class="card-content flex w-full">
                <div class="w-full flex-col">
                  <div class="w-full overflow-y-scroll h-64">
                    <div class="flex flex-col" v-if="chats.length>0">
                      <div v-for="(chat,index) in chats" :key="index" :class="[index===0 ? '' : 'mt-4']">
                        <span>
                          <span class="font-medium">{{ chat.sender.name }} -</span>
                          <span class="text-xs text-secondary">{{$moment(chat.created_at).format("MMMM DD, YYYY")}} at {{$moment(chat.created_at).format("HH:MM")}} </span>
                        </span>
                        <p class="mt-2">{{ chat.message }}</p>
                      </div>
                    </div>
                  </div>
                  <!-- <div class="w-full flex mt-4">
                    <input type="text" class="input w-full mr-2" placeholder="Write Message..." v-model="inputs.chat.message" :class="[inputs.chat.message == '' ? 'input-empty' : '']" v-on:keyup.enter="submitChat()"/>
                    <button class="btn btn-primary" @click="submitChat()">
                      <span class="btn--text custom-text-bold">Send</span>
                    </button>
                  </div> -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
      <template slot="footer">
        <div class="w-full flex justify-end">
          <button @click="show_modal_edit_vendor_detail = false; resetVendorInputs();" class="btn btn-default">
            <span class="btn--text custom-text-bold">Cancel</span>
          </button>
          <button v-if="allowSubmitVendor" @click="submitUpdateVendor()" class="btn btn-primary ml-5">
            <span class="btn--text custom-text-bold">Update vendor</span>
          </button>
          <button v-else class="btn btn-primary ml-5 disabled" disabled>
            <span class="btn--text custom-text-bold">Update vendor</span>
          </button>
        </div>
      </template>
    </popup-custom>
    <popup-custom show-variable="show_modal_add_new_vendor_detail" title="Add New Vendor Details" content-width="500" content-height="80%">
      <template slot="content">
        <div class="w-full block mb-2">
          <div class="w-full">
            <span class="uppercase font-medium text-xs text-spacing-md line-height-md">Vendor #</span>
          </div>
          <div class="w-full">
            <input type="text" class="input w-full" placeholder="Vendor Number" v-model="inputs.vendor.vendor_number" :class="[inputs.vendor.vendor_number == '' ? 'input-empty' : '']" />
          </div>
          <div class="text-danger" v-if="validation_errors.hasOwnProperty('vendor_number') && validation_errors.vendor_number.length>0">{{ validation_errors.vendor_number[0] }}</div>
        </div>
        <div class="w-full block mb-2">
          <div class="w-full">
            <span class="uppercase font-medium text-xs text-spacing-md line-height-md">Vendor Name</span>
          </div>
          <div class="w-full">
            <input type="text" class="input w-full" placeholder="Vendor Name" v-model="inputs.vendor.name" :class="[inputs.vendor.name == '' ? 'input-empty' : '']" />
          </div>
          <div class="text-danger" v-if="validation_errors.hasOwnProperty('name') && validation_errors.name.length>0">{{ validation_errors.name[0] }}</div>
        </div>
        <div class="w-full block mb-2">
          <div class="w-full">
            <span class="uppercase font-medium text-xs text-spacing-md line-height-md">Address</span>
          </div>
          <div class="w-full">
            <input type="text" class="input w-full" placeholder="Vendor Address" v-model="inputs.vendor.address" :class="[inputs.vendor.address == '' ? 'input-empty' : '']" />
          </div>
          <div class="text-danger" v-if="validation_errors.hasOwnProperty('address') && validation_errors.address.length>0">{{ validation_errors.address[0] }}</div>
        </div>
        <div class="w-full block mb-2">
          <div class="w-full">
            <span class="uppercase font-medium text-xs text-spacing-md line-height-md">Contact Person</span>
          </div>
          <div class="w-full">
            <input type="text" class="input w-full" placeholder="Please use comma to insert multiple contact persons" v-model="inputs.vendor.contact_person" :class="[inputs.vendor.contact_person == '' ? 'input-empty' : '']" />
          </div>
          <div class="text-danger" v-if="validation_errors.hasOwnProperty('contact_person') && validation_errors.contact_person.length>0">{{ validation_errors.contact_person[0] }}</div>
        </div>
        <div class="w-full block mb-2">
          <div class="w-full">
            <span class="uppercase font-medium text-xs text-spacing-md line-height-md">Email</span>
          </div>
          <div class="w-full">
            <input type="text" class="input w-full" placeholder="Please use comma to insert multiple emails" v-model="inputs.vendor.email" :class="[inputs.vendor.email == '' ? 'input-empty' : '']" />
          </div>
          <div class="text-danger" v-if="validation_errors.hasOwnProperty('email') && validation_errors.email.length>0">{{ validation_errors.email[0] }}</div>
        </div>
        <div class="w-full block mb-2">
          <div class="w-full">
            <span class="uppercase font-medium text-xs text-spacing-md line-height-md">Telephone</span>
          </div>
          <div class="w-full">
            <input type="text" class="input w-full" placeholder="Telephone" v-model="inputs.vendor.telephone" :class="[inputs.vendor.telephone == '' ? 'input-empty' : '']" />
          </div>
          <div class="text-danger" v-if="validation_errors.hasOwnProperty('telephone') && validation_errors.telephone.length>0">{{ validation_errors.telephone[0] }}</div>
        </div>
        <div class="w-full block mb-2">
          <div class="w-full">
            <span class="uppercase font-medium text-xs text-spacing-md line-height-md">PO Note</span>
          </div>
          <div class="w-full">
            <input type="text" class="input w-full" placeholder="PO Note" v-model="inputs.vendor.po_note" :class="[inputs.vendor.po_note == '' ? 'input-empty' : '']" />
          </div>
          <div class="text-danger" v-if="validation_errors.hasOwnProperty('po_note') && validation_errors.po_note.length>0">{{ validation_errors.po_note[0] }}</div>
        </div>
      </template>
      <template slot="footer">
        <div class="w-full flex justify-end">
          <button @click="show_modal_add_new_vendor_detail = false; resetVendorInputs();" class="btn btn-default">
            <span class="btn--text custom-text-bold">Cancel</span>
          </button>
          <button @click="submitNewVendor()" v-if="allowSubmitVendor" class="btn btn-primary ml-5">
            <span class="btn--text custom-text-bold">Submit</span>
          </button>
          <button v-else class="btn btn-primary ml-5 disabled" disabled>
            <span class="btn--text custom-text-bold">Submit</span>
          </button>
        </div>
      </template>
    </popup-custom>
    <!-- End Pop up -->
  </div>
</template>

<script>
import vendorApi from "@/apis/vendorApi";
// import chatApi from "@/apis/chatApi";
export default {
  name: "VendorList",
  mixins: [vendorApi],
  data() {
    return {
      conditions: {
        data_each_page: 50,
        loadings: {
          vendors: false
        },
        search_active: false,
      },
      vendors: {
        datas:[],
        paginations: {
					first_page: 1,
					current_page: 1,
					last_page: 1,
				}
      },
      inputs: {
        filters: {
          search: "",
          status: null,
        },
        vendor:{
          selected_vendor: null,
          vendor_number:null,
          name:null,
          address:null,
          contact_person:null,
          email:null,
          telephone:null,
          po_note:null,
        },
        chat:{
          selected_receiver_id: null,
          message:""
        }
      },
      variables: {
        status: [
          { value: null, text: "All status" },
          { value: "active", text: "Active" },
          { value: "inactive", text: "Inactive" },
        ]
      },
      show_modal_vendor_detail: false,
      selectedVendor:null,
      show_modal_add_new_vendor_detail: false,
      show_modal_edit_vendor_detail: false,
      chats:[],
      validation_errors:[]
    };
  },
  watch: {
    "inputs.filters.status": function(value) {
      this.vendors.paginations.current_page = 1;
      this.getVendorDatas();
    },
    "show_modal_edit_vendor_detail": function(value) {
			if(!value){
				this.resetVendorInputs();
        this.chats = [];
        this.inputs.chat.selected_receiver_id = null;
        this.inputs.chat.message = "";
			}
		},
    "show_modal_vendor_detail": function(value) {
			if(!value){
				this.resetVendorInputs();
        this.chats = [];
        this.inputs.chat.selected_receiver_id = null;
        this.inputs.chat.message = "";
			}
		}
  },
  computed: {
    allowSubmitVendor() {
      if ((this.inputs.vendor.vendor_number != null && this.inputs.vendor.vendor_number !="") && (this.inputs.vendor.name != null && this.inputs.vendor.name != "")) {
        return true;
      }
      return false;
    },
  },
  methods: {
    deleteVendor(vendor) {
      this.$swal({
        title: `Are you sure?`,
        text: `Please confirm to delete ${vendor.name}`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          let loading = this.$loading.show({
            container: null,
            color: "var(--color-primary)",
          });
          this.vendorApi_delete(vendor.id)
            .then(({ data }) => {
              this.getVendorDatas();
            })
            .finally(() => loading.hide());
        }
      });
    },
    getVendorDatas() {
      this.conditions.loadings.vendors = true;
      const params = {
        page: this.vendors.paginations.current_page,
        search: this.inputs.filters.search,
        status: this.inputs.filters.status,
      };
      this.vendorApi_getAll(params)
        .then(({ data }) => {
          this.vendors.datas = data.data;
          this.vendors.paginations.last_page = data.last_page;
        })
        .finally(() => (this.conditions.loadings.vendors = false));
    },
    goToPage(page_number) {
			this.vendors.paginations.current_page = page_number;
			this.getVendorDatas();
		},
    searchData(search_active = true) {
      this.vendors.paginations.current_page = 1;
      this.conditions.search_active = search_active;
      if (!search_active) {
        this.inputs.filters.search = "";
      }
      this.getVendorDatas();
    },
    getVendorDetails(vendor_id){
      this.vendorApi_getOne({ id: vendor_id }).then((response) => {
        if(response.success && response.data != ""){
          this.selectedVendor = response.data;
          this.inputs.chat.selected_receiver_id = this.selectedVendor.id;
          this.show_modal_vendor_detail = true;

          // this.getReceiverMessages(this.inputs.chat.selected_receiver_id);
        }
      });
    },
    editVendorDetails(vendor_id){
      this.vendorApi_getOne({ id: vendor_id }).then((response) => {
        if(response.success && response.data != ""){
          this.inputs.chat.selected_receiver_id = response.data.id;
          this.inputs.vendor.selected_vendor = response.data.id;
          this.inputs.vendor.vendor_number = response.data.vendor_number;
          this.inputs.vendor.name = response.data.name;
          this.inputs.vendor.address = response.data.address;
          this.inputs.vendor.contact_person = response.data.contact_person;
          this.inputs.vendor.email = response.data.email;
          this.inputs.vendor.telephone = response.data.telephone;
          this.inputs.vendor.po_note = response.data.po_note;
          this.show_modal_edit_vendor_detail = true;

          // this.getReceiverMessages(this.inputs.chat.selected_receiver_id);
        }
      });
    },
    resetVendorInputs() {
      this.inputs.vendor.selected_vendor = null;
      this.inputs.vendor.vendor_number = null;
      this.inputs.vendor.name = null;
      this.inputs.vendor.address = null;
      this.inputs.vendor.contact_person = null;
      this.inputs.vendor.email = null;
      this.inputs.vendor.telephone = null;
      this.inputs.vendor.po_note = null;
    },
    submitNewVendor() {
      let loading = this.$loading.show({
        container: null,
        color: "var(--color-primary)",
      });
      
      delete this.inputs.vendor['selected_vendor'];
      this.vendorApi_create(this.inputs.vendor)
        .then((response) => {
          this.validation_errors = [];
          if(response.success){
            this.show_modal_add_new_vendor_detail = false;
            this.resetVendorInputs();
            this.getVendorDatas();
            this.$notify({
              group: "notification",
              type: "success",
              title: response.message
            });
          } else {
            this.validation_errors = response.data;
          }
        })
        .finally(() => loading.hide());
    },
    submitUpdateVendor() {
      let loading = this.$loading.show({
        container: null,
        color: "var(--color-primary)",
      });
      this.vendorApi_update(this.inputs.vendor.selected_vendor, this.inputs.vendor)
        .then((response) => {
          this.validation_errors = [];
          if(response.success){
            // this.show_modal_edit_vendor_detail = false;
            this.editVendorDetails(this.inputs.vendor.selected_vendor);
            this.getVendorDatas();
            this.$notify({
              group: "notification",
              type: "success",
              title: response.message
            });
          } else {
            this.validation_errors = response.data;
          }
        })
        .finally(() => loading.hide());
    },
    // submitChat(){
    //   if(this.inputs.chat.message !="" && this.inputs.chat.selected_receiver_id != null){
    //     this.chatApi_sendMessage(this.inputs.chat).then((response)=>{
    //       if(response.success){
    //         this.inputs.chat.message = "";
    //         this.getReceiverMessages(this.inputs.chat.selected_receiver_id);
    //       }
    //     });
    //   }
    // },
    // getReceiverMessages(receiver_id){
    //   this.chatApi_getReceiverMessages(receiver_id).then((response)=>{
    //     if(response.success){
    //       this.chats = response.data;
    //     }
    //   });   
    // }
  },
  async created() {
    if (!["admin","purchaser"].includes(this.authenticatedUser.role)) {
      this.$router.push("/");
    } else {
      await this.getVendorDatas();
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
</style>
