// firebase.service.ts
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  collectionName = 'messages';

  constructor(
    private firestore: AngularFirestore
  ) { }

  create_message(record) {
    console.log(record);

    return this.firestore.collection(this.collectionName).add(record);
  }

  read_messages() {
    return this.firestore.collection(this.collectionName, ref => ref.orderBy('CreateDate')).snapshotChanges();
  }

  update_message(recordID, record) {
    this.firestore.doc(this.collectionName + '/' + recordID).update(record);
  }

  delete_message(record_id) {
    this.firestore.doc(this.collectionName + '/' + record_id).delete();
  }
}
