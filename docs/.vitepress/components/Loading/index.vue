<script setup>
</script>
<template>
    <div class="loading-container">
        <ul>
            <li></li>
            <li></li>
        </ul>
    </div>
</template>
<style lang='less' scoped>
ul,
li {
    margin: 0;
    padding: 0;
    list-style: none;
}
@media all and (max-width: 576px) {
    .loading-container {
        ul {
            li {
                width: 30px !important;
                height: 30px !important;
            }
        }
    }
}

.loading-container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%);
    ul {
        width: 104px;
        height: 35px;
        display: flex;
        justify-content: space-around;
        li {
            border-radius: 5px;
            perspective: 200px;
            width: 35px;
            height: 35px;
            background: rgba(127, 209, 209, 0.96);
            animation: jump 0.4s ease-in-out infinite alternate;
            &:last-child {
                animation-delay: 0.1s;
            }
        }
    }
}

@keyframes jump {
    0% {
        transform: scale(1) translateY(0) rotateX(0);
        box-shadow: 0 0 0px transparent;
    }
    100% {
        transform: scale(1.2) translateY(-45px) rotateX(45deg);
        box-shadow: 1px 55px 50px rgba(124, 138, 138, 0.607);
    }
}
</style>