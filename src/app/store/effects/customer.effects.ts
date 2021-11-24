import { Inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { switchMap, map, mergeMap } from "rxjs/operators";
import { CustomerService } from "src/app/features/customers/services/customer.service";

import * as actions from "../actions"

@Injectable()
export class CustomerEffects {

    constructor(
        private customerSvc: CustomerService,
        @Inject(Actions) private actions$
    ) { }

    getCustomers = createEffect(() => this.actions$.pipe(
        ofType(actions.getCustomers),
        switchMap(() => {
            return this.customerSvc.GetCustomers().pipe(
                map(customers => actions.getCustomersSuccess({ customers })),
            );
        }),
    ));

    // saveProduct = createEffect(() => this.actions$.pipe(
    //     ofType(actions.saveProduct),
    //     mergeMap((action) => {
    //         return this.saveProduct.saveProduct(action.product).pipe(
    //             map(saveProduct => actions.saveProduct({ product: product[0] })),
    //         );
    //     }),
    // ));


}