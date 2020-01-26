$(function () {
    $(".create-form").on("submit", function (event) {
        event.preventDefault();

        var newBurger = {
            burger_name: $("#newBurger").val().trim(),
            devoured: 0
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function () {
            console.log("Added new burger");
            location.reload();
    
        });
    });

    $("#eatbutton").on("click", function (event) {
        event.preventDefault();

        var id = $(this).data("id");
        var isDevoured = {
            devoured: 1
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: isDevoured
        }).then(function () {
            console.log("Burger Devoured");
            location.reload();
        });
    });
});
