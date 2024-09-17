from typing import Any, Text, Dict, List

from rasa_sdk import Action, Tracker
from rasa_sdk.executor import CollectingDispatcher


class ActionHelloWorld(Action):

    def name(self) -> Text:
        return "action_hello_world"

    def run(self, dispatcher: CollectingDispatcher,
            tracker: Tracker,
            domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:

        dispatcher.utter_message(text="Hey! This is Shahbot. You can ask him anything you would like to know about me :)")

        data= [ { "title":"About Me", "payload":"/ask_about_me" } ]
        dispatcher.utter_message(text="Let's start with something simple:", buttons=data)

        return []

class ActionMainMenu(Action):

    def name(self) -> Text:
        return "action_main_menu"

    def run(self, dispatcher: CollectingDispatcher,
            tracker: Tracker,
            domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:

        data= [{ "title":"Work Experience", "payload":"/ask_work_experience" }, { "title":"Roles of Responsibilities", "payload":"/ask_roles_responsibilities" }, { "title":"My Certifications", "payload":"/ask_certifications" }, { "title":"My Projects", "payload":"/ask_projects" }, { "title":"My Resume", "payload":"/ask_resume" }, { "title":"Contact Me", "payload":"/ask_contact" } ]
        dispatcher.utter_message(buttons=data)

        return []