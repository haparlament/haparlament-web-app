import { SessionSubscriptionData } from '../stateManagement/modules/sessionSubscription/sessionSubscriptionSlice'
const BASE_API_URL = 'https://us-central1-haparlament.cloudfunctions.net/api/v1';
// const BASE_API_URL = 'http://localhost:5001/haparlament/us-central1/api/v1'; // TODO - use this when running locally

async function postData(url: string, data: string) {
    const response = await fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin - TODO temporarily enabling this since the functions base url is currently different than the app url
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
      hoursRanges: session.timeAvailability.hoursRanges.map(range => `${range.from.hour}-${range.to.hour}`),
    }
    let json =  JSON.stringify(serverDto);
    return postData(`${BASE_API_URL}/session-request/`, json);
}
// export  postSessionRequest;