<template>
    <div v-if="loading" class="tablecustom-content--text">
        <div class="tablecustom-header--text my-3 loading-placeholder loading-placeholder__rectangle"
             style="min-height: 14px"></div>
    </div>
    <div v-else>
        <div v-if="backOrderItems.length > 0" class="tablecustom-content--text">
<!--            <p class="m-0 flex"><template v-for="(item, index) in backOrderItems">{{ (item) ? item.item_id + ((index == backOrderItems.length - 1) ? "" : ", ") : '-' }}</template></p>-->
            <template v-for="(item, index) in chunkedBackOrderItems">
                <p class="m-0 flex">
                    <template v-for="(itemValue, itemIndex) in item">
                        <span class="my-2">{{ itemValue.item_id ? itemValue.item_id + ((index == chunkedBackOrderItems.length - 1 && itemIndex == item.length - 1) ? "" : ",\xa0\xa0") : '-' }}</span>
                    </template>
                </p>
            </template>
        </div>
        <div v-else class="tablecustom-content--text">
            <p class="m-0 flex items-center justify-center">-</p>
        </div>
    </div>
</template>

<script>
import shipmentApi from "@/apis/shipmentApi";

export default {
    name: "BackOrderItems",
    mixins: [shipmentApi],
    data() {
        return {
            loading: true,
            backOrderItems: [],
            chunkedBackOrderItems: [],
        };
    },
    props: {
        shipment: {
            type: Object,
        },
    },
    beforeMount() {
        this.getBackOrderItems();
    },
    methods: {
        getBackOrderItems() {
            this.loading = true;
            this.shipmentApi_getBackorders(this.shipment.shipment.id)
                .then((response) => {
                    const perChunk = 3  // items per chunk
                    this.backOrderItems = response.data;
                    if(this.backOrderItems.length > 0) {
                        this.backOrderItems.sort(function(a, b){
                            return b.item_id.length - a.item_id.length; // ASC  -> a.item_id.length - b.item_id.length & DESC -> b.item_id.length - a.item_id.length
                        });
                        this.chunkedBackOrderItems = this.backOrderItems.reduce((resultArray, item, index) => {
                            const chunkIndex = Math.floor(index/perChunk)
                            if(!resultArray[chunkIndex]) {
                                resultArray[chunkIndex] = [] // start a new chunk
                            }
                            resultArray[chunkIndex].push(item)
                            return resultArray
                        }, []);
                    }
                })
                .finally(() => (this.loading = false));
        },
    },
};
</script>
