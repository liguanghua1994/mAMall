$(document).ready(function(){
   $(".sl-filter-section").click(function(){
        if($(this).children("aside:last-child").is(":visible")){
            $(this).children("aside:last-child").slideUp();
        }else{
            $(".sl-filter-options").hide();
            $(this).children("aside:last-child").slideDown();
        }
   });

    $("#sl-filter").click(function(){
        var currentLeft=$("#sl-filter-aside").offsetLeft;
        console.log(currentLeft);
    });
});