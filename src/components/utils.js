const getMinMainHeight = () => {
    if (typeof window !== "undefined") {
        const header = parseInt(window.getComputedStyle(document.querySelector('header')).height)
        // const footer = parseInt(window.getComputedStyle(document.querySelector('footer')).height)
        return (window.innerHeight - header)
    }
}

export {
    getMinMainHeight
}