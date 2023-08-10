<template>
    <card-custom :title="title" class="mt-10">
        <div class="flex flex-col w-full">
            <div class="w-full mb-2 mt-8 flex">
                <div class="flex flex-1">
                    <input
                        type="text"
                        class="input w-full"
                        :placeholder="showBy=='user' ? 'Search REP name':'Search customer name or number'"
                        v-model="inputs.filters.search"
                        :class="[(inputs.filters.search=='') ? 'input-empty' : '']"
                        v-on:keyup.enter="searchData()"
                    />
                </div>
                <div class>
                    <button
                        @click="searchData()"
                        class="btn btn-primary ml-5"
                        :class="[(inputs.filters.search=='') ? 'disabled' : '']"
                    >
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
                <div v-if="data.datas.length>0 || loading" class="w-full">
                    <div class="table-custom-component">
                        <div class="table-custom--container">
                            <div class="table-custom--content">
                                <table ref="table" class="tablecustom my-8 w-full">
                                    <thead ref="thead" class="table-custom--thead">
                                        <tr>
                                            <template v-if="showBy=='items'">
                                                <th
                                                    v-if="!disableSort && false"
                                                    class="th--text text-left cursor-pointer items-center"
                                                    style="width:17%"
                                                    @click="sort('item_id')"
                                                >
                                                    ITEM NUMBER
                                                    <template>
                                                        <feather-icon
                                                            class="text-danger input-custom--icon h-4 w-4 ml-2"
                                                            :icon="sortBy=='item_id'?((sortDirection=='asc')?'ChevronDownIcon':'ChevronUpIcon'):'SlidersIcon'"
                                                        ></feather-icon>
                                                    </template>
                                                </th>
                                                <th
                                                    v-else
                                                    class="th--text text-left"
                                                    style="width:17%"
                                                >ITEM NUMBER</th>
                                                <th
                                                    v-if="!disableSort && false"
                                                    class="th--text text-left cursor-pointer items-center"
                                                    style="width:17%"
                                                    @click="sort('category_id')"
                                                >
                                                    CATEGORY
                                                    <template>
                                                        <feather-icon
                                                            class="text-danger input-custom--icon h-4 w-4 ml-2"
                                                            :icon="sortBy=='category_id'?((sortDirection=='asc')?'ChevronDownIcon':'ChevronUpIcon'):'SlidersIcon'"
                                                        ></feather-icon>
                                                    </template>
                                                </th>
                                                <th
                                                    v-else
                                                    class="th--text text-left"
                                                    style="width:17%"
                                                >CATEGORY</th>
                                            </template>
                                            <template v-else-if="showBy=='users'">
                                                <th
                                                    v-if="!disableSort && false"
                                                    class="th--text text-left cursor-pointer items-center"
                                                    style="width:17%"
                                                    @click="sort('item_id')"
                                                >
                                                    REP CODE
                                                    <template>
                                                        <feather-icon
                                                            class="text-danger input-custom--icon h-4 w-4 ml-2"
                                                            :icon="sortBy=='item_id'?((sortDirection=='asc')?'ChevronDownIcon':'ChevronUpIcon'):'SlidersIcon'"
                                                        ></feather-icon>
                                                    </template>
                                                </th>
                                                <th
                                                    v-else
                                                    class="th--text text-left"
                                                    style="width:17%"
                                                >REP CODE</th>
                                            </template>

                                            <template v-if="!loading">
                                                <template
                                                    v-for="(period, i_period) in data.periods"
                                                >
                                                    <th
                                                        v-if="!disableSort && false"
                                                        :key="i_period"
                                                        class="th--text text-left cursor-pointer items-center"
                                                        style="width:17%"
                                                        @click="sort(`period_`+i_period)"
                                                    >
                                                        {{period}}
                                                        <template>
                                                            <feather-icon
                                                                class="text-danger input-custom--icon h-4 w-4 ml-2"
                                                                :icon="sortBy=='period_'+i_period?((sortDirection=='asc')?'ChevronDownIcon':'ChevronUpIcon'):'SlidersIcon'"
                                                            ></feather-icon>
                                                        </template>
                                                    </th>
                                                    <th
                                                        v-else
                                                        :key="i_period"
                                                        class="th--text text-left"
                                                        style="width:17%"
                                                    >{{period}}</th>
                                                </template>
                                            </template>
                                            <template v-else>
                                                <template v-for="i in 5">
                                                    <th
                                                        :key="i"
                                                        class="th--text text-left"
                                                        style="width:17%"
                                                    >
                                                        <div
                                                            class="m-0 loading-placeholder loading-placeholder__rectangle"
                                                        ></div>
                                                    </th>
                                                </template>
                                            </template>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <template v-if="!loading">
                                            <tr
                                                class="table-data--container"
                                                :data="item"
                                                :key="index"
                                                v-for="(item, index) in dataItems"
                                            >
                                                <template v-if="showBy=='items'">
                                                    <td class="text-left">
                                                        <p class="td--text">
                                                            <router-link
                                                                :to="`/items/${item.item_id}`"
                                                            >{{ item.item_id }}</router-link>
                                                        </p>
                                                    </td>
                                                    <td class="text-left">
                                                        <p class="td--text">{{ item.category_id }}</p>
                                                    </td>
                                                </template>
                                                <template v-else-if="showBy=='users'">
                                                    <td class="text-left">
                                                        <p class="td--text">
                                                            <span
                                                                @click="loginAs(item.user_code)"
                                                                class="cursor-pointer text-primary underline"
                                                            >{{ item.user_code }}</span>
                                                        </p>
                                                    </td>
                                                </template>

                                                <td
                                                    :key="i_quantity"
                                                    class="text-left"
                                                    v-for="(quantity, i_quantity) in objectToArray(item.data)"
                                                >
                                                    <p class="td--text">{{ quantity }}</p>
                                                </td>
                                            </tr>
                                        </template>
                                        <template v-else>
                                            <tr
                                                class="table-data--container"
                                                :key="index"
                                                v-for="index in 6"
                                                style="height:30px;"
                                            >
                                                <td :key="j" v-for="j in 6">
                                                    <div class="td--text">
                                                        <div
                                                            class="my-3 loading-placeholder__rectangle loading-placeholder"
                                                        ></div>
                                                    </div>
                                                </td>
                                            </tr>
                                        </template>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <template v-else>
                    <div>
                        <p>No data found.</p>
                    </div>
                </template>

                <div v-if="pagination && !loading" class="table-custom--footer">
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
                    <div
                        v-if="data.datas.length>conditions.data_each_page"
                        class="w-1/2 flex justify-end"
                    >
                        <button
                            v-if="data.paginations.current_page<data.paginations.next_page"
                            @click="goToPage(parseInt(data.paginations.current_page)+1)"
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
export default {
    name: "ItemSoldListCard",
    props: {
        data: {
            default: {
                paginations: {
                    first_page: 1,
                    current_page: 1,
                    next_page: 1
                },
                periods: [],
                totals: [],
                datas: []
            }
        },
        disableSort: {
            default: false,
            type: Boolean
        },
        search: {
            default: "",
            type: String
        },
        showBy: {
            default: "items",
            type: String
        },
        sortBy: {
            default: "customer_name",
            type: String
        },
        sortDirection: {
            default: "asc",
            type: String
        },
        loading: {
            default: false,
            type: Boolean
        },
        pagination: {
            default: false,
            type: Boolean
        },
        title: {
            default: "Items Sold",
            type: String
        },
        variableSorts: {
            default: [],
            type: Array
        }
    },
    data() {
        return {
            conditions: {
                data_each_page: 50,
                search_active: false
            },
            inputs: {
                filters: {
                    search: this.search
                },
                sorts: {
                    by: this.sortBy,
                    direction: this.sortDirection
                }
            },
            variables: {
                sorts: this.variableSorts,
                sort_directions: [
                    { value: "asc", text: "Ascending" },
                    { value: "desc", text: "Descending" }
                ]
            }
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
        }
    },
    computed: {
        dataItems() {
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
        }
    },
    methods: {
        loginAs(user_code) {
            let loading = this.$loading.show({
                container: null,
                color: "var(--color-primary)"
            });
            this.userApi_getByCode(user_code)
                .then(response => {
                    if (response.success) {
                        if (response.data.role == "admin") {
                            this.$notify({
                                group: "notification",
                                type: "error",
                                title: "Failed",
                                text:
                                    "This user is admin, you cannot login as other administrator"
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
                            text: "Successfully login as '" + user_code + "'"
                        });
                        this.$router.push("/dashboard");
                    }
                })
                .finally(() => loading.hide());
        },
        objectToArray(obj_datas) {
            var arr_datas = Object.keys(obj_datas).map(key => {
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
            }
            this.$parent.getData(true);
        },
        sort() {
            document.body.removeChild(
                document.querySelector(".select-menu-custom--container")
            );
            const sort_by = this.inputs.sorts.by;
            const sort_direction = this.inputs.sorts.direction;

            this.$parent.conditions.pagination = false;
            let get_data = false;
            this.$parent.conditions.sorts.direction = sort_direction;
            if (
                !this.$parent.conditions.sorts.by.includes("period_") &&
                sort_by.includes("period_")
            ) {
                get_data = true;
                this.$parent.conditions.page = 1;
            }
            this.$parent.conditions.sorts.by = sort_by;
            if (
                [
                    "item_id",
                    "category_id",
                    "customer_id",
                    "customer_name",
                    "user_code"
                ].includes(sort_by)
            ) {
                get_data = true;
                this.$parent.conditions.pagination = true;
            }
            if (get_data) {
                this.$parent.getData();
            }
        },
        mounted() {
            if (this.search != "") {
                this.conditions.search_active = true;
            }
        }
    }
};
</script>