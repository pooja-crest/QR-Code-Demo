<script>
	export default {
		name: "IconCustom",
		functional: true,
		props: {
			icon: {
				type: String,
				default: ""
			},
			useBadge: {
				type: Boolean,
				default: false
			},
			classes: {
				type: String,
				default: ""
			},
			styles: {
				type: String,
				default: ""
			}
		},
		render(createElement, { props }) {
			let svgHTML = "";
			let badgeSpan = `<span class="icon-custom--badge bg-danger h-1 w-1 absolute rounded-full"></span>`;
			try {
				if (props.useBadge) svgHTML += badgeSpan;
				svgHTML += require(`!html-loader!../../assets/icons/icon-${props.icon}.svg`);
			} catch (e) {
				console.warn(
					`Unable to load "icon-${props.icon}.svg" icon. Verify it exists in the icons directory.`,
					e
				);
			}
			return createElement("span", {
				class: `icon-custom icon-custom-${props.icon} ${props.classes}`,
				style: `${props.styles}`,
				domProps: {
					innerHTML: svgHTML
				}
			});
		}
	};
</script>

<style>
	.icon-custom {
		display: inline-block;
	}
</style>
