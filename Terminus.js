let obj=JSON.parse($response.body)
obj.bulk_account.account["pro_mode"] = true;
obj.bulk_account.account["plan_type"] = "Premium";
obj.bulk_account.account["user_type"] = "Premium";
obj.bulk_account.account["current_period"]["until"] = "2099-10-10T03:27:34";
obj.bulk_account.account["expired_screen_type"] = "";
obj.bulk_account.trial["trial_type"] = "Team";
obj.bulk_account.trial["valid_until"] = "9999-04-19T10:29:12";
obj.bulk_account.trial["is_active"] = true;


$done({body:JSON.stringify(obj)})
//bynubyta
