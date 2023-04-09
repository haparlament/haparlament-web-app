class SessionRequest {
    constructor(imageId, feeling, username, phoneNumber, day, hourRange) {
      this.imageId = imageId;
      this.feeling = feeling;
      this.username = username;
      this.phoneNumber = phoneNumber;
      this.day = day;
      this.hourRange = hourRange;
    }
  }  


async function postData(url = "", data = {}) {
    const response = await fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      //mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      //credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      //redirect: "follow", // manual, *follow, error
      //referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: data, // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }
  
  


export function postSessionRequest(sessionRequest) {
    let json =  JSON.stringify(sessionRequest);
    console.log(json);
    return postData("https://us-central1-haparlament.cloudfunctions.net/api/v1/session-request/", json);
}
// export  postSessionRequest;