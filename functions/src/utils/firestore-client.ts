import * as admin from 'firebase-admin';

class FirestoreClient {
    private db: admin.firestore.Firestore;

    constructor() {
        this.db = admin.firestore();
    }

    async create(
        collection: string, data: object
    ): Promise<admin.firestore.WriteResult> {
        return await this.db.collection(collection).doc().create(data);
    }

    async getAll(
        collection: string
    ): Promise<admin.firestore.DocumentData[]> {
        return this.db.collection(collection).get()
            .then((querySnapshot) =>
                querySnapshot.docs.map((doc) => doc.data()))
            .catch((error) => {
                throw error;
            });
    }
}

export default new FirestoreClient();
