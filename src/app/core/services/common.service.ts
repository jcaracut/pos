import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CommonService {
    private userChangeEvent = new BehaviorSubject<void>(null);

    get onUserChanged() {
        return this.userChangeEvent.asObservable();
    }

    userChange() {
        this.userChangeEvent.next();
    }
}
