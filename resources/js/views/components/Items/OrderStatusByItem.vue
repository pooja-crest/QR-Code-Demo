<template>
	<div class="nested-first">
		<template v-if="data.length > 0">
			<div class="tablecustom-header--container flex w-full">
				<!-- :class="[authenticatedUser.role == 'purchaser' ? 'w-3/12' : 'w-2/12']" -->
				<div class="tablecustom-content--content w-4/12 header-title" :class="[authenticatedUser.role == 'purchaser' ? 'w-3/12' : 'w-2/12']"><p class="m-0">PO Number</p></div>
				<div class="tablecustom-content--content w-4/12 header-title" :class="[authenticatedUser.role == 'purchaser' ? 'w-3/12' : 'w-2/12']"><p class="m-0">Container Number</p></div>
				<div class="tablecustom-content--content w-4/12 header-title" :class="[authenticatedUser.role == 'purchaser' ? 'w-3/12' : 'w-2/12']"><p class="m-0">Purchased On</p></div>
				<div class="tablecustom-content--content w-4/12 header-title" :class="[authenticatedUser.role == 'purchaser' ? 'w-3/12' : 'w-2/12']"><p class="m-0">Quantity</p></div>
				<div class="tablecustom-content--content w-3/12 header-title" :class="[authenticatedUser.role == 'purchaser' ? 'w-3/12' : 'w-2/12']"><p class="m-0">Cancelled Quantity</p></div>
				<div class="tablecustom-content--content w-4/12 header-title" :class="[authenticatedUser.role == 'purchaser' ? 'w-3/12' : 'w-2/12']"><p class="m-0">Status</p></div>
				<div class="tablecustom-content--content w-4/12 header-title" :class="[authenticatedUser.role == 'purchaser' ? 'w-3/12' : 'w-2/12']"><p class="m-0">Unit Price</p></div>
			</div>
			<div class="w-full subitems" v-for="(order, key) in data">
				<div class="flex flex-row">
					<div class="tablecustom-content--content w-4/12">
						<p class="m-0">
							<template v-if="order.is_receipt">
								<button
									v-if="currentKey == `${key}${order.item_id}`"
									@click="currentKey = null"
									type="button"
									class="btn btn-outline-danger sub-item p-1 flex items-center justify-center mr-2"
									style="min-width: initial; float: left;"
								>
									<span class="btn--text custom-text-bold  flex items-center justify-center">
										<icon-custom icon="minus" classes="pr-0 h-4 w-4"></icon-custom>
									</span>
								</button>
								<button
									type="button"
									v-else
									@click="getItemByMultipleShip(key, order)"
									class="btn btn-outline-primary sub-item p-1 flex items-center justify-center mr-2"
									style="min-width: initial; float: left;"
								>
									<span class="btn--text custom-text-bold flex items-center justify-center">
										<icon-custom icon="plus" classes="pr-0 h-4 w-4"></icon-custom>
									</span>
								</button>
							</template>
							<template v-else>
								<button class="btn p-1 flex items-center justify-center mr-2 text-gray-50 cursor-default" style="min-width: initial; float: left;" disabled>
									<span class="btn--text custom-text-bold flex items-center justify-center">
										<icon-custom icon="plus" classes="pr-0 h-4 w-4 text-gray-50" disabled></icon-custom>
									</span>
								</button>
							</template>

							{{ order.po_number }}
						</p>
					</div>
					<div class="tablecustom-content--content w-4/12">
						<router-link :to="{ name : 'edit_shipment', params : { order_number : order.shipment_order_id } }" v-if="authenticatedUser && ['admin','purchaser'].includes(authenticatedUser.role) && order.hasOwnProperty('container_no')">
							<p class="m-0" :title="order.container_number">{{ order.container_no }}</p>
						</router-link>
						<p class="m-0" v-else>-</p>
					</div>
					<div class="tablecustom-content--content w-4/12">
						<p class="m-0">{{ order.purchased_on }}</p>
					</div>
					<div class="tablecustom-content--content w-4/12">
						<p class="m-0">{{ order.total_quantity }}</p>
					</div>
                    <div class="tablecustom-content--content w-3/12">
						<p class="m-0">{{ !order.cancelled_quantity || order.cancelled_quantity < 1 ? '0' : order.cancelled_quantity }}</p>
					</div>
					<div class="tablecustom-content--content w-4/12">
						<p class="m-0">
                            <template v-if="order.cancelled_quantity && order.cancelled_quantity > 0">{{ 'Cancelled' }} {{ order.quantity_cancelled_at | formatDate }}</template>
                            <template v-else>{{ order.status }} {{ order.date_by_status | formatDate }}</template>
                        </p>
					</div>
					<div class="tablecustom-content--content w-4/12">
						<p class="m-0">{{ globalFunction_formatNumberToCurrency(order.unit_cost) }}</p>
					</div>
				</div>
				<div v-if="currentKey == `${key}${order.item_id}`">
					<SubListOfOrderStatusItem :data="childData" />
				</div>
			</div>
		</template>
	</div>
</template>

<script>
import itemApi from "@/apis/itemApi";
import SubListOfOrderStatusItem from "./SubListOfOrderStatusItem.vue";
export default {
	components: { SubListOfOrderStatusItem },
	name: "OrderStatusByItem",
	mixins: [itemApi],
	props: {
		data: {
			default: [],
		},
	},
	filters: {
		formatDate(date) {
			if (date != "") {
				date = `(${date})`;
			}
			return date;
		},
	},
	data: () => {
		return {
			currentKey: null,
			childData: [],
		};
	},
	methods: {
		getItemByMultipleShip(key, order) {
			this.childData = [];
			let loading = this.$loading.show({
				container: null,
				color: "var(--color-primary)",
			});
			this.currentKey = `${key}${order.item_id}`;
			this.itemApi_getItemByMultipleShip(order.item_id, order.shipment_order_item_id, order.order_id, order.received_type)
				.then((response) => {
					const { data } = response;
					this.childData = data;
				})
				.finally(() => loading.hide());
		},
	},
};
</script>
<style lang="scss" scoped>
.nested-first {
	padding: 15px;
	background-color: #f4f6fc;
}
.header-title {
	font-weight: bold;
}
</style>
