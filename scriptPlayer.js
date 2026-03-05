// scriptPlayer.js
import { getAIResponse } from './aiHelper.js';

let currentStep = 0;
let steps = [];
let customerReplies = [];

export function loadScript(scriptSteps) {
    steps = scriptSteps;
    currentStep = 0;
    showCurrentStep();
}

function showCurrentStep() {
    const scriptDiv = document.getElementById("script-text");
    scriptDiv.innerText = steps[currentStep] ? steps[currentStep].text : "End of script!";
    document.getElementById("next-btn").disabled = false;
}

export async function nextStep() {
    const input = document.getElementById("customer-reply").value;
    customerReplies.push(input);

    if (steps[currentStep].aiPrompt) {
        const aiReply = await getAIResponse(`${steps[currentStep].aiPrompt}: "${input}"`);
        document.getElementById("ai-response").innerText = aiReply;
    }

    currentStep++;
    document.getElementById("customer-reply").value = "";
    showCurrentStep();
}
