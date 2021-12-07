<?php // needed to denote PHP file
	// added 10 names, now array of 40 names
	$names = array("Amanda", "Anna", "Barbara", "Brittany", "Cinderella", "Cindy", "Diana", "Doris", "Elizabeth", "Ellen", "Eva", "Eve", "Evita", "Francine", "Fiona", "Gina", "Gunda", "Hege", "Helen", "Inga", "Iris", "Jane", "Johanna", "Kathy", "Kitty", "Linda", "Liza", "Nancy", "Nina", "Olivia", "Ophelia", "Petunia", "Raquel", "Samantha", "Sunniva", "Tove", "Unni", "Vicky", "Violet", "Wenche");
	
	$request = $_REQUEST["request"]; // get value of request variable in AJAX call
	$name = ""; // variable for text to display
	
	if($request !== "") {
		foreach($names as $n) { // enhanced for loop for iterating through names array, with current iterator being stored at n
			// format: substr_compare(string main_str, string str, int offset, int length, bool case_insensitivity)
			if(substr_compare($n, $request, 0, strlen($request), true) === 0) { // returns 0 if match, < 0 if less than, > 0 if greater
				if($name === "") {
					$name = $n;
				} else {
					$name .= ", $n"; // .= is the PHP concatenate operator, also note how it can parse variable names from strings
				}
			}
		}
	}
	
	echo $name === "" ? "No suggestion" : $name; // Displays nothing if no match, otherwise displays all matched names
?>
