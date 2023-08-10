<template>
	<div>
		<template v-if="!conditions.loadings.details">
			<template v-if="data.order_details.length > 0">
				<template v-if="upsShippedOrders.length > 0">
					<div :key="`ups_` + i_order_detail" v-for="(order_detail, i_order_detail) in upsShippedOrders">
						<divider-custom class="mb-3 mt-0"></divider-custom>
						<div class="w-full flex mb-2">
							<div class="w-2/3 flex justify-center flex-col">
								<p class="m-0 font-bold">UPS</p>
								<p class="m-0 mt-2 text-sm">
									{{ extractTrackingNumber(order_detail.shipped_via_code, order_detail.tracking) }}
								</p>
								<p class="m-0 mt-2 text-sm">Shipped date : {{ order_detail.shipped_date }}</p>
							</div>
							<div class="w-1/3 mx-1 flex flex-wrap justify-start">
								<a
									:href="`https://wwwapps.ups.com/tracking/tracking.cgi?tracknum=${extractTrackingNumber(order_detail.shipped_via_code, order_detail.tracking)}&requester=ST/trackdetails`"
									target="_blank"
								>
									<button class="btn btn-outline-primary btn-small">
										<span class="btn--text custom-text-bold">Track</span>
									</button>
								</a>
								<div class="m-0 mt-2 text-sm" style="flex: 1 1 100%;" v-if="order_detail.tracking_status && order_detail.tracking_status.toLowerCase() == 'delivered'">Delivery Status : {{ order_detail.tracking_status }} on {{ order_detail.tracking_date }} <span v-if="order_detail.tracking_time">at {{ order_detail.tracking_time }}</span></div>
								<div class="m-0 mt-2 text-sm" style="flex: 1 1 100%;" v-else-if="order_detail.tracking_status">Estimated Delivery Date : {{ order_detail.tracking_date }}</div>
							</div>
						</div>
						<div :key="`ups_${i_order_detail}_order_item_${i_order_item}`" v-for="(order_item, i_order_item) in order_detail.items" class="w-full flex items-center py-1">
							<div class="w-full text-sm">
								{{ order_item.item_id }}
								<span :style="order_item.quantity_backordered == -1 ? 'text-decoration:line-through' : ''"> {{ order_item.quantity_shipped }}/{{ order_item.quantity_ordered }} </span>
							</div>
						</div>
						<divider-custom class="mt-1"></divider-custom>
					</div>
				</template>
				<template v-if="nonUpsShippedOrders.length > 0">
					<div :key="`nonups_` + i_order_detail" v-for="(order_detail, i_order_detail) in nonUpsShippedOrders">
						<divider-custom class="mb-3 mt-0"></divider-custom>
						<div class="w-full flex mb-2">
							<div class="w-full flex justify-center flex-col">
								<p class="m-0 font-bold">
									{{ order_detail.shipped_via_name }}
								</p>
								<p class="m-0 mt-2 text-sm">
									Tracking
									{{ order_detail.tracking }}
								</p>
								<p class="m-0 mt-2 text-sm">Shipped date : {{ order_detail.shipped_date }}</p>
							</div>
							<div v-if="order_detail.tracking_url" class="mx-1 flex justify-start flex-wrap">
								<template v-if="order_detail.method !== 'post'">
                                    <a :href="order_detail.tracking_url" target="_blank">
                                        <button class="btn btn-outline-primary btn-small">
                                            <span class="btn--text custom-text-bold">Track</span>
                                        </button>
                                    </a>
                                </template>
                                <form v-else :action="order_detail.tracking_url" method="post" target="_blank">
                                    <input type="hidden" :name="order_detail.parametr_name" :value="order_detail.tracking_number">
                                    <button class="btn btn-outline-primary btn-small">
                                        <span class="btn--text custom-text-bold">Track</span>
                                    </button>
                                </form>
																<div class="m-0 mt-2 text-sm" style="flex: 1 1 100%;" v-if="order_detail.tracking_status && order_detail.tracking_status.toLowerCase() == 'delivered'">Delivery Status : {{ order_detail.tracking_status }} on {{ order_detail.tracking_date }} <span v-if="order_detail.tracking_time">at {{ order_detail.tracking_time }}</span></div>
																<div class="m-0 mt-2 text-sm" style="flex: 1 1 100%;" v-else-if="order_detail.tracking_status">Estimated Delivery Date : {{ order_detail.tracking_date }}</div>
							</div>
						</div>
						<div :key="`nonups_${i_order_detail}_order_item_${i_order_item}`" v-for="(order_item, i_order_item) in order_detail.items" class="w-full flex items-center py-1">
							<div class="w-full text-sm">
								{{ order_item.item_id }}
								<span :style="order_item.quantity_backordered == -1 ? 'text-decoration:line-through' : ''"> {{ order_item.quantity_shipped }}/{{ order_item.quantity_ordered }} </span>
							</div>
						</div>
						<divider-custom class="mt-1"></divider-custom>
					</div>
				</template>
				<template v-if="notShippedOrders.length > 0">
					<divider-custom class="mb-3 mt-0"></divider-custom>
					<div class="w-full flex mb-2">
						<div class="w-full flex justify-center flex-row">
							<p class="flex w-1/2 justify-center  m-0 font-bold">Not yet shipped</p>
							<p class="flex w-1/2  justify-center m-0 font-bold">Stock</p>
						</div>
					</div>
					<div :key="`notshipped_` + i_order_detail" v-for="(order_detail, i_order_detail) in notShippedOrders" class="w-full flex items-center py-1">
						<div class="w-1/2 text-sm">
							{{ order_detail.item_id }}
							<span :style="order_detail.quantity_backordered == -1 ? 'text-decoration:line-through;    text-decoration-color: red; text-decoration-thickness: 2px;' : ''">
								{{ order_detail.quantity_shipped }}/{{ order_detail.quantity_ordered }}
							</span>
						</div>
						<div class="w-1/2 text-sm justify-center flex">
							<span>
								{{ formatQuantity(order_detail.item.quantity) }}
							</span>
							<dropdown-custom v-if="order_detail.item.quantity.toLowerCase().includes('consult')" close-on-click custom-content trigger-click class="cursor-pointer" :top-param="'10'">
								<feather-icon class="text-primary h-4 w-4" icon="InfoIcon"></feather-icon>
								<dropdown-menu-custom class="profile-dropdown--container absolute" style="min-width: 200px;z-index:10010">
									<div class="flex flex-col">
										<div v-if="order_detail.item.item_availabilities && order_detail.item.item_availabilities.length > 0" class="flex flex-col mb-4">
											<p class="my-0"><strong>ETA:</strong></p>
											<ul class="m0">
												<li
													:key="i_item_availability"
													v-for="(item_availability, i_item_availability) in formatItemAvailabilities(order_detail.item.item_availabilities, order_detail.item.quantity, authenticatedUser.role)"
													class="ml-4"
												>
													<span v-html="generateETAText(item_availability)"></span>
												</li>
											</ul>
										</div>
										<div>
											<span>
												Need it sooner? Get in touch.
												<a
													:href="
														`mailto:customerservice@elcolighting.com?subject=${order_detail.number} - ${order_detail.item_id}&body=Hello,%0D%0A I am looking to check on the status of ${order_detail.item_id} on order ${order_detail.number}? Can you offer me an alternative that is in stock?`
													"
												>
													Click Here
												</a>
											</span>
										</div>
									</div>
								</dropdown-menu-custom>
							</dropdown-custom>
						</div>
					</div>
					<divider-custom class="mt-1"></divider-custom>
				</template>
			</template>
			<div v-else class="w-full flex">
				<p class="m-0">No tracking informations found</p>
			</div>
		</template>
		<div v-else class="w-full flex flex-col">
			<template v-for="i in 4">
				<div class="w-full flex" :key="i">
					<div
						class="tablecustom-content--content w-full"
						:style="{
							padding: '10px 10px',
						}"
					>
						<div class="tablecustom-content--text">
							<div class="loading-placeholder loading-placeholder__rectangle"></div>
						</div>
					</div>
				</div>
			</template>
		</div>
	</div>
</template>

<script>
import orderApi from "@/apis/orderApi";
import itemAvailabilitiesHelpers from "@/helpers/itemAvailabilitiesHelpers";
import itemsHelpers from "@/helpers/itemsHelpers";
export default {
	name: "OrderTrackingDetail",
	mixins: [orderApi, itemAvailabilitiesHelpers, itemsHelpers],
	props: {
		poNumber: {
			type: String,
			required: true,
		},
		customerId: {
			type: String,
			required: true,
		},
		orderNumber: {
			type: String,
			required: true,
		},
	},
	data() {
		return {
			conditions: {
				loadings: {
					details: true,
				},
			},
			data: {
				order_details: [],
			},
		};
	},
	computed: {
		upsShippedOrders() {
			const grouped_orders = this.data.order_details
				.filter((order_detail) => order_detail.shipped_via_code == "ups" && order_detail.status != "not_ship" && order_detail.quantity_shipped > 0)
				.map((order_detail) => {
					return {
						shipped_via_code: order_detail.shipped_via_code,
						shipped_via_name: order_detail.shipped_via_name,
						tracking: order_detail.tracking,
						item_id: order_detail.item_id,
						quantity_ordered: order_detail.quantity_ordered,
						quantity_shipped: order_detail.quantity_shipped,
						quantity_backordered: order_detail.quantity_backordered,
						shipped_date: !!order_detail.shipped_date ? this.$moment(order_detail.shipped_date).format("MMM DD, YYYY") : "-",
						tracking_status: order_detail.tracking_detail_status,
						tracking_date: order_detail.tracking_detail_date,
						tracking_time: order_detail.tracking_detail_time,
					};
				});
			let mapped_orders = {};
			grouped_orders.forEach((order_detail) => {
				const key = order_detail.tracking + "_" + order_detail.shipped_date;
				if (typeof mapped_orders[key] == "undefined") {
					mapped_orders[key] = {
						shipped_via_code: order_detail.shipped_via_code,
						shipped_via_name: order_detail.shipped_via_name,
						tracking: order_detail.tracking,
						shipped_date: order_detail.shipped_date,
						items: [],
						tracking_status: order_detail.tracking_status,
						tracking_date: order_detail.tracking_date,
						tracking_time: order_detail.tracking_time,
					};
				}
				mapped_orders[key].items.push({
					item_id: order_detail.item_id,
					quantity_ordered: order_detail.quantity_ordered,
					quantity_shipped: order_detail.quantity_shipped,
					quantity_backordered: order_detail.quantity_backordered,
					tracking_status: order_detail.tracking_status,
					tracking_date: order_detail.tracking_date,
					tracking_time: order_detail.tracking_time,
				});
			});
			return Object.values(mapped_orders);
		},
		nonUpsShippedOrders() {
			const grouped_orders = this.data.order_details
				.filter((order_detail) => order_detail.shipped_via_code != "ups" && order_detail.status != "not_ship" && order_detail.quantity_shipped > 0)
				.map((order_detail) => {
					return {
						shipped_via_code: order_detail.shipped_via_code,
						shipped_via_name: order_detail.shipped_via_name,
						tracking: order_detail.tracking,
						item_id: order_detail.item_id,
						quantity_ordered: order_detail.quantity_ordered,
						quantity_shipped: order_detail.quantity_shipped,
						quantity_backordered: order_detail.quantity_backordered,
						tracking_url: order_detail.tracking_url,
                        tracking_number: order_detail.tracking_number,
                        method: order_detail.method,
                        parametr_name: order_detail.parametr_name,
						shipped_date: !!order_detail.shipped_date ? this.$moment(order_detail.shipped_date).format("MMM DD, YYYY") : "-",
						tracking_status: order_detail.tracking_detail_status,
						tracking_date: order_detail.tracking_detail_date,
						tracking_time: order_detail.tracking_detail_time,
					};
				});
			let mapped_orders = {};
			grouped_orders.forEach((order_detail) => {
				const key = order_detail.tracking + "_" + order_detail.shipped_date;
				if (typeof mapped_orders[key] == "undefined") {
					mapped_orders[key] = {
						shipped_via_code: order_detail.shipped_via_code,
						shipped_via_name: order_detail.shipped_via_name,
						tracking: order_detail.tracking,
						tracking_url: order_detail.tracking_url,
                        tracking_number: order_detail.tracking_number,
                        method: order_detail.method,
                        parametr_name: order_detail.parametr_name,
                        shipped_date: order_detail.shipped_date,
						items: [],
						tracking_status: order_detail.tracking_status,
						tracking_date: order_detail.tracking_date,
						tracking_time: order_detail.tracking_time,
					};
				}
				mapped_orders[key].items.push({
					item_id: order_detail.item_id,
					quantity_ordered: order_detail.quantity_ordered,
					quantity_shipped: order_detail.quantity_shipped,
					quantity_backordered: order_detail.quantity_backordered,
					tracking_status: order_detail.tracking_status,
					tracking_date: order_detail.tracking_date,
					tracking_time: order_detail.tracking_time,
				});
			});
			return Object.values(mapped_orders);
		},
		notShippedOrders() {
			return this.data.order_details.filter((order_detail) => order_detail.status == "not_ship" || order_detail.quantity_shipped == 0);
		},
	},
	methods: {
		extractTrackingNumber(shipped_via, tracking) {
			let tracking_number = "";
			switch (shipped_via) {
				case "ups":
					const arr_tracking = tracking.split(" ");
					tracking_number = arr_tracking[0];
					break;
			}
			return tracking_number;
		},
		getOrderTrackings() {
			this.conditions.loadings.details = true;
			const params = {
				poNumber: this.poNumber,
				customerId: this.customerId,
				orderNumber: this.orderNumber,
			};
			this.orderApi_getAllForPublic(params)
				.then((response) => (this.data.order_details = response.data))
				.finally(() => (this.conditions.loadings.details = false));
		},
	},
	mounted() {
		this.getOrderTrackings();
	},
};
</script>
