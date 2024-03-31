/*
    This Havascript app uses the html5 text/calendar control 
    to provide two dates and work out the total number 
    of days between the two dates specified. 
    Javascript app written by Paul E. coke (c)2024
*/


function _(el){

    return document.getElementById(el);
}

//This function will convert the dates provided as 
//arguments, from the YYYY-MM-DD format, to the 
//YYYY/MM/DD with foreslashes
const convertDateValue = (val) =>{

    let arr = val.toString().split("-");
    let newArr = arr[0] + "/" + arr[1] + "/" + arr[2];

    return newArr;

}

const calcDateDiff = () =>{

    //Initialise the variable for 
    //the equivalent value of one day, 
    //date from and date to
    const oneDay = 24 * 60 * 60 * 1000; 
    const dateFrom = _('dateFrom').value;
    const dateTo = _('dateTo').value;

    /* If the date field values are NOT empty 
    we do the following... */
    if(dateFrom !== "" && dateTo !== ""){

    /* As referenced above we call our "convertDateValue"
    function to convert out date values to have a "/"
    delimiter instead of a "-" delimeter */
    let convDateFrom = convertDateValue(dateFrom);
    let convDateTo = convertDateValue(dateTo);

    //Here, we instantiate our date values 
    //with our converted date values 
    const dtFrom = new Date(convDateFrom);
    const dtTo = new Date(convDateTo);

    /* Finally, we calculate the date difference, by first 
    first rounding our total and making sure that we 
    render the total as a POSITIVE number by using the absolute 
    method in the math object, we then substract the date to
    value from the date from values and divide our "oneDay" variable */
    const numDays = Math.round(Math.abs(dtFrom - dtTo) / oneDay);



    /*Print the difference in days in the result div*/
    _('result').textContent = `Difference between the two dates: ${numDays.toString()} days`;

    }
     
}

//Add action listener to button 
_('btnCalc').addEventListener('click', calcDateDiff);

