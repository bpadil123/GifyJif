//Array of strings


//new button
$(document).ready(function () {
    var currentButtons = ["dumb and dumber", "night at the roxbury", "little rascals"];

    //on click of button append new 
    // $('#submitnew').on('click', function (event) {
    //     event.preventDefault();
    //     var newButton = $('<input type="button" value=""/>');
    //     $("#moviebutt").append(newButton);
    // });


    // function renderButtons (){
    //     $("#animal-div").empty();
    //     for (var i=0; i < topics.length; i++){
    //         var a = $("<button>");
    //         a.addClass("animal-button");
    //        a.attr("data-name", topics[i]);
    //        a.text(topics[i]);
    //        $("#animal-div").append(a);
    //     }
    //  }
    //  $("#addAnimal").on("click", function(event){
    //     event.preventDefault();
    //     var topic = $("#animal-input").val().trim();
    //     topics.push(topic);
    //     renderButtons();
    //       });

    //       renderButtons();
    function loadButtons() {
        for (i = 0; i < currentButtons.length; i++) {
            $("#buttons-view").empty();

            var currentMovButton = $("<button>");
            currentMovButton.addClass("buttonsubmit")
            currentMovButton.attr("data-name", currentButtons[i])
            currentMovButton.text(currentButtons[i])
            $("#moviebutt").append(currentMovButton)

        }
        };
        $("#gifsearch").on("click", function (event) {
            event.preventDefault();
            var movieName = $("#gifserach").val().trim();
            currentButtons.push(movieName);
            loadButtons();
    });
    
    $(document).on("click", ".buttonsubmit", function () {
        var movieName = $(this).attr("data-name");
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
            movieName + "&api_key=ETLw9hz5Fd9LgfoFn7Fvgne4J6afZa4e&limit=10";
        console.log(queryURL);
        // Performing an AJAX request with the queryURL
        $.ajax({
            url: queryURL,
            method: "GET",
        }).then(function (response) {
            console.log(response)

            for (i = 0; i < response.data.length; i++) {

                var gifDiv = $("<div class = 'gifdiv'>");
                var rating = response.data[i].rating;
                var p = $("<p class = 'rating'>").text("rating-" + rating);
                gifDiv.append(p);
                var image = $("<img class = 'gifclass'>");
                image.attr("src", response.data[i].images.fixed_height_still.url);
                gifDiv.append(image);
                $("#moviesgif").append(gifDiv);

                $("#moviesgif").prepend(gifDiv);

            }
        });
        // Create new button

        $(document).on("click", ".movie-btn", displayMovieInfo);

    });
    //
    loadButtons();
});
//go through array of strings
// var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
// //         newMovie + "&api_key=ETLw9hz5Fd9LgfoFn7Fvgne4J6afZa4e&limit=10";

//     // Performing an AJAX request with the queryURL
//     $.ajax({
//             url: queryURL,
//             method: "GET"
//         })

// Adding click event listen listener to all buttons
// $("button").on("click", function () {
//     // Grabbing and storing the data-animal property value from the button
//     var newMovie = $(this).attr("");
//     console.log(newMovie);
//     // Constructing a queryURL using the animal name
//     var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
//         newMovie + "&api_key=ETLw9hz5Fd9LgfoFn7Fvgne4J6afZa4e&limit=10";

//     // Performing an AJAX request with the queryURL
//     $.ajax({
//             url: queryURL,
//             method: "GET"
//         })
//         // After data comes back from the request
//         .then(function (response) {
//             console.log(response)

//             //  var response = response.data
//             //  for (i=0;i<response.data;i++)
//             //  {$("#animals").html(response.data)}
//             //  console.log(results)
//         });
// });


//:)