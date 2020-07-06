import { AppState } from './interfaces';

export const getPaymentTerminals = (state: AppState) => [ 'T1', 'T2', 'T3' ];
export const getIsPaymentServiceEnabled = (state: AppState) => true;