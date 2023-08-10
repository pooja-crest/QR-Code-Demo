<template>
    <div class="layout--main">
        <navbar-custom></navbar-custom>
        <div class="content-area">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import NavbarCustom from "@/components/NavbarCustom.vue";
export default {
    name: "Main",
    components: {
        NavbarCustom,
    },
    computed: {},
};
</script>

<style scoped>
.content-area {
    margin-bottom: 2rem;
}
</style>
