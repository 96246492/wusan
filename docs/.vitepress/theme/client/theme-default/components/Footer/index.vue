
<script setup>
</script>
<template>
    <div class='footer-container'>
        <div v-lazy="'top'">
            ©2022, All Rights Reserved
        </div>
        <div v-lazy="'top'">
            Power by VitePress
        </div>
    </div>
</template>
<style lang='less' scoped>
.footer-container {
    font-size: 0.98rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem 0;
    // background: var(--vp-footer-bg);
    // border-top: 0.06rem solid rgba(155, 154, 154, 0.234);
}


</style>