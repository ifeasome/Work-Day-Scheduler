$(document).ready(function () {
  // displays the current date at the header section
  $(currentDay).text(moment().format("MMMM, Do YYYY"));

  $(".saveBtn").on("click", function () {
    let text = $(this).siblings (".description").val();
    let time = $(this).parent().attr("id");
   // window.localStorage.setItem("time", JSON.stringify(text));
   localStorage.setItem(time, text);
   console.log(time, text);
  });

  // saving hours to local storage (No idea what is going on)
  $("#9-text").val(localStorage.getItem("hour-9"));
  /* $("hour10.description").val(localStorage.getItem("hour10"));
  $("hour11.description").val(localStorage.getItem("hour11"));
  $("hour12.description").val(localStorage.getItem("hour12"));
  $("hour13.description").val(localStorage.getItem("hour13"));
  $("hour14.description").val(localStorage.getItem("hour14"));
  $("hour15.description").val(localStorage.getItem("hour15"));
  $("hour16.description").val(localStorage.getItem("hour16"));
  $("hour17.description").val(localStorage.getItem("hour17")); */

  function hourTracker() {
    let currentHour = moment().hours();
    // console.log(currentHour);
    //the something needs to come from an array/object
    // let's try looping
    $(".time-block").each(function () {
      // console.log($(this));
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
