<script setup lang="ts">
import { computed, ref, onMounted, watchEffect } from 'vue'
import { useRoute, useData } from 'vitepress'
import { useSidebar } from '../composables/sidebar.js'
import VPDocAside from './VPDocAside.vue'
import VPDocFooter from './VPDocFooter.vue'

import { initElemStyle, initLazyLoaderObserver, ob } from "../../../../../.vitepress/plugins/lazy.js";

const route = useRoute()
const { hasSidebar, hasAside } = useSidebar()
const { page } = useData(); // 当前页数据
const pageName = computed(() =>
    route.path.replace(/[./]+/g, '_').replace(/_html$/, '')
)
const content = ref('content');
const isShowAside = ref(true);


onMounted(() => {
    watchEffect(() => {
        let pathname = route.path.split('/');
        if (pathname.includes('blog')) {

            let vpDocChildren = [...document.getElementsByClassName('vp-doc')[0].children[0].children];

            vpDocChildren.forEach((item, index) => {
                if (item.children[0]?.tagName === 'IMG') {
                    initElemStyle(item, 'img');
                    initLazyLoaderObserver('img');
                    ob.observe(item);
                } else {
                    initElemStyle(item, 'top');
                    initLazyLoaderObserver('top');
                    ob.observe(item);
                }
            })

            // 如果文章页不存在二级title，就设置隐藏 aside 区域。
            isShowAside.value = page.value.headers.some((item) => item.level < 3) ? true : false;

            content.value.style.background = `var(--vp-content-bg)`;

            if (window.innerWidth > 760) {
                content.value.style.boxShadow = `0rem 0rem 0.6rem var(--vp-content-shadow)`;
            }

        } else {
            isShowAside.value = false;
            content.value.style.background = "none";
            content.value.style.boxShadow = `none`;
        }
    })
})

</script>
<template>
    <div class="VPDoc" :class="{ 'has-sidebar': hasSidebar, 'has-aside': hasAside }">
        <div class="container">
            <!-- aside目录 -->
            <div v-show="isShowAside" class="aside">
                <!-- <div class="aside-curtain" /> -->
                <div class="aside-container">
                    <div class="aside-content">
                        <VPDocAside>
                            <template #aside-top>
                                <slot name="aside-top" />
                            </template>
                            <template #aside-bottom>
                                <slot name="aside-bottom" />
                            </template>
                            <template #aside-outline-before>
                                <slot name="aside-outline-before" />
                            </template>
                            <template #aside-outline-after>
                                <slot name="aside-outline-after" />
                            </template>
                            <template #aside-ads-before>
                                <slot name="aside-ads-before" />
                            </template>
                            <template #aside-ads-after>
                                <slot name="aside-ads-after" />
                            </template>
                        </VPDocAside>
                    </div>
                </div>
            </div>
            <div ref="content" class="content">
                <div class="content-container">
                    <slot name="doc-before" />
                    <main class="main">
                        <Content class="vp-doc" :class="pageName" />
                    </main>
                    <slot name="doc-footer-before" />
                    <VPDocFooter />
                    <slot name="doc-after" />
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="less">
.main {
    z-index: 1 !important;
}

.vp-doc {
    z-index: 1 !important;
    word-break: break-all;
}

@media (max-width: 768px) {
    .vp-doc {
        overflow: hidden;
        font-size: 1.09rem;
    }
}

.VPDoc {
    z-index: 1 !important;
    width: 88%;
    padding: 1rem 0 0 0;
    margin: 0 auto;
    overflow-x: hidden;
}


@media (max-width: 820px) {
    .VPDoc {
        padding: 2.3rem 0 0 0 !important;
    }
}

@media (max-width: 960px) and (min-width: 820px) {
    .VPDoc {
        margin-top: 3.5rem;
        font-size: 1rem;
    }
}

@media (min-width: 768px) {
    .VPDoc {
        /* padding: 48px 32px 128px; */
    }
}

@media (min-width: 960px) {
    .VPDoc {
        /* padding: 32px 32px 0; */
    }

    .VPDoc:not(.has-sidebar) .container {
        display: flex;
        justify-content: center;
        max-width: 992px;
    }

    .VPDoc:not(.has-sidebar) .content {
        max-width: 752px;
    }
}

@media (min-width: 1280px) {
    .VPDoc .container {
        display: flex;
        justify-content: center;
    }

    .VPDoc .aside {
        display: block;
    }
}

@media (min-width: 1440px) {
    .VPDoc:not(.has-sidebar) .content {
        max-width: 784px;
    }

    .VPDoc:not(.has-sidebar) .container {
        max-width: 1104px;
    }
}

.container {
    z-index: 1 !important;
    margin: 0 auto;
    /* padding: 20px 0; */
    width: 100%;
    /* box-shadow: 1px 1px 3px var(--vp-bg-doc-shadow); */
}

.aside {
    position: relative;
    display: none;
    order: 2;
    flex-grow: 1;
    padding-left: 32px;
    width: 100%;
    max-width: 256px;
}

.aside-container {
    z-index: 1 !important;
    position: sticky;
    top: 0;
    margin-top: calc(var(--vp-nav-height-desktop) * -1 - 32px);
    padding-top: calc(var(--vp-nav-height-desktop) + 32px);
    height: 100vh;
    overflow-x: hidden;
    overflow-y: auto;
    scrollbar-width: none;
}

.aside-container::-webkit-scrollbar {
    display: none;
}

.aside-curtain {
    position: fixed;
    bottom: 0;
    z-index: 10;
    width: 224px;
    height: 32px;
    background: linear-gradient(transparent, var(--vp-c-bg) 70%);
}

.aside-content {
    display: flex;
    flex-direction: column;
    min-height: calc(100vh - (var(--vp-nav-height-desktop) + 32px));
    padding-bottom: 32px;
}


.content {
    z-index: 1 !important;
    position: relative;
    margin: 0 auto;
    width: 100%;
    padding: 2.5rem 0 0 0;
    border-radius: 0.2rem;
    overflow-y: hidden;
    /* border: 1px solid red; */
    /* box-shadow: 0 0 3rem var(--vp-content-shadow); */
}

@media (max-width: 821px) {
    .content {
        background: transparent !important;
    }
}

@media (min-width: 960px) {
    .content {
        /* padding: 0 32px 128px; */
    }
}

@media (min-width: 1280px) {
    .content {
        order: 1;
        margin: 0;
        min-width: 640px;
    }
}

.content-container {
    margin: 0 auto;
}

.VPDoc.has-aside .content-container {
    max-width: 688px;
}
</style>
