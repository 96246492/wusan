
export let ob = null;

export const compLoaderLazy = (el, style) => {
    setTimeout(() => {
        switch (style) {
            case 'top':
                return el.style.transform = "translateY(0px)";
            case 'left':
                el.style.opacity = "1";
                el.style.transform = "translateY(0px)";
                break;
            case 'img' :
                el.style.transform = "scale(1)";
            default:
                el.style.transform = "translateY(0px)";
                break;
        }
    }, 10)
}

export const removeObserve = (el) => {
    ob.unobserve(el);
}

export const initLazyLoaderObserver = (style) => {
    // 这个原生对象在 @vueuse/core 中有封装版本。
    ob = new IntersectionObserver((entries, observe) => {
        entries.forEach((el) => {
            if (el.isIntersecting) {
                compLoaderLazy(el.target, style);
                removeObserve(el.target)
            } else {
                // console.log(el.isIntersecting)
            }
        })
    });
}


// 初始化效果
export function initElemStyle(el, style) {
    switch (style) {
        case 'top':
            el.style.transition = "cubic-bezier(0.23, 0.36, 0.46, 1.14) 0.6s";
            return el.style.transform = "translateY(45px)";
        case 'top1':
            el.style.transition = "cubic-bezier(0.23, 0.36, 0.46, 1.14) 0.77s";
            return el.style.transform = "translateY(50px)";
        case 'left':
            el.style.transition = "cubic-bezier(0.16, 0.25, 0.49, 1.02) 0.6s";
            el.style.transitonDuration = '0.5s';
            el.style.opacity = "0.1";
            return el.style.transform = "translateX(-50px)";
        case 'img':
            el.style.transform = `scale(0.1)`;
            el.style.borderRadius = '1rem';
            return el.style.transition = 'cubic-bezier(0.37, 0.1, 0.42, 1.3) 0.6s';
    }
}

// const isParentNodeDisplay = (el) => {
//     const display = window.getComputedStyle(el, null).display;
//     if (display === 'none') return true;
//     if (el.parentNode.tagName === 'BODY') {
//         return false;
//     } else {
//         isParentNodeDisplay(el.parentNode);
//     }
// }


const lazyLoadingPlugin = {
    install(app, options) {
        app.directive('lazy', {
            mounted: (el, binding) => {
                // console.log(isParentNodeDisplay(el));
                initElemStyle(el, binding.value);
                initLazyLoaderObserver(binding.value);
                ob.observe(el);
            }
        })
    }
}

export default lazyLoadingPlugin;


