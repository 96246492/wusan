<script setup>
import { ref, onMounted } from 'vue';
import Aside from "./Aside/index.vue";
import Layout from "./Layout/index.vue";
import Content from "./Content/index.vue";
// import Footer from "./Footer/index.vue";
// import { startSakura } from "./fullScreenFlower.js";


import dataList from "../data/listData.json";

const allArticleNums = ref(dataList.length);
const allComments = ref(0);

const listData = ref(dataList);

const getComments = async () => {
    const commentsUrl = "https://api.github.com/repos/tenpetal/blogCommont/issues";
    let comments = 0;
    let messageComments = 0;

    const resp = await fetch(commentsUrl).then((data) => data.json()).catch(e => alert(e));

    resp.forEach((item, index) => {
        let title = item.title.split('/')[1];
        let num = item.title.split('/')[2];
        if (title === 'message') {
            messageComments = item.comments;
        } else if (title === 'blog') {
            title += '/' + num;
            for (let i = 0; i < listData.value.length; i++) {
                if ('/' + item.title === listData.value[i].path) {
                    listData.value[i].comments = item.comments;
                }
            }
        }
        comments += item.comments;
    });
    allComments.value = comments;
}

onMounted(() => {
    getComments();
    // startSakura();
});


</script>
<template>
    <div class='home-container'>
        <Layout>
            <template #content>
                <!-- 需要时可以将全部留言数量传入留言板页面 -->
                <Content :listData="listData" />
            </template>
            <template #aside>
                <Aside :listData="listData" :allComments="allComments" :allArticleNums="allArticleNums" />
            </template>
            <!-- <template #footer>
                <Footer />
            </template> -->
        </Layout>
    </div>
</template>

<style scoped>

</style>