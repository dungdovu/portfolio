import React from "react";
import ChatBot from "react-simple-chatbot";

function CustomChatbot(props) {

    const steps = [{
        id: "Greet",
        message: props.data,
        trigger: "Ask Name"
    },
        {
            id: "Ask Name",
            message: "Please type your name?",
            trigger: "Waiting user input for name"
        },
        {
            id: "Waiting user input for name",
            user: true,
            //trigger: "Asking options to eat"
            trigger: (input) => {
                props.eventHandler(input.value);
                return "Asking options to eat"
            }
        },
        {
            id: "Asking options to eat",
            message: "Hi {previousValue}, Please click on what you want to buy...?",
            trigger: "Displaying options to eat"
        },
        {
            id: "Displaying options to eat",
            options: [{
                value: "pizza",
                label: "Jeans",
                trigger: "Asking for Tomatoes in Pizza"
            },
                {
                    value: "burger",
                    label: "Jacket",
                    trigger: "Burger Not available"
                }
            ]
        },
        {
            id: "Burger Not available",
            message: "Sorry, We don't have burger available at the moment. Would you like to try our pizza?",
            trigger: "Asking for pizza after burger"
        },
        {
            id: "Asking for pizza after burger",
            options: [{
                value: true,
                label: "Yes",
                trigger: "Asking for Tomatoes in Pizza"
            },
                {
                    value: "false",
                    label: "No",
                    trigger: "Done"
                }
            ]
        }
    ]

    return (<ChatBot steps={steps}  />);
}

export default CustomChatbot;