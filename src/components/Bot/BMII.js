import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ChatBot from 'react-simple-chatbot';

const BMI = (props) => {

    const { steps } = props;
    const height = steps.height.value;
    const weight = steps.weight.value;
    const bmi = Number(((weight / (height * height)) * 10000).toFixed(1));
    let result = 'Underweight';

    if (bmi >= 18.5 && bmi < 25) {
        result = 'Normal weight';
    } else if (bmi >= 25 && bmi < 30) {
        result = 'Overweight';
    } else if (bmi >= 30) {
        result = 'Obesity';
    }

    return (
        <div className="test">
            Your BMI is {bmi} ({result})
        </div>
    );
};



BMI.propTypes = {
    steps: PropTypes.object,
};

BMI.defaultProps = {
    steps: undefined,
};

class BMIExample extends Component {
    render() {
        function validator(value) {
            if (isNaN(value)) {
                return 'value should be a number';
            } else if (value < 0) {
                return 'value should be positive';
            }

            return true;
        }

        return (
            <ChatBot
                speechSynthesis={{ enable: true, lang: 'en' }}
                recognitionEnable={true}
                steps={[
                    {
                        id: '1',
                        message: 'Hi, I am the BMI bot',
                        trigger: '2',
                    },
                    {
                        id: '2',
                        message: 'What is your name',
                        trigger: '3',
                    },
                    {
                        id: '3',
                        user: true,
                        trigger: '4',
                    },

                    {
                        id: '4',
                        message: 'Hi {previousValue}, nice to meet you!',
                        trigger: '5',
                    },

                    {
                        id: '5',
                        message: 'Let\'s calculate your BMI (Body Mass Index)',
                        trigger: '6',
                    },
                    {
                        id: '6',
                        message: 'Please type your height (cm)',
                        trigger: 'height',
                    },
                    {
                        id: 'height',
                        user: true,
                        trigger: '7',
                        validator,
                    },
                    {
                        id: '7',
                        message: 'Please type your weight (kg)',
                        trigger: 'weight',
                    },
                    {
                        id: 'weight',
                        user: true,
                        trigger: '8',
                        validator,
                    },
                    {
                        id: '8',
                        message: 'Thanks! Check out your BMI',
                        trigger: '9',
                    },
                    {
                        id: '9',
                        component: <BMI />,
                        end: true,
                    },

                ]}
            />
        );
    }
}

export default BMIExample;