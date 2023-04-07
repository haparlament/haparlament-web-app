# HA-Parlament 

The applications - in this project was build based on [this article](https://observiq.com/blog/embed-react-in-golang/)

### Guidelines
- Use node 16.20.0-lts
- Work in single branch 
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
4. `firebase init emulators` answer all questions with suggested values.

#### Backend

1. `npm run serve`
2. `npm run deploy`

#### Frontend
1. `npm start`
2. `firebase deploy --only hosting`
