import { Inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { switchMap, map, mergeMap } from "rxjs/operators";
import { ProductService } from "src/app/features/products/services/product.service";

import * as actions from "../actions"

@Injectable()
export class ProductEffects {

    constructor(
        private productSvc: ProductService,
        @Inject(Actions) private actions$
    ) { }

    getProducts = createEffect(() => this.actions$.pipe(
        ofType(actions.getProducts),
        switchMap(() => {
            return this.productSvc.GetProducts().pipe(
                map(products => actions.getProductsSuccess({ products })),
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