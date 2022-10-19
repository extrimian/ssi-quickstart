import mongoose from 'mongoose';
import { Document } from 'mongoose';
export declare const CredentialSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, {}, {}, "$type", {
    type: string[];
    "@context": string[];
    id?: string;
    issuer?: string;
    name?: string;
    description?: string;
    issuanceDate?: Date;
    expirationDate?: Date;
    credentialStatus?: any;
    credentialSubject?: any;
    refreshService?: any;
    credentialSchema?: any;
    proof?: any;
}>;
export declare class CredentialDocument extends Document {
    '@context'?: string[];
    id: string;
    type: string[];
    issuer: string;
    name: string;
    description: string;
    issuanceDate: Date;
    expirationDate?: Date;
    credentialStatus?: Object;
    credentialSubject: Object;
    refreshService?: Object;
    credentialSchema?: Object;
    proof?: Object;
}
