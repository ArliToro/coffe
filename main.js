function getTopDistance(element) {
    let distances = element.getBoundingClientRect();
    return distances.top;
}

function getPercentage(content) {
    let movedPercentage = (content.getBoundingClientRect().top * 100 / innerHeight);
    return movedPercentage;
}

window.addEventListener("DOMContentLoaded", function () {
    let video = document.querySelector("video");
    let videoHeight = video.offsetHeight;
    document.querySelector(".show-video").style.height = videoHeight+"px";
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

let pageActualScroll = 0;
let percentageOfShowedText = 0;
let checkPageOfSet = pageYOffset;
let fasterContent = document.querySelectorAll(".faster-scroll");
let opacityContent = document.querySelectorAll(".opacity-scroll");
let allGradientsText = document.querySelectorAll(".show-text");
window.addEventListener("scroll", function (e) {
    for (let i = 0; i < fasterContent.length; i++) {
        if (getTopDistance(fasterContent[i]) <= (screen.height / 1.5)) {
            fasterContent[i].style.transform = "translateY(-" + pageYOffset * 1.65 + "px)";
        }
    }
    for (let j = 0; j < opacityContent.length; j++) {
        if (getPercentage(opacityContent[j]) < 70) {
            let actualPercentage = 70 - getPercentage(opacityContent[j]);
            opacityContent[j].style.opacity = actualPercentage / 30 + "";
        }
    }
    for (let m = 0; m < allGradientsText.length; m++) {
        if (getPercentage(allGradientsText[m]) < 70) {
            let actualPercentage = 70 - getPercentage(allGradientsText[m]);

            let show = setInterval(showText, 10);

            function showText() {
                if (percentageOfShowedText >= (actualPercentage * 200) / 30) {
                    clearInterval(show);
                } else {
                    percentageOfShowedText += 1;
                    allGradientsText[m].style.backgroundImage = "linear-gradient(135deg, transparent, black " + percentageOfShowedText + "%)";
                }
            }
        }
    }
})
