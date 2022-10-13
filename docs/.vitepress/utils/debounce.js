

export const throttle = (fn, duration = 1000) => {
    let flg = true;
    return () => {
        if (flg) {
            flg = false;
            setTimeout(() => {
                fn();
                flg = true;
            }, duration)
        }
    }
}




