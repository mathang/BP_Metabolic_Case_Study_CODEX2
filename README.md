# Metabolic Syndrome Case Study App

This repository contains an interactive, browser-based learning module for the HESC3504 Metabolic Syndrome case study. The experience guides students through the patient history, knowledge checks, and programming decisions required to support Calvin, a hypothetical client with metabolic syndrome.

## New features

* The opening slide now collects each student's first name, last name, and student email address before they can begin the case study.
* Every answer a student provides is captured (including multi-part and free-text responses) and the aggregated progress is sent to Google Sheets every time the learner advances to the next slide.

## Configuring Google Sheets logging

The application expects to send a JSON payload to a published Google Apps Script that appends the submission to your sheet. Follow the steps below to create the script and connect it to the provided Google Sheet.

1. Open the Google Sheet you want to use for responses.
2. In the menu choose **Extensions → Apps Script**.
3. Replace the default script contents with the snippet below and click **Save**.

```javascript
const SHEET_NAME = 'Sheet1'; // Update if your tab has a different name.

function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
  if (!sheet) {
    return ContentService.createTextOutput('Missing sheet');
  }

  const body = JSON.parse(e.postData.contents);
  sheet.appendRow([
    new Date(),
    body.sessionId || '',
    body.context?.event || '',
    body.context?.fromSlide || '',
    body.context?.toSlide || '',
    body.context?.completed ? 'Yes' : 'No',
    body.studentDetails?.firstName || '',
    body.studentDetails?.lastName || '',
    body.studentDetails?.studentEmail || '',
    body.score || '',
    body.maxScore || '',
    JSON.stringify(body.responses || []),
  ]);

  return ContentService.createTextOutput('Success').setMimeType(ContentService.MimeType.TEXT);
}
```

The `sessionId` column lets you group together all rows created by the same student attempt, while the event and slide columns show which transition triggered the update.

4. Click **Deploy → Test deployments** once to authorise, then choose **Deploy → New deployment**.
5. Select **Web app**, set **Execute as** to *Me*, and **Who has access** to *Anyone* (or *Anyone with the link*).
6. Copy the **Web app URL** that Google provides after deployment.
7. Open `script.js` in this project and set the `GOOGLE_SCRIPT_URL` constant to the copied URL.

Each time a student moves to the next slide the module sends their details, current score, and the full answer log collected so far to the Apps Script endpoint. This means a single attempt will append multiple rows—one for every slide transition—ensuring partial attempts are retained. If the URL is left blank, the submission step is skipped and a warning is logged in the browser console.

## Development

The project is a static HTML/CSS/JavaScript bundle. Any web server that can serve the files in this repository will run the experience. During development you can launch a local server with:

```bash
python3 -m http.server
```

Then visit `http://localhost:8000` in your browser.

## License

The original materials were provided as part of the BP Metabolic Case Study. Adaptations in this repository retain the same terms of use as the source content.
