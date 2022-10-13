<script lang="ts" setup>
import { ref, onMounted } from "vue";
import { useData } from 'vitepress'
import VPNavBarMenuLink from './VPNavBarMenuLink.vue'
import VPNavBarMenuGroup from './VPNavBarMenuGroup.vue'
import bus from "../../../../utils/bus";
const { theme } = useData();

const menuList = ref(null);
// 获取到列表

onMounted(() => {
    bus.emit('getMenuList', menuList);
})


</script>


<template>
    <nav v-if="theme.nav" aria-labelledby="main-nav-aria-label" class="VPNavBarMenu">
        <div ref="menuList" class="nav-menu">
            <span id="main-nav-aria-label" class="visually-hidden">Main Navigation</span>
            <template v-for="item in theme.nav" :key="item.text">
                <VPNavBarMenuLink v-if="'link' in item" :item="item" />
                <VPNavBarMenuGroup v-else :item="item" />
            </template>
        </div>
    </nav>
</template>

<style scoped>
.VPNavBarMenu {
    display: none;
}

.VPNavBarMenu .nav-menu {
    display: flex;
    font-style: normal;
    /* display: none; */
}

@media (min-width: 768px) {
    .VPNavBarMenu {
        display: flex;
    }
}
</style>
