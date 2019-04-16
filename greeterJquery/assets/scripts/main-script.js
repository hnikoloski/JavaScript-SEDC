$(document).ready(function() {

    $("button").first().click(function() {
        let input = $("input").val()
        $("h1:eq(1)").first().text(`Hello there ${input}`)
    })

});