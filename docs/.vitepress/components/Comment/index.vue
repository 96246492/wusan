<script setup>
import { ref, onMounted, watchEffect } from 'vue';
import { useRoute } from "vitepress";
const utterances = ref('utterances');
const route = useRoute();

const theme = ref();

onMounted(() => {

    let html = document.getElementsByTagName('html')[0];
    theme.value = html.className === 'dark' ? html.className : 'light';

    watchEffect(() => {
        let utterances = window.document.createElement('script')
        utterances.type = 'text/javascript'
        utterances.async = true;
        utterances.setAttribute('issue-term', 'pathname')
        utterances.setAttribute('theme', 'github-' + theme.value)
        utterances.setAttribute('repo', 'tenpetal/blogCommont')
        utterances.crossorigin = 'anonymous'
        utterances.src = 'https://utteranc.es/client.js'
        window.document.getElementById('comment').appendChild(utterances);
    })

    watchEffect(() => {
        let pathname = route.path.split('/');
        if (pathname.includes('blog')) {
            utterances.value.style.background = "var(vp-content-bg)";
            utterances.value.style.marginTop = "3rem";
        } else {
            utterances.value.style.background = "none";
        }
    })

    var options = {
        attributes: true,
        childList: true,
        subtree: true,
        attributeOldValue: true
    }

    let mutationObserver = new MutationObserver((mutationsList, observer) => {
        if (mutationsList[0].attributeName === 'class' && mutationsList[0].target.nodeName === 'HTML') {
            if (window.document.getElementById('comment')) {
                window.document.getElementById('comment').innerHTML = '';
            }
            if (mutationsList[0].oldValue === 'dark') {
                theme.value = 'light';
            } else {
                theme.value = 'dark';
            }
        }
    })
    mutationObserver.observe(html, options);
});


</script>
<template>
    <div v-lazy="'top'" ref="utterances" id="comment" class='utterances-container'>
    </div>
</template>

<style lang='less' scoped>
@media (max-width: 820px) {
    .utterances-container {
        background: transparent !important;
    }
}

.utterances-container {
    margin-top: 1rem;
}

.utterances {
    position: relative;
    box-sizing: border-box;
    width: 100%;
    max-width: 760px;
    margin-left: 0;
    margin-right: auto;
}

.utterances-frame {
    position: absolute;
    left: 0;
    right: 0;
    width: 1px;
    min-width: 100%;
    max-width: 100%;
    height: 100%;
    border: 0;
}
</style>

