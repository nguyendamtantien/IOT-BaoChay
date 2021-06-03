(function() {
    // Set the configuration for your app
    var config = {
        apiKey: "AIzaSyAXP1MiFP4Ykzdc4a10AaGctM4lcF71lWs",
        authDomain: "testesp-1cfa5.firebaseapp.com",
        databaseURL: "https://testesp-1cfa5-default-rtdb.firebaseio.com",
        projectId: "testesp-1cfa5",
        storageBucket: "testesp-1cfa5.appspot.com",
        messagingSenderId: "1055663520458",
    };

    firebase.initializeApp(config);

    // Get a reference to the database service
    var database = firebase.database();

    // Get element from the DOM
    const tempElement = document.getElementById('temperature');
    const humElement = document.getElementById('humidity');

    // Create temperature database reference
    const tempRef = database.ref('dht11').child('temperature');

    // Create humidity database reference
    const humRef = database.ref('dht11').child('humidity');

    // Sync objects changes
    tempRef.limitToLast(1).on('value', function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
            var childData = childSnapshot.val();
            console.log("temperature: " + childData);
            tempElement.innerText = childData;
        });
    });
    humRef.limitToLast(1).on('value', function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
            var childData = childSnapshot.val();
            console.log("humidity: " + childData);
            humElement.innerText = childData;
        });
    });
}());
