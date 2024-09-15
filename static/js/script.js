
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

window.addEventListener('load', () => {
  // Initialization
  $(document).ready(() => {
    $("div").removeClass("tap-target-origin");
    $(".dropdown-trigger").dropdown();
    $(".modal").modal();
    showBotTyping();
    $("#userInput").prop('disabled', true);
    customActionTrigger();
  });

  // Toggle the chatbot screen when clicking on the profile icon
  $("#profile_div").click((e) => {
    e.stopPropagation(); // Prevent the document click listener from firing
    $(".widget").toggle(); // Show or hide the chat area
    if ($(".widget").is(":visible")) {
      $("#profile_div").hide(); // Hide the chatbot icon when the chat is open
    }
  });

  // Minimize the chatbot (hide only the chat area) when clicking outside
  $(document).click((e) => {
    const isClickInsideWidget = $(e.target).closest('.widget, #profile_div').length > 0;
    const isClickOnInteractiveElement = $(e.target).closest('.menuChips, .quickReplies, .suggestions, .collapsible').length > 0;

    // Only minimize if the click is outside the widget AND isn't on an interactive element
    if (!isClickInsideWidget && !isClickOnInteractiveElement) {
      if ($(".widget").is(":visible")) {
        $(".widget").hide(); // Hide only the chat area
        $("#profile_div").show(); // Show the chatbot icon when the chat area is minimized
      }
    }
  });

  // Handle suggestion buttons or quick reply interactions
  $(".menuChips, .quickReplies, .suggestions").on('click', (e) => {
    // Handle the button click here as needed without minimizing the widget
    const buttonText = $(e.target).text(); // Get button text
    sendMessageToRasa(buttonText); // Send the button text to Rasa
  });

  // Clear function to clear the chat contents of the widget
  // $("#clear").click(() => {
  //   $(".chats").fadeOut("normal", () => {
  //     $(".chats").html("");
  //     $(".chats").fadeIn();
  //   });
  // });

  // Close function to close the widget when 'x' button is clicked
  $("#close").click(() => {
    $(".widget").hide();
    $("#profile_div").show(); // Show the chatbot icon when the chat area is closed
    scrollToBottomOfResults();
  });
});
