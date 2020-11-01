$(document).ready(function () {
  // displays the current date at the header section
  $(currentDay).text(moment().format("MMMM, Do YYYY"));

  $(".saveBtn").on("click", function () {
    let text = $(this).siblings (".description").val();
    console.log($(this));
    let time = $(this).parent().attr("id");
   // window.localStorage.setItem("time", JSON.stringify(text));
   localStorage.setItem(time, text);
   console.log(time, text);
  });

  // saving hours to local storage and getting it
  $("#9-text").val(localStorage.getItem("hour-9"));
  $("#10-text").val(localStorage.getItem("hour-10"));
  $("#11-text").val(localStorage.getItem("hour-11"));
  $("#12-text").val(localStorage.getItem("hour-12"));
  $("#13-text").val(localStorage.getItem("hour-13"));
  $("#14-text").val(localStorage.getItem("hour-14"));
  $("#15-text").val(localStorage.getItem("hour-15"));
  $("#16-text").val(localStorage.getItem("hour-16"));
  $("#17-text").val(localStorage.getItem("hour-17")); 

  function hourTracker() {
    let currentHour = moment().hours();
    // console.log(currentHour);
    //the something needs to come from an array/object
    // let's try looping
    $(".time-block").each(function () {
      console.log($(this));
      let timeHour = parseInt($(this).attr("id").split("-")[1]); // add in the if-else statement

      if (timeHour < currentHour) {
        $(this).addClass("past");
      } 
      else if (timeHour === currentHour) {
        $(this).removeClass("past");
        $(this).addClass("present");
      }
      if (timeHour > currentHour) {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
      }
    });
  }

  hourTracker();
});
