var obj = JSON.parse($response.body);
obj["responseCreationDate"] = "17:12 04\/04\/2099";
obj["linkedProducts"][0]["inAppStates"][0]["state"]="active";
obj["linkedProducts"][0]["inAppStates"][0]["expirationDate"]="17:12 04\/04\/2099";

$done({body: JSON.stringify(obj)});

//
