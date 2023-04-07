import { https } from 'firebase-functions';
import * as admin from 'firebase-admin';
import express, { Express } from 'express';
import * as bodyParser from 'body-parser';
import userRoutes from './routes/api/users';
import sessionRoutes from './routes/api/sessions';
import sessionRequestRoutes from './routes/api/session-request';
import moderatorsRoutes from './routes/api/moderators';

admin.initializeApp();
export const db = admin.firestore();
const app: Express = express();

app.use('/api/v1/user', userRoutes);
app.use('/api/v1/session', sessionRoutes);
app.use('/api/v1/session-requests', sessionRequestRoutes);
app.use('/api/v1/moderators', moderatorsRoutes);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

export const webApi = https.onRequest(app);
