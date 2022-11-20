function timePlus15Mins (input) {
    let hour = Number(input[0]); 
    let mins = Number(input[1]); 
    let totalTime = hour * 60 + mins + 15;
    let hours = Math.trunc(totalTime / 60); 
    let minutes = totalTime % 60; 

    if (hours === 24 && minutes < 10) {
        console.log(`0:0${minutes}`);
    } else if (hours === 24) {
        console.log(`0:${minutes}`)
    }
    
    else if (minutes < 10) { 
        (console.log(`${hours}:0${minutes}`))
    } else {
        console.log(`${hours}:${minutes}`)
    }

    }

timePlus15Mins ([23, 46])