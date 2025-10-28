const SLIDE_DECK_CONTENT = [
  {
    "slideNumber": 1,
    "type": "info",
    "title": "Metabolic Syndrome",
    "content": "Course Code: SPX???\nCourse Convenor: Dr. Belinda Parmenter"
  },
  {
    "slideNumber": 2,
    "type": "info",
    "title": "Referral Details",
    "content": "Calvin is a 57 year old male who has been referred to you by his GP to help reduce his risk of cardiovascular disease. His GP has started him on Asprin and referred him to you for lifestyle changes. He is hoping he can avoid pressing medication for the hypertension. Firstly, it is important to learn a bit more about the patient - click the "Open Patient History" button to open the 1) Completed pre-exercise screening form, 2) Pre-exercise screening information and 3) Family history details."
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
    "correctAnswer": ["Age", "Male gender"],
    "feedback": "Age and male gender are non-modifiable risk factors. In contrast, the others are modifiable, which means they can be addressed or brought to within normal ranges through diet, exercise, medications and/or lifestyle changes. In particular it is important to note, that even though his profession is sedentary, we can modify this risk factor by including regular activity breaks."
  },
  {
    "slideNumber": 7,
    "type": "textInput",
    "title": "Calculating Calvin's BMI",
    "question": "In order to treat Calvin effectively we must first do a preliminary clinical assessment to identify his risk factors. Firstly, we must calculate his BMI based on his: Height: 186 cm\nWeight: 100 kg\n\nType your answer in the text box below (keep all working to 1 decimal place).",
    "label": "Enter Answer:",
    "correctAnswer": "28.9",
    "feedback": "Click 'Next' to continue."
  },
  {
    "slideNumber": 8,
    "type": "radio",
    "title": "The Cholesterol Test",
    "question": "Calvin’s current physical activity includes lifting weights (if he is somewhere where there is a gym) and a game of golf each week. Family history: father alive at 77 years, but had a heart attack from 45 years of age. No other family history of note. The aim of this case study is for you, as an exercise professional, to identify safe and effective strategies that will help Calvin reduce his blood pressure to a normal level, and improve his waist measurement and overall cardiovascular health.Before we move on, we must consider an important factor in Calvin’s assessment. Is there a problem with having cholesterol checked at a health booth and if so what is the most likley effect? Select from the key words.",
    "options": ["Yes", "No", "False positive", "False negative"],
    "correctAnswer": ["False positive", "Yes"],
    "feedback": "Potentially, yes. If the person is not fasting or has a fatty residue from a hand cream on their hands, this test will not give you a true indication of the cholesterol level. For example, the patient may give a false positive result, that is, a result higher than usual."
  },
  {
    "slideNumber": 9,
    "type": "textInput",
    "title": "Defining and Translating Personal Goals",
    "question": "Looking back at Calvin’s Pre-Exercise Screening and the information you have gathered, it’s important to help him establish realistic goals. Calvin wants to exercise regularly, reduce his weight, blood pressure and waist measurement. Based on this information and the doctor’s referral/clinical indications, please write one short-term goal for his blood pressure and one long-term goal for his participation in regular exercise.List one short term goal below:",
    "label": "List one short term goal below:",
    "label": "List one LONG term goal below:",  
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
        "criteria": "SBP≥140mmHg or DBP≥90mmHg confirmed by measurements on at least two separate occasions, or on antihypertensive medication",
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
        "q": "What is the recommendation for Calvin with respect to requiring a physician to supervise him during his submaximal exercise test?",
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
    "question": "Given what you have learnt so far, do you believe this man has metabolic syndrome? (Select Yes/No and Justify)",
    "label": "Justify your answer:",
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
  "type": "multiQuestion",   // <-- use a custom type your engine treats as containing multiple sub-questions
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
}
,
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
    "feedback": "Correct! All these tests could be appropriate. If he can join a gym that has global locations, then you should complete a RM test for each of the major muscle groups. If he can not and does not want to join the gym, you should use functional tests such as the lunge, squat, push up, abdominal flexor endurance and plank to assess his muscle strength."
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
  "title": "PRT Exercise Prescription",
  "question": "Using the FITT principle, write out your recommendations for progressive resistance training (PRT) for someone with metabolic syndrome.",
  "label": "Enter answer here:",
  "correctAnswer": "Frequency: 2–3 times per week; Intensity: 40–80% 1RM (start below 50% for hypertensives); Type: Whole body or circuit training for large muscle groups; Time: 2–3 sets of 8–20 reps depending on intensity.",
  "feedback": "Using the FITT principle, an appropriate answer would be:\\n\\n• Frequency: 2–3 days per week\\n• Intensity: A range of intensities, but keep below 50% 1RM for hypertensives until you know their response to PRT.\\n• Type: Circuit or whole-body training of the large muscle groups\\n• Time (Volume): Low intensity = high volume (2–3 × 12–20 reps); Moderate intensity = moderate volume (2–3 × 8–10 reps)."
}
];

const REFERENCE_SLIDE_NUMBERS = [3, 5];
const REFERENCE_PDF_URL =
  'https://github.com/mathang/BP_Metabolic_Case_Study_CODEX/blob/main/Pre-exercise%20Screen.pdf';

const slideContainer = document.getElementById('slideContainer');
const scoreValue = document.getElementById('scoreValue');
const modalOverlay = document.getElementById('modalOverlay');
const modalTitle = document.getElementById('modalTitle');
const modalMessage = document.getElementById('modalMessage');
const modalNextButton = document.getElementById('modalNextButton');

let currentSlideIndex = 0;
let score = 0;
let completionShown = false;

const maxScore = SLIDE_DECK_CONTENT.filter((slide) => slide.type !== 'info').length * 10;
const slides = SLIDE_DECK_CONTENT.map((slideData, index) => {
  const slideElement = createSlide(slideData, index);
  slideContainer.appendChild(slideElement);
  return slideElement;
});

showSlide(0);

modalNextButton.addEventListener('click', () => {
  hideModal();
  goToNextSlide();
});

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

  const questionParagraph = document.createElement('p');
  questionParagraph.innerHTML = (slideData.question || '').replace(/\n/g, '<br>');
  section.appendChild(questionParagraph);

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

    if (validation.correct && section.dataset.answeredCorrectly !== 'true') {
      score += 10;
      updateScoreDisplay();
      section.dataset.answeredCorrectly = 'true';
    }

    const isLastSlide = isNextSlideBeyondEnd();
    showModal(validation.correct ? 'Correct!' : 'Incorrect', slideData.feedback || '', isLastSlide);
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
  const label = document.createElement('label');
  label.textContent = slideData.label || 'Your answer:';
  const textarea = document.createElement('textarea');
  textarea.classList.add('text-input');
  textarea.setAttribute('aria-label', slideData.label || 'Your answer');
  wrapper.appendChild(label);
  wrapper.appendChild(textarea);
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
    default:
      return { valid: false, correct: false };
  }
}

function validateRadio(slideElement, slideData) {
  const selected = slideElement.querySelector('input[type="radio"]:checked');
  if (!selected) {
    return { valid: false, correct: false, error: 'Please choose an option to continue.' };
  }
  const isCorrect = selected.value === slideData.correctAnswer;
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
  const input = slideElement.querySelector('textarea');
  const value = (input?.value || '').trim();
  if (!value) {
    return { valid: false, correct: false, error: 'Please enter your answer before moving on.' };
  }
  const isCorrect = compareTextAnswers(value, slideData.correctAnswer || '');
  return { valid: true, correct: isCorrect };
}

function validateDropdown(slideElement, slideData) {
  const select = slideElement.querySelector('select');
  const value = select?.value || '';
  if (!value) {
    return { valid: false, correct: false, error: 'Please choose an option to continue.' };
  }
  return { valid: true, correct: value === slideData.correctAnswer };
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

function updateScoreDisplay() {
  scoreValue.textContent = score.toString();
}

function showModal(title, message, isFinalStep) {
  modalTitle.textContent = title;
  modalMessage.innerHTML = message.replace(/\n/g, '<br>');
  modalNextButton.textContent = isFinalStep ? 'Finish' : 'Next';
  modalOverlay.classList.remove('hidden');
}

function hideModal() {
  modalOverlay.classList.add('hidden');
}

function showSlide(index) {
  slides.forEach((slide, idx) => {
    slide.classList.toggle('active', idx === index);
  });
}

function goToNextSlide() {
  const currentSlide = slides[currentSlideIndex];
  if (currentSlide) {
    currentSlide.classList.remove('active');
  }

  currentSlideIndex += 1;

  while (currentSlideIndex < slides.length && shouldSkipSlide(currentSlideIndex)) {
    currentSlideIndex += 1;
  }

  if (currentSlideIndex < slides.length) {
    slides[currentSlideIndex].classList.add('active');
  } else {
    showCompletionMessage();
  }
}

function shouldSkipSlide(index) {
  const slideData = SLIDE_DECK_CONTENT[index];
  return slideData && slideData.slideNumber === 20;
}

function isNextSlideBeyondEnd() {
  let nextIndex = currentSlideIndex + 1;
  while (nextIndex < slides.length && shouldSkipSlide(nextIndex)) {
    nextIndex += 1;
  }
  return nextIndex >= slides.length;
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
  summary.innerHTML = `Great work! Your final score is <strong>${score}</strong> out of <strong>${maxScore}</strong>.`;
  completion.appendChild(summary);

  slideContainer.innerHTML = '';
  slideContainer.appendChild(completion);
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

function escapeHtml(text) {
  return (text || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}
