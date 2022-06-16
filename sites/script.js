function detectMob() {
    const toMatch = [
        /Android/i,
        /iPhone/i,
        /iPod/i,
        /BlackBerry/i,
        /Windows Phone/i
    ];

    return toMatch.some((toMatchItem) => {
        return navigator.userAgent.match(toMatchItem);
    });
}
console.log("detectMob return value:")
console.log(detectMob());
var theme = document.getElementsByTagName('link')[0];
if (detectMob() == true) {
    theme.setAttribute('href', '../mobile.css');
} 