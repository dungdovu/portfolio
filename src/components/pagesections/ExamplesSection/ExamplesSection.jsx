import React from "react";
import { Chatbot } from "react-chatbot-kit";


import docsbotConfig from "../../../bots/docsbot/config";
import docsbotMessageParser from "../../../bots/docsbot/MessageParser";
import docsbotActionProvider from "../../../bots/docsbot/ActionProvider";



import "./ExamplesSection.css";

const ExamplesSection = () => {
  return (
    <div className="app-examples-section" id="examples">
      <div className="app-examples-docsbot">
        <div className="app-examples-docsbot-container">

          <div className="app-examples-docsbot">
            <div className="app-examples-docsbot-bot-container">
              <Chatbot
                config={docsbotConfig}
                messageParser={docsbotMessageParser}
                actionProvider={docsbotActionProvider}
              />
            </div>
          </div>
        </div>
      </div>




    </div>
  );
};

export default ExamplesSection;
