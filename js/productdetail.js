/**
 * Created by liguanghua on 2018/6/17.
 */
$(document).ready(function(){
    $(".pd-nav-title").click(function(){
        if(this.className.indexOf("pd-nav-active")==-1){
            $(".pd-nav-title").removeClass("pd-nav-active");
            $(this).addClass("pd-nav-active");
            $(".pd-nav-detail").hide();
            $(this).children(".pd-nav-detail").show();
        }
    });
});