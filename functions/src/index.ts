import { https } from 'firebase-functions';
import * as admin from 'firebase-admin';
import express, { Express } from 'express';
import * as bodyParser from 'body-parser';
import userRoutes from './routes/api/users';

admin.initializeApp();
export const db = admin.firestore();
const app: Express = express();

app.use('/api/v1/user', userRoutes);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

export const webApi = https.onRequest(app);
