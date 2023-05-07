require('./firebase-init');
import { https } from 'firebase-functions';
import express, { Express } from 'express';
import cors from 'cors';
import * as bodyParser from 'body-parser';
// import userRoutes from './routes/api/users';
// import sessionRoutes from './routes/api/sessions';
// import moderatorsRoutes from './routes/api/moderators';
import sessionRequestRoutes from './routes/api/session-request';

const app: Express = express();
// app.use(cors({ origin: ['https://haparlament.web.app'] }));

app.use(cors({ origin: true })); // TODO fix
app.options('*', cors({ origin: true })); // TODO fix

// app.use('/v1/user', userRoutes);
// app.use('/v1/session', sessionRoutes);
// app.use('/v1/moderators', moderatorsRoutes);
app.use('/v1/session-request', sessionRequestRoutes);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

export const api = https.onRequest(app);
// export const cronJobs = pubsub.schedule('5 0 * * *')
//     .timeZone('Asia/Jerusalem')
//     .onRun(async () => {
//         await syncAirtable();
//     });
