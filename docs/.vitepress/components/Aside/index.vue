<script setup>
import { ref, reactive, onMounted, computed } from 'vue';
import bus from "../../utils/bus";
import { throttle } from "../../utils/debounce.js";
// import { setItem, getItem } from "../../utils/setStorage";
// const asideLinks = ref(null);

const props = defineProps(['listData', 'allComments', 'allArticleNums']);
const listData = computed(() => props.listData);
const allComments = computed(() => props.allComments);
const allArticleNums = computed(() => props.allArticleNums);

const menuList = ref(null);

onMounted(() => {
    bus.on('getMenuList', (menu) => {
        // menuList.value = menu.value;
        // setItem('menuList', menuList.value.innerHTML);
    })
})



const asideContainer = ref(null);

const asideBlock = ref(null);
const asideBlockTop = ref(0);

const asideNotice = ref(null);
const asideCard = ref(null);


onMounted(() => {
    // asideLinks.value.innerHTML = getItem('menuList');
    asideBlockTop.value = asideBlock?.value?.offsetTop;

    window.addEventListener('scroll', throttle((e) => {
        if (!asideNotice.value) return;
        const asideBlockOffsetTop = asideNotice.value.offsetHeight + asideCard.value.offsetHeight + 100;
        if (window.scrollY > asideBlockOffsetTop) {
            asideBlock.value.style.position = 'fixed';
            asideBlock.value.style.top = '10px';
            asideBlock.value.style.width = '18rem';
        } else {
            asideBlock.value.style.position = 'static';
        }
    }, 5))
})


const userInfo = reactive({
    name: '那菈十瓣月亮',
    avatar: "https://q1.qlogo.cn/g?b=qq&nk=1787603171&s=640",
    desc: "如何才能优雅的写文章？你首先要有一个优雅的blog。",
})

const noticeContent = "欢迎来到小站，客官是吃饭还是住店？";

function randomFrom(lowerValue, upperValue) {
    return Math.floor(Math.random() * (upperValue - lowerValue + 1) + lowerValue);
}

const articleRecommendList = reactive([])

const randomLen = listData.value.length > 7 ? 6 : listData.value.length;

for (let i = 0; i < randomLen; i++) {
    const data = listData.value[randomFrom(0, listData.value.length - 1)];
    if (articleRecommendList.some((item) => item.id === data.id)) {
        i--;
    } else {
        articleRecommendList.push(data);
    }
}


</script>
<template>
    <div ref="asideContainer" class='aside-container'>

        <div v-lazy="'left'" ref="asideCard" class="aside-card">
            <div v-lazy="'left'" class="card-avatar">
                <img :src="userInfo.avatar" alt="">
            </div>
            <div class="card-desc">
                <div class="name">
                    {{ userInfo.name }}
                </div>
                <div class="desc">
                    <!-- Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, nobis tempore temporibus quasi
                    illum optio tempora vero nulla? Voluptatem animi deleniti quis repudiandae non autem dolorem
                    expedita quia debitis eum. -->
                    {{ userInfo.desc }}
                </div>
            </div>
            <div class="card-foo">
                <div v-lazy="'left'" class="card-item">
                    <h3>{{ allArticleNums }}</h3>
                    文章数
                </div>
                <div v-lazy="'left'" class="card-item">
                    <h3>{{ allComments }}</h3>
                    评论量
                </div>
            </div>
        </div>
        <div ref="asideNotice" class="aside-notice" v-lazy="'left'">
            <h3 class="aside-title">Notice</h3>
            <div class="aside-notice-content">
                {{ noticeContent }}
            </div>
        </div>

        <div ref="asideBlock" class="aside-block">

            <!-- <div class="aside-links">
                <div class="title">About</div>
                <div class="text-bottom-border"></div>
                <div ref="asideLinks" class="aside-link">

                </div>

            </div> -->

            <div v-lazy="'left'" class="aside-article-recommend">
                <h3 class="aside-title">Recommend</h3>
                <div class="text-bottom-border"></div>
                <ul class="aside-article-list">
                    <li v-lazy="'top'" class="article" v-for="(item, i) in articleRecommendList" :key="i">
                        <span></span>
                        <a :href="item.path">{{ item.title }}</a>
                    </li>
                </ul>
            </div>
        </div>


    </div>
</template>
<style lang='less' scoped>
@import "../../styles/index.less";

.block-universal-style {
    border-radius: 0.4rem;
    padding: 0.5rem 1rem;
    background: var(--vp-content-bg);
    box-shadow: 0px 0px 1rem var(--vp-content-shadow);
    margin-bottom: 1rem;
}

.text-bottom-border {
    margin: 0.4rem 0;
    border-bottom: 1px solid rgba(155, 154, 154, 0.234);
}

.aside-container {
    padding: 0.5rem 1rem;
    word-break: break-all;

    .aside-card {
        // border: 1px solid red;
        .block-universal-style();
        display: flex;
        flex-direction: column;
        align-items: center;

        div {
            margin-bottom: 0.8rem;
        }

        .card-avatar {
            overflow: hidden;
            border-radius: 0.5rem;
            width: 7rem;
            border: 2px solid var(--vp-content-bg);

            img {
                width: 100%;
            }
        }

        .card-desc {
            display: flex;
            flex-direction: column;
            align-items: center;

            .name {
                font-size: 1.27rem;
            }

            .desc {
                font-size: 0.96rem;
                .text-clamp-overflow(3);
                text-align: center;
                color: #9d9b9b;
            }
        }

        .card-foo {
            display: flex;

            .card-item {
                display: flex;
                flex-direction: column;
                align-items: center;
                padding: 1px 10px;
                border-radius: 0.3rem;
                margin: 0 1rem;
                font-size: 0.9rem;

                h3 {
                    font-size: 1.2rem;
                }
            }
        }
    }

    .aside-title {
        font-weight: 800;
        font-size: 1.08rem;
        color: #ffa600d3;
    }

    .aside-notice {
        .block-universal-style();

        .aside-notice-content {
            font-size: 0.96rem;
            text-align: center;
            margin: 1.5rem 0 1.8rem 0;
        }
    }

    .aside-block {
        .aside-links {
            .block-universal-style();
        }

        .aside-article-recommend {
            width: 100%;
            height: 100%;
            .block-universal-style();
            padding: 0.6rem 1rem 0.2rem 1rem;

            .aside-article-list {
                .article {
                    display: flex;
                    align-items: center;
                    padding: 0 0.3rem;
                    margin: 0.46rem 0;
                    overflow: hidden;
                    text-overflow: ellipsis;

                    span {
                        display: inline-block;
                        width: 0.25rem;
                        height: 1.4rem;
                        background: #54a4d8;
                        margin-right: 0.7rem;
                        border-radius: 0.2rem;
                    }

                    a {
                        width: 14rem;
                        font-style: italic;
                        font-size: 1rem;

                        &:hover {
                            color: rgb(115, 190, 165);
                            text-decoration: underline;
                        }
                    }
                }
            }

        }
    }




}
</style>