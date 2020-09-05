const app = {
    init: function () {

        const getButton = document.getElementById('menuButton'); 
        getButton.addEventListener('click', app.menuAppears())




    },

    menuAppears: function () {
        const leftNav = document.getElementById('leftNavId')
        leftNav.style.display = 'block';


    },



}

document.addEventListener('DOMContentLoaded', app.init)