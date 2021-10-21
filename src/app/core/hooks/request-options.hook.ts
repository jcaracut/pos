// import { BaseRequestOptions, RequestOptions, RequestOptionsArgs, Headers } from '@angular/http';
// import { TokenProvider } from '../provider/token.provider';

// export class RequestOptionsHook extends BaseRequestOptions {
//      constructor(private tokenProvider: TokenProvider) {
//           super();
//      }

//      headers = new Headers({});

//      merge(options?: RequestOptionsArgs): RequestOptions {
//           let token = this.tokenProvider.Get();
//           var newOptions = super.merge(options);
//           if (token) {
//                newOptions.headers.set("Authorization", "Bearer " + token);
//           }
//           newOptions.headers.set("Content-Type", "application/json");
//           return newOptions;
//      };
// };
