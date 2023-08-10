<template>
    <card-custom :title="title" class="mt-10 mb-10">
        <e-charts
            v-if="options.series[0].data.length>0 && !loading"
            class="mt-2"
            :options="options"
            ref="card_chart"
            auto-resize
        />
        <div
            v-else-if="loading"
            class="echarts mt-2 loading-placeholder loading-placeholder__rectangle"
        ></div>
        <div v-else class="echarts__no-data">
            <p class="echarts__no-data-text">No data found.</p>
        </div>
    </card-custom>
</template>

<script>
import ECharts from "vue-echarts";
import "echarts/lib/component/tooltip";
import "echarts/lib/component/legend";
import "echarts/lib/component/title";
import "echarts/lib/chart/pie";
import "echarts/lib/chart/bar";
export default {
    name: "ChartCard",
    components: {
        ECharts
    },
    props: {
        data: {
            default: {}
        },
        loading: {
            default: false,
            type: Boolean
        },
        title: {
            default: "Items Sold",
            type: String
        }
    },
    data() {
        return {
            options: {
                tooltip: {
                    trigger: "item",
                    // formatter: "{b}: {c} ({d}%)"
                    formatter: "{b}"
                },
                legend: {
                    y: "bottom",
                    left: "center",
                    icon: "circle",
                    itemGap: 25,
                    data: []
                },
                series: [
                    {
                        name: "Product Category",
                        type: "pie",
                        center: ["50%", "30%"],
                        label: {
                            show: false,
                            position: "center"
                        },
                        color: [
                            "#1F77B4",
                            "#AEC7E8",
                            "#FF7F0E",
                            "#FFBB78",
                            "#2CA02C",
                            "#98DF8A",
                            "#D6272B",
                            "#FF9896",
                            "#9467BD",
                            "#C5B0D5",
                            "#BC564B",
                            "#C49C94",
                            "#E377C2",
                            "#F7B6D2",
                            "#7F7F7F",
                            "#C7C7C7",
                            "#BCBD22",
                            "#DBD88D",
                            "#17BECF",
                            "#9EDAE5"
                        ],
                        data: []
                    }
                ]
            }
        };
    },
    computed: {
        processedData() {
            var processed_datas = [];
            processed_datas = Object.keys(this.data).map(key => {
                return this.data[key];
            });
            return processed_datas;
        }
    },
    methods: {},
    created() {
        this.processedData.forEach(data => {
            this.options.series[0].data.push({
                value: data.total,
                name: data.group_name
            });
            this.options.legend.data.push(data.group_name);
        });
    }
};
</script>
<style lang="scss">
.echarts {
    width: 500px;
    height: 600px;
    &__no-data {
        height: 40px;
        display: flex;
        justify-content: center;
        &-text {
            font-weight: 400;
        }
    }
}
</style>