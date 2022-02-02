export interface VendorContractPayload{
    contractId: number;
    vendorId: number;
    amount: number;
    amountPerKG: number;
    commissionAmountPerKG: number;
    category: String;
    createdDate: Date;
    paymentMethod: String;
    paymentAccount: String;
}