import {Component, OnInit} from '@angular/core';
import {AngularFireAuth} from "@angular/fire/auth";
import {auth} from "firebase";
import {AngularFireMessaging} from "@angular/fire/messaging";
import {finalize, mergeMapTo} from "rxjs/operators";
import {AngularFireStorage} from "@angular/fire/storage";
import {Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  uploadPercent: Observable<number>;
  downloadURL: Observable<string>;

  constructor(public auth: AngularFireAuth,
              private storage: AngularFireStorage,
              private afMessaging: AngularFireMessaging) {
  }

  ngOnInit() {
  }

  login() {
    this.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }

  logout() {
    this.auth.signOut();
  }

  requestPermission() {
    this.afMessaging.requestPermission
      .pipe(mergeMapTo(this.afMessaging.tokenChanges))
      .subscribe(
        (token) => { console.log('Permission granted! Save to the server!', token); },
        (error) => { console.error(error); },
      );
  }

  listen() {
    this.afMessaging.messages
      .subscribe((message) => { console.log(message); });
  }

  uploadFile(event) {
    const file = event.target.files[0];
    const filePath = `images/${Date.now()}`;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);

    // observe percentage changes
    this.uploadPercent = task.percentageChanges();
    // get notified when the download URL is available
    task.snapshotChanges().pipe(
      finalize(() => this.downloadURL = fileRef.getDownloadURL() )
    )
      .subscribe()
  }
}
