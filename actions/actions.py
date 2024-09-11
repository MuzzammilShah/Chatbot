from typing import Any, Text, Dict, List

from rasa_sdk import Action, Tracker
from rasa_sdk.executor import CollectingDispatcher


class ActionHelloWorld(Action):

    def name(self) -> Text:
        return "action_hello_world"

    def run(self, dispatcher: CollectingDispatcher,
            tracker: Tracker,
            domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:

        dispatcher.utter_message(text="Hi, I am Muhammed!")
        dispatcher.utter_message(text="It is really nice to meet you :)")
        dispatcher.utter_message(text="You can ask me anything you would like to know about me!")

        # buttons = [
        #     {"title": "", "payload": "/select_sub_one{{\"eSubOne\":\"SubOne\"}}"},
        # ]
        # dispatcher.utter_message(buttons=buttons)

        return []
