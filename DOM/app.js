document.addEventListener("DOMContentLoaded", function () {
    let button = document.createElement("button");
    document.body.appendChild(button);
    let button1Text = document.createTextNode("Nice Message");
    button.appendChild(button1Text);

    button.addEventListener("click", function () {
        alert("This is a nice message!");
    });

    submitButton.addEventListener("click", function () {
        alertMessage = document.getElementById("textEntered").value;
        alert('You entered "' + alertMessage + '"');
    });

    box.addEventListener("mouseover", function () {
        document.getElementById("box").style.backgroundColor = "rgb(21,253,253)";
    });

    box.addEventListener("mouseout", function () {
        document.getElementById("box").style.backgroundColor = "rgb(226,128,218)";
    });

    function selectRandomColor() {
        let randColor = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
        return randColor;
    }

    paragraph.addEventListener("click", function () {
        let randomColor = selectRandomColor();
        document.getElementById("paragraph").style.color = randomColor;
    });

    function oneAddName() {
        let spanName = document.createElement("span");
        nameDiv.appendChild(spanName);
        let myName = document.createTextNode("Chris Smith");
        spanName.appendChild(myName);
        addNameButton.removeEventListener("click", oneAddName);
    }

    addNameButton.addEventListener("click", oneAddName);

    let friends = ["Emily", "Luke", "Audrey", "Oliver", "Julian", "Dolly","Girl Cat","June","Bernard","Chris"];

    function friendListFunction() {
        for (let i=0; i < friends.length; i++) {
            let friendItem = document.createElement("li");
            friendList.appendChild(friendItem);
            let friendName = document.createTextNode(friends[i]);
            friendItem.appendChild(friendName);
        }
        addFriendButton.removeEventListener("click", friendListFunction);
    }

    addFriendButton.addEventListener("click", friendListFunction);

});