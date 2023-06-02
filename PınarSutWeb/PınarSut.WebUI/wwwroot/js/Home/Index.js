
$(document).ready(function () {

    console.log("document ready!");
    console.log(window);

    window.onresize = myfunction;
    function myfunction() {
        //console.log(window.screen.width);
        //console.log(window.innerWidth);
        if (window.innerWidth < 768) {
            console.log("768");

            //// $().toggleClass 
            //$("#carousel-ID").removeClass("position-relative");
            //$("#navbar").removeClass("position-absolute");
            //$("#navbar-links").addClass("align-items-center");
        }
        else {
            //$("#carousel-ID").addClass("position-relative");
            //$("#navbar").addClass("position-absolute");
        }
    }



});