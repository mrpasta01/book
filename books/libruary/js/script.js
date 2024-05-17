let offset = 0

function next(){
	offset +=9	
load_books();
}

function prev(){
offset -=9
load_books();
}

function load_books(){
	if(offset==0)	$('#but_prev').attr('disabled', true)
	if(offset>1)	$('#but_prev').attr('disabled', false)
	if(offset==9) 	$('#but_next').attr('disabled', true)
	if(offset<9) 	$('#but_next').attr('disabled', false) 
		$.ajax({
		//url: 'http://172.17.4.160/books/api_libruary/get_books.php?count=9&offset='+offset,
		url: 'http://217.71.129.139:4589/books/api_libruary/get_books.php?count=9&offset='+offset,
		method: 'get',  
		dataType: 'json',
		success: function(data){
		$('#books').html('')
			data['books'].forEach(function(book){
				let div = $('<div class="book">')
				div.append('<h4 class="ustal">'+book['Author']+', '+book['Year']+' год </h4>')
				div.append('<div class="foto"><a href="'+book['URL']+'" target="kniga" title="Перейти к книге"><img src="'+book['POSTER']+'"></a></div>')
				div.append('<p class="ustal">'+book['Title']+'</p>')
				$('#books').append(div)
			})
		}
	});
}
