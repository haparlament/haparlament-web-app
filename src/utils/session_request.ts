import { SessionSubscriptionData } from '../stateManagement/modules/sessionSubscription/sessionSubscriptionSlice'
//const BASE_API_URL = 'https://us-central1-haparlament.cloudfunctions.net/api/v1';
const BASE_API_URL = 'http://127.0.0.1:5001/haparlament/us-central1/api/v1'; // TODO - use this when running locally

async function postData(url: string, data: string) {
    const response = await fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "no-cors", // no-cors, *cors, same-origin - TODO this should be enabled when working locally
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      //credentials: "same-origin", // include, *same-origin, omit
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
                // "Accept": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      //redirect: "follow", // manual, *follow, error
      //referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: data, // body data type must match "Content-Type" header
    });
    if (response.ok) {
      return response.json(); // parses JSON response into native JavaScript objects
    }
    throw new Error('Error saving session')
  }
  
  


export function postSessionRequest(session: SessionSubscriptionData) {
    const serverDto = {
      userName: session.user.name,
      phoneNumber: session.user.phoneNumber,
      imageId: session.imageEmotion.imageId,
      emotion: session.imageEmotion.emotion,
      days: session.timeAvailability.days,
      hoursRanges: session.timeAvailability.hoursRanges,
    }
    let json =  JSON.stringify(serverDto);
    console.log(json);
    return postData(`${BASE_API_URL}/session-request/`, json);
}
// export  postSessionRequest;