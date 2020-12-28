window.addEventListener("DOMContentLoaded", function () {
    let elem = document.querySelector(".header div");
    let show = setInterval(showText, 3);
    let percentage = 0;

    function showText() {
        if (percentage === 300) {
            clearInterval(show);
        } else {
            percentage += 1;
            elem.style.backgroundImage = "linear-gradient(135deg, transparent, black " + percentage + "%)";
        }
    }
});

function getTopDistance(element) {
    let distances = element.getBoundingClientRect();
    return distances.top;
}

let pageActualScroll = 0;
let fasterContent = document.querySelectorAll(".faster-scroll");
let opacityContent = document.querySelectorAll(".opacity-scroll");
window.addEventListener("scroll", function (e) {
    for (let i = 0; i < fasterContent.length; i++) {
        let valueOfTop = getTopDistance(fasterContent[i]);
        if (valueOfTop <= (screen.height / 2)) {
            fasterContent[i].style.transform = "translateY(-" + (window.pageYOffset / 1.5) + "px)";
        } else {
            fasterContent[i].style.transform = "translateY(0)";
        }
    }
    // for (let j = 0; j < opacityContent.length; j++) {
    //     let valueOfTop = getTopDistance(fasterContent[j]);
    //     if (valueOfTop <= (screen.height / 2)) {
    //         fasterContent[j].style.transform = "translateY(-" + (window.pageYOffset / 1.5) + "px)";
    //     } else {
    //         fasterContent[j].style.transform = "translateY(0)";
    //     }
    // }
})
