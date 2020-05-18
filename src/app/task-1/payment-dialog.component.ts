import { Component, Inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { map, take  } from 'rxjs/operators';
import { Store, select } from '@ngrx/store';
import { AppState, PrimaryPaymentMethod } from './interfaces';
import { getIsPaymentServiceEnabled, getPaymentTerminals } from './selectors';

// Task 1
// 
// You see some payment dialog, which checks PaymentServices config in the store 
// (if payment service is enables or not and if any payment terminal exists) 
// and creates a payment form with ---> the pre-selected payment method <----   
// depending on the state of the payment service. 
// 
// So, your task is:
//   - Look closer at this component. And...
//   - Say why the function getPrimaryPreselectedPaymentMethod is implemented so badly. And...
//   - Refactor this function (or/and maybe the whole component ;) to implement it properly.

@Component({  
  selector: 'payment-dialog'
})
export class PaymentDialogComponent {
  constructor(
    @Inject('Some token')
    public readonly data: { hasPaymentAccount: boolean },
    private readonly formBuilder: FormBuilder,
    private readonly store: Store<AppState>    
  ) {}

  public readonly paymentForm = this.formBuilder.group({
    primaryMethod: this.getPrimaryPreselectedPaymentMethod(),
    method: 'Cash',
    amount: 0,
    reference: undefined
  });

  public readonly isPaymentServiceEnabled$ = this.store.pipe(
    select(getIsPaymentServiceEnabled)
  );

  public readonly paymentTerminals$ = this.store.pipe(
    select(getPaymentTerminals)
  );

  public readonly anyPaymentTerminal$ = this.paymentTerminals$.pipe(
    map(terminals => terminals.length > 0)
  );

  // Is needed to show or hide something in the .html template
  // And for the current task it doesn't really metter what. 
  public isPrimaryMethodVisible = false;

  private getPrimaryPreselectedPaymentMethod(): PrimaryPaymentMethod {
    let isPaymentEnabled = false;
    this.isPaymentServiceEnabled$.pipe(take(1)).subscribe(u => {
      isPaymentEnabled = u;
    });

    if (
      this.data &&
      this.data.hasPaymentAccount &&
      isPaymentEnabled
    ) {
      this.isPrimaryMethodVisible = true;

      return 'Reuse';
    }

    let terminals = false;
    this.anyPaymentTerminal$.pipe(take(1)).subscribe(u => {
      terminals = u;
    });

    if (terminals) {
      this.isPrimaryMethodVisible = true;

      return 'PaymentTerminal';
    }

    if (isPaymentEnabled) {
      this.isPrimaryMethodVisible = true;

      return 'PaymentLink';
    }

    return 'OtherPayment';
  }
}