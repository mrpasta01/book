<?php
require_once 'config.php';

$id_book = intval($_GET['id']);
$id_book2 = intval($_GET['id2']);

$sql = 'SELECT `ID`, `Title`, `Author`, `YEAR`, `POSTER`, `URL` FROM `books` WHERE `ID` = ' . $id_book;
$sql2 = 'SELECT `ID`, `Title`, `Author`, `YEAR`, `POSTER`, `URL` FROM `books` WHERE `ID` = ' . $id_book2;

$result = $conn->query($sql)->fetch();
$result2 = $conn->query($sql2)->fetch();
	$Author = $result['Author'];
	$Title = $result['Title'];
	$ID = $result['ID'];
	$YEAR = $result['YEAR'];
	$POSTER = $result['POSTER'];
	$URL= $result['URL'];
	
	$Author2 = $result2['Author'];
	$Title2 = $result2['Title'];
	$ID2 = $result2['ID'];
	$YEAR2 = $result2['YEAR'];
	$POSTER2 = $result2['POSTER'];
	$URL2 = $result2['URL'];
$result_Itog = '{"books": [';
$result_Itog .= sprintf('{"Author":"%s", "Title":"%s", "Year":"%d", "id":%d, "POSTER":"%s", "URL":"%s"}', $Author, $Title, $YEAR, $ID, $POSTER, $URL);
$result_Itog .= ',';
$result_Itog .= sprintf('{"Author":"%s", "Title":"%s", "Year":"%d", "id":%d, "POSTER":"%s", "URL":"%s"}', $Author2, $Title2, $YEAR2, $ID2, $POSTER2, $URL2);
$result_Itog .= ']}';

echo $result_Itog;
?>