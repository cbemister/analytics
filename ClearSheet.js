function clearRange() {
  //replace 'Sheet1' with your actual sheet name
  var sheet = SpreadsheetApp.getActive().getSheetByName('DATA');
  sheet.getRange('A3:c250000').clearContent();
  }