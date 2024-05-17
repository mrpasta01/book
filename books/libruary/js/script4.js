function cheack(id, id2){
    if(id=='' || isNaN(id)){
        alert('Введите первый номер книги!')
        document.querySelector('[name=id]').focus()
        return
    }
    if(id2=='' || isNaN(id2)){
        alert('Введите второй номер книги!')
        document.querySelector('[name=id2]').focus()
        return
    }
    if(id2>18 || id>18){
        alert('книг всего 18!')
        document.querySelector('[name=id2]').focus()
        return
    }
    if(id2<1 || id<1){
        alert('Отсчёт с 1!')
        document.querySelector('[name=id2]').focus()
        return
    }		
}
   
function load_books(){
	let id = document.querySelector('[name=id]').value.trim()
	let id2 = document.querySelector('[name=id2]').value.trim()
    cheack(id, id2)
		$.ajax({
		//url: 'http://172.17.4.160/books/api_libruary/get_books_2book.php?id='+id+'&id2='+id2,
		url: 'http://217.71.129.139:4589/books/api_libruary/get_books_2book.php?id='+id+'&id2='+id2,
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
				$(document).scrollTop(0)
			})
		}
	});
}