export const scrollToTop = () => {
    window.scroll({
        top: 0,
        left: 0,
        // behavior: 'smooth',
    });
}

export const getMaxVideoHeight = () => {
    let height = window.innerWidth * 0.9 / 1.77777777;

    height = height > 506 ? 506 : height;

    return height;
}

export const getMaxVideoWidth = () => {
    let width = window.innerWidth * 0.9;

    width = width > 900 ? 900 : width;

    return width;
}

export const isMobileDevice = () => {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
};

export const convertFromMilitaryTime = (time) => {
    let intTime = parseInt(time, 10);
    let suffix = ':00 AM CST';


    if (intTime > 11) {
        suffix = ':00 PM CST';

        if (intTime > 12) {
            intTime -= 12;
        }
    }

    return intTime + suffix;
}