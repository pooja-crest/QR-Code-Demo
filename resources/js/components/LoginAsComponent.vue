<template>
	<card-custom class="loginas mt-10 mx-auto">
		<div class="loginas__text">
			Logged in as '
			<b>{{user}}</b>'
		</div>
		<div class="loginas__button">
			<button @click="exitLoginAs()" class="btn btn-outline-primary w-1/5 mr-4">
				<feather-icon icon="UserIcon" svgClasses="h-4 w-4"></feather-icon>
				<span class="btn--text custom-text-bold pl-2">Exit login as</span>
			</button>
		</div>
	</card-custom>
</template>

<script>
	import userApi from "@/apis/userApi";
	export default {
		name: "LoginAsComponent",
		mixins: [userApi],
		props: {
			user: {
				default: "-",
				type: String,
			},
		},
		methods: {
			exitLoginAs() {
				let loading = this.$loading.show({
					container: null,
					color: "var(--color-primary)",
				});
				this.userApi_getByCode(this.authenticatedUser.real_user_code)
					.then((response) => {
						if (response.success) {
							var user = response.data;
							this.$store.commit("UPDATE_USER_INFO", response.data);
							this.$store.state.activeUser = user;

							this.$notify({
								group: "notification",
								type: "success",
								title: "Success",
								text: "Successfully exit login as",
							});
							this.$router.push("/orders");
						} else {
							this.$notify({
								group: "notification",
								type: "error",
								title: "Failed",
								text: "Failed to exit login as, please re-login",
							});
						}
					})
					.finally(() => loading.hide());
			},
		},
	};
</script>

<style scoped lang="scss">
	.loginas {
		// width: 1144px;
		width: 90%;
		display: flex;
		&__text {
			flex-grow: 1;
			display: flex;
			align-items: center;
			font-size: 20px;
		}
		&__button {
		}
	}
</style>
