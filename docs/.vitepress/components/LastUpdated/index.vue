<script setup>
import { computed } from "vue";
import { time } from "../../utils/format.js";
const props = defineProps(['time']);
const t = computed(() => time(props));

</script>
<template>
    <div class='last-updated-container'>
        编辑于{{t}}
    </div>
</template>
<style lang='less' scoped>
.last-updated-container {
    display: flex;
    justify-content: flex-end;
    font-size: 0.9rem;
    margin-top: 3rem;
    color: #969696;
}
</style>