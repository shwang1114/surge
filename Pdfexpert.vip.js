var obj = JSON.parse($response.body);

obj["newAccount"]=true;
obj["responseCreationDate"]="17:12 28\/03\/9999";
obj["linkedProducts"][0]["inAppStates"][0]["state"]="active";
obj["linkedProducts"][0]["inAppStates"][0]["expirationDate"]="17:12 04\/04\/9999";

$done({body: JSON.stringify(obj)});

//
