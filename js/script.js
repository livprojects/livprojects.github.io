const app = {
    init: function () {

        app.menuAppears();

        const allLinks = document.querySelector('a');
        console.log(allLinks)
        for (let link of allLinks) {
            link.addEventListener('click', app.textDisappears)
        }


    },

    menuAppears: function () {
        const getNavId = document.getElementById('leftNavId')
        getNavId.classList.add('animate__animated'+'animate__fadeInLeft')


    },

    textDisappears: function () {
        const textBlock = document.getElementById('textBodyId');
        textBlock.classList.add('animate__bounceOutRight')
        

    }

}

document.addEventListener('DOMContentLoaded', app.init)