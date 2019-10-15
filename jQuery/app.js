$(document).ready(function () {
    // creates Nice button
    let button = $("<button>Nice Message</button>");
    $("body").append(button);

    // tells nice button to send alert with message on click
     $(button).click(function () {
        alert("This is a nice message!");
    });

    // pulls up an alert with the entry from the form
     $('#submitButton').click(function () {
        // prevents page from refreshing after form is submitted
        event.preventDefault();
        alertMessage = $('#textEntered').val();
        alert('You entered "' + alertMessage + '"');
    });

    //changes box to another color when mouse hovers over
    $('#box').mouseover(function () {
        $('#box').css({
            backgroundColor: 'rgba(21,253,253)'
        });
    });

    //changes box back to original color when mouse leaves
    $('#box').mouseout(function () {
        $('#box').css({
            backgroundColor: 'rgb(226,128,218)'
        });
    });

    //function to select a random color
    function selectRandomColor() {
        let randomColor = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
        return randomColor;
    }

    //assigns random color to paragraph when clicked
    $('#paragraph').click(function () {
        let randomColor = selectRandomColor();
        $('#paragraph').css("color", randomColor);
    });

    //name to site when Add My Name is clicked, only allows it to run once
    $('#addNameButton').one("click", function () {
        $('#nameDiv').append('<span>Chris Smith</span>');
    });

    // array of friends
    let friends = ["Emily", "Luke", "Audrey", "Oliver", "Julian", "Dolly","Girl Cat","June","Bernard","Chris"];

    //function for adding friend's name to list, only runs once
    $('#addFriendButton').one("click",function() {
        for (let i = 0; i < friends.length; i++) {
            $('#friendList').append(`<li>${friends[i]}</li>`)
        }
    });

});