// =====================================================
// PHONG CNTT BVPSTW – Google Apps Script Sync API v2
// Dùng GET cho cả đọc và ghi để tránh vấn đề redirect POST
// =====================================================

const SHEET_NAME = 'SyncData';

function doGet(e) {
  const action = e.parameter.action || 'read';

  if (action === 'write') {
    try {
      const lock = LockService.getScriptLock();
      lock.tryLock(5000);
      setValue(e.parameter.key, e.parameter.value || '');
      lock.releaseLock();
    } catch (err) {}
    return resp('ok');
  }

  // action === 'read'
  const key = e.parameter.key;
  if (!key) return resp('null');
  return resp(getValue(key));
}

function resp(text) {
  return ContentService.createTextOutput(text)
    .setMimeType(ContentService.MimeType.TEXT);
}

function getSheet() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  return ss.getSheetByName(SHEET_NAME) || ss.insertSheet(SHEET_NAME);
}

function getValue(key) {
  const sheet = getSheet();
  const vals = sheet.getDataRange().getValues();
  for (const row of vals) {
    if (row[0] === key) return String(row[1] || 'null');
  }
  return 'null';
}

function setValue(key, value) {
  const sheet = getSheet();
  const vals = sheet.getDataRange().getValues();
  for (let i = 0; i < vals.length; i++) {
    if (vals[i][0] === key) {
      sheet.getRange(i + 1, 2).setValue(value);
      return;
    }
  }
  sheet.appendRow([key, value]);
}
