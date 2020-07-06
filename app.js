function change(){
    var ageEntered = document.getElementById("dob").value
    var age = new Date(ageEntered)
    var agemili = age.getTime();
    var today = new Date();
    var todaymili = today.getTime();
    var diff = todaymili - agemili;
    var correctage = diff/(1000*60*60*24*30*12)
    var ageYear = Math.floor(correctage)
    document.getElementById("years").value = ageYear;
    //   Age In Months Calculation
    var correctage = diff/(1000*60*60*24*30)
    var ageMonths = Math.floor(correctage)
    document.getElementById("month").value = ageMonths + " Months";
    // Age In Days Calculation
    var correctage = diff/(1000*60*60*24)
    var ageDays = Math.floor(correctage)
    document.getElementById("days").value = ageDays + " Days";
    // Age In Minutes Calculation
    var correctage = diff/(1000*60*60)
    var ageMinutes = Math.floor(correctage)
    document.getElementById("minutes").value = ageMinutes + " Minutes";
     // Age In Secons Calculation
     var correctage = diff/(1000*60)
     var ageSeconds = Math.floor(correctage)
     document.getElementById("seconds").value = ageSeconds + " Seconds";

   
}
