function doTopupConfirm(data) {
  try {
    var spreadsheetId = "1hJAf4BIPkBzOKs8NVUKSrOntOxj7wkn--c4QPGyujH0";
    var sheetName = "database";
    var ss = SpreadsheetApp.openById(spreadsheetId);
    var sheet = ss.getSheetByName(sheetName);
    if (!sheet) {
      throw new Error("Không tìm thấy sheet: " + sheetName);
    }
    // Dữ liệu theo thứ tự các cột: sentTime recipient sender transactionID transactionAmount transactionStatus
    var newRow = [
      data.sentTime || "",
      data.recipient || "",
      data.sender || "",
      data.transactionID || "",
      data.transactionAmount || "",
      data.transactionStatus || ""
    ];
    sheet.appendRow(newRow);
    Logger.log("Đã ghi dữ liệu vào Google Sheet: " + newRow.join(", "));
    return "ok";
  } catch (error) {
    Logger.log("Lỗi khi ghi dữ liệu vào Google Sheet: " + error.message);
    throw new Error("Lỗi khi ghi dữ liệu vào Google Sheet: " + error.message);
  }
}
