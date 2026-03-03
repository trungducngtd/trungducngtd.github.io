function doTopupCheck(data) {
  Logger.log("Topupcheck: dữ liệu nhận được là:");
  Logger.log(data);
  try {
    var spreadsheetId = "1hJAf4BIPkBzOKs8NVUKSrOntOxj7wkn--c4QPGyujH0";
    var sheetName = "database";
    var ss = SpreadsheetApp.openById(spreadsheetId);
    var sheet = ss.getSheetByName(sheetName);
    if (!sheet) {
      Logger.log("Không tìm thấy sheet: " + sheetName);
      return { allowed: false, message: "Không tìm thấy sheet dữ liệu." };
    }
    var rows = sheet.getDataRange().getValues();

    // 1. Kiểm tra transactionStatus có null/không
    if (!data.transactionStatus) {
      Logger.log("Trigger #1: transactionStatus is null or missing.");
      return { allowed: false, message: "Không có transactionStatus" };
    }

    // 2. Kiểm tra transactionID có null/không
    if (!data.transactionID) {
      Logger.log("Trigger #2: transactionID is null or missing.");
      return { allowed: false, message: "Không có transactionID" };
    }

    // 3. Kiểm tra trùng transactionID
    for (var i = 1; i < rows.length; i++) {
      var row = rows[i];
      var transactionIDInSheet = row[3];
      var transactionStatusInSheet = row[5];

      if (!transactionIDInSheet || !transactionStatusInSheet) {
        continue;
      }

      var tranIDSheetStr = String(transactionIDInSheet).trim();
      var tranIDDataStr = String(data.transactionID).trim();

      if (tranIDSheetStr === tranIDDataStr) {
        Logger.log("Trigger #3: transactionID already exists in row "+ (i+1));
        return { allowed: false, message: "Trùng transactionID" };
      }
    }

    // 4. Kiểm tra trùng sentTime
    for (var i = 1; i < rows.length; i++) {
      var row = rows[i];
      var sentTimeInSheet = row[0];
      var transactionStatusInSheet = row[5];

      if (!sentTimeInSheet || !transactionStatusInSheet) {
        continue;
      }

      // So sánh trim chuỗi sentTime
      var sentTimeSheetStr = String(sentTimeInSheet).trim();
      var sentTimeDataStr = String(data.sentTime).trim();

      if (sentTimeSheetStr === sentTimeDataStr) {
        Logger.log("Trigger #4: sentTime already exists in row "+ (i+1));
        return { allowed: false, message: "Trùng sentTime" };
      }
    }

    // 5. Kiểm tra recipient có đúng "Lê Ngọc Trang Đài"
    if (data.recipient !== "Lê Ngọc Trang Đài") {
      Logger.log("Trigger #5: recipient is not 'Lê Ngọc Trang Đài'. Recipient = " + data.recipient);
      return { allowed: false, message: "Người nhận không phải \"Lê Ngọc Trang Đài\"" };
    }

    // 6. Kiểm tra sender null/không
    if (!data.sender) {
      Logger.log("Trigger #6: sender is null or missing.");
      return { allowed: false, message: "Không có sender" };
    }

    return { allowed: true };
  } catch (error) {
    Logger.log("Lỗi doTopupCheck: " + error.message);
    return { allowed: false, message: "Lỗi kiểm tra giao dịch: " + error.message };
  }
}
