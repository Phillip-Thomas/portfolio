import { Injectable } from '@angular/core';
import { pipe, Subscription } from 'rxjs'
import { map } from 'rxjs/operators'
import { AngularFirestore } from '@angular/fire/firestore';
import { DocumentSnapshot, QuerySnapshot, SnapshotListenOptions, QueryDocumentSnapshot } from '@firebase/firestore-types';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // projects$
  projectList: any
  list:any
  constructor(private db: AngularFirestore) { }

  getList() {
    return this.db.collection('projects').valueChanges()
  }
}
