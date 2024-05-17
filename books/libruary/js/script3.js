let count = 0
function cheack(count){
    if(count=='' || isNaN(count)){
        alert('Введите кол-во книг!')
        document.querySelector('[name=count]').focus()
        return
    }
}
   
function load_books(){
	let count = document.querySelector('[name=count]').value.trim()
    cheack(count)
		$.ajax({
		//url: 'http://172.17.4.160/books/api_libruary/get_bookss.php?count='+count+'&offset=0',
		url: 'http://217.71.129.139:4589/books/api_libruary/get_bookss.php?count='+count+'&offset=0',
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
