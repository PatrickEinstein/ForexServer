export interface Customer {
  customerId: string;
  customerLastName: string;
  customerFirstName: string;
  customerEmail: string;
  customerPhoneNumber: string;
  customerAddress: string;
  customerCity: string;
  customerStateCode: string;
  customerPostalCode: string;
  customerCountryCode: string;
}

export interface PaymentAdvise {
  amount: number;
  currency: string;
  merchantRef: string;
  narration: string;
  callBackUrl: string;
  splitCode: string;
  shouldTTokenzeCard: boolean;
  customer: Customer;
  integrationKey: string;
  mcc: 0;
  merchantDescription: string;
}

export interface CardPayment {
  cardNumber: string;
  expiredMonth: string;
  expiredYear: string;
  cvv: string;
  cardPing: string;
  shouldSaveCard: boolean;
}
