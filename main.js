function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/GS7N0UgqJ/model.json", modelLoaded);
}

function modelLoaded(){
    classifier.classify(gotResults);
}

function gotResults(error, results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        var random_number_r = Math.floor(Math.random()*255) + 1;
        var random_number_g = Math.floor(Math.random()*255) + 1;
        var random_number_b = Math.floor(Math.random()*255) + 1;

        var times_bark_detected = 0;
        var times_meow_detected = 0;
        var times_roar_detected = 0;

        document.getElementById("timesAudioDetected_Bark").innerHTML = times_bark_detected;
        document.getElementById("timesAudioDetected_Meow").innerHTML = times_meow_detected;
        document.getElementById("timesAudioDetected_Roar").innerHTML = times_roar_detected;

        document.getElementById("soundHeard").innerHTML = results[0].label;

        document.getElementById("timesAudioDetected").style.color = "rgb("+random_number_r+", "+random_number_g+", "+random_number_b+")";
        document.getElementById("soundHeardHeading").style.color = "rgb("+random_number_r+", "+random_number_g+", "+random_number_b+")";

        

        if(results[0].label == "Barking"){
            document.getElementById("image").src = "dog.png";
            times_bark_detected += 1;
        }

        else if(results[0].label == "Meow"){
            document.getElementById("image").src = "cat.jpg";
            times_meow_detected += 1
        }

        else if(results[0].label == "Roar"){
            document.getElementById("image").src = "tiger.png";
            times_roar_detected +=  1
        }

        else{
            document.getElementById("image").src = "listen.gif";
        }
    }
}

