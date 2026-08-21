// H2OFIX LEAD ENGINE v2
// Deploy from script.google.com using info.h2ofix@gmail.com
// Settings: Execute as "Me", Access "Anyone"

const ALERT_EMAIL = "care@h2ofix.in";
const LEADS_FILE = "h2ofix-leads.txt";

function getLeadsFile() {
  const files = DriveApp.getFilesByName(LEADS_FILE);
  if (files.hasNext()) return files.next();
  return DriveApp.createFile(LEADS_FILE, "=== H2OFIX LEAD LOG ===\n");
}

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const line = new Date().toString() + " | Name: " + data.name + " | Phone: " + data.phone + 
                 " | Area: " + data.area + " | Service: " + data.service + "\n";
    
    const file = getLeadsFile();
    file.setContent(file.getBlob().getDataAsString() + line);
    
    MailApp.sendEmail(ALERT_EMAIL, 
      "[H2OFIX LEAD] " + data.service + " - " + data.area, 
      "New lead received:\n\n" + line + "\nCheck Drive for full log: " + file.getUrl());
      
    return ContentService.createTextOutput(JSON.stringify({status: "success"}))
      .setMimeType(ContentService.MimeType.JSON);
  } catch(err) {
    return ContentService.createTextOutput(JSON.stringify({status: "error", message: err.toString()}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
