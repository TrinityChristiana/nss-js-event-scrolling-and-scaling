const audrey = document.getElementById("audrey")

/*
    Add an event listener to the `document` object to listen
    for the "scroll" event.
*/
document.addEventListener("scroll", function () {
    /*
        Adjust the width of audrey to be 1/3 the value of
        `window.scrollY`. No lower than 50px, though.
    */
   let width = (window.scrollY / 3);
   width > 50 ? audrey.style.width = `${width}px`: audrey.style.width = `50px`;
   
    /*
        Adjust the height of audrey to be 1/4 the value of
        `window.scrollY`. No lower than 100px, though.
    */
   let height = (window.scrollY / 4);
   height > 100 ? audrey.style.height = `${height}px`: audrey.style.height = "100px";
});