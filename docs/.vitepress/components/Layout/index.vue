
<script setup>
import { ref } from 'vue';
const props = defineProps(['foo']);
const emit = defineEmits(['foo']);

</script>
<template>
    <div class='layout-container'>
        <div class="layout-content">
            <slot name="content"></slot>
        </div>
        <div class="layout-aside">
            <slot name="aside"></slot>
        </div>
        <!-- <div class="layout-footer">
            <slot name="footer"></slot>
        </div> -->
    </div>
</template>

<style lang='less' scoped>

@media (max-width: 1100px) {
    .layout-aside {
        display: none;
    }

    .layout-content {
        flex: 1!important;
        width: 100% !important;
    }
}

.layout-container {
    margin: 3.3rem 0 5rem 0;
    // border: 1px solid red;
    display: flex;
    flex-wrap: wrap;
    .layout-content {
        min-height: 100vh;
        // height: 100%;
        flex: 0.7;
        // border: 1px solid red;
    }

    .layout-aside {
        flex: 0.3;
        // border: 1px solid black;
    }

    // .layout-footer {
    //     width: 100%;
    //     // border: 1px solid blue;
    // }
    
}



</style>


