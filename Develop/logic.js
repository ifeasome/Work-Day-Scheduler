$(document).ready(function() {
    $(currentDay).text(moment().format("MMMM, Do YYYY"));
})

let currentHour = moment().hour(); 

//the something needs to come from an array/object 
if something > currentHour {
    addclass .future
}

if something < currentHour {
    addclass .past 
}

if something === currentHour {
    addclass .present 
}

// saving hours to local storage 
$("hour9.description").val(localStorage.getItem("hour(")); // put the hourx ID's in the html it goies from 9- 17
