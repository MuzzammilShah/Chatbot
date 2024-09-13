from typing import Any, Text, Dict, List

from rasa_sdk import Action, Tracker
from rasa_sdk.executor import CollectingDispatcher


class ActionHelloWorld(Action):

    def name(self) -> Text:
        return "action_hello_world"

    def run(self, dispatcher: CollectingDispatcher,
            tracker: Tracker,
            domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:

        dispatcher.utter_message(text="Lovely, let's have a chat then!")
        dispatcher.utter_message(text="You can ask anything you would like to know about me!")

        data= [ { "title":"Tell me about yourself", "payload":"/ask_about_me" }, { "title":"View Resume", "payload":"/ask_resume" }, { "title":"Contact Me", "payload":"/ask_contact" } ]
        message={"payload":"quickReplies","data":data}

        dispatcher.utter_message(text="Or not sure what to ask? How about these:", json_message=message)

        # buttons = [
        #     {"title": "", "payload": "/select_sub_one{{\"eSubOne\":\"SubOne\"}}"},
        # ]
        # dispatcher.utter_message(buttons=buttons)

        return []
