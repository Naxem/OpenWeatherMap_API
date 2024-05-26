function getIconWithWeather(weather, weatherDescription, night) {
    if(weather == "Thunderstorm") {
        return "../ressources/thunderstorm.png"
    } else if(weather == "Drizzle") {
        return "../ressources/thunderstorm.png"
    } else if(weather == "Rain") {
        switch(weatherDescription) {
            case "light rain":
            case "moderate rain":
                return "../ressources/pluie2.png"
            case "very heavy rain":
            case "extreme rain":
            case "heavy intensity rain":
            case "heavy intensity shower rain":
                return "../ressources/pluie.png"
            case "freezing rain":
                return "../ressources/pluie3.png"
            case "ragged shower rain":
            case "shower rain":
            case "light intensity shower rain":
                return "../ressources/pluie4.png"
            default:
                return "../ressources/pluie.png"
        }
    } else if(weather == "Snow") {
        switch(weatherDescription) {
            case "heavy shower snow":
            case "heavy snow":
                return "../ressources/neige2.png"
            case "light snow":
            case "snow":
            case "shower snow":
                return "../ressources/neige.png"
            case "sleet":
            case "light shower sleet":
            case "light rain and snow":
            case "rain and snow":
            case "light shower snow":
                return "../ressources/pluie_neige.png"
            default:
                return "../ressources/neige.png"
        }
    } else if(weather == "Mist") {
        return "../ressources/brouillard.png"
    } else if(weather == "Sand") {
        return "../ressources/sand.png"
    } else if(weather == "Clear") {
        if(night) {
            return "../ressources/n_clear.png"
        } else {
            return "../ressources/clear.png"
        }
    } else if(weather == "Clouds") {
        switch(weatherDescription) {
            case "few clouds: 11-25%":
            case "broken clouds: 51-84%":
            case "overcast clouds: 85-100%":
                if(night) {
                    return "../ressources/n_eclaircie.png"
                } else {
                    return "../ressources/eclaircie.png"
                }
            case "scattered clouds: 25-50%":
                if(night) {
                    return "../ressources/n_nuage.png"
                } else {
                    return "../ressources/nuage.png"
                }
        }
    }
}