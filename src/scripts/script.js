function generateRandomSequence() {
    document.getElementById("statusText").innerHTML = "Executing";
    document.getElementById("outputText").innerHTML = "";
    const inputRange = document.getElementById('inputRange').value;
    let arr = [];
    for (let i = 1; i <= inputRange; i++) {
        arr.push(i);
    }
    shuffle(arr);
    for (let i = 0; i < arr.length; i++) {
        document.getElementById("outputText").innerHTML += arr[i] + "<br/>";
    }
    setTimeout(function () {
        document.getElementById("statusText").innerHTML = "Execution completed";
    }, 500);
}

function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const randomIndex = Math.abs(Math.ceil(Math.random() * i - 0.5));
        const temp = arr[i];
        arr[i] = arr[randomIndex];
        arr[randomIndex] = temp;
    }
}

function resetForm() {
    document.getElementById('inputRange').value = "";
    document.getElementById("outputText").innerHTML = "";
    document.getElementById("btnShuffle").setAttribute("disabled", true);
    document.getElementById("statusText").innerHTML = "Ready";
}