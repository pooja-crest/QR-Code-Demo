<template>
	<div class="nested-second">
		<div class="tablecustom-header--container flex w-full subitem-div">
			<div class="tablecustom-content--content w-4/12 header-title" :class="[authenticatedUser.role == 'purchaser' ? 'w-3/12' : 'w-2/12']"><p class="m-0">Order Date</p></div>
			<div class="tablecustom-content--content w-4/12 header-title" :class="[authenticatedUser.role == 'purchaser' ? 'w-3/12' : 'w-2/12']"><p class="m-0">Received Date</p></div>
			<div class="tablecustom-content--content w-4/12 header-title" :class="[authenticatedUser.role == 'purchaser' ? 'w-3/12' : 'w-2/12']"><p class="m-0">Quantity</p></div>
			<div class="tablecustom-content--content w-4/12 header-title" :class="[authenticatedUser.role == 'purchaser' ? 'w-3/12' : 'w-2/12']"><p class="m-0">Unit Price</p></div>
		</div>
		<div class="flex flex-row w-full" v-for="(item, key) in data" :key="key">
			<div class="tablecustom-content--content w-4/12">
				<p class="m-0">{{ item.order_date }}</p>
			</div>
			<div class="tablecustom-content--content w-4/12">
				<p class="m-0">{{ item.receive_date }}</p>
			</div>
			<div class="tablecustom-content--content w-4/12">
				<p class="m-0">{{ item.total_item_qty }}</p>
			</div>
			<div class="tablecustom-content--content w-4/12">
				<p class="m-0">{{ globalFunction_formatNumberToCurrency(item.unit_cost) }}</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "SubListOfOrderStatusItem",
	props: {
		data: {
			default: [],
		},
	},
};
</script>
<style lang="scss">
.header-title {
	font-weight: bold;
}
.nested-second {
	padding: 15px;
	background-color: #f4f6fc;
}
</style>
