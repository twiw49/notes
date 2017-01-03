<?php

	// Constants
	define("TITLE", "Arrays");
	
	// Variables
	$my_name	= "Brad Hussey";
	
	// Arrays
		// basic array
	$age_group = array("child", "teenager", "adult");
	
		// associative array
	$handlebar = array(
					"name"		=> "Handlebar",
					"colour"	=> "black"
				 );
	
		// multi-dimensional array
	$gentlemen = array (

					array (
						"first_name"		=> "Carter",
						"country"			=> "Canada"
					),
					array (
						"first_name"		=> "Rodrigo",
						"country"			=> "Uruguay"
					),
					array (
						"first_name"		=> "Giovanni",
						"country"			=> "Italy"
					)

			  );
?>


<body>
	<!-- constatnt / variable / array -->
	<?php echo TITLE; ?>
	<?php echo $my_name; ?>
	<?php echo $age_group[1]; ?>
	<?php echo $gentlemen[0][first_name]; ?>

	<!-- IF statement -->
	<?php 
		$a = 20;
		$b = 50;
		if ( $a < $b ) {
			echo "Yep! $a is certainly less than $b.";
		}
	?>

	<?php 
		$fav_fruit = "orange";
		if ($fav_fruit == "pineapple") {
			echo "Your favorite fruit is pineapple.";
		} else {
			echo "So, you like orages..";
		}
	?>

	<?php  
		$native_language = "Spanish";
		if ($native_language == "French") {
			echo "Bonjour! Vouz parlez Fran&ccedil;ais.";
		} elseif ($native_language == "Spanish") {
			echo "&iexcl;Hola! Usted habla Espa&ntilde;ol.";
		} elseif ($native_language == "Arabic") {
			echo "You can speak an awesome language. Arabic!";
		} else {
			echo "Hello! You probably speak English.";
		}
	?>

	<!-- Comparison Operators -->
	<?php
		$myName = "Brad" /* assignment */
		$a == $b /* Equal */
		$a === $b /* Identical (equal and same type) */
		$a != $b /* Not equal */
		$a <> $b /* Not equal */
		$a !== $b /* Not identical */
		$a < $b /* less than */
		$a > $b /* greater than */
		($a <= $b) /* less than or equal to */
		$a >= $b /* greater than or equal to */
	?>

	<!-- Logical Operators -->
	<?php 
		$a and $b
		$a or $b
		!$a
		$a && $b
		$a || $b
	?> 

	<!-- Arithmetic Operators -->
	<?php  
		$a + $b
		$a - $b
		$a * $b
		$a / $b
		$a % $b
	?>

	<!-- String Operators -->
	<?php  
		$a = "Hola";
		$b = "Mi Amigos!"; /* "Hola Mi Amigos!*/
		$c = $a . ' ' . $b;
		$d = "Hola ";
		$d .= "Mi Amigos!"
	?>

	<!-- Assignment Operators -->
	<?php  
		$a += $b	/* 	$a = $a + $b		Addition */
		$a -= $b	/* 	$a = $a - $b		Subtraction */
		$a *= $b	/* 	$a = $a * $b		Multiplication */
		$a /= $b	/* 	$a = $a / $b		Division */
		$a %= $b	/* 	$a = $a % $b		Modulus */
		$a .= $b	/* 	$a = $a . $b		Concatenation */
		$a++
		$a--
	?>

	<!-- While Loop -->
	<?php  
		$startingNum = 10;
		while ( $startingNum <= 20 ) {
			echo $startingNub . "<br>";
			$startingNum++;
		}
	?>

	<!-- For Loop -->
	<?php  
		for ($a = 0; $a <= 20; $a++) {
    	echo "Number: $a <br>";
 		}
	?>

	<!-- Fooeach Loop -->
	<?php  
		$moustaches = array("Handlebar", "Salvador Dali", "Fu Manchu");

		foreach ($moustaches as $moustache) {
			echo "I love the $moustache <br>."
		}
	?>

	<!-- Do/While Loop -->
	The Do While Loop is a bit like the While Loop, but there's one major difference: the While Loop will only start if the condition is TRUE; whereas the Do While Loop will always execute the first time, and then evaluate whether the condition is TRUE afterwards.
	
	<?php  
		$i = 1;
		do {
			echo "Number: $i <br>";
			$i++;
		} while ($i <= 10);
	?>

	<!-- Built_in Functions -->
	<?php  
		$dinner = array("Meat", "Potatoes", "Beans", "Rice");
		sort($dinner); /* alphabetical order */
		rsort($dinner) /* reverse order */
		foreach ($dinner as $ingredient) {
	    echo "$ingredient <br>";
		}

		$text = "Twinkle Twinkle little STAR!";
		$text = strtolower($text);
		echo $text;

		$password = "MyPassword";
		$password = sha1($password);		
		echo $password;
	?>

	<!-- Custom Functions -->
	<?php  
		/* Build the function */
		function functionName() {
			//code
		}

		/* Call the function */
		functionName();
	?>

	<!-- One Argument -->
	<?php  
		function hangTen($location) {
			echo "We are surfing in $location!<br>";
		}

		hangTen("Hawaii");
		hangTen("California");
		hangTen("Newfoundland"); 
		/*	We're surfing in Hawaii!
				We're surfing in California!
				We're surfing in Newfoundland!	*/
	?>

	<!-- Two Arguments -->
	<?php  
		function multiplyTogether($var1, $var2) {
			$product = $val1 * $val2;
			echo "The product of the two numbers is: $product";
		}

		multiplyTogether(14, 27);
		/*	The product of the two numbers is: 378	*/
	?>
</body> 