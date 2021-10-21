import { BrowserXhr } from '@angular/http';

export class BrowserHook extends BrowserXhr {
	build(): any {
		let xhr = super.build();
		xhr.withCredentials = false;
		return <any>(xhr);
	}
}
