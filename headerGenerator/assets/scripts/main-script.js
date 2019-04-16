$(document).ready(function() {
    $("button").first().click(function() {
        let inputText = $(".inputText").val();
        let inputColor = $(".inputColor").val();

        if (inputText === '' || inputColor === '') {
            $("h3").first().text(`Please enter something`);

        } else {
            $("h1").first().text(inputText).css('color', inputColor);
            $("h3").first().hide();
        }

    })
});