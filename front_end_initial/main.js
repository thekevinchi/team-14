$(document).ready(() => {
	$(".measure_arrow").on("click", (e) => {
		let numberInput = $(e.currentTarget).parent().siblings(".measure_input")[0]
		let inputValue
		if (numberInput.value == "") {
			inputValue = 0
		} else {
			inputValue = parseInt(numberInput.value)
		}
		if ($(e.currentTarget).hasClass("up")) {
			inputValue++
		} else {
			inputValue--
		}
		if (inputValue < 0) {
			inputValue = 0
		}
		numberInput.value = inputValue
	})
})