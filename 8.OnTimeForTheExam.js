function onTimeForTheExam(input) {
    let examHour = Number(input[0]);
    let examMins = Number(input[1]);
    let hourArrival = Number(input[2]);
    let minsArrival = Number(input[3]);
  
    let examTime = examHour * 60 + examMins;
    let arrivalTime = hourArrival * 60 + minsArrival;
    let timeDifference = examTime - arrivalTime;
  
    if (timeDifference < 0) {
      console.log("Late");
      if (timeDifference <= -60) {
        let hours = Math.floor(Math.abs(timeDifference) / 60);
        let minutes = Math.abs(timeDifference) % 60;
        console.log(`${hours}:${minutes.toString().padStart(2, "0")} hours after the start`);
      } else {
        console.log(`${Math.abs(timeDifference)} minutes after the start`);
      }
    } else if (timeDifference <= 30) {
      console.log("On time");
      if (timeDifference !== 0) {
        console.log(`${timeDifference} minutes before the start`);
      }
    } else {
      console.log("Early");
      if (timeDifference >= 60) {
        let hours = Math.floor(timeDifference / 60);
        let minutes = timeDifference % 60;
        console.log(`${hours}:${minutes.toString().padStart(2, "0")} hours before the start`);
      } else {
        console.log(`${timeDifference} minutes before the start`);
      }
    }
  }

OnTimeForTheExam (["9","30","9","50"])

OnTimeForTheExam (["9","00","8","30"])

OnTimeForTheExam (["16","00","15","00"])

OnTimeForTheExam (["10","00","10","00"])
