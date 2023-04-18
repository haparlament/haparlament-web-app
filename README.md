# HA-Parlament 

Frontend and backend of the Parlament app.

### Guidelines
- Use node 16.20.0-lts
- Please work on your features in separate branches, and create a new Pull request when you want to merge to main branch.
- If PR has significant changes, please request approval from the core team.
- Try to keep PR small and single Purpose.
- Don't push code without ensuring it is working properly

### Technologies
- Firebase
- Node/Express
- React

### Repo Structure 
The project is based on Firebase thus takes the repo structure from Google's Firebase best practices.

1. Backend is located under `functions` and has a seperate `package.json`. It is an Express app built on top of Firebase cloud functions.
2. Frontend is located under `src` and is a React app which is hosted via Firebase hosting service.

### Development

1. make sure you are running on node16.20.0-lts
2. install firebase tools globally `npm install -g firebase-tools`
3. you should make sure you are added to haparlament project on firebase and receive required credentials.
4. run `firebase init emulators` - pick `haparlament` as the project, and answer all other questions with suggested values.

#### Backend

From `functions` folder:

* Local development: 
    1. `npm install`
    2. `npm run serve`

* Deploy:
    `npm run deploy`

#### Frontend

From the root folder:

* Local development: 
    1. `npm install`
    2. `npm start`

* Deploy:
    - Go to `main` branch and `git pull`
    - `npm run build && firebase deploy --only hosting`
