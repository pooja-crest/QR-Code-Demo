<template>
	<div ref="table" class="flex flex-col w-full">
		<div v-if="data.length>0 || loading" class="w-full">
			<div class="table-custom-component">
				<div class="table-custom--container">
					<div class="table-custom--content">
						<div ref="table" class="tablecustom my-8 w-full">
							<div class="tablecustom--container flex">
								<VuePerfectScrollbar
									v-if="!loading"
									ref="tableScrollbar"
									class="tablecustom-scrollable--content h-full"
									:settings="scrollbarSettings"
									:style="{'width':(tableWidth*2)+`px`}"
								>
									<div
										class="tablecustom-header--container flex"
										:style="{'width':(columnWidth*headers.length)+`px`}"
									>
										<div
											class="tablecustom-header--content text-right pr-5"
											v-for="(header, index) in headers"
											:key="`header_`+index"
											:style="{'width':(columnWidth)+`px`}"
										>
											<p
												class="tablecustom-header--text uppercase text-xs font-medium flex items-center"
											>{{header}}</p>
										</div>
									</div>
									<div
										class="tablecustom-content--container"
										style="margin-bottom:12px;"
										:style="{'width':(columnWidth*headers.length)+`px`}"
									>
										<template v-for="(d, index) in data">
											<div class="flex" :key="index">
												<div
													v-for="(header, index_data) in headers"
													class="tablecustom-content--content"
													:key="index_data"
													:style="{'width':(columnWidth)+`px`}"
												>
													<div class="tablecustom-content--text text-right">
														<p class="m-0">{{data[header.key]}}</p>
													</div>
												</div>
											</div>
										</template>
									</div>
								</VuePerfectScrollbar>
								<div
									v-else
									class="tablecustom-scrollable--content h-full"
									:style="{'width':(tableWidth*2)+`px`}"
								>
									<div
										class="tablecustom-header--container flex"
										:style="{'width':(columnWidth*totalColumns)+`px`}"
									>
										<div
											class="tablecustom-header--content mx-1"
											v-for="p in totalColumns"
											:key="p"
											:style="{'width':(columnWidth)+`px`}"
										>
											<div
												class="tablecustom-header--text my-3 loading-placeholder loading-placeholder__rectangle"
												style="min-height:14px;"
											></div>
										</div>
									</div>
									<div
										class="tablecustom-content--container"
										style="margin-bottom:12px;"
										:style="{'width':(columnWidth*totalColumns)+`px`}"
									>
										<template v-for="i in totalColumns">
											<div class="flex" :key="i">
												<div
													v-for="j in totalColumns"
													class="tablecustom-content--content"
													:key="j"
													:style="{'width':(columnWidth)+`px`, 'padding':'18px 10px'}"
												>
													<div class="tablecustom-content--text">
														<div class="loading-placeholder loading-placeholder__rectangle"></div>
													</div>
												</div>
											</div>
										</template>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<template v-else>
			<div class="flex w-full justify-center">
				<p>No data found.</p>
			</div>
		</template>

		<!-- <div v-if="pagination && !loading" class="table-custom--footer">
			<div class="w-1/2 flex justify-start">
				<button
					v-if="data.paginations.current_page>data.paginations.first_page"
					@click="goToPage(parseInt(data.paginations.current_page)-1)"
					class="btn btn-outline-primary w-1/5 mr-4"
				>
					<feather-icon icon="ChevronLeftIcon" svgClasses="h-4 w-4"></feather-icon>
					<span class="btn--text custom-text-bold">Previous</span>
				</button>
			</div>
			<div v-if="data.datas.length>=conditions.data_each_page" class="w-1/2 flex justify-end">
				<button
					v-if="data.paginations.current_page<data.paginations.next_page"
					@click="goToPage(parseInt(data.paginations.current_page)+1)"
					class="btn btn-outline-primary w-1/5"
				>
					<span class="btn--text custom-text-bold">Next</span>
					<feather-icon icon="ChevronRightIcon" svgClasses="h-4 w-4"></feather-icon>
				</button>
			</div>
		</div>-->
	</div>
</template>

<script>
	import VuePerfectScrollbar from "vue-perfect-scrollbar";
	export default {
		name: "CustomTable",
		components: { VuePerfectScrollbar },
		props: {
			data: {
				default: [],
				type: Array,
				required: true,
			},
			// dataKeys: {
			// 	default: [],
			// 	type: Array,
			// 	required: true,
			// },
			headers: {
				default: [],
				type: Array,
				required: true,
			},
			loading: {
				default: false,
				type: Boolean,
			},
			totalColumnDivider: {
				default: 4,
				type: Number,
			},
		},
		data() {
			return {
				conditions: {
					table_maxwidth: 0,
				},
				scrollbarSettings: {
					maxScrollbarLength: 30,
					wheelSpeed: 0.5,
				},
			};
		},
		computed: {
			columnWidth() {
				let columnWidth =
					this.conditions.table_maxwidth / this.totalColumnDivider;
				if (columnWidth < 150) columnWidth = 150;
				return columnWidth;
			},
			pinnedHeaders() {
				return this.headers.filter((header) => header.pinned == true);
			},
			tableWidth() {
				return this.conditions.table_maxwidth / 3;
			},
			totalColumns() {
				return this.headers.length;
			},
		},
		mounted() {
			this.conditions.table_maxwidth = this.$refs.table.clientWidth;
		},
	};
</script>

<style lang="scss">
</style>
