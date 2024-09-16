from typing import Any, Text, Dict, List

from rasa_sdk import Action, Tracker
from rasa_sdk.executor import CollectingDispatcher


class ActionHelloWorld(Action):

    def name(self) -> Text:
        return "action_hello_world"

    def run(self, dispatcher: CollectingDispatcher,
            tracker: Tracker,
            domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:

        dispatcher.utter_message(text="Hi! You can ask anything you would like to know about me")

        data= [ { "title":"About Me", "payload":"/ask_about_me" }, { "title":"Work Experience", "payload":"/ask_work_experience" }, { "title":"My Projects", "payload":"/ask_projects" }, { "title":"My Resume", "payload":"/ask_resume" }, { "title":"Contact Me", "payload":"/ask_contact" } ]
        dispatcher.utter_message(text="You could also start with one of these:", buttons=data)

        return []
