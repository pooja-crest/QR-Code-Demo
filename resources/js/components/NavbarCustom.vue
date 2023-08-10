<template>
	<div ref="navbarcustom" class="flex navbar-custom">
		<div class="navbar-custom-title hidden lg:inline">
			<router-link class="navbar-custom-title--text" :to="this.logoRoute" exact>
				<img src="@assets/images/logo/elco_logo_vertical.png" alt height="28" />
			</router-link>
		</div>
		<div class="navbar-custom-menu flex flex-1 lg:ml-auto ml-4 lg:justify-center justify-start">
			<div class="navbar-custom-menu--container mr-8" v-for="(menu, index) in menus" :key="index" :index="index">
				<router-link class="md:pr-2 pr-0" :to="menu.url" :class="[{ 'router-link-active': active_link }]" exact>
					<icon-custom classes="navbar-custom-menu--icon h-6 w-6" :icon="menu.icon"></icon-custom>
					<span class="navbar-custom-menu--text relative lg:inline hidden bottom-6px ml-10px ">{{ menu.name }}</span>
					<slot></slot>
				</router-link>
			</div>
		</div>
		<div ref="navbarcustom_profile" class="navbar-custom-me flex items-center justify-end">
			<dropdown-custom v-if="false" custom-content trigger-click class="cursor-pointer mr-4">
				<feather-icon icon="BellIcon" class="cursor-pointer icon-default-color" :badge="notifications.totals.unread"></feather-icon>
				<dropdown-menu-custom
					ref="notificationdropdown"
					class="vs-dropdown-menu--nospacing notification-container fixed"
					style="min-width: 282px; top: 80px"
					caret-styles="right:8px;"
					:disable-body-scroll="notifications.data.length > 0"
				>
					<VuePerfectScrollbar ref="notificationScrollbar" class="notification-scroll-area p-0" :settings="scrollbarSettings" style="z-index: 12">
						<ul>
							<template v-if="notifications.data.length > 0">
								<li v-for="(notification, index) in notifications.data" :key="index" class="notification-message--container flex justify-between p-4 cursor-pointer relative">
									<div class="flex">
										<div class="w-1/6 p-0 mr-4">
											<div v-if="notification.status == 'unread'" class="relative text-center rounded-full">
												<span class="notification-list-icon-badge bg-primary absolute rounded-full"></span>
											</div>
											<div class="relative text-center top-6">
												<icon-custom classes="notification-icon rounded-full h-8 w-8" :icon="notification_icons[notification.category]" :use-badge="false"></icon-custom>
											</div>
										</div>

										<div class="vx-col w-5/6">
											<span class="block text-xs notification-message--title text-spacing-lg font-semibold uppercase">{{ notification.category }}</span>
											<small class="block mt-2 text-xs notification-message--text">{{ notification.message }}</small>
											<small class="block mt-2 text-xs whitespace-no-wrap notification-message--elapsed-time">{{ elapsedTime(notification.created_at) }}</small>
										</div>
									</div>
								</li>
							</template>
							<li v-else class="notification-message--container no-hover flex justify-between p-4 relative">
								<div class="flex">
									<div class="vx-col w-full">
										<span>There's no notification found.</span>
									</div>
								</div>
							</li>
						</ul>
					</VuePerfectScrollbar>
					<template v-if="notifications_filter.load_more_button">
						<div v-if="!loadings.notifications" @click="loadMoreNotifications()" class="notification-footer w-full bottom-0 px-0 py-4 text-center cursor-pointer">
							<span class="notification-footer--text text-spacing-lg font-medium">
								<template>LOAD MORE</template>
							</span>
						</div>
						<div v-else class="notification-footer w-full bottom-0 px-0 py-4 text-center">
							<span class="notification-footer--text text-spacing-lg font-medium">
								<feather-icon icon="LoaderIcon" class="loading h-4 w-4"></feather-icon>
							</span>
						</div>
					</template>
				</dropdown-menu-custom>
			</dropdown-custom>
			<dropdown-custom v-if="authenticatedUser" :key="authenticatedUser.updated_at" custom-content trigger-click close-on-click class="cursor-pointer">
				<div class="image-container">
					<img class="rounded-full" :src="`/images/${profilePicture}`" alt="profile-picture" width="40" height="40" />
				</div>
				<dropdown-menu-custom class="profile-dropdown--container fixed" style="min-width: 210px; top: 80px" caret-styles="right:16px;">
					<ul>
						<li class="flex px-10px">
							<span>
								<div>{{ authenticatedUser.name }}</div>
								<div class="letter-spacing-lg text-xs text-secondary">{{ authenticatedUser.code }}</div>
								<div class="letter-spacing-lg text-xs text-secondary capitalize">{{ authenticatedUser.role.replace('_', ' ') }}</div>
							</span>
						</li>
						<template v-if="authenticatedUser.role == 'user'">
							<divider-custom class="mt-4"></divider-custom>
							<li class="flex px-10px py-10px">
								<span class="cursor-pointer hover:text-primary" @click="$router.push('/change_password')">Change Password</span>
							</li>
						</template>
						<divider-custom class="mt-4"></divider-custom>
						<li class="flex px-10px py-10px">
							<span class="cursor-pointer hover:text-danger" @click="signOut()">Sign Out</span>
						</li>
					</ul>
				</dropdown-menu-custom>
			</dropdown-custom>
			<div v-else class="flex flex-nowrap">
				<router-link class="navbar-custom-title--text" to="/auth/login" exact style="text-decoration:none">
					<button class="btn btn-outline-primary">
						<span class="btn--text custom-text-bold" style="text">
							Login
						</span>
					</button>
				</router-link>
				<router-link class="navbar-custom-title--text ml-4" to="/auth/register" exact style="text-decoration:none">
					<button class="btn btn-outline-primary">
						<span class="btn--text custom-text-bold" style="text">
							Register
						</span>
					</button>
				</router-link>
			</div>
		</div>
	</div>
</template>

<script>
import authenticationApi from "@/apis/authenticationApi";
import VuePerfectScrollbar from "vue-perfect-scrollbar";
import {adminPurchaser,admin,viewer,display,orderTracking,receiving} from "./NavbarCustomData";

export default {
	name: "NavbarCustom",
	mixins: [authenticationApi],
	components: {
		VuePerfectScrollbar,
	},
	data() {
		return {
			active_link: false,
			loadings: {
				notifications: false,
			},
			scrollbarSettings: {
				maxScrollbarLength: 30,
			},
			notification_icons: {
				transactions: "coins",
				billing: "coins",
				support: "coins",
			},
			menus: [],
            logoRoute: "/",
			notifications: {
				totals: {
					unread: 0,
					read: 0,
				},
				data: {},
			},
			notifications_filter: {
				page: 1,
				load_more_button: true,
			},
		};
	},
	computed: {
		profilePicture() {
			return "user.png";
		},
	},
	methods: {
		elapsedTime(datetime) {
			let x = new Date(datetime);
			let now = new Date();
			var timeDiff = now - x;
			timeDiff /= 1000;

			var seconds = Math.round(timeDiff);
			timeDiff = Math.floor(timeDiff / 60);

			var minutes = Math.round(timeDiff % 60);
			timeDiff = Math.floor(timeDiff / 60);

			var hours = Math.round(timeDiff % 24);
			timeDiff = Math.floor(timeDiff / 24);

			var days = Math.round(timeDiff % 365);
			timeDiff = Math.floor(timeDiff / 365);

			var years = timeDiff;

			if (years > 0) {
				return years + (years > 1 ? " Years " : " Year ") + "ago";
			} else if (days > 0) {
				return days + (days > 1 ? " Days " : " Day ") + "ago";
			} else if (hours > 0) {
				return hours + (hours > 1 ? " Hrs " : " Hour ") + "ago";
			} else if (minutes > 0) {
				return minutes + (minutes > 1 ? " Mins " : " Min ") + "ago";
			} else if (seconds > 0) {
				return seconds + (seconds > 1 ? `${seconds} sec ago` : "just now");
			}

			return "Just Now";
		},
		loadMoreNotifications() {
			this.loadings.notifications = true;
			this.notifications_filter.page++;
			this.notifications_getAll({ page: this.notifications_filter.page })
				.then(({ data }) => {
					data.forEach((notification) => {
						this.notifications.data.push(notification);
					});
					if (data.length < 10) {
						this.notifications_filter.load_more_button = false;
					}
				})
				.finally(() => (this.loadings.notifications = false));
		},
		signOut() {
			this.authenticationApi_logout().then(({ data }) => {
				this.menus = [];
				localStorage.removeItem(process.env.MIX_USER_SESSION_VARIABLE_NAME);
				this.$store.state.activeUser = {};
				this.$router.push("/auth/login").catch(() => {});
			});
		},
	},
	created() {
		if (!this.authenticatedUser) {
			this.menus = [];
			return;
		}

		if(["admin"].includes(this.authenticatedUser.role)){
			this.logoRoute = "/products";
			this.menus = admin();
		}else if(["purchaser"].includes(this.authenticatedUser.role)){
			this.logoRoute = "/products";
			this.menus = adminPurchaser();
		}else if(["viewer"].includes(this.authenticatedUser.role)){
			this.logoRoute = "/products";
			this.menus = viewer();
		}else if(["receiving"].includes(this.authenticatedUser.role)){
			this.logoRoute = "/products";
			this.menus = receiving();
		}else if(["display"].includes(this.authenticatedUser.role)){
			this.logoRoute = "/products";
			this.menus = display();
		}else if(["order_tracking"].includes(this.authenticatedUser.role)){
			this.logoRoute = "/products";
			this.menus = orderTracking();
		}

		
	},
};
</script>

<style scoped lang="scss"></style>
