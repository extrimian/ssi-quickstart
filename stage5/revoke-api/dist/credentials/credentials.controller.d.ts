/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
import { RevokedCredentialDto } from './dto/revokedCredential';
import { CredentialsService } from './credentials.service';
export declare class CredentialsController {
    private credentialsService;
    constructor(credentialsService: CredentialsService);
    Revoke(id: string, revokedCredential: RevokedCredentialDto): Promise<import("./models/revokedCredential").RevokedCredentialModel>;
    Verify(id: string): Promise<import("./models/revokedCredential").RevokedCredentialModel>;
    Get(): Promise<(import("./schemas/credential").CredentialDocument & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    GetById(id: string): Promise<import("./schemas/credential").CredentialDocument & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}
