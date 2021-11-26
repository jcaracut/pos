import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { Storage } from '@ionic/storage';
import { User } from "src/app/features/auth/models/user.model";

@Injectable()

export class UserProvider {

    constructor(private storage: Storage) { }

    private user_key = "pos_user";
    private observer = new BehaviorSubject<User>(null);

    Init(): Observable<User> {
        let listener: Observable<User> = Observable.create(observer => {
            this.observer = observer;
        });
        return listener;
    };

    Set(user: User): void {
        this.storage.set(this.user_key, user).then(() => {
            this.observer.next(user);
        });
    };

    async Get(): Promise<User> {
        return await this.storage.get(this.user_key);
    };

    async GetToken(): Promise<string> {
        let user = await this.storage.get(this.user_key) as User;
        return user ? user.token : null;
    }

    async isAuthenticated(): Promise<boolean> {
        let user = await this.storage.get(this.user_key) as User;
        return user ? true : false;
    }

    Clear(): void {
        this.storage.remove(this.user_key).then(() => {
            this.observer.next(null);
        });
    }
}
