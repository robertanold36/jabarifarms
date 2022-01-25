export interface VendorContractPayload{
    contractId: number;
    registrationNumber: String;
    amount: number;
    amountPerKG: number;
    commissionAmountPerKG: number;
    category: String;
    createdDate: Date;
    paymentMethod: String;
    paymentAccount: String;
}