const no_of_row = 4;
const no_of_col = 3;
const photo_size = 500;
let counter = 0;

// add rows
for (let r = 1; r <= no_of_row; r++) {
	$(`#wrapper`).append(
		$("<div>", {
			class: "row row-cols",
		})
	);

	// adding cols and images
	for (let c = 1; c <= no_of_col; c++) {
		// col
		$(`#wrapper > .row:nth-child(${r})`).append(
			$("<col>", {
				class: "p-0 col m-2 bg-light",
			})
		);

		// images
		$(`#wrapper > .row:nth-child(${r}) > .col:nth-child(${c})`).append(
			$("<img>", {
				class: "w-100",
				src: `https://source.unsplash.com/random/${photo_size}x${photo_size}?sig=${++counter}`,
			})
		);
	}
}
