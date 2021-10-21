import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { Storage } from '@ionic/storage';

@Injectable()

export class TokenProvider {

    constructor(private storage: Storage) { }

    private token: string;
    public observer: BehaviorSubject<string>;

    Init(): Observable<string> {
        let listener: Observable<string> = Observable.create(observer => {
            this.observer = observer;
        });
        return listener;
    };

    Set(token: string): void {
        this.token = token;
        this.storage.set('token', token).then(() => {
            this.observer.next(token);
        });
    };

    Get(): string {
        return this.token;
    };

    Clear(): void {
        this.token = null;
        this.storage.remove('token').then(() => {
            this.observer.next(null);
        });
    }
}
