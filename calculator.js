
function age_calculator(){
    let date = parseInt(document.getElementById("date").value);
    let month = parseInt(document.getElementById("month").value);
    let year = parseInt(document.getElementById("year").value);
    // console.log(isNaN(month));
    if(!isNaN(date) && !isNaN(month) && !isNaN(year)){
        document.getElementById("result").innerText = `Your Age is ${year} Years ${month} Months ${date} Days.`
    }
    else{
        let output = `Please input valid data for `;
        if(isNaN(date) && isNaN(month) && isNaN(year)){
            output += `Date field, Month field, Year field.`
        }
        document.getElementById("result").innerText = output;
    }
    

}