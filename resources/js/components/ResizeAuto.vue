<script>
	export default {
		name: "ResizeAuto",
		methods: {
			resize(event) {
				let initial_height = 44;
				event.target.style.height = `${initial_height}px`;
				event.target.style.height = `${event.target.scrollHeight}px`;
			}
		},
		mounted() {
			this.$nextTick(() => {
				this.$el.setAttribute("style", `height:${this.$el.scrollHeight}px`);
			});
		},
		render() {
			return this.$scopedSlots.default({
				resize: this.resize
			});
		}
	};
</script>>