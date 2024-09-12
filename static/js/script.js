
/* module for importing other js files */
function include(file) {
  const script = document.createElement('script');
  script.src = file;
  script.type = 'text/javascript';
  script.defer = true;

  document.getElementsByTagName('head').item(0).appendChild(script);
}


// Bot pop-up intro
document.addEventListener("DOMContentLoaded", () => {
  const elemsTap = document.querySelector(".tap-target");
  // eslint-disable-next-line no-undef
  const instancesTap = M.TapTarget.init(elemsTap, {});
  instancesTap.open();
  setTimeout(() => {
    instancesTap.close();
  }, 4000);
});

/* import components */
include('./static/js/components/index.js');

// window.addEventListener('load', () => {
//   // initialization
//   $(document).ready(() => {
//     // Bot pop-up intro
//     $("div").removeClass("tap-target-origin");

//     // drop down menu for close, restart conversation & clear the chats.
//     $(".dropdown-trigger").dropdown();

//     // initiate the modal for displaying the charts,
//     // if you dont have charts, then you comment the below line
//     $(".modal").modal();

//     // enable this if u have configured the bot to start the conversation.
//     showBotTyping();
//     $("#userInput").prop('disabled', true);

//     // if you want the bot to start the conversation
//     customActionTrigger();
//   });
//   // Toggle the chatbot screen
//   $("#profile_div").click(() => {
//     $(".profile_div").toggle();
//     $(".widget").toggle();
//   });

//   // clear function to clear the chat contents of the widget.
//   $("#clear").click(() => {
//     $(".chats").fadeOut("normal", () => {
//       $(".chats").html("");
//       $(".chats").fadeIn();
//     });
//   });

//   // close function to close the widget.
//   $("#close").click(() => {
//     $(".profile_div").toggle();
//     $(".widget").toggle();
//     scrollToBottomOfResults();
//   });
// });

window.addEventListener('load', () => {
  // initialization
  $(document).ready(() => {
    // Bot pop-up intro
    $("div").removeClass("tap-target-origin");

    // drop down menu for close, restart conversation & clear the chats.
    $(".dropdown-trigger").dropdown();

    // initiate the modal for displaying the charts,
    // if you don't have charts, then you comment the below line
    $(".modal").modal();

    // enable this if u have configured the bot to start the conversation.
    showBotTyping();
    $("#userInput").prop('disabled', true);

    // if you want the bot to start the conversation
    customActionTrigger();
  });

  // Toggle the chatbot screen when clicking on the profile icon
  $("#profile_div").click((e) => {
    e.stopPropagation(); // Prevent this click from triggering the document click listener
    $(".widget").toggle(); // Show or hide the chat area
    if ($(".widget").is(":visible")) {
      $("#profile_div").hide(); // Hide the chatbot icon when the chat is open
    }
  });

  // Minimize the chatbot (hide only the chat area) when clicking outside
  $(document).click((e) => {
    // Check if the click was outside the widget and profile_div
    if (!$(e.target).closest('.widget, #profile_div').length) {
      if ($(".widget").is(":visible")) {
        $(".widget").hide(); // Hide only the chat area, not the profile icon
        $("#profile_div").show(); // Show the chatbot icon when the chat area is minimized
      }
    }
  });

  // Clear function to clear the chat contents of the widget.
  $("#clear").click(() => {
    $(".chats").fadeOut("normal", () => {
      $(".chats").html("");
      $(".chats").fadeIn();
    });
  });

  // Close function to close the widget when 'x' button is clicked.
  $("#close").click(() => {
    $(".widget").hide();
    $("#profile_div").show(); // Show the chatbot icon when the chat area is closed
    scrollToBottomOfResults();
  });
});