$(document).ready(function() {  
	if(navigator.userAgent.match(/(iPhone|iPad|iPod)/i)){ 
	 	$('.device').html('<a href="https://itunes.apple.com/ru/app/rcam/id741473886" class="btn btn-primary"><h4>Скачать приложение</h4><p>и опробовать все функции Rcam <br> на своем iPhone</p></a>');
	} else if(navigator.userAgent.match(/(Android)/i)){
		$('.device').html('<a href="https://play.google.com/store/apps/details?id=com.rstudio.rcam&hl=ru" class="btn btn-primary"><h4>Скачать приложение</h4><p>и опробовать все функции Rcam <br> на своем Android</p></a>');
	} else {
		$('.device').html('<a href="http://my.rcam.by " class="btn btn-primary"><h4>Скачать приложение</h4><p>и опробовать все функции Rcam <br> на своем мобильном устройстве</p></a>')
	}
});