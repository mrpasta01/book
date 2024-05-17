<?php
	require_once 'config.php';
	
	$c = 9;
	$o = 0;
	if(isset($_GET['count']))	$c = intval($_GET['count']);
		if(isset($_GET['offset']))	$o = intval($_GET['offset']);
	
	$sql = sprintf('SELECT `ID`, `Title`, `Author`, `YEAR`, `POSTER`, `URL` FROM `books` LIMIT %d OFFSET %d', $c,$o);
	$books = $conn->query($sql);
	
	$result = '{"books": [';
	foreach ($books as $row){
	$Author = $row['Author'];
	$Title = $row['Title'];
	$ID = $row['ID'];
	$YEAR = $row['YEAR'];
	$POSTER =$row['POSTER'];
	$URL=$row['URL'];
	$result .= sprintf('{"Author":"%s", "Title":"%s", "Year":"%d", "id":%d, "POSTER":"%s", "URL":"%s"}, ', $Author,$Title,$YEAR,$ID,$POSTER,$URL);
	}
	$result = rtrim($result, ', ');
	$result .= ']}';
	echo $result;
?>
