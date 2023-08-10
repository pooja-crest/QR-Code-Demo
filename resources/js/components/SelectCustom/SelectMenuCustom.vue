<template>
	<div
		ref="selectmenu"
		v-if="dropdownVisible"
		class="select-menu-custom--container"
		:style="{'left':leftx+'px','top':topx+'px','width':widthx+'px'}"
	>
		<div v-if="search" class="select-item-search--container">
			<input
				ref="selectmenu_search"
				class="w-full select-item-search--input"
				type="text"
				:placeholder="$parent.searchPlaceholder"
				v-model="search_param"
			/>
			<feather-icon class="select-item-search--icon h-4 w-4" icon="SearchIcon"></feather-icon>
		</div>
		<ul class="select-item-custom--container">
			<select-item-custom
				:multiple="multiple"
				:key="index"
				:value="item.value"
				:text="item.text"
				v-for="(item,index) in searchedData"
			></select-item-custom>
		</ul>
	</div>
</template>

<script>
	export default {
		name: "SelectMenuCustom",
		props: {
			data: {
				default: null
			},
			selectedData: {
				default: 0
			},
			multiple: {
				default: false,
				type: Boolean
			},
			search: {
				default: false,
				type: Boolean
			},
			insertToParent: {
				default: false,
				type: Boolean
			}
		},
		data() {
			return {
				dropdownVisible: false,
				leftx: 0,
				topx: 0,
				rightx: true,
				widthx: 0,
				search_param: "",
				selected: null
			};
		},
		computed: {
			searchedData() {
				return this.data.filter(item =>
					item.text
						.toLowerCase()
						.includes(this.search_param.toLowerCase())
				);
			},
			filteredDatas() {
				if (this.selected == null) this.selected = this.selectedData;
				return this.selected;
			}
		},
		watch: {
			dropdownVisible: function(is_visible) {
				if (is_visible) {
					if (this.search) {
						this.$nextTick(() => {
							this.$refs.selectmenu_search.focus();
						});
						this.search_param = "";
					}
				}
			}
		},
		mounted() {
			this.insertBody();
			// if (this.multiple || this.search){
			document.addEventListener("click", this.clickx);
			// }
		},
		beforeDestroy() {
			document.removeEventListener("click", this.clickx);
		},
		methods: {
			insertBody() {
				let elp = this.$el;
				this.parentNode = this.$el.parentNode;
				if (!this.insertToParent) {
					document.body.insertBefore(elp, document.body.firstChild);
				}
			},
			clickx(evt) {
				if (this.dropdownVisible) {
					if (
						evt.target !== this.$refs.selectcustom &&
						evt.target.parentNode !== this.$refs.selectcustom &&
						evt.target.parentNode.parentNode !== this.$refs.selectcustom
					) {
						if (!evt.target.closest(".select-item-custom--container")) {
							// this.dropdownVisible = false;
							document.removeEventListener("click", this.clickx);
						}
					}
				}
			}
		}
	};
</script>

<style scoped lang="scss">
	.select-menu-custom--container {
		min-width: 200px;
		z-index: 102;
		position: absolute;
		height: auto;
		width: auto;
		-webkit-transform: translate(-100%);
		transform: translate(-100%);
		background: white;
		box-sizing: border-box;
		border: 1px solid rgba(46, 91, 255, 0.08);
		border-radius: 1px;
		box-shadow: 0 10px 20px 0 rgba(46, 91, 255, 0.07);
		&:focus {
			outline: none;
		}
		.select-item-search--container {
			padding: 10px 16px;
			.select-item-search--input {
				box-sizing: border-box;
				border: 1px solid #e0e7ff;
				border-radius: 5px;
				background-color: rgba(224, 231, 255, 0.2);
				font-family: Rubik;
				font-size: 15px;
				line-height: 18px;
				padding: 10px 32px 10px 16px;
				color: var(--color-text);
				&::placeholder {
					color: var(--color-text-secondary);
				}
			}
			.select-item-search--icon {
				position: absolute;
				z-index: 100;
				top: 10px;
				right: 28px;
				padding: 12px 0px 12px 16px;
				color: var(--color-text-secondary);
			}
		}
		.select-item-custom--container {
			padding: 0px;
			margin: 0px;
		}
	}
</style>
