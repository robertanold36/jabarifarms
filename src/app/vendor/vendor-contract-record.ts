export interface VendorContractRecord{
    recordId: number;
    vendorContractId: number;
    totalWholes: number;
    totalPieces: number;
    createdDate: Date;
    moisturePercent: number;
    pricePerKiloWhole: number;
    pricePerKiloPieces: number;
}