// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment: { production: boolean; firebase: any; } = {
  production: false,
  firebase: {
    apiKey: "AIzaSyBY7OoznB8CKcM7gbyRwWc0OAjSJIwaYxY",
    authDomain: "angular-10-firebase-training.firebaseapp.com",
    databaseURL: "https://angular-10-firebase-training.firebaseio.com",
    projectId: "angular-10-firebase-training",
    storageBucket: "angular-10-firebase-training.appspot.com",
    messagingSenderId: "748372713221",
    appId: "1:748372713221:web:1b7508a51de90618a4a16c",
    measurementId: "G-SF8GMZPDG2"
  }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
