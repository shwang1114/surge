let obj=JSON.parse($response.body)
obj.account["pro_mode"] = true;
obj.account["plan_type"] = "Premium";
obj.account["user_type"] = "Premium";
obj.account["current_period"]["until"] = "2099-10-10T03:27:34";
obj.account["expired_screen_type"] = "";
obj.trial["trial_type"] = "Team";

obj.trial["valid_until"] = "9999-04-19T10:29:12";
obj.trial["is_active"] = true;


$done({body:JSON.stringify(obj)})
//bynubyta
