window.addEventListener("DOMContentLoaded", ()=> {
    const tabItems = document.querySelectorAll(".tabheader__item"),
        tabHeaderItems = document.querySelector(".tabheader__items"),
        tabContent = document.querySelectorAll(".tabcontent");

    function hideTabContent() {
        tabContent.forEach(item=> {
            item.classList.add("none");
            item.classList.remove("show","fade");
        })

        tabItems.forEach(item=> {
            item.classList.remove("tabheader__item_active");
        })
    }

    function showTabContent(i=0) {
        tabContent[i].classList.add("show","fade");
        tabContent[i].classList.remove("none");
        tabItems[i].classList.add("tabheader__item_active");
    }

    hideTabContent();
    showTabContent();

    tabHeaderItems.addEventListener("click", (event)=> {
        if(event.target && event.target.classList.contains("tabheader__item")) {
            tabItems.forEach((item,i)=> {
                if(event.target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            })
        }
    })


})