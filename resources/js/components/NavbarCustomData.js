
const adminPurchaser = () => {
	let menuArr = [
		{
			url: "/new-order",
			name: "New Order",
			slug: "new-order",
			icon: "plus",
		},
		{
			url: "/orders",
			name: "Purchase Orders",
			slug: "orders",
			icon: "dashboard",
		},
		{
			url: "/items",
			name: "Items",
			slug: "Items",
			icon: "dashboard",
		},
		{
			url: "/vendors",
			name: "Vendors",
			slug: "vendors",
			icon: "user",
		},
		{
			url: "/shipments",
			name: "Shipments",
			slug: "shipments",
			icon: "dashboard",
		},
		{
			url: "/receives",
			name: "Receive",
			slug: "receives",
			icon: "dashboard",
		}
	];
	return menuArr;
}

const admin = ()=>{
	let menuArr = [
		// {
		// 	url: "/purchased",
		// 	name: "Purchased",
		// 	slug: "purchased",
		// 	icon: "dashboard",
		// },
		// {
		// 	url: "/users",
		// 	name: "Users",
		// 	slug: "users",
		// 	icon: "user",
		// },
		{
			url: "/products",
			name: "Products",
			slug: "products",
			icon: "dashboard",
		}
	];

	// return adminPurchaser().concat(menuArr);
	return menuArr;
}

const viewer = ()=>{
	let menuArr = [
		{
			url: "/orders",
			name: "Purchase Orders",
			slug: "orders",
			icon: "dashboard",
		}
	];

	return menuArr;
}

const receiving = ()=>{
	let menuArr = [
		{
			url: "/receives",
			name: "Receive",
			slug: "receives",
			icon: "dashboard",
		}
	];

	return menuArr;
}

const display = ()=>{
	let menuArr = [
		{
			url: "/display-shipments",
			name: "Shipments",
			slug: "display-shipments",
			icon: "dashboard",
		}
	];

	return menuArr;
}

const orderTracking = ()=>{
	let menuArr = [
		{
			url: "/orders-status-report",
			name: "Order Status Report",
			slug: "orders-status-report",
			icon: "dashboard",
		},
		{
			url: "/shipments",
			name: "Shipments",
			slug: "shipments",
			icon: "dashboard",
		}
	];

	return menuArr;
}

export { 
	adminPurchaser,
	admin,
	viewer,
	receiving,
	display,
	orderTracking
}