$(document).ready(function() {
  $("#calendar").fullCalendar({
    header: {
      left: "prev,next, today,month,agendaWeek,agendaDay",
      //center: "month,agendaWeek,agendaDay",
      right: "title",
    },
    defaultView: "month",
    navLinks: true, // can click day/week names to navigate views
    selectable: true,
    selectHelper: true,
    editable: true,
    eventLimit: true, // allow "more" link when too many events  
	  
    select: function(start, end) {
      var title = prompt("Event Content:");
      var eventData;
      if (title) {
        eventData = {
          title: title,
          start: start,
          end: end,
			color: '#ED027E',
        };
        $("#calendar").fullCalendar("renderEvent", eventData, true); // stick? = true
      }
      $("#calendar").fullCalendar("unselect");
    },

    eventRender: function(event, element) {
      element
        .find(".fc-content")
        .prepend("<span class='closeon material-icons'>&#xe5cd;</span>");
      element.find(".closeon").on("click", function() {
        $("#calendar").fullCalendar("removeEvents", event._id);
      });
    },

    eventClick: function(calEvent) {
      var title = prompt("Edit Event Content:", calEvent.title);
      calEvent.title = title;
      $("#calendar").fullCalendar("updateEvent", calEvent);
    }
  });
});