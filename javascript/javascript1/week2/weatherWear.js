function getClothesToWear(temp) {
    if (temp <= 0) {
        return "winter jacket, shoes, gloves, and thermals"
    }
    else if (temp < 10) {
        return "shoes, gloves, winter jacket with hat "
    }
    else if (temp < 20) {
        return "Normal jacket, shoes"
    }
    else if (temp < 30) {
        return "long sleeved shirts and full length pants"
    }
    else {
        return "Short sleeved shirts and shorts"
    }
}
