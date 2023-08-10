import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const router = new Router({
	mode: "hash",
	base: "/",
	routes: [
		// =============================================================================
		// MAIN LAYOUT ROUTES
		// =============================================================================
		{
			path: "",
			component: () => import("./views/layouts/main/Main.vue"),
			children: [
				{ path: "", redirect: "/orders" },
				{
					path: "/products",
					name: "products",
					component: () => import("./views/pages/Products/List.vue"),
				},
				{
					path: "/vendors",
					name: "vendors",
					component: () => import("./views/pages/Vendors/VendorList.vue"),
				},
				{
					path: "/users",
					name: "users",
					component: () => import("./views/pages/Users/UserList.vue"),
				}
      ],
		},
		// =============================================================================
		// FULL PAGE LAYOUTS
		// =============================================================================
		{
			path: "",
			component: () => import("./views/layouts/full/FullPage.vue"),
			children: [
				{ path: "", redirect: "/auth/login" },
				{
					path: "/auth",
					component: () => import("./views/pages/Auth.vue"),
					children: [
						{
							path: "/auth/forgot-password",
							name: "forgot-password",
							component: () => import("./views/pages/Auth/ForgotPassword.vue"),
						},
						{
							path: "/auth/login",
							name: "login",
							component: () => import("./views/pages/Auth/Login.vue"),
						},
						{
							path: "/auth/register",
							name: "register",
							component: () => import("./views/pages/Auth/Register.vue"),
						},
						{
							path: "/auth/register-complete",
							name: "register-complete",
							component: () => import("./views/pages/Auth/RegisterComplete.vue"),
						},
						{
							path: "/auth/reset-password",
							name: "reset-password",
							component: () => import("./views/pages/Auth/ResetPassword.vue"),
						},
					],
				},
				{
					path: "/callback",
					name: "callback",
					component: () => import("./views/pages/Callback.vue"),
				},
			],
		},
		// Redirect to 404 page, if no match found
		// {
		//     path: '*',
		//     redirect: '/pages/error-404'
		// }
	],
});

router.beforeEach((to, from, next) => {
	if (
		to.path === "/auth/login" ||
		to.path === "/callback" ||
		to.path === "/auth/forgot-password" ||
		to.path === "/auth/register" ||
		to.path === "/auth/register-complete" ||
		to.path === "/auth/reset-password" ||
		localStorage.getItem(process.env.MIX_USER_SESSION_VARIABLE_NAME) !== null
	) {
		if (
			to.path === "/auth/login" &&
			to.path === "/callback" &&
			to.path === "/auth/forgot-password" &&
			to.path === "/auth/register" &&
			to.path === "/auth/register-complete" &&
			to.path === "/auth/reset-password" &&
			localStorage.getItem(process.env.MIX_USER_SESSION_VARIABLE_NAME) !== null
		) {
			router.push({ path: "/" });
		} else {
			return next();
		}
	} else {
		router.push({ path: "/auth/login" });
	}
});

export default router;
