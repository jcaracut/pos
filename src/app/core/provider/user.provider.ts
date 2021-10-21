// import {Injectable} from "@angular/core";
// import {BehaviorSubject, Observable} from "rxjs";
// import { Storage } from '@ionic/storage';

// @Injectable()

// export class UserProvider {

//      constructor(private storage: Storage){ }

//     private user: string;
//     public observer: BehaviorSubject<string>;

//     Init(): Observable<string> {
//         let listener: Observable<string> = Observable.create(observer => {
// 			this.observer = observer;
//         });
//         return listener;
//     };

//     Set(user: string): void {
//         this.user = user;
//         this.storage.set('user', user).then(() => {
//             this.observer.next(user);
//         });
//     };

//     Get(): string {
//         return this.user;
//     };

//     Clear(): void{
//         this.user = null;
//         this.storage.remove('user').then(() => {
//             this.observer.next(null);
//         });
//     }
// }
