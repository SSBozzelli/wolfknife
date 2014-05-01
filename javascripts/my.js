$(document).ready(function(){
    $(".submitButton").mouseenter(function(){
        $(".submitButton").fadeTo("slow",1);
    });
    $(".submitButton").mouseleave(function(){
        $(".submitButton").fadeTo("slow",0.5);
    });
    
});