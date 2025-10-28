const SLIDE_DECK_CONTENT = [
  {
    "slideNumber": 1,
    "type": "introForm",
    "title": "Metabolic Syndrome",
    "content": "Course Code: BCEP Competency Assurance Check \nCourse Convenor: Dr. Belinda Parmenter\n\nPlease enter your details below to begin the case study.",
    "studentFields": [
      {
        "id": "firstName",
        "label": "First name",
        "type": "text",
        "autocomplete": "given-name"
      },
      {
        "id": "lastName",
        "label": "Last name",
        "type": "text",
        "autocomplete": "family-name"
      },
      {
        "id": "studentEmail",
        "label": "Student email",
        "type": "email",
        "autocomplete": "email"
      }
    ]
  },
  {
    "slideNumber": 2,
    "type": "info",
    "title": "Referral Details",
    "content": "Calvin is a 57 year old male who has been referred to you by his GP to help reduce his risk of cardiovascular disease. His GP has started him on Asprin and referred him to you for lifestyle changes. He is hoping he can avoid pressing medication for the hypertension. Firstly, it is important to learn a bit more about the patient - click the Open Patient History button to open the 1) Completed pre-exercise screening form, 2) Pre-exercise screening information and 3) Family history details."
  },
  {
    "slideNumber": 3,
    "type": "info",
    "title": "Patient History: Pre-Exercise Screen",
    "content": "Calvin recently visited his GP for the first time in many years. Although a measurement was not initially taken, Calvin's GP noticed that his waist circumference was far larger than normal and decided to order more tests. He is married and a non-smoker. He is an airline pilot, so is often sedentary for long periods of time, especially during long haul flights. In addition, his occupation means that his daily routine is constantly changing, depending on his flight schedule.\n\nCurrent physical activity includes lifting weights 1-2 times per week (if there is a gym) and a game of bowls (if he can fit it in). He also enjoys walking."
  },
  {
    "slideNumber": 4,
    "type": "info",
    "title": "Patient History: Family History",
    "content": "Calvin's GP also discussed his family history. The GP discovers that Calvin's sister has just found out that she has high cholesterol, albeit diagnosed from a booth in a shopping centre. His father is alive and 77 years old, but had a heart attack at age 50 and has suffered from mild/moderate hypertension from 45 years of age. There is no other family history of note."
  },
  {
    "slideNumber": 5,
    "type": "info",
    "title": "Patient History: Clinical Test Results",
    "content": "In response to Calvin's initial tests and family history, his GP ordered a more extensive panel of tests. The results are listed below.\n\n- GENDER: MALE\n- BMI: >25\n- OCCUPATION: DOMESTIC AIRLINE PILOT\n- MARITAL STATUS: MARRIED\n- SMOKER: NO\n- AGE: 57\n- WEIGHT: 100 kg\n- HEIGHT: 186 cm\n- WAIST CIRCUMFERENCE: 104 cm\n- HIP CIRCUMFERENCE: 108 cm\n- RESTING HR: 80 bpm\n- RESTING BP: 155/95 (2nd measure)\n- TOTAL CHOLESTEROL: 6.1 mmol/l\n- HDL: 1.0 mmol/l\n- LDL: 3.9 mmol/l\n- TRIGLYCERIDES: 1.2 mmol/l\n- FASTING BLOOD GLUCOSE: 6.3 mmol/l"
  },
  {
    "slideNumber": 6,
    "type": "checkbox",
    "title": "Non-modifiable Risk Factors",
    "question": "Of these risk factors, which of them would be defined as non-modifiable risk factors? **There is more than one correct answer",
    "options": [
      "BMI",
      "Waist Measurement",
      "Age",
      "Resting BP",
      "Fasting blood glucose",
      "Male gender",
      "LDL",
      "Total cholesterol",
      "Triglycerides",
      "Sedentary Profession"
    ],
    "feedback": "Age and male gender are non-modifiable risk factors. In contrast, the others are modifiable, which means they can be addressed or brought to within normal ranges through diet, exercise, medications and/or lifestyle changes. In particular it is important to note, that even though his profession is sedentary, we can modify this risk factor by including regular activity breaks."
  },
  {
    "slideNumber": 7,
    "type": "textInput",
    "title": "Calculating Calvin's BMI",
    "question": "In order to treat Calvin effectively we must first do a preliminary clinical assessment to identify his risk factors. Firstly, we must calculate his BMI based on his: \nHeight: 186 cm\nWeight: 100 kg\n\nType your answer in the text box below (keep all working to 1 decimal place).",
    "label": "Enter Answer:",
    "feedback": "Click 'Next' to continue."
  },
  {
    "slideNumber": 8,
    "type": "radio",
    "title": "The Cholesterol Test",
    "question": "Calvin’s current physical activity includes lifting weights (if he is somewhere where there is a gym) and a game of golf each week. Family history: father alive at 77 years, but had a heart attack from 45 years of age. No other family history of note. The aim of this case study is for you, as an exercise professional, to identify safe and effective strategies that will help Calvin reduce his blood pressure to a normal level, and improve his waist measurement and overall cardiovascular health.Before we move on, we must consider an important factor in Calvin’s assessment. Is there a problem with having cholesterol checked at a health booth and if so what is the most likley effect? Select from the key words.",
    "options": ["Yes - False positive", "No", "Yes - False negative"],
    "feedback": "Potentially, yes. If the person is not fasting or has a fatty residue from a hand cream on their hands, this test will not give you a true indication of the cholesterol level. For example, the patient may give a false positive result, that is, a result higher than usual."
  },
  {
    "slideNumber": 9,
    "type": "textInput",
    "title": "Defining and Translating Personal Goals",
    "question": "Looking back at Calvin’s Pre-Exercise Screening and the information you have gathered, it’s important to help him establish realistic goals. Calvin wants to exercise regularly, reduce his weight, blood pressure and waist measurement. Based on this information and the doctor’s referral/clinical indications, please write one short-term goal for his blood pressure and one long-term goal for his participation in regular exercise. \n List one short term goal below:",
    "labels": [
      "List one short term goal below:",
      "List one LONG term goal below:"
    ],
    "feedback": "Your short term goal for his blood pressure should look something like this: To reduce his resting blood pressure to less than 150/85mmHg within 8-12 weeks. \n\nYour long term goal for regular exercise should look something like this: To have Calvin completing any form of exercise for >40 minutes five days per week in 6 months from now.\n\nIf your goals look similar to these, congratulations, you are correct!"
  },
  {
    "slideNumber": 10,
    "type": "form",
    "title": "ACSM Risk Stratification",
    "question": "Now it's time to Risk Stratify Calvin. According to the ACSM Risk Stratification what is Calvin's Total Risk Score?",
    "fields": [
      {
        "label": "Family History",
        "criteria": "MI, coronary revascularisation, or sudden death in an immediate relative (male <55 years or female <65 years)",
        "correct": "Yes"
      },
      {
        "label": "Cigarette Smoking",
        "criteria": "Current smoker or those who quit within the past 6 months",
        "correct": "No"
      },
      {
        "label": "Hypertension",
        "criteria": "SBP≥140mmHg or DBP≥90mmHg confirmed by measurements on at least two separate occasions, or on antihypertensive medication.",
        "correct": "Yes"
      },
      {
        "label": "Dyslipidemia",
        "criteria": "Total >5.1mmol/L or HDL<1.0mmol/L or LDL>3.36mmol/L. If LDL>3.36mmol/L, use LDL rather than total >5.1mmol/L, or on lipid-lowering medication.",
        "correct": "Yes"
      },
      {
        "label": "Impaired Fasting Glucose",
        "criteria": "Fasting blood glucose ≥5.5mmol/L confirmed on two separate occasions.",
        "correct": "Yes"
      },
      {
        "label": "Obesity",
        "criteria": "BMI≥30, or waist girth >102cm for men and >88cm for women, or waist-to-hip ratio >0.95 for men and >0.86 for women.",
        "correct": "Yes"
      },
      {
        "label": "Sedentary Lifestyle",
        "criteria": "Persons not participating in a regular exercise program or accumulating 30 minutes or more of moderate physical activity on most days of the week.",
        "correct": "Yes"
      },
      {
        "label": "High Serum HDL",
        "criteria": "≥1.55mmol/L",
        "correct": "No"
      }
    ],
    "correctAnswer": "6",
    "feedback": "The total score is 6."
  },
  {
    "slideNumber": 11,
    "type": "dropdown",
    "title": "ACSM Risk Category",
    "question": "From the previous slide we learnt that Calvin's Risk Score was 6. What is Calvin's Initial ACSM Risk Category?",
    "options": ["Low", "Moderate", "High"],
    "correctAnswer": "Moderate",
    "feedback": "Calvin's Initial ACSM Risk Category is Moderate. Calvin has six risk factors and is automatically moderate risk as he is male and over the age of 45 years. He falls into the moderate risk category. He is not high risk because he does not have diagnosed disease, or symptoms. High HDL level is 1.0 mmol/L which is not high enough to be protective. Therefore, you cannot subtract one for this risk score."
  },
  {
    "slideNumber": 12,
    "type": "dropdown_multi",
    "title": "Physician Supervision Recommendation",
    "content": "With an initial ACSM Risk Category of moderate, it is now necessary to examine whether Calvin needs to be supervised by a physician during testing. There are several key questions that need to be asked to complete the assessment. Answer either Not Necessary or Recommended for each question below.",
    "questions": [
      {
        "q": "With an initial ACSM Risk Category of moderate, it is now necessary to examine whether Calvin needs to be supervised by a physician during testing. There are several key questions that need to be asked to complete the assessment. Answer either Not Necessary or Recommended for each question below. \n\n What is the recommendation for Calvin with respect to requiring a physician to supervise him during his submaximal exercise test?",
        "options": ["Not Necessary", "Recommended"],
        "correct": "Not Necessary"
      },
      {
        "q": "What is the recommendation for Calvin with respect to requiring a physician to supervise him during his maximal exercise test?",
        "options": ["Not Necessary", "Recommended"],
        "correct": "Recommended"
      },
      {
        "q": "What is the recommendation for Calvin with respect to requiring a physician to supervise him during moderate intensity exercise (40-60% VO2reserve)?",
        "options": ["Not Necessary", "Recommended"],
        "correct": "Not Necessary"
      },
      {
        "q": "What is the recommendation for Calvin with respect to requiring a physician to supervise him during high or vigorous intensity exercise (>60% VO2reserve)?",
        "options": ["Not Necessary", "Recommended"],
        "correct": "Recommended"
      }
    ],
    "feedback": "The correct responses are as follows:\n- Submaximal test: Not necessary\n- Maximal exercise test: Recommended\n- Moderate intensity exercise: Not necessary\n- High or vigorous intensity exercise: Recommended"
  },
  {
    "slideNumber": 13,
    "type": "textInput",
    "title": "Is this Metabolic Syndrome?",
    "question": "Given what you have learnt so far, do you believe this man has metabolic syndrome? (Type Yes or No and then your 1-2 sentence justification for why you chose this)",
    "label": "Your answer:",
    "correctAnswer": "He has increased waist, increased LDL, low HDL and increased fasting blood glucose",
    "feedback": "Calvin is moderately at risk of developing cardiovascular disease. In addition he meets the criteria listed by the International Diabetes Federation for Metabolic Syndrome. He has central obesity with a waist circumference >94cm. He has hypertension and a fasting blood glucose level over 5.6 mmol/L. He satisfies the federation's criteria for metabolic syndrome. In addition his HDL is less than 1.03 mmol/L."
  },
  {
    "slideNumber": 14,
    "type": "checkbox",
    "title": "Barriers to Exercise",
    "question": "What are the patient's potential barriers to exercise that can be determined based on the available information?",
    "options": [
      "Profession",
      "Availability of exercise facilities",
      "Supportive home environment",
      "Equally at-risk spouse"
    ],
    "correctAnswer": ["Profession", "Availability of exercise facilities"],
    "feedback": "Profession: As an airline pilot he would be doing a lot of travel, hence time would be an issue. Availability of exercise facilities: Long flights and odd working hours would mean that immediate access to gym facilities would be limited. Supportive home environment: Is his wife supportive of his much needed life style change, or does she share her husband's unhealthy choice of lifestyle? For the moment, this is not a potential barrier, however, more questions would need to be asked to confirm this."
  },
  {
    "slideNumber": 15,
    "type": "radio",
    "title": "Supervision and Monitoring during Exercise",
    "question": "From the list below, choose the most appropriate method for monitoring this person during his exercise training?",
    "options": [
      "RPE at 10 minute intervals during exercise.",
      "Heart rate, BP and RPE at 10 minute intervals during exercise",
      "Pre and post HR and BP, as well as HR and RPE at 5-10 minute intervals during exercise.",
      "HR and BP pre and post exercise and heart rate, BP and RPE at 5-10 minute intervals during exercise unless exercise response is predictable.",
      "HR and BP pre and post exercise and heart rate, BP and RPE at 3-5 minute intervals during exercise."
    ],
    "correctAnswer": "Pre and post HR and BP, as well as HR and RPE at 5-10 minute intervals during exercise.",
    "feedback": "As we do not have any results of a clinical exercise test, we have to keep him clinically safe. Therefore, if training is supervised HR, BP (pre, post & at 5-10 min intervals during exercise) until predictable response is occurring then once per mode of exercise. RPE should be monitored as well to ensure it is not too high. He should be instructed that his RPE should be kept within a definite range below his hypertensive threshold determined from his clinical exercise test."
  },
  {
    "slideNumber": 16,
    "type": "checkbox",
    "title": "Exercise Prescription",
    "question": "It's now time to write an exercise program for your client. We first need to choose an appropriate mode of exercise to help Calvin reduce his risk (there are at least two correct answers - select all you think are applicable)",
    "options": [
      "Flexibility Training",
      "Aerobic Exercise Training",
      "Core Stability Training",
      "Progressive Resistance Training",
      "Plyometric Training"
    ],
    "correctAnswer": [
      "Aerobic Exercise Training",
      "Core Stability Training",
      "Progressive Resistance Training"
    ],
    "feedback": "Calvin would benefit from both aerobic and progressive resistance training. If you added core stability, that's excellent, as with his back pain he would definitely benefit from this."
  },
  {
    "slideNumber": 17,
    "type": "multiQuestion",
    "title": "Aerobic Exercise Training",
    "questions": [
      {
        "id": "adherence",
        "prompt": "What question would you ask to ensure Calvin adheres to an exercise program?",
        "type": "single",
        "options": [
          "Tell Calvin to join a gym.",
          "Identify an exercise he can do easily away from home, when overseas.",
          "Ask Calvin which type of exercise he likes to do most.",
          "Ask Calvin which type of exercise he likes to do the most, and identify which types of exercise he could easily complete away from home."
        ],
        "correctAnswer": "Ask Calvin which type of exercise he likes to do the most, and identify which types of exercise he could easily complete away from home.",
      "feedback": "You should ask Calvin which type of exercise he likes to do and, as he enjoys walking and it is easy to do away from home, you may want to prescribe interval walking at a moderate to high intensity."
      },
      {
        "id": "precautions",
        "prompt": "Are there any precautions to take into account for his exercise intensity? (Select all that apply.)",
        "type": "checkbox",
        "options": [
          "His knee and lower back pain.",
          "Whether he has a hypertensive threshold.",
          "Exercise training location."
        ],
        "correctAnswer": [
          "His knee and lower back pain.",
          "Whether he has a hypertensive threshold."
        ],
      "feedback": "Exercise intensity should remain below any ischaemic or hypertensive threshold observed during stress testing. Also consider his knee and lower back pain when prescribing intensity."
      }
    ]
  },
  {
    "slideNumber": 18,
    "type": "dropdown",
    "title": "What form of strength testing is appropriate?",
    "question": "We have already learnt that progressive resistance or strength training is going to be effective for Calvin, but what strength tests are appropriate to assess Calvin's strength?",
    "options": [
      "1RM",
      "3RM",
      "10RM",
      "Upper body functional testing",
      "Lower body functional testing",
      "Abdominal/Core",
      "All of the above"
    ],
    "correctAnswer": "All of the above",
    "feedback": "All these tests could be appropriate. If he can join a gym that has global locations, then you should complete a RM test for each of the major muscle groups. If he can not and does not want to join the gym, you should use functional tests such as the lunge, squat, push up, abdominal flexor endurance and plank to assess his muscle strength."
  },
  {
    "slideNumber": 19,
    "type": "radio",
    "title": "Exercise Precautions",
    "question": "What, if any, precautions should Calvin take?",
    "options": [
      "Monitor his blood pressure regularly at rest and during exercise if possible.",
      "His exercise technique.",
      "Be aware of current or previous injuries and stop if he feels any joint pain.",
      "Have his blood glucose levels checked in a few months to see what is happening with them.",
      "Supervision",
      "All of the above"
    ],
    "correctAnswer": "All of the above",
    "feedback": "Blood pressure: Calvin will need to have his blood pressure monitored regularly and make sure he exercises below any thresholds. If possible he should get his BP measured at least once in the unengaged limb, during the active phase of weight training to check it is not spiking. He should also have it monitored on the upright bike and with overhead resistance training. His exercise technique needs to be watched. Watch the patient continues to breathe properly during each mode of exercise. And if doing free standing functional training ensure the technique is correct so he doesn't cause any knee or back pain. He should have his blood glucose levels checked regularly to ensure he does not develop diabetes. When he is at home in Sydney, he should complete supervised exercise sessions to ensure he is on track and training at the correct intensities."
  },
  {
    "slideNumber": 20,
    "type": "radio",
    "title": "Aerobic Exercise Intensity",
    "question": "Having performed adequate aerobic and strength testing and identified possible barriers to completing a fitness program, what intensity should the aerobic component of the exercise program start at?",
    "options": ["40% VO2Reserve", "60% VO2Reserve", "80% VO2Reserve"],
    "correctAnswer": "60% VO2Reserve",
    "feedback": "Current recommendations for metabolic syndrome are to exercise at about 60% VO2max or ~70% HRmax. This level maximizes benefits while minimizing possible adverse effects of more vigorous exercise. For weight loss, exercising at a lower intensity for longer decreases RER toward ~0.7, and longer durations increase total energy expenditure. If intensity is set too high, the patient may exceed a hypertensive threshold, which would blunt the exercise training effect on blood pressure."
  },
  {
    "slideNumber": 21,
    "type": "radio",
    "title": "Aerobic Exercise Duration",
    "question": "What time duration would you recommend for Calvin?",
    "options": ["<20 minutes", "20-30 minutes", ">40 minutes"],
    "correctAnswer": ">40 minutes",
    "feedback": "Current recommendations are for >40 minutes, in fact the longer the better, as the overall aim for obesity and dyslipidaemia is to increase total energy expenditure."
  },
  {
    "slideNumber": 22,
    "type": "radio",
    "title": "Aerobic Exercise Frequency",
    "question": "How often per week would you tell Calvin to complete his exercise program?",
    "options": ["Daily", "3-4 days per week", "5 days per week"],
    "correctAnswer": "5 days per week",
    "feedback": "Current recommendations for metabolic syndrome are to exercise 5 days per week. The effect of a single bout of exercise on insulin sensitivity lasts 24-72 hours. Depending on the exercise intensity and duration, the effect on insulin sensitivity is generally not greater than 72 hours, therefore it is recommended that the time between successive sessions is no more than 72 hours. That is, no more than 2 consecutive days without aerobic activity."
  },
  {
    "slideNumber": 23,
    "type": "textInput",
    "title": "Progressive Resistance Training Exercise Prescription",
    "question": "Using the FITT principle, write out your recommendations for progressive resistance training (PRT) for someone with metabolic syndrome.",
    "label": "Enter answer here:",
  "correctAnswer": "Frequency: 2–3 times per week; Intensity: 40–80% 1RM (start below 50% for hypertensives); Type: Whole body or circuit training for large muscle groups; Time: 2–3 sets of 8–20 reps depending on intensity.",
  "feedback": "Using the FITT principle, an appropriate answer would be:\\n\\n• Frequency: 2–3 days per week\\n• Intensity: A range of intensities, but keep below 50% 1RM for hypertensives until you know their response to PRT.\\n• Type: Circuit or whole-body training of the large muscle groups\\n• Time (Volume): Low intensity = high volume (2–3 × 12–20 reps); Moderate intensity = moderate volume (2–3 × 8–10 reps)."
  }
];

const REFERENCE_SLIDE_NUMBERS = [3, 5];
const REFERENCE_PDF_URL =
  'https://github.com/mathang/BP_Metabolic_Case_Study_CODEX/blob/main/Pre-exercise%20Screen.pdf';

// Set this to the Web App URL generated by your Google Apps Script deployment.
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbws4sfNtrxowtBlEBqUQeh8NUKhDxNy4AeGcR95kB9WhNr-YC0ybdMcCDHjXUFLtZJS9w/exec';

const studentDetails = {
  firstName: '',
  lastName: '',
  studentEmail: '',
};

const sessionId = createSessionId();
const responseLog = [];
let submissionQueue = Promise.resolve();
let googleUrlWarningShown = false;
let submissionMode = 'cors';

const slideContainer = document.getElementById('slideContainer');

let currentSlideIndex = 0;
let completionShown = false;

const slides = SLIDE_DECK_CONTENT.map((slideData, index) => {
  const slideElement = createSlide(slideData, index);
  slideContainer.appendChild(slideElement);
  return slideElement;
});

showSlide(0);

function createSlide(slideData, index) {
  const section = document.createElement('section');
  section.classList.add('slide');
  section.dataset.slideNumber = slideData.slideNumber;
  section.dataset.slideType = slideData.type;
  if (index === 0) {
    section.classList.add('active');
  }

  const title = document.createElement('h2');
  title.textContent = slideData.title;
  section.appendChild(title);

  const referenceButton = createReferenceButton();
  section.appendChild(referenceButton);

  if (slideData.type === 'info') {
    appendInfoContent(section, slideData.content || '');
    const nextButton = createNextButton();
    nextButton.addEventListener('click', () => goToNextSlide());
    section.appendChild(nextButton);
    return section;
  }

  if (slideData.question) {
    const questionParagraph = document.createElement('p');
    questionParagraph.innerHTML = (slideData.question || '').replace(/\n/g, '<br>');
    section.appendChild(questionParagraph);
  }

  const errorMessage = document.createElement('div');
  errorMessage.classList.add('error-message');
  errorMessage.classList.add('hidden');

  switch (slideData.type) {
    case 'radio':
      section.appendChild(createRadioOptions(slideData));
      break;
    case 'checkbox':
      section.appendChild(createCheckboxOptions(slideData));
      break;
    case 'textInput':
      section.appendChild(createTextInput(slideData));
      break;
    case 'dropdown':
      section.appendChild(createDropdown(slideData));
      break;
    case 'dropdown_multi':
      section.appendChild(createMultiDropdown(slideData));
      break;
    case 'form':
      section.appendChild(createFormSection(slideData));
      break;
    case 'multiQuestion':
      section.appendChild(createMultiQuestionSection(slideData));
      break;
    case 'introForm':
      section.appendChild(createIntroForm(slideData));
      break;
    default:
      break;
  }

  section.appendChild(errorMessage);

  const nextButton = createNextButton();
  nextButton.addEventListener('click', () => {
    const validation = validateSlide(section, slideData);
    if (!validation.valid) {
      errorMessage.textContent = validation.error || 'Please complete the question before continuing.';
      errorMessage.classList.remove('hidden');
      return;
    }

    errorMessage.classList.add('hidden');

    recordSlideResponse(section, slideData, validation);

    goToNextSlide();
  });

  section.appendChild(nextButton);
  return section;
}

function createReferenceButton() {
  const button = document.createElement('button');
  button.type = 'button';
  button.classList.add('reference-button');
  button.textContent = 'Open Patient History References';
  button.addEventListener('click', openReferenceMaterials);
  return button;
}

function appendInfoContent(section, content) {
  if (!content) {
    return;
  }

  const segments = content.split(/\n\n+/);
  segments.forEach((segment) => {
    const trimmed = segment.trim();
    if (!trimmed) {
      return;
    }

    if (/^- /m.test(trimmed)) {
      const list = document.createElement('ul');
      trimmed.split('\n').forEach((line) => {
        const cleaned = line.replace(/^[-•]\s*/, '').trim();
        if (cleaned) {
          const li = document.createElement('li');
          li.textContent = cleaned;
          list.appendChild(li);
        }
      });
      section.appendChild(list);
    } else {
      const paragraph = document.createElement('p');
      paragraph.innerHTML = trimmed.replace(/\n/g, '<br>');
      section.appendChild(paragraph);
    }
  });
}

function createIntroForm(slideData) {
  const wrapper = document.createElement('div');
  wrapper.classList.add('intro-form');

  const infoBlock = document.createElement('div');
  infoBlock.classList.add('intro-form__info');
  appendInfoContent(infoBlock, slideData.content || '');
  wrapper.appendChild(infoBlock);

  const fieldsContainer = document.createElement('div');
  fieldsContainer.classList.add('intro-form__fields');

  (slideData.studentFields || []).forEach((field) => {
    const fieldWrapper = document.createElement('div');
    fieldWrapper.classList.add('intro-form__field');

    const label = document.createElement('label');
    const inputId = `student-${field.id}`;
    label.setAttribute('for', inputId);
    label.textContent = field.label;

    const input = document.createElement('input');
    input.id = inputId;
    input.type = field.type || 'text';
    input.required = field.required !== false;
    input.dataset.studentField = field.id;
    input.classList.add('text-input');
    if (field.autocomplete) {
      input.autocomplete = field.autocomplete;
    }
    if (field.placeholder) {
      input.placeholder = field.placeholder;
    }

    fieldWrapper.appendChild(label);
    fieldWrapper.appendChild(input);
    fieldsContainer.appendChild(fieldWrapper);
  });

  wrapper.appendChild(fieldsContainer);
  return wrapper;
}

function createRadioOptions(slideData) {
  const container = document.createElement('div');
  container.classList.add('options-group');
  const name = `radio-${slideData.slideNumber}`;
  slideData.options.forEach((option, idx) => {
    const label = document.createElement('label');
    const input = document.createElement('input');
    input.type = 'radio';
    input.name = name;
    input.value = option;
    input.id = `${name}-${idx}`;

    const span = document.createElement('span');
    span.textContent = option;

    label.setAttribute('for', input.id);
    label.appendChild(input);
    label.appendChild(span);
    container.appendChild(label);
  });
  return container;
}

function createCheckboxOptions(slideData) {
  const container = document.createElement('div');
  container.classList.add('options-group');
  slideData.options.forEach((option, idx) => {
    const label = document.createElement('label');
    const input = document.createElement('input');
    input.type = 'checkbox';
    input.value = option;
    input.id = `checkbox-${slideData.slideNumber}-${idx}`;

    const span = document.createElement('span');
    span.textContent = option;

    label.setAttribute('for', input.id);
    label.appendChild(input);
    label.appendChild(span);
    container.appendChild(label);
  });
  return container;
}

function createTextInput(slideData) {
  const wrapper = document.createElement('div');
  wrapper.classList.add('textinput-wrapper');

  // support either single label or multiple labels (labels array)
  const labels = Array.isArray(slideData.labels) ? slideData.labels : [slideData.label || 'Your answer:'];

  labels.forEach((lbl, i) => {
    const group = document.createElement('div');
    group.classList.add('textinput-group');
    const label = document.createElement('label');
    label.textContent = lbl;
    const textarea = document.createElement('textarea');
    textarea.classList.add('text-input');
    textarea.dataset.index = i;
    textarea.setAttribute('aria-label', lbl || `Answer ${i + 1}`);
    group.appendChild(label);
    group.appendChild(textarea);
    wrapper.appendChild(group);
  });

  return wrapper;
}

function createDropdown(slideData) {
  const wrapper = document.createElement('div');
  const select = document.createElement('select');
  select.classList.add('dropdown');
  select.innerHTML = `<option value="" disabled selected>Select an option</option>`;
  slideData.options.forEach((option) => {
    const opt = document.createElement('option');
    opt.value = option;
    opt.textContent = option;
    select.appendChild(opt);
  });
  wrapper.appendChild(select);
  return wrapper;
}

function createMultiDropdown(slideData) {
  const wrapper = document.createElement('div');
  wrapper.classList.add('dropdown-multi');
  slideData.questions.forEach((question, idx) => {
    const container = document.createElement('div');
    container.classList.add('form-card');

    const label = document.createElement('p');
    label.innerHTML = question.q.replace(/\n/g, '<br>');
    container.appendChild(label);

    const select = document.createElement('select');
    select.dataset.questionIndex = idx;
    select.innerHTML = `<option value="" disabled selected>Select an option</option>`;
    question.options.forEach((option) => {
      const opt = document.createElement('option');
      opt.value = option;
      opt.textContent = option;
      select.appendChild(opt);
    });
    container.appendChild(select);
    wrapper.appendChild(container);
  });
  return wrapper;
}

function createFormSection(slideData) {
  const wrapper = document.createElement('div');
  wrapper.classList.add('form-section');
  const grid = document.createElement('div');
  grid.classList.add('form-grid');

  slideData.fields.forEach((field, idx) => {
    const card = document.createElement('div');
    card.classList.add('form-card');

    const title = document.createElement('strong');
    title.textContent = field.label;
    card.appendChild(title);

    const criteria = document.createElement('p');
    criteria.textContent = field.criteria;
    card.appendChild(criteria);

    const select = document.createElement('select');
    select.dataset.fieldIndex = idx;
    select.innerHTML = `<option value="" disabled selected>Select Yes or No</option>`;

    ['Yes', 'No'].forEach((option) => {
      const opt = document.createElement('option');
      opt.value = option;
      opt.textContent = option;
      select.appendChild(opt);
    });

    card.appendChild(select);
    grid.appendChild(card);
  });

  wrapper.appendChild(grid);

  const totalWrapper = document.createElement('div');
  totalWrapper.classList.add('form-card');

  const totalLabel = document.createElement('label');
  totalLabel.textContent = 'Total Risk Score:';
  totalLabel.setAttribute('for', `total-${slideData.slideNumber}`);

  const totalInput = document.createElement('input');
  totalInput.type = 'number';
  totalInput.id = `total-${slideData.slideNumber}`;
  totalInput.classList.add('form-input');
  totalInput.setAttribute('min', '0');
  totalInput.setAttribute('aria-label', 'Total Risk Score');

  totalWrapper.appendChild(totalLabel);
  totalWrapper.appendChild(totalInput);
  wrapper.appendChild(totalWrapper);

  return wrapper;
}

function createMultiQuestionSection(slideData) {
  const wrapper = document.createElement('div');
  wrapper.classList.add('multi-question-section');

  slideData.questions.forEach((q, qi) => {
    const container = document.createElement('div');
    container.classList.add('multi-question');
    container.dataset.qIndex = qi;

    const prompt = document.createElement('p');
    prompt.textContent = q.prompt;
    container.appendChild(prompt);

    if (q.type === 'single') {
      const name = `multi-${slideData.slideNumber}-${qi}`;
      q.options.forEach((opt, idx) => {
        const label = document.createElement('label');
        const input = document.createElement('input');
        input.type = 'radio';
        input.name = name;
        input.value = opt;
        input.id = `${name}-${idx}`;
        label.setAttribute('for', input.id);
        label.appendChild(input);
        label.appendChild(document.createTextNode(opt));
        container.appendChild(label);
      });
    } else if (q.type === 'checkbox') {
      q.options.forEach((opt, idx) => {
        const id = `multi-cb-${slideData.slideNumber}-${qi}-${idx}`;
        const label = document.createElement('label');
        const input = document.createElement('input');
        input.type = 'checkbox';
        input.value = opt;
        input.id = id;
        label.setAttribute('for', id);
        label.appendChild(input);
        label.appendChild(document.createTextNode(opt));
        container.appendChild(label);
      });
    }

    wrapper.appendChild(container);
  });

  return wrapper;
}

function createNextButton() {
  const button = document.createElement('button');
  button.classList.add('next-button');
  button.type = 'button';
  button.textContent = 'Next';
  return button;
}

function validateSlide(slideElement, slideData) {
  switch (slideData.type) {
    case 'radio':
      return validateRadio(slideElement, slideData);
    case 'checkbox':
      return validateCheckbox(slideElement, slideData);
    case 'textInput':
      return validateTextInput(slideElement, slideData);
    case 'dropdown':
      return validateDropdown(slideElement, slideData);
    case 'dropdown_multi':
      return validateMultiDropdown(slideElement, slideData);
    case 'form':
      return validateForm(slideElement, slideData);
    case 'multiQuestion':
      return validateMultiQuestion(slideElement, slideData);
    case 'introForm':
      return validateIntroForm(slideElement, slideData);
    default:
      return { valid: false, correct: false };
  }
}

function isAnswerMatch(value, correctAnswer) {
  if (Array.isArray(correctAnswer)) {
    return correctAnswer.includes(value);
  }
  return value === correctAnswer;
}

function validateRadio(slideElement, slideData) {
  const selected = slideElement.querySelector('input[type="radio"]:checked');
  if (!selected) {
    return { valid: false, correct: false, error: 'Please choose an option to continue.' };
  }
  const isCorrect = isAnswerMatch(selected.value, slideData.correctAnswer);
  return { valid: true, correct: isCorrect };
}

function validateCheckbox(slideElement, slideData) {
  const checked = Array.from(slideElement.querySelectorAll('input[type="checkbox"]:checked')).map((input) => input.value);
  if (!checked.length) {
    return { valid: false, correct: false, error: 'Please select at least one option.' };
  }
  const correct = slideData.correctAnswer || [];
  const isCorrect = checked.length === correct.length && checked.every((value) => correct.includes(value));
  return { valid: true, correct: isCorrect };
}

function validateTextInput(slideElement, slideData) {
  const textareas = Array.from(slideElement.querySelectorAll('textarea'));
  if (!textareas.length) {
    return { valid: false, correct: false, error: 'No input found.' };
  }

  const values = textareas.map((ta) => (ta.value || '').trim());
  if (values.some((v) => !v)) {
    return { valid: false, correct: false, error: 'Please enter your answer before moving on.' };
  }

  if (slideData.correctAnswer == null) {
    // open response - accept as valid but not auto-graded
    return { valid: true, correct: null };
  }

  // support single expected string or array of expected answers
  const expected = slideData.correctAnswer;
  if (Array.isArray(expected)) {
    if (expected.length !== values.length) {
      return { valid: true, correct: false };
    }
    const allMatch = values.every((v, i) => compareTextAnswers(v, expected[i] || ''));
    return { valid: true, correct: allMatch };
  }

  // single expected answer - only compare first textarea
  const isCorrect = compareTextAnswers(values[0], expected);
  return { valid: true, correct: isCorrect };
}

function validateDropdown(slideElement, slideData) {
  const select = slideElement.querySelector('select');
  const value = select?.value || '';
  if (!value) {
    return { valid: false, correct: false, error: 'Please choose an option to continue.' };
  }
  const isCorrect = isAnswerMatch(value, slideData.correctAnswer);
  return { valid: true, correct: isCorrect };
}

function validateMultiDropdown(slideElement, slideData) {
  const selects = Array.from(slideElement.querySelectorAll('select'));
  if (selects.some((select) => !select.value)) {
    return { valid: false, correct: false, error: 'Please answer each part before continuing.' };
  }
  const allCorrect = selects.every((select) => {
    const idx = Number(select.dataset.questionIndex);
    return select.value === slideData.questions[idx].correct;
  });
  return { valid: true, correct: allCorrect };
}

function validateForm(slideElement, slideData) {
  const selects = Array.from(slideElement.querySelectorAll('select[data-field-index]'));
  if (selects.some((select) => !select.value)) {
    return { valid: false, correct: false, error: 'Please select Yes or No for each category.' };
  }

  const totalInput = slideElement.querySelector('input[type="number"]');
  const totalValue = (totalInput?.value || '').trim();
  if (!totalValue) {
    return { valid: false, correct: false, error: 'Please enter the total risk score.' };
  }

  const fieldsCorrect = selects.every((select) => {
    const idx = Number(select.dataset.fieldIndex);
    return select.value === slideData.fields[idx].correct;
  });

  const totalCorrect = parseInt(totalValue, 10) === parseInt(slideData.correctAnswer, 10);

  return { valid: true, correct: fieldsCorrect && totalCorrect };
}

function validateMultiQuestion(slideElement, slideData) {
  const containers = Array.from(slideElement.querySelectorAll('.multi-question'));
  if (!containers.length) {
    return { valid: false, correct: false, error: 'No questions found.' };
  }

  let allValid = true;
  let allCorrect = true;

  for (const container of containers) {
    const qIndex = Number(container.dataset.qIndex);
    const q = slideData.questions[qIndex];
    if (q.type === 'single') {
      const selected = container.querySelector('input[type="radio"]:checked');
      if (!selected) {
        return { valid: false, correct: false, error: 'Please answer each question before continuing.' };
      }
      if (!isAnswerMatch(selected.value, q.correctAnswer)) {
        allCorrect = false;
      }
    } else if (q.type === 'checkbox') {
      const checked = Array.from(container.querySelectorAll('input[type="checkbox"]:checked')).map((i) => i.value);
      if (!checked.length) {
        return { valid: false, correct: false, error: 'Please answer each question before continuing.' };
      }
      const expected = q.correctAnswer || [];
      const isQCorrect = checked.length === expected.length && checked.every((v) => expected.includes(v));
      if (!isQCorrect) {
        allCorrect = false;
      }
    }
  }

  return { valid: true, correct: allCorrect };
}

function validateIntroForm(slideElement, slideData) {
  const inputs = Array.from(slideElement.querySelectorAll('input[data-student-field]'));
  if (!inputs.length) {
    return { valid: false, correct: null, error: 'Student detail fields are missing.' };
  }

  for (const input of inputs) {
    const value = (input.value || '').trim();
    if (!value) {
      const label = slideData.studentFields?.find((field) => field.id === input.dataset.studentField)?.label;
      return {
        valid: false,
        correct: null,
        error: `Please enter your ${label ? label.toLowerCase() : 'details'} to continue.`,
      };
    }

    if (input.type === 'email') {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(value)) {
        return { valid: false, correct: null, error: 'Please enter a valid email address.' };
      }
    }
  }

  return { valid: true, correct: null };
}

function compareTextAnswers(userAnswer, expectedAnswer) {
  if (!expectedAnswer) {
    return false;
  }

  const numericExpected = parseFloat(expectedAnswer);
  const numericUser = parseFloat(userAnswer);
  if (!Number.isNaN(numericExpected) && !Number.isNaN(numericUser)) {
    return Math.abs(numericExpected - numericUser) < 0.11;
  }

  const normalizedUser = normalizeText(userAnswer);
  const normalizedExpected = normalizeText(expectedAnswer);

  if (normalizedUser === normalizedExpected) {
    return true;
  }

  if (normalizedExpected.includes(normalizedUser) && normalizedUser.length >= Math.floor(normalizedExpected.length * 0.6)) {
    return true;
  }

  const expectedTokens = new Set(normalizedExpected.split(' '));
  const userTokens = normalizedUser.split(' ');
  const matches = userTokens.filter((token) => expectedTokens.has(token));
  return matches.length >= Math.ceil(expectedTokens.size * 0.6);
}

function normalizeText(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9%]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function recordSlideResponse(slideElement, slideData, validation) {
  if (!slideData || slideData.type === 'info') {
    return;
  }

  const response = extractResponseFromSlide(slideElement, slideData);
  if (response == null) {
    return;
  }

  if (slideData.type === 'introForm' && typeof response === 'object') {
    Object.keys(response).forEach((key) => {
      if (Object.prototype.hasOwnProperty.call(studentDetails, key)) {
        studentDetails[key] = response[key];
      }
    });
  }

  const entry = {
    slideNumber: slideData.slideNumber,
    title: slideData.title,
    type: slideData.type,
    response,
    correct: validation.correct ?? null,
  };

  upsertResponseLog(entry);
}

function extractResponseFromSlide(slideElement, slideData) {
  switch (slideData.type) {
    case 'introForm': {
      const inputs = Array.from(slideElement.querySelectorAll('input[data-student-field]'));
      if (!inputs.length) {
        return null;
      }
      return inputs.reduce((acc, input) => {
        acc[input.dataset.studentField] = (input.value || '').trim();
        return acc;
      }, {});
    }
    case 'radio': {
      const selected = slideElement.querySelector('input[type="radio"]:checked');
      return selected ? selected.value : null;
    }
    case 'checkbox': {
      const checked = Array.from(slideElement.querySelectorAll('input[type="checkbox"]:checked')).map((input) => input.value);
      return checked;
    }
    case 'textInput': {
      const textareas = Array.from(slideElement.querySelectorAll('textarea'));
      if (!textareas.length) {
        return null;
      }
      const values = textareas.map((textarea) => (textarea.value || '').trim());
      return values.length === 1 ? values[0] : values;
    }
    case 'dropdown': {
      const select = slideElement.querySelector('select');
      return select ? select.value : null;
    }
    case 'dropdown_multi': {
      return (slideData.questions || []).map((question, idx) => {
        const select = slideElement.querySelector(`select[data-question-index="${idx}"]`);
        return {
          question: question.q,
          answer: select ? select.value : '',
        };
      });
    }
    case 'form': {
      const fieldResponses = (slideData.fields || []).map((field, idx) => {
        const select = slideElement.querySelector(`select[data-field-index="${idx}"]`);
        return {
          label: field.label,
          answer: select ? select.value : '',
        };
      });
      const totalInput = slideElement.querySelector('input[type="number"]');
      return {
        fields: fieldResponses,
        total: totalInput ? (totalInput.value || '').trim() : '',
      };
    }
    case 'multiQuestion': {
      return (slideData.questions || []).map((q, idx) => {
        const container = slideElement.querySelector(`.multi-question[data-q-index="${idx}"]`);
        if (!container) {
          return { question: q.prompt || q.q, answer: '' };
        }

        if (q.type === 'single') {
          const selected = container.querySelector('input[type="radio"]:checked');
          return { question: q.prompt || q.q, answer: selected ? selected.value : '' };
        }

        if (q.type === 'checkbox') {
          const checked = Array.from(container.querySelectorAll('input[type="checkbox"]:checked')).map((input) => input.value);
          return { question: q.prompt || q.q, answer: checked };
        }

        return { question: q.prompt || q.q, answer: '' };
      });
    }
    default:
      return null;
  }
}

function upsertResponseLog(entry) {
  const index = responseLog.findIndex((item) => item.slideNumber === entry.slideNumber);
  if (index >= 0) {
    responseLog[index] = entry;
  } else {
    responseLog.push(entry);
  }
}

function queueProgressSubmission(context = {}) {
  if (!GOOGLE_SCRIPT_URL) {
    if (!googleUrlWarningShown) {
      console.warn('Google Apps Script URL is not configured. Responses will not be submitted.');
      googleUrlWarningShown = true;
    }
    return;
  }

  submissionQueue = submissionQueue
    .catch(() => {})
    .then(() => submitResponses(context));
}

async function submitResponses(context = {}) {
  const payload = buildSubmissionPayload(context);

  try {
    await sendSubmissionRequest(payload, submissionMode);
  } catch (error) {
    if (submissionMode === 'cors' && isLikelyCorsError(error)) {
      console.warn(
        'CORS request to Google Apps Script failed. Falling back to a no-cors request so progress can still be logged.',
        error
      );
      submissionMode = 'no-cors';
      try {
        await sendSubmissionRequest(payload, submissionMode);
      } catch (fallbackError) {
        console.error('Failed to submit responses to Google Sheets.', fallbackError);
      }
      return;
    }

    console.error('Failed to submit responses to Google Sheets.', error);
  }
}

function isLikelyCorsError(error) {
  if (!error) {
    return false;
  }

  if (typeof TypeError !== 'undefined' && error instanceof TypeError) {
    return true;
  }

  const message = typeof error.message === 'string' ? error.message.toLowerCase() : '';
  return message.includes('failed to fetch') || message.includes('cors');
}

async function sendSubmissionRequest(payload, mode) {
  const headers =
    mode === 'cors'
      ? {
          'Content-Type': 'application/json',
        }
      : {
          'Content-Type': 'text/plain;charset=utf-8',
        };

  const response = await fetch(GOOGLE_SCRIPT_URL, {
    method: 'POST',
    mode,
    headers,
    body: JSON.stringify(payload),
  });

  if (mode === 'cors' && response.type !== 'opaque' && !response.ok) {
    throw new Error(`Request failed with status ${response.status}`);
  }
}

function buildSubmissionPayload(context = {}) {
  return {
    sessionId,
    timestamp: new Date().toISOString(),
    studentDetails: { ...studentDetails },
    responses: responseLog.map((entry) => ({
      slideNumber: entry.slideNumber,
      title: entry.title,
      type: entry.type,
      response: entry.response,
      correct: entry.correct,
    })),
    context,
  };
}

function showSlide(index) {
  slides.forEach((slide, idx) => {
    slide.classList.toggle('active', idx === index);
  });
}

function goToNextSlide() {
  const currentSlideData = SLIDE_DECK_CONTENT[currentSlideIndex];
  const currentSlide = slides[currentSlideIndex];
  if (currentSlide) {
    currentSlide.classList.remove('active');
  }

  let nextIndex = currentSlideIndex + 1;
  while (nextIndex < slides.length && shouldSkipSlide(nextIndex)) {
    nextIndex += 1;
  }

  const nextSlideData = nextIndex < slides.length ? SLIDE_DECK_CONTENT[nextIndex] : null;

  const submissionEvent = nextSlideData ? 'slideAdvance' : 'moduleCompleted';

  queueProgressSubmission({
    event: submissionEvent,
    fromSlide: currentSlideData ? currentSlideData.slideNumber : null,
    toSlide: nextSlideData ? nextSlideData.slideNumber : null,
    completed: !nextSlideData,
  });

  currentSlideIndex = nextIndex;

  if (currentSlideIndex < slides.length) {
    slides[currentSlideIndex].classList.add('active');
  } else {
    showCompletionMessage();
  }
}

function shouldSkipSlide(index) {
  const slideData = SLIDE_DECK_CONTENT[index];
  return Boolean(slideData && slideData.skip === true);
}

function showCompletionMessage() {
  if (completionShown) {
    return;
  }
  completionShown = true;
  const completion = document.createElement('div');
  completion.classList.add('completion-message');

  const heading = document.createElement('h2');
  heading.textContent = 'Case Study Complete';
  completion.appendChild(heading);

  const summary = document.createElement('p');
  summary.classList.add('completion-message__note');
  summary.textContent =
    'Thank you for completing the case study - You MUST download this report for your records. Download by clicking the "Click to Download Report" button';
  completion.appendChild(summary);

  const downloadButton = document.createElement('button');
  downloadButton.type = 'button';
  downloadButton.classList.add('download-report-button');
  downloadButton.textContent = 'Click to Download Report';
  downloadButton.addEventListener('click', () => {
    try {
      generateAndDownloadReport();
    } catch (error) {
      console.error('Failed to generate the PDF report.', error);
      alert('Unable to generate the PDF report at this time. Please try again.');
    }
  });
  completion.appendChild(downloadButton);

  slideContainer.innerHTML = '';
  slideContainer.appendChild(completion);
}

function generateAndDownloadReport() {
  const reportLines = buildReportLines();
  const pdfString = createSimplePdf(reportLines);
  const encoder = new TextEncoder();
  const pdfBytes = encoder.encode(pdfString);
  const blob = new Blob([pdfBytes], { type: 'application/pdf' });
  const url = URL.createObjectURL(blob);

  const { firstName, lastName } = studentDetails;
  const namePortion = [firstName, lastName]
    .map((part) => (part || '').trim())
    .filter(Boolean)
    .join('_');
  const fileName = `${namePortion ? `${namePortion}_` : ''}metabolic_case_study_report.pdf`;

  const anchor = document.createElement('a');
  anchor.href = url;
  anchor.download = fileName;
  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);
  URL.revokeObjectURL(url);
}

function buildReportLines() {
  const lines = [];
  const now = new Date();

  lines.push('HESC3504 Metabolic Syndrome Case Study Report');
  lines.push(`Generated on: ${now.toLocaleString()}`);
  lines.push('');
  lines.push('Student Details:');
  appendWrappedLines(lines, `First name: ${studentDetails.firstName || 'Not provided'}`, '  ');
  appendWrappedLines(lines, `Last name: ${studentDetails.lastName || 'Not provided'}`, '  ');
  appendWrappedLines(lines, `Student email: ${studentDetails.studentEmail || 'Not provided'}`, '  ');

  lines.push('');
  lines.push('Case Study Content and Responses:');

  SLIDE_DECK_CONTENT.forEach((slide) => {
    lines.push('');
    appendWrappedLines(lines, `Slide ${slide.slideNumber}: ${slide.title}`, '');
    appendWrappedLines(lines, `Slide Type: ${formatSlideType(slide.type)}`, '  ');

    const slideContentLines = getSlideContentLinesForReport(slide);
    slideContentLines.forEach((line) => {
      lines.push(line);
    });

    const responseEntry = responseLog.find((entry) => entry.slideNumber === slide.slideNumber);
    lines.push('  Learner Response:');
    const responseLines = formatResponseLinesForReport(responseEntry ? responseEntry.response : null);
    responseLines.forEach((line) => {
      lines.push(line);
    });
  });

  return lines;
}

function formatSlideType(type) {
  if (!type) {
    return 'Unknown';
  }
  return type
    .toString()
    .split(/[_-]/)
    .map((segment) => segment.charAt(0).toUpperCase() + segment.slice(1))
    .join(' ');
}

function getSlideContentLinesForReport(slide) {
  const lines = [];

  if (slide.content) {
    lines.push('  Content:');
    appendWrappedLines(lines, slide.content, '    ');
  }

  if (slide.question) {
    lines.push('  Question:');
    appendWrappedLines(lines, slide.question, '    ');
  }

  if (Array.isArray(slide.options) && slide.options.length > 0) {
    lines.push('  Options:');
    slide.options.forEach((option, index) => {
      appendWrappedLines(lines, `${index + 1}. ${option}`, '    ');
    });
  }

  if (slide.feedback) {
    lines.push('  Feedback:');
    appendWrappedLines(lines, slide.feedback, '    ');
  }

  if (Array.isArray(slide.studentFields) && slide.studentFields.length > 0) {
    lines.push('  Student Fields:');
    slide.studentFields.forEach((field) => {
      appendWrappedLines(lines, `${field.label || field.id || 'Field'} (${field.type || 'input'})`, '    ');
    });
  }

  if (Array.isArray(slide.fields) && slide.fields.length > 0) {
    lines.push('  Form Fields:');
    slide.fields.forEach((field) => {
      appendWrappedLines(lines, `${field.label || 'Field'} - Criteria: ${field.criteria || 'Not specified'}`, '    ');
    });
  }

  if (Array.isArray(slide.questions) && slide.questions.length > 0) {
    lines.push('  Additional Questions:');
    slide.questions.forEach((question, index) => {
      const prompt = question.q || question.prompt || `Question ${index + 1}`;
      appendWrappedLines(lines, prompt, '    ');
      if (Array.isArray(question.options) && question.options.length > 0) {
        question.options.forEach((option, optionIndex) => {
          appendWrappedLines(lines, `${optionIndex + 1}. ${option}`, '      ');
        });
      }
    });
  }

  return lines;
}

function formatResponseLinesForReport(response) {
  const lines = [];
  const indent = '    ';

  if (response == null || (typeof response === 'string' && !response.trim())) {
    lines.push(`${indent}No response provided.`);
    return lines;
  }

  if (Array.isArray(response)) {
    if (response.length === 0) {
      lines.push(`${indent}No response provided.`);
      return lines;
    }

    response.forEach((item, index) => {
      if (typeof item === 'string') {
        appendWrappedLines(lines, item, indent);
      } else if (item && typeof item === 'object') {
        const label = item.question || item.prompt || item.label || `Item ${index + 1}`;
        const answerText = formatAnswerValue(item.answer);
        appendWrappedLines(lines, `${label}: ${answerText}`, indent);
      } else {
        appendWrappedLines(lines, String(item), indent);
      }
    });

    return lines;
  }

  if (typeof response === 'object') {
    if (Array.isArray(response.fields)) {
      response.fields.forEach((field, index) => {
        const label = field.label || `Field ${index + 1}`;
        appendWrappedLines(lines, `${label}: ${formatAnswerValue(field.answer)}`, indent);
      });
    }

    if (Object.prototype.hasOwnProperty.call(response, 'total')) {
      appendWrappedLines(lines, `Total: ${formatAnswerValue(response.total)}`, indent);
    }

    const remainingKeys = Object.keys(response).filter((key) => key !== 'fields' && key !== 'total');
    remainingKeys.forEach((key) => {
      appendWrappedLines(lines, `${formatLabel(key)}: ${formatAnswerValue(response[key])}`, indent);
    });

    if (!lines.length) {
      lines.push(`${indent}No response provided.`);
    }

    return lines;
  }

  appendWrappedLines(lines, formatAnswerValue(response), indent);
  return lines;
}

function appendWrappedLines(target, text, indent = '') {
  const wrapped = wrapTextBlock(text || '');
  if (!wrapped.length) {
    target.push(indent ? indent.trimEnd() : '');
    return;
  }

  wrapped.forEach((line) => {
    if (!line) {
      target.push('');
    } else {
      target.push(`${indent}${line}`);
    }
  });
}

function wrapTextBlock(text) {
  const lines = [];
  const normalized = (text || '')
    .toString()
    .replace(/\r/g, '')
    .split('\n');

  normalized.forEach((rawLine) => {
    const trimmed = rawLine.trim();
    if (!trimmed) {
      lines.push('');
      return;
    }
    lines.push(...wrapSingleLine(trimmed));
  });

  return lines;
}

function wrapSingleLine(line, maxLength = 90) {
  const words = line.split(/\s+/).filter(Boolean);
  if (!words.length) {
    return [''];
  }

  const wrapped = [];
  let current = '';

  words.forEach((word) => {
    if (!current) {
      current = word;
      return;
    }

    if ((current + ' ' + word).length > maxLength) {
      wrapped.push(current);
      if (word.length > maxLength) {
        const segments = word.match(new RegExp(`.{1,${maxLength}}`, 'g')) || [];
        segments.forEach((segment, index) => {
          if (index === segments.length - 1) {
            current = segment;
          } else {
            wrapped.push(segment);
          }
        });
      } else {
        current = word;
      }
    } else {
      current += ` ${word}`;
    }
  });

  if (current) {
    wrapped.push(current);
  }

  return wrapped;
}

function formatAnswerValue(value) {
  if (Array.isArray(value)) {
    if (!value.length) {
      return 'No selection';
    }
    return value
      .map((item) => {
        if (typeof item === 'string') {
          return item;
        }
        if (item && typeof item === 'object') {
          return Object.values(item)
            .filter(Boolean)
            .join(' - ');
        }
        return String(item);
      })
      .join(', ');
  }

  if (value == null || value === '') {
    return 'No response provided';
  }

  return String(value);
}

function formatLabel(text) {
  return text
    .toString()
    .split(/[_-]/)
    .map((segment) => segment.charAt(0).toUpperCase() + segment.slice(1))
    .join(' ');
}

function createSimplePdf(lines) {
  const normalizedLines = normalizeLinesForPdf(lines);
  const pageLineLimit = 45;
  const pages = [];

  for (let i = 0; i < normalizedLines.length; i += pageLineLimit) {
    pages.push(normalizedLines.slice(i, i + pageLineLimit));
  }

  if (!pages.length) {
    pages.push(['']);
  }

  const pageCount = pages.length;
  const catalogId = 1;
  const pagesId = 2;
  const pageObjStartId = 3;
  const contentObjStartId = pageObjStartId + pageCount;
  const fontObjId = contentObjStartId + pageCount;
  const objectCount = fontObjId;

  const objects = [];

  objects[catalogId] = `${catalogId} 0 obj\n<< /Type /Catalog /Pages ${pagesId} 0 R >>\nendobj\n`;

  const kids = pages
    .map((_, index) => `${pageObjStartId + index} 0 R`)
    .join(' ');
  objects[pagesId] = `${pagesId} 0 obj\n<< /Type /Pages /Kids [${kids}] /Count ${pageCount} >>\nendobj\n`;

  pages.forEach((pageLines, index) => {
    const pageId = pageObjStartId + index;
    const contentId = contentObjStartId + index;
    const contentStream = buildPageContentStream(pageLines);
    const streamLength = contentStream.length;

    objects[pageId] = `${pageId} 0 obj\n<< /Type /Page /Parent ${pagesId} 0 R /MediaBox [0 0 595 842] /Resources << /Font << /F1 ${fontObjId} 0 R >> >> /Contents ${contentId} 0 R >>\nendobj\n`;
    objects[contentId] = `${contentId} 0 obj\n<< /Length ${streamLength} >>\nstream\n${contentStream}\nendstream\nendobj\n`;
  });

  objects[fontObjId] = `${fontObjId} 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>\nendobj\n`;

  let pdf = '%PDF-1.4\n';
  const offsets = [0];

  for (let id = 1; id <= objectCount; id += 1) {
    const objectContent = objects[id] || `${id} 0 obj\nendobj\n`;
    offsets[id] = pdf.length;
    pdf += objectContent;
  }

  const xrefOffset = pdf.length;
  pdf += `xref\n0 ${objectCount + 1}\n`;
  pdf += '0000000000 65535 f \n';

  for (let id = 1; id <= objectCount; id += 1) {
    const offset = offsets[id] || 0;
    pdf += `${String(offset).padStart(10, '0')} 00000 n \n`;
  }

  pdf += `trailer\n<< /Size ${objectCount + 1} /Root ${catalogId} 0 R >>\nstartxref\n${xrefOffset}\n%%EOF`;
  return pdf;
}

function normalizeLinesForPdf(lines, maxLength = 100) {
  const normalized = [];

  lines.forEach((line) => {
    if (!line) {
      normalized.push('');
      return;
    }

    const match = line.match(/^\s*/);
    const indent = match ? match[0] : '';
    const baseText = line.slice(indent.length);
    const wrapped = wrapSingleLine(baseText, Math.max(20, maxLength - indent.length));
    wrapped.forEach((segment) => {
      normalized.push(`${indent}${segment}`);
    });
  });

  return normalized;
}

function buildPageContentStream(lines) {
  const startY = 780;
  const leading = 14;
  let content = 'BT\n';
  content += '/F1 12 Tf\n';
  content += `${leading} TL\n`;
  content += `1 0 0 1 50 ${startY} Tm\n`;

  lines.forEach((line, index) => {
    const escaped = escapePdfString(line || '');
    if (index === 0) {
      content += `(${escaped}) Tj\n`;
    } else {
      content += `T* (${escaped}) Tj\n`;
    }
  });

  content += 'ET';
  return content;
}

function escapePdfString(value) {
  return (value || '')
    .replace(/\\/g, '\\\\')
    .replace(/\(/g, '\\(')
    .replace(/\)/g, '\\)');
}

function openReferenceMaterials() {
  const referenceSlides = REFERENCE_SLIDE_NUMBERS.map((slideNumber) =>
    SLIDE_DECK_CONTENT.find((slide) => slide.slideNumber === slideNumber)
  ).filter(Boolean);

  referenceSlides.forEach((slide) => {
    openReferenceSlideWindow(slide);
  });

  const pdfWindow = window.open(REFERENCE_PDF_URL, '_blank', 'noopener');
  if (pdfWindow) {
    pdfWindow.opener = null;
  }
}

function openReferenceSlideWindow(slideData) {
  const referenceWindow = window.open('', '_blank', 'noopener');
  if (!referenceWindow) {
    console.warn('Reference window blocked by browser.');
    return;
  }

  referenceWindow.opener = null;
  referenceWindow.document.open();
  referenceWindow.document.write(`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <title>${escapeHtml(slideData.title)}</title>
        <style>
          body {
            font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
            margin: 0;
            padding: 30px;
            background: #f0f4ff;
            color: #1f1f1f;
          }
          .reference-content {
            max-width: 760px;
            margin: 0 auto;
            background: #ffffff;
            border: 4px solid #3440eb;
            border-radius: 12px;
            padding: 30px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12);
          }
          .reference-content h1 {
            margin-top: 0;
            background: #3440eb;
            color: #ffffff;
            padding: 18px 22px;
            border-radius: 8px;
            font-size: 1.6rem;
          }
          .reference-content p {
            line-height: 1.6;
            font-size: 1rem;
          }
          .reference-content ul {
            padding-left: 20px;
          }
          .reference-content li {
            line-height: 1.6;
            font-size: 1rem;
          }
        </style>
      </head>
      <body>
        <main class="reference-content">
          <h1>${escapeHtml(slideData.title)}</h1>
          ${buildReferenceContent(slideData)}
        </main>
      </body>
    </html>`);
  referenceWindow.document.close();
}

function buildReferenceContent(slideData) {
  if (slideData.type === 'info') {
    return (slideData.content || '')
      .split(/\n\n+/)
      .map((segment) => `<p>${formatTextBlock(segment)}</p>`)
      .join('');
  }

  let html = '';
  if (slideData.question) {
    html += `<p>${formatTextBlock(slideData.question)}</p>`;
  }

  if (Array.isArray(slideData.options) && slideData.options.length > 0) {
    const listItems = slideData.options.map((option) => `<li>${escapeHtml(option)}</li>`).join('');
    html += `<ul>${listItems}</ul>`;
  }

  return html;
}

function formatTextBlock(text) {
  return escapeHtml(text)
    .split('\n')
    .map((line) => line.trim())
    .filter((line) => line)
    .join('<br>');
}

function createSessionId() {
  if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
    return crypto.randomUUID();
  }

  const timestamp = Date.now().toString(36);
  const random = Math.random().toString(36).slice(2, 10);
  return `session-${timestamp}-${random}`;
}

function escapeHtml(text) {
  return (text || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}
