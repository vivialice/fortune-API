<?php 

	$thing = file_get_contents('http://www.astrology.com/horoscopes/daily-horoscope.rss');
	$xml = simplexml_load_string($thing);
	$json = json_encode($xml);
	echo $json;