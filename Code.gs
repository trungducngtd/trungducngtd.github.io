const OPENAI_API_KEY = "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";  // Thay bằng API Key thật của bạn

function doGet() {
  return HtmlService.createHtmlOutputFromFile("Index")
      .setTitle("OpenAI Image Input Demo");
}

// Hàm xử lý nhận base64 image từ web, gửi API, trả kết quả JSON
function callOpenAIWithBase64Image(base64Image) {
  // URL API (thay nếu có khác)
  var url = "https://api.openai.com/v1/responses";

  // Tạo payload theo định dạng gửi Base64
  var payload = {
    "prompt": {
      "id": "pmpt_685aceccb8348194879e170c489685e6009e464b7297094d",
      "version": "6"
    },
    "input": [
      {
        "role": "user",
        "content": [
          {
            "type": "input_image",
            "image_url": "data:image/jpeg;base64," + base64Image
          }
        ]
      }
    ]
  };

  var options = {
    "method": "post",
    "contentType": "application/json",
    "headers": {
      "Authorization": "Bearer " + OPENAI_API_KEY
    },
    "payload": JSON.stringify(payload),
    "muteHttpExceptions": true
  };

  try {
    var response = UrlFetchApp.fetch(url, options);
    var resultText = response.getContentText();
    var json = JSON.parse(resultText);

    // Lấy output text là chuỗi JSON trong output
    var outputText = json.output && json.output.length > 0 && json.output[0].content 
      && json.output[0].content.length > 0 
      ? json.output[0].content[0].text 
      : null;

    if (outputText) {
      var outputJSON = JSON.parse(outputText);
      return {
        transactionStatus: outputJSON.transactionStatus || "",
        transactionID: outputJSON.transactionID || "",
        transactionAmount: outputJSON.transactionAmount || "",
        recipient: outputJSON.recipient || "",
        sentTime: outputJSON.sentTime || "",
        sender: outputJSON.sender || ""
      };
    } else {
      return { error: "Không tìm thấy kết quả đầu ra trong phản hồi API." };
    }
  } catch (e) {
    return { error: "Lỗi khi gọi API hoặc xử lý dữ liệu: " + e.message };
  }
}
