function validatePass()
	{

	    var pass1 = document.getElementById('password');
	    var pass2 = document.getElementById('password2');
	        var message = document.getElementById('confirmMessage');
	    var goodColor = "#2c9c49";
	    var badColor = "#ff6666";
	   
	    if(pass1.value == pass2.value)
	    {
	        pass2.style.backgroundColor = goodColor;
	        message.style.color = goodColor;
	        message.innerHTML = "&#x2713 Passwords Match!";
	    }
	    else
	    {
	        pass2.style.backgroundColor = badColor;
	        message.style.color = badColor;
	        message.innerHTML = "&#x1f6ab Passwords Do Not Match!";
	    }
	}  


$(document).ready(function(){
    $(".logbutton").mouseenter(function(){
    	$(this).animate({
    		width:  "+=10px",
    		height: "+=10px"});
 
    });
    $(".logbutton").mouseleave(function(){
    	$(this).animate({
    		width:  "-=10px",
    		height: "-=10px"}); 
    });
});

$(document).ready(function(){
    $(".submitButton").mouseenter(function(){
        $(this).fadeTo("slow",1);
    });
    $(".submitButton").mouseleave(function(){
        $(this).fadeTo("slow",0.5);
    });
});
