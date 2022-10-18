import mongoose from 'mongoose';
import { Document } from 'mongoose';
export declare const CredentialRevokedSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, {}, {}, "type", {
    verifiableCredential: {
        issuer?: string;
        proof?: any;
        issued?: Date;
        claim?: {
            id?: string;
            currentStatus?: string;
            statusReason?: string;
        };
    }[];
    id?: string;
    description?: string;
}>;
export declare class CredentialRevokedDocument extends Document {
    id: string;
    description: string;
    verifiableCredential: [
        {
            claim: {
                id: String;
                currentStatus: String;
                statusReason: String;
            };
            issuer: String;
            issued: Date;
            proof: {};
        }
    ];
}
