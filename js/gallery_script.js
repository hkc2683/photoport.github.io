

const filterContainer = document.querySelector(".gallery__filter"),
galleryItems = document.querySelectorAll(".gallery__item");

filterContainer.addEventListener("click",(event) => {
    if (event.target.classList.contains("filter__item")){
        //deactiviating existing filter
        filterContainer.querySelector(".active").classList.remove("active");
        event.target.classList.add("active");
        const filterValue = event.target.getAttribute("data-filter");
        galleryItems.forEach((item) => {
            if (item.classList.contains(filterValue) || filterValue == 'all'){
                item.classList.remove("hide");
                item.classList.add("show");
            }
            else{
                item.classList.remove("show");
                item.classList.add("hide");
            }
        });
    }
});