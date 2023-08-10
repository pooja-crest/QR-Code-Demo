<template>
	<VuePerfectScrollbar
		ref="modalScrollbar"
		class="modalcustom--container fixed w-full p-0 h-screen"
		:settings="scrollbarSettings"
		v-if="$parent[showVariable]"
	>
		<a
			@click="$parent[showVariable]=false"
			class="modalcustom--close custom-text-bold fixed flex justify-end uppercase text-color-lighter items-center"
		>
			Close
			<feather-icon class="ml-1" icon="XIcon" svgClasses="text-icon h-6 w-6"></feather-icon>
		</a>
		<div class="modalcustom-content--container flex w-full pt-20">
			<div class="w-3/5 mx-auto">
				<div class="w-full">
					<div class="w-full">
						<span class="text-heading font-light">{{title}}</span>
					</div>
					<slot name="content"></slot>
				</div>
			</div>
		</div>

		<slot name="footer"></slot>
	</VuePerfectScrollbar>
</template>

<script>
	import VuePerfectScrollbar from "vue-perfect-scrollbar";

	export default {
		name: "ModalCustom",
		components: {
			VuePerfectScrollbar
		},
		props: {
			showVariable: {
				default: "",
				type: String
			},
			title: {
				default: "",
				type: String
			},
			subtitle: {
				default: "",
				type: String
			}
		},
		data() {
			return {
				scrollbarSettings: {
					maxScrollbarLength: 30,
					wheelSpeed: 0.5
				}
			};
		},
		mounted() {
			this.insertBody();
		},
		methods: {
			insertBody() {
				let elp = this.$el;
				this.parentNode = this.$el.parentNode;
				document.body.insertBefore(elp, document.body.firstChild);
			}
		},
		watch: {}
	};
</script>

<style scoped lang="scss">
	.modalcustom--container {
		z-index: 301;
		background: var(--color-base);
		position: fixed;
		margin: auto;
		// max-height: 80%;
		.modalcustom--close {
			right: 120px;
			top: 44px;
		}
		.modalcustom-content--container {
			min-height: 75%;
		}
		.modalcustom-footer--container {
		}
	}
</style>
