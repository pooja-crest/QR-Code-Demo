<template>
    <card-custom :title="title" class="mt-10">
        <div class="flex flex-col w-full">
            <div class="w-full mb-2 mt-8 flex">
                <div class="flex flex-1">
                    <input
                        type="text"
                        class="input w-full"
                        :placeholder="showBy == 'user' ? 'Search REP name' : 'Search customer name or number'"
                        v-model="inputs.filters.search"
                        :class="[inputs.filters.search == '' ? 'input-empty' : '']"
                        v-on:keyup.enter="searchData()"
                    />
                </div>
                <div class>
                    <button @click="searchData()" class="btn btn-primary ml-5" :class="[inputs.filters.search == '' ? 'disabled' : '']">
                        <span class="btn--text custom-text-bold">
                            <template>Search</template>
                        </span>
                    </button>
                </div>
                <div v-if="conditions.search_active" class>
                    <button @click="searchData(false)" class="btn btn-outline-danger ml-5">
                        <span class="btn--text custom-text-bold">
                            <template>Clear</template>
                        </span>
                    </button>
                </div>
            </div>
            <div v-if="!disableSort" class="w-full mb-2 mt-8 flex justify-end">
                <div class="flex w-1/2 items-center justify-end">
                    <div class="w-1/6 mr-2">
                        <span>Sorting</span>
                    </div>
                    <div class="w-1/3 mr-2">
                        <select-custom
                            :key="inputs.sorts.by"
                            ref="sortbyselect"
                            input-class="w-full"
                            input-style="padding:10px 16px;background-color:#FFFFFF"
                            :data="variables.sorts"
                            menu-style="z-index:302!important"
                            v-model="inputs.sorts.by"
                        ></select-custom>
                    </div>
                    <div class="w-1/3">
                        <select-custom
                            :key="inputs.sorts.direction"
                            ref="sortdirectionselect"
                            input-class="w-full"
                            input-style="padding:10px 16px;background-color:#FFFFFF"
                            :data="variables.sort_directions"
                            menu-style="z-index:302!important"
                            v-model="inputs.sorts.direction"
                        ></select-custom>
                    </div>
                </div>
            </div>
            <div class="w-full">
                <div v-if="data.datas.length > 0 || loading" class="w-full">
                    <div class="table-custom-component">
                        <div class="table-custom--container">
                            <div class="table-custom--content">
                                <div ref="table" class="tablecustom my-8 w-full">
                                    <div class="tablecustom--container flex">
                                        <template v-if="showBy == 'customer'">
                                            <div class="tablecustom-pinned--content" :style="{ width: columnWidth * 2 + `px` }">
                                                <div class="tablecustom-header--container w-full">
                                                    <div class="tablecustom-header--content">
                                                        <p
                                                            v-if="!disableSort && false"
                                                            class="tablecustom-header--text uppercase text-xs font-medium cursor-pointer flex items-center"
                                                            @click="sort('customer_name')"
                                                        >
                                                            Cust Name
                                                            <template>
                                                                <feather-icon
                                                                    class="text-danger input-custom--icon h-4 w-4 ml-2"
                                                                    :icon="
                                                                        sortBy == 'customer_name'
                                                                            ? sortDirection == 'asc'
                                                                                ? 'ChevronDownIcon'
                                                                                : 'ChevronUpIcon'
                                                                            : 'SlidersIcon'
                                                                    "
                                                                ></feather-icon>
                                                            </template>
                                                        </p>
                                                        <p v-else class="tablecustom-header--text uppercase text-xs font-medium flex items-center">
                                                            Cust Name
                                                        </p>
                                                    </div>
                                                </div>
                                                <div class="tablecustom-content--container">
                                                    <template v-if="!loading">
                                                        <template>
                                                            <div
                                                                v-if="data.totals && showTotal"
                                                                class="tablecustom-content--content flex"
                                                                key="data_total_length"
                                                            >
                                                                <div class="tablecustom-content--text">
                                                                    <p class="m-0">
                                                                        <b>TOTAL</b>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <template v-for="(sale, index) in dataReports">
                                                                <div class="tablecustom-content--content flex" :key="`data_` + index">
                                                                    <div class="tablecustom-content--text">
                                                                        <p class="m-0">
                                                                            <router-link :to="`/customers/${sale.customer_id}`">{{
                                                                                sale.customer_name
                                                                            }}</router-link>
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </template>
                                                        </template>
                                                    </template>
                                                    <template v-else>
                                                        <div v-for="i in totalColumns" class="tablecustom-content--content flex" :key="i">
                                                            <div class="tablecustom-content--text">
                                                                <div class="m-0 loading-placeholder loading-placeholder__rectangle"></div>
                                                            </div>
                                                        </div>
                                                    </template>
                                                </div>
                                            </div>
                                            <div class="tablecustom-pinned--content" :style="{ width: columnWidth + `px` }">
                                                <div class="tablecustom-header--container w-full">
                                                    <div class="tablecustom-header--content">
                                                        <p
                                                            v-if="!disableSort && false"
                                                            class="tablecustom-header--text uppercase text-xs font-medium cursor-pointer flex items-center"
                                                            @click="sort('customer_id')"
                                                        >
                                                            Cust #
                                                            <template>
                                                                <feather-icon
                                                                    class="text-danger input-custom--icon h-4 w-4 ml-2"
                                                                    :icon="
                                                                        sortBy == 'customer_id'
                                                                            ? sortDirection == 'asc'
                                                                                ? 'ChevronDownIcon'
                                                                                : 'ChevronUpIcon'
                                                                            : 'SlidersIcon'
                                                                    "
                                                                ></feather-icon>
                                                            </template>
                                                        </p>
                                                        <p v-else class="tablecustom-header--text uppercase text-xs font-medium flex items-center">
                                                            Cust #
                                                        </p>
                                                    </div>
                                                </div>
                                                <div class="tablecustom-content--container">
                                                    <template v-if="!loading">
                                                        <template>
                                                            <div
                                                                v-if="data.totals && showTotal"
                                                                class="tablecustom-content--content flex"
                                                                key="data_empty"
                                                            >
                                                                <div class="tablecustom-content--text">
                                                                    <p class="m-0 h-5"></p>
                                                                </div>
                                                            </div>
                                                            <template v-for="(sales_report, index) in dataReports">
                                                                <div class="tablecustom-content--content flex" :key="`data_` + index">
                                                                    <div class="tablecustom-content--text">
                                                                        <p class="m-0">
                                                                            <router-link :to="`/customers/${sales_report.customer_id}`">{{
                                                                                sales_report.customer_id
                                                                            }}</router-link>
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </template>
                                                        </template>
                                                    </template>
                                                    <template v-else>
                                                        <div v-for="i in totalColumns" class="tablecustom-content--content flex" :key="i">
                                                            <div class="tablecustom-content--text">
                                                                <div class="m-0 loading-placeholder loading-placeholder__rectangle"></div>
                                                            </div>
                                                        </div>
                                                    </template>
                                                </div>
                                            </div>
                                            <div
                                                v-if="showUserCode && showRepCode"
                                                class="tablecustom-pinned--content"
                                                :style="{ width: columnWidth + `px` }"
                                            >
                                                <div class="tablecustom-header--container w-full">
                                                    <div class="tablecustom-header--content">
                                                        <p class="tablecustom-header--text uppercase text-xs font-medium flex items-center">
                                                            REP Code
                                                        </p>
                                                    </div>
                                                </div>
                                                <div class="tablecustom-content--container">
                                                    <template v-if="!loading">
                                                        <template>
                                                            <div
                                                                v-if="data.totals && showTotal"
                                                                class="tablecustom-content--content flex"
                                                                key="data_empty"
                                                            >
                                                                <div class="tablecustom-content--text">
                                                                    <p class="m-0 h-5"></p>
                                                                </div>
                                                            </div>
                                                            <template v-for="(sales_report, index) in dataReports">
                                                                <div class="tablecustom-content--content flex" :key="`data_` + index">
                                                                    <div class="tablecustom-content--text">
                                                                        <p class="m-0">
                                                                            <span
                                                                                @click="loginAs(sales_report.user_code)"
                                                                                class="cursor-pointer text-primary underline"
                                                                                >{{ sales_report.user_code }}</span
                                                                            >
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </template>
                                                        </template>
                                                    </template>
                                                    <template v-else>
                                                        <div v-for="i in totalColumns" class="tablecustom-content--content flex" :key="i">
                                                            <div class="tablecustom-content--text">
                                                                <div class="m-0 loading-placeholder loading-placeholder__rectangle"></div>
                                                            </div>
                                                        </div>
                                                    </template>
                                                </div>
                                            </div>
                                            <div v-if="showItemNumber" class="tablecustom-pinned--content" :style="{ width: columnWidth + `px` }">
                                                <div class="tablecustom-header--container w-full">
                                                    <div class="tablecustom-header--content">
                                                        <p class="tablecustom-header--text uppercase text-xs font-medium flex items-center">
                                                            Item Number
                                                        </p>
                                                    </div>
                                                </div>
                                                <div class="tablecustom-content--container">
                                                    <template v-if="!loading">
                                                        <template>
                                                            <div
                                                                v-if="data.totals && showTotal"
                                                                class="tablecustom-content--content flex"
                                                                key="data_empty"
                                                            >
                                                                <div class="tablecustom-content--text">
                                                                    <p class="m-0 h-5"></p>
                                                                </div>
                                                            </div>
                                                            <template v-for="(sales_report, index) in dataReports">
                                                                <div class="tablecustom-content--content flex" :key="`data_` + index">
                                                                    <div class="tablecustom-content--text">
                                                                        <p class="m-0">
                                                                            <span
                                                                                @click="loginAs(sales_report.item_id)"
                                                                                class="cursor-pointer text-primary underline"
                                                                                >{{ sales_report.item_id }}</span
                                                                            >
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </template>
                                                        </template>
                                                    </template>
                                                    <template v-else>
                                                        <div v-for="i in totalColumns" class="tablecustom-content--content flex" :key="i">
                                                            <div class="tablecustom-content--text">
                                                                <div class="m-0 loading-placeholder loading-placeholder__rectangle"></div>
                                                            </div>
                                                        </div>
                                                    </template>
                                                </div>
                                            </div>
                                        </template>
                                        <template v-else-if="showBy == 'user'">
                                            <div class="tablecustom-pinned--content" :style="{ width: columnWidth * 2 + `px` }">
                                                <div class="tablecustom-header--container ml-6 w-full">
                                                    <div class="tablecustom-header--content">
                                                        <p
                                                            v-if="!disableSort && false"
                                                            class="tablecustom-header--text uppercase text-xs font-medium cursor-pointer flex items-center"
                                                            @click="sort('user_code')"
                                                        >
                                                            Rep Name
                                                            <template>
                                                                <feather-icon
                                                                    class="text-danger input-custom--icon h-4 w-4 ml-2"
                                                                    :icon="
                                                                        sortBy == 'user_code'
                                                                            ? sortDirection == 'asc'
                                                                                ? 'ChevronDownIcon'
                                                                                : 'ChevronUpIcon'
                                                                            : 'SlidersIcon'
                                                                    "
                                                                ></feather-icon>
                                                            </template>
                                                        </p>
                                                        <p v-else class="tablecustom-header--text uppercase text-xs font-medium flex items-center">
                                                            Rep Name
                                                        </p>
                                                    </div>
                                                </div>
                                                <div class="tablecustom-content--container">
                                                    <template v-if="!loading">
                                                        <template>
                                                            <div
                                                                class="tablecustom-content--content flex"
                                                                key="data_total_length"
                                                                v-if="data.totals && showTotal"
                                                            >
                                                                <div class="tablecustom-content--text">
                                                                    <p class="m-0">
                                                                        <b>TOTAL</b>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <template v-for="(sale, index) in dataReports">
                                                                <div class="tablecustom-content--content flex" :key="`data_` + index">
                                                                    <div class="tablecustom-content--text">
                                                                        <p class="m-0">
                                                                            <span
                                                                                @click="loginAs(sale.user_code)"
                                                                                class="cursor-pointer text-primary underline"
                                                                                >{{ sale.user_code }}</span
                                                                            >
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </template>
                                                        </template>
                                                    </template>
                                                    <template v-else>
                                                        <div v-for="i in totalColumns" class="tablecustom-content--content flex" :key="i">
                                                            <div class="tablecustom-content--text">
                                                                <div class="m-0 loading-placeholder loading-placeholder__rectangle"></div>
                                                            </div>
                                                        </div>
                                                    </template>
                                                </div>
                                            </div>
                                        </template>

                                        <VuePerfectScrollbar
                                            v-if="!loading"
                                            ref="reportTableScrollbar"
                                            class="tablecustom-scrollable--content h-full"
                                            :settings="scrollbarSettings"
                                            :style="{ width: tableWidth * 2 + `px` }"
                                        >
                                            <div
                                                class="tablecustom-header--container flex"
                                                :style="{ width: columnWidth * data.periods.length + `px` }"
                                            >
                                                <div
                                                    class="tablecustom-header--content text-right pr-5"
                                                    v-for="(period, index_period) in data.periods"
                                                    :key="`period_` + index_period"
                                                    :style="{ width: columnWidth + `px` }"
                                                >
                                                    <p
                                                        v-if="!disableSort && !['Average'].includes(period) && false"
                                                        class="tablecustom-header--text uppercase text-xs font-medium cursor-pointer flex items-center"
                                                        @click="sort(`period_` + index_period)"
                                                    >
                                                        {{ period }}
                                                        <template>
                                                            <feather-icon
                                                                class="text-danger input-custom--icon h-4 w-4 ml-2"
                                                                :icon="
                                                                    sortBy == 'period_' + index_period
                                                                        ? sortDirection == 'asc'
                                                                            ? 'ChevronDownIcon'
                                                                            : 'ChevronUpIcon'
                                                                        : 'SlidersIcon'
                                                                "
                                                            ></feather-icon>
                                                        </template>
                                                    </p>
                                                    <p v-else class="tablecustom-header--text uppercase text-xs font-medium flex items-center">
                                                        {{ period }}
                                                    </p>
                                                </div>
                                            </div>
                                            <div
                                                class="tablecustom-content--container"
                                                style="margin-bottom:12px;"
                                                :style="{ width: columnWidth * data.periods.length + `px` }"
                                            >
                                                <div class="flex" v-if="data.totals && showTotal">
                                                    <div
                                                        class="tablecustom-content--content text-right"
                                                        v-for="(total, index_total) in data.totals"
                                                        :key="`total_` + index_total"
                                                        :style="{ width: columnWidth + `px` }"
                                                    >
                                                        <p class="m-0" style="line-height:20px">
                                                            <b>{{
                                                                formatNumberToCurrency ? globalFunction_formatNumberToCurrency(total, "") : total
                                                            }}</b>
                                                        </p>
                                                    </div>
                                                </div>
                                                <template v-for="(sale, index) in dataReports">
                                                    <div class="flex" :key="sale.customer_id + '_' + index">
                                                        <div
                                                            v-for="(total, index_total) in sale.data"
                                                            class="tablecustom-content--content"
                                                            :key="sale.customer_id + '_' + index_total"
                                                            :style="{ width: columnWidth + `px` }"
                                                        >
                                                            <div class="tablecustom-content--text text-right">
                                                                <p class="m-0">
                                                                    {{
                                                                        formatNumberToCurrency
                                                                            ? globalFunction_formatNumberToCurrency(total, "")
                                                                            : total
                                                                    }}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </template>
                                            </div>
                                        </VuePerfectScrollbar>
                                        <div v-else class="tablecustom-scrollable--content h-full" :style="{ width: tableWidth * 2 + `px` }">
                                            <div class="tablecustom-header--container flex" :style="{ width: columnWidth * totalColumns + `px` }">
                                                <div
                                                    class="tablecustom-header--content mx-1"
                                                    v-for="p in totalColumns"
                                                    :key="p"
                                                    :style="{ width: columnWidth + `px` }"
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
                                                :style="{ width: columnWidth * totalColumns + `px` }"
                                            >
                                                <template v-for="i in totalColumns">
                                                    <div class="flex" :key="i">
                                                        <div
                                                            v-for="j in totalColumns"
                                                            class="tablecustom-content--content"
                                                            :key="j"
                                                            :style="{ width: columnWidth + `px`, padding: '18px 10px' }"
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

                <div v-if="pagination && !loading" class="table-custom--footer">
                    <div class="w-1/2 flex justify-start">
                        <button
                            v-if="data.paginations.current_page > data.paginations.first_page"
                            @click="goToPage(parseInt(data.paginations.current_page) - 1)"
                            class="btn btn-outline-primary w-1/5 mr-4"
                        >
                            <feather-icon icon="ChevronLeftIcon" svgClasses="h-4 w-4"></feather-icon>
                            <span class="btn--text custom-text-bold">Previous</span>
                        </button>
                    </div>
                    <div v-if="data.datas.length >= conditions.data_each_page" class="w-1/2 flex justify-end">
                        <button
                            v-if="data.paginations.current_page < data.paginations.next_page"
                            @click="goToPage(parseInt(data.paginations.current_page) + 1)"
                            class="btn btn-outline-primary w-1/5"
                        >
                            <span class="btn--text custom-text-bold">Next</span>
                            <feather-icon icon="ChevronRightIcon" svgClasses="h-4 w-4"></feather-icon>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </card-custom>
</template>
<script>
import VuePerfectScrollbar from "vue-perfect-scrollbar";
import userApi from "@/apis/userApi";
export default {
    name: "ReportListCard",
    components: {
        VuePerfectScrollbar,
    },
    mixins: [userApi],
    props: {
        data: {
            default: {
                paginations: {
                    first_page: 1,
                    current_page: 1,
                    next_page: 1,
                },
                periods: [],
                totals: [],
                datas: [],
            },
        },
        disableSort: {
            default: false,
            type: Boolean,
        },
        formatNumberToCurrency: {
            default: true,
            type: Boolean,
        },
        loading: {
            default: false,
            type: Boolean,
        },
        pagination: {
            default: false,
            type: Boolean,
        },
        search: {
            default: "",
            type: String,
        },
        showBy: {
            default: "customer",
            type: String,
        },
        showItemNumber: {
            default: false,
            type: Boolean,
        },
        showRepCode: {
            default: true,
            type: Boolean,
        },
        showTotal: {
            default: true,
            type: Boolean,
        },
        sortBy: {
            default: "customer_name",
            type: String,
        },
        sortDirection: {
            default: "asc",
            type: String,
        },
        title: {
            default: "Report",
            type: String,
        },
        type: {
            default: "months",
            type: String,
        },
        variableSorts: {
            default: [],
            type: Array,
        },
    },
    data() {
        return {
            conditions: {
                table_maxwidth: 0,
                data_each_page: 50,
                search_active: false,
            },
            scrollbarSettings: {
                maxScrollbarLength: 60,
                useBothWheelAxes: true,
                // wheelSpeed: 0.5
            },
            inputs: {
                filters: {
                    search: this.search,
                },
                sorts: {
                    by: this.sortBy,
                    direction: this.sortDirection,
                },
            },
            variables: {
                sorts: this.variableSorts,
                sort_directions: [
                    { value: "asc", text: "Ascending" },
                    { value: "desc", text: "Descending" },
                ],
            },
        };
    },
    watch: {
        "inputs.filters.search": function(value) {
            this.$emit("search-input", value);
        },
        "inputs.sorts.by": function(value) {
            this.sort();
        },
        "inputs.sorts.direction": function(value) {
            this.sort();
        },
    },
    computed: {
        columnWidth() {
            let divider = 7;
            switch (this.type) {
                case "months":
                    divider = 10;
                    break;
            }
            if (this.showBy == "user") {
                divider -= 1;
            }
            let columnWidth = this.conditions.table_maxwidth / divider;
            if (columnWidth < 150) columnWidth = 150;
            return columnWidth;
        },
        tableWidth() {
            var table_width = this.conditions.table_maxwidth / 3;
            if (this.showBy == "user") {
                table_width += this.columnWidth;
            }
            return table_width;
        },
        totalColumns() {
            let total = 4;
            switch (this.type) {
                case "months":
                    total = 7;
                    break;
            }
            return total;
        },
        dataReports() {
            var show_report = this.data.datas.concat().sort((a, b) => {
                var first = a[this.sortBy];
                var second = b[this.sortBy];
                if (this.sortBy.includes("period_")) {
                    var key = this.sortBy.split("_");
                    var first_datas = this.objectToArray(a.data);
                    var second_datas = this.objectToArray(b.data);
                    first = first_datas[key[1]];
                    second = second_datas[key[1]];
                }
                if (/^\d+$/.test(first) && /^\d+$/.test(second)) {
                    first = parseInt(first);
                    second = parseInt(second);
                }

                if (this.sortDirection === "asc") {
                    return first > second ? 1 : -1;
                } else {
                    return first > second ? -1 : 1;
                }
            });
            return show_report;
        },
        showUserCode() {
            if (["admin", "salesmanager", "customer_service"].includes(this.authenticatedUser.role)) {
                return true;
            }
            return false;
        },
    },
    methods: {
        loginAs(user_code) {
            let loading = this.$loading.show({
                container: null,
                color: "var(--color-primary)",
            });
            this.userApi_getByCode(user_code)
                .then((response) => {
                    if (response.success) {
                        if (response.data.role == "admin") {
                            this.$notify({
                                group: "notification",
                                type: "error",
                                title: "Failed",
                                text: "This user is admin, you cannot login as other administrator",
                            });
                            return;
                        }
                        var login_as_user = response.data;
                        login_as_user.real_user_code = this.authenticatedUser.code;
                        this.$store.commit("UPDATE_USER_INFO", response.data);
                        this.$store.state.activeUser = login_as_user;

                        this.$notify({
                            group: "notification",
                            type: "success",
                            title: "Success",
                            text: "Successfully login as '" + user_code + "'",
                        });
                        this.$router.push("/dashboard");
                    }
                })
                .finally(() => loading.hide());
        },
        objectToArray(obj_datas) {
            var arr_datas = Object.keys(obj_datas).map((key) => {
                return obj_datas[key];
            });
            return arr_datas;
        },
        goToPage(page_number) {
            this.$parent.conditions.page = page_number;
            this.$parent.getData();
        },
        searchData(search_active = true) {
            this.conditions.search_active = search_active;
            if (!search_active) {
                this.inputs.filters.search = "";
                this.$emit("search-input", "");
            }
            this.$parent.getData(true);
        },
        sort() {
            document.body.removeChild(document.querySelector(".select-menu-custom--container"));
            const sort_by = this.inputs.sorts.by;
            const sort_direction = this.inputs.sorts.direction;

            this.$parent.conditions.pagination = false;
            let get_data = false;
            this.$parent.conditions.sorts.direction = sort_direction;
            if (!this.$parent.conditions.sorts.by.includes("period_") && sort_by.includes("period_")) {
                get_data = true;
                this.$parent.conditions.page = 1;
            }
            this.$parent.conditions.sorts.by = sort_by;
            if (["item_id", "category_id", "customer_id", "customer_name", "user_code"].includes(sort_by)) {
                get_data = true;
                this.$parent.conditions.pagination = true;
            }
            if (get_data) {
                this.$parent.getData();
            }
        },
        // sort(col) {
        //     this.$parent.conditions.pagination = false;
        //     let get_data = false;
        //     if (this.sortBy === col) {
        //         this.$parent.conditions.sorts.direction =
        //             this.sortDirection === "asc" ? "desc" : "asc";
        //     } else {
        //         if (
        //             !this.$parent.conditions.sorts.by.includes("period_") &&
        //             col.includes("period_")
        //         ) {
        //             get_data = true;
        //             this.$parent.conditions.page = 1;
        //         }
        //         this.$parent.conditions.sorts.by = col;
        //         this.$parent.conditions.sorts.direction = "asc";
        //     }
        //     if (
        //         [
        //             "item_id",
        //             "category_id",
        //             "customer_id",
        //             "customer_name",
        //             "user_code"
        //         ].includes(col)
        //     ) {
        //         get_data = true;
        //         this.$parent.conditions.pagination = true;
        //     }
        //     if (get_data) {
        //         this.$parent.getData();
        //     }
        // }
    },
    mounted() {
        this.conditions.table_maxwidth = this.$refs.table.clientWidth;
        if (this.search != "") {
            this.conditions.search_active = true;
        }
    },
};
</script>
