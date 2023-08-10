<template>
	<button
		ref="dropdown"
		v-bind="$attrs"
		class="vs-con-dropdown parent-dropdown"
		:class="buttonClasses"
		type="button"
		v-on="listeners"
	>
		<slot />
	</button>
</template>

<script>
	export default {
		name: "DropdownCustom",
		inheritAttrs: false,
		props: {
			triggerClick: {
				default: false,
				type: Boolean,
			},
			vsTriggerContextmenu: {
				default: false,
				type: Boolean,
			},
			color: {
				default: "primary",
				type: String,
			},
			customContent: {
				default: false,
				type: Boolean,
			},
			closeOnClick: {
				default: false,
				type: Boolean,
			},
			vsDropRight: {
				default: false,
				type: Boolean,
			},
			contentRight: {
				default: false,
				type: Boolean,
			},
			leftParam: {
				default: "0",
				type: String,
			},
			topParam: {
				default: "0",
				type: String,
			},
			buttonClasses: {
				default: "",
				type: String,
			},
			hasSelectElement: {
				default: false,
				type: Boolean,
			},
		},
		data: () => ({
			vsDropdownVisible: false,
			rightx: false,
		}),
		computed: {
			listeners() {
				return {
					...this.$listeners,
					contextmenu: (evt) =>
						this.vsTriggerContextmenu
							? this.clickToogleMenu(evt, true)
							: {},
					click: (evt) =>
						this.vsTriggerContextmenu ? {} : this.clickToogleMenu(evt),
					mouseout: (evt) => this.toggleMenu("out", evt),
					mouseover: (evt) => this.toggleMenu("over", evt),
				};
			},
			leftParameter() {
				return parseInt(this.leftParam);
			},
			topParameter() {
				return parseInt(this.topParam);
			},
		},
		watch: {
			vsDropdownVisible() {
				this.changePositionMenu();
				if (this.vsDropdownVisible) {
					this.$emit("focus");
					document.addEventListener("click", this.clickx);
				} else {
					this.$emit("blur");
				}
			},
		},
		mounted() {
			this.changeColor();
			document.addEventListener("click", this.clickx);
		},
		beforeDestroy() {
			document.removeEventListener("click", this.clickx);
		},
		methods: {
			clickx(evt) {
				let [dropdownMenu] = this.$children.filter((item) => {
					return item.hasOwnProperty("dropdownVisible");
				});
				dropdownMenu.customContent = this.customContent;
				dropdownMenu.triggerClick = this.triggerClick;
				dropdownMenu.vsDropRight = this.vsDropRight;
				dropdownMenu.contentRight = this.contentRight;
				if (
					(this.triggerClick || this.customContent) &&
					this.vsDropdownVisible
					// && !evt.target.closest(".vs-con-dropdown") // custom
				) {
					if (
						evt.target !== this.$refs.dropdown &&
						evt.target.parentNode !== this.$refs.dropdown
					) {
						let parentNode = evt.target.parentNode;
						let dropdown_is_parent = false;
						for (let i = 1; i < 5; i++) {
							if (parentNode !== null) {
								if (parentNode !== this.$refs.dropdown) {
									parentNode = parentNode.parentNode;
								} else {
									dropdown_is_parent = true;
									break;
								}
							} else break;
						}
						if (!dropdown_is_parent) {
							if (
								(!evt.target.closest(".vs-dropdown--menu") &&
									!(
										this.hasSelectElement &&
										(evt.target.closest(
											".select-item-custom--item"
										) ||
											evt.target.closest(
												".select-item-custom--button"
											) ||
											evt.target.closest(
												".select-item-search--container"
											) ||
											evt.target.closest(
												".select-item-custom--check-icon"
											))
									)) ||
								this.closeOnClick
							) {
								dropdownMenu.dropdownVisible = this.vsDropdownVisible = false;
								document.removeEventListener("click", this.clickx);
							}
						}
					}

					// if (
					// 	evt.target !== this.$refs.dropdown &&
					// 	evt.target.parentNode !== this.$refs.dropdown &&
					// 	evt.target.parentNode.parentNode !== this.$refs.dropdown &&
					// 	evt.target.parentNode.parentNode.parentNode !==
					// 		this.$refs.dropdown &&
					// 	evt.target.parentNode.parentNode.parentNode.parentNode !==
					// 		this.$refs.dropdown
					// ) {
					// 	if (
					// 		!evt.target.closest(".vs-dropdown--menu") &&
					// 		!(
					// 			this.hasSelectElement &&
					// 			(evt.target.closest("select-item-custom--item") ||
					// 				evt.target.closest(
					// 					".select-item-custom--button"
					// 				))
					// 		)
					// 	) {
					// 		dropdownMenu.dropdownVisible = this.vsDropdownVisible = false;
					// 		document.removeEventListener("click", this.clickx);
					// 	}
					// }
				}
			},
			changeColor() {
				let child = this.$children;
				child.forEach((item) => {
					if (item.$vnode.tag.indexOf("dropdown") != -1) {
						item.color = this.color;
					}
				});
			},
			changePositionMenu() {
				let [dropdownMenu] = this.$children.filter((item) => {
					return item.hasOwnProperty("dropdownVisible");
				});
				let scrollTopx =
					window.pageYOffset || document.documentElement.scrollTop;
				if (
					this.$refs.dropdown.getBoundingClientRect().top + 300 >=
					window.innerHeight
				) {
					this.$nextTick(() => {
						dropdownMenu.topx =
							this.$refs.dropdown.getBoundingClientRect().top -
							dropdownMenu.$el.clientHeight -
							7 +
							scrollTopx;
						dropdownMenu.notHeight = true;
					});
				} else {
					dropdownMenu.notHeight = false;
					dropdownMenu.topx =
						this.$refs.dropdown.getBoundingClientRect().top +
						this.$refs.dropdown.clientHeight +
						scrollTopx -
						5 +
						this.topParameter;
				}

				this.$nextTick(() => {
					var w =
						window.innerWidth ||
						document.documentElement.clientWidth ||
						document.body.clientWidth;

					if (
						this.$refs.dropdown.getBoundingClientRect().left +
							dropdownMenu.$el.offsetWidth >=
						w - 25
					) {
						this.rightx = true;
					}

					if (
						this.$refs.dropdown.getBoundingClientRect().right <
						dropdownMenu.$el.clientWidth + 25
					) {
						dropdownMenu.leftx = dropdownMenu.$el.clientWidth + 25;
						return;
					}
					if (this.contentRight) {
						dropdownMenu.leftx =
							this.$refs.dropdown.getBoundingClientRect().left +
							dropdownMenu.$el.clientWidth +
							2 * this.$refs.dropdown.clientWidth -
							28 +
							this.leftParameter;
						dropdownMenu.topx =
							this.$refs.dropdown.getBoundingClientRect().top -
							dropdownMenu.$el.clientHeight / 2 +
							scrollTopx +
							2 +
							this.topParameter;
						return;
					}
					dropdownMenu.leftx =
						this.$refs.dropdown.getBoundingClientRect().left +
						(this.vsDropRight
							? dropdownMenu.$el.clientWidth
							: this.$refs.dropdown.clientWidth) +
						this.leftParameter;
				});
			},
			clickToogleMenu(evt) {
				if (evt.type == "contextmenu") {
					evt.preventDefault();
				}
				let [dropdownMenu] = this.$children.filter((item) => {
					return item.hasOwnProperty("dropdownVisible");
				});
				if (this.triggerClick || this.vsTriggerContextmenu) {
					if (
						this.vsDropdownVisible &&
						!evt.target.closest(".vs-dropdown--menu")
					) {
						dropdownMenu.dropdownVisible = this.vsDropdownVisible = false;
					} else {
						dropdownMenu.dropdownVisible = this.vsDropdownVisible = true;
						window.addEventListener("click", () => {
							if (
								!evt.target.closest(".vs-con-dropdown") &&
								!evt.target.closest(".vs-dropdown--menu")
							) {
								dropdownMenu.dropdownVisible = this.vsDropdownVisible = false;
							}
						});
					}
				}
			},
			toggleMenu(typex, evt) {
				let [dropdownMenu] = this.$children.filter((item) => {
					return item.hasOwnProperty("dropdownVisible");
				});
				if (!this.triggerClick && !this.vsTriggerContextmenu) {
					if (typex == "over") {
						dropdownMenu.dropdownVisible = this.vsDropdownVisible = true;
					} else {
						if (
							!evt.relatedTarget.classList.contains(
								"vs-dropdown-menu"
							)
						) {
							dropdownMenu.dropdownVisible = this.vsDropdownVisible = false;
						}
					}
				}
			},
		},
	};
</script>
