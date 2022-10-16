<script setup>
import { ref, computed } from 'vue';
import timeData from "../../../mdTime.json";
import { time, formatDate } from "../../utils/format.js";

const t = ref('正在加载时间...');
const props = defineProps(['listData']);

const listData = computed(() => {
    return props.listData.map((item, index) => {
        const path = item.path.split('/')[item.path.split('/').length - 1];
        const img = item.imgSrc ? `../../../public/${item.imgSrc}` : '';
        return {
            ...item,
            t: time({
                time: formatDate(new Date(timeData[path + '.md'].editTime), 'yyyy-MM-dd-HH-mm-ss')
            }),
            imgSrc: img || ''
        }
    })
});


</script>
<template>
    <div class='content-container'>
        <div class="content-list" v-for="(item, i) in listData" :key="i">
            <div class="content-img">
                <img :src="item.imgSrc" alt="">
                <div class="img-bg"></div>
            </div>
            <div class="content">
                <div class="content-title">
                    <h3 v-lazy="'top'">
                        <a :href="item.path">
                            {{ item.title }}
                        </a>
                    </h3>
                    <!-- <h4 v-lazy="'top'">{{ item.time }}</h4> -->
                    <h4 v-lazy="'top'">
                        {{item.t || t}}
                    </h4>
                </div>
                <div v-lazy="'top1'" class="content-desc">
                    {{ item.desc }}
                </div>
                <div class="content-foo">
                    <div class="content-foo-left">
                        <a :href="item.path">
                            开始阅读
                        </a>
                    </div>
                    <div class="content-foo-right">
                        {{ item.comments || 0}} 条评论
                    </div>
                </div>
            </div>
        </div>

        <!-- 如何处理 content list -->

    </div>
</template>
<style lang='less' scoped>
@import "../../styles/index.less";

.content-container {
    padding: 0.5rem 0.5rem;

    .content-list {
        // 打开的话，移动端会模糊
        // -webkit-backdrop-filter: saturate(50%) blur(8px);
        // backdrop-filter: saturate(50%) blur(8px);
        box-shadow: 0px 0px 1rem var(--vp-content-shadow);
        border-radius: 0.5rem;
        overflow: hidden;
        margin-bottom: 1.5rem;

        .content-img {
            overflow: hidden;
            position: relative;

            img {

                width: 100%;
                transition: 0.4s ease;
                transform: scale(1);
            }

            .img-bg {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: var(--vp-img-bg);
            }

            &:hover img {
                transform: scale(1.07);
            }
        }

        .content {
            padding: 1rem;
            background: var(--vp-content-bg);

            .content-title {
                h3 {
                    font-size: 1.4rem;
                    font-weight: bold;
                    margin-bottom: 0.6rem;
                    cursor: pointer;
                    .text-clamp-overflow(2);
                    color: rgb(81, 148, 215);
                    // &:hover {
                    //     text-decoration: underline;
                    // }
                }

                h4 {
                    font-size: 0.9rem;
                    color: #9d9b9b;
                }
            }

            .content-desc {
                font-size: 0.9rem;
                margin: 0.5rem 0 0.7rem 0;
                .text-clamp-overflow(3);
            }

            .content-foo {
                // border: 1px solid red;
                display: flex;
                justify-content: space-between;

                .content-foo-left {
                    cursor: pointer;
                    font-weight: bold;
                    color: #cd9f2d;

                    a {
                        font-size: 1rem;
                    }
                }

                .content-foo-right {
                    font-size: 0.9rem;
                }
            }
        }

    }
}
</style>