<template>
	<div class="custom-component input-custom">
		<div class="input-custom--container">
			<input type="text" :class="`input-custom--input`+inputClass" v-model="input" />
			<span v-if="input==''" class="input-custom--placeholder">Search transactions...</span>
			<feather-icon class="input-custom--icon h-4 w-4" icon="SearchIcon"></feather-icon>
			<dropdown-custom
				has-select-element
				custom-content
				trigger-click
				class="input-custom-dropdown--container cursor-pointer"
			>
				<feather-icon
					:class="{'rotate180':dropdownActive}"
					@click="changeDropdownActive"
					icon="ChevronDownIcon"
					class="input-custom-dropdown--icon cursor-pointer h-4 w-4"
				></feather-icon>
				<dropdown-menu-custom
					no-caret
					class="input-custom-dropdown-menu--container"
					style="margin-top:5px;"
					:style="{'width':widthx+'px'}"
				>
					<slot name="dropdown-content"></slot>
				</dropdown-menu-custom>
			</dropdown-custom>
		</div>
	</div>
</template>

<script>
	export default {
		name: "InputCustom",
		props: {
			dropdown: {
				default: false,
				type: Boolean
			},
			inputClass: {
				default: "",
				type: String
			}
		},
		data() {
			return {
				input: "",
				dropdownActive: false,
				widthx: 0
			};
		},
		mounted() {
			this.widthx = this.$el.clientWidth;
		},
		methods: {
			changeDropdownActive() {
				this.dropdownActive = !this.dropdownActive;
			}
		},
		watch: {
			input() {}
		}
	};
</script>

<style scoped lang="scss">
</style>
