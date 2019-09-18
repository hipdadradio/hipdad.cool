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