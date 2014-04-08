$(document).ready(function(){
	$('#werewolf').click(function(){
		$('#pic').html('<img src=http://fc05.deviantart.net/fs13/i/2009/055/a/5/Werewolf_by_Lintufriikki.jpg>')
	}
}

}
function clearPics(){
	var pic_div = document.getElementById('pic')
	pic_div.innerHTML = ' ';
}