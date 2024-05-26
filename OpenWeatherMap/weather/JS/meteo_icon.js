function getIconWithWeather(weatherDescription, hour) {
    const words = weatherDescription.split(" ")
    for (let word of words) {
        if (word.toLowerCase().includes("thunderstorm")) {
            return "../ressources/thunderstorm.png"
        }
    }

    switch(weather){
        case "thunderstorm with light rain":
        case "r":
            return "../ressources/thunderstorm.png"
        default:
            "../ressources/eclaircie.png"
    }
}