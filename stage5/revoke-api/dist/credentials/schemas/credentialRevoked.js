"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CredentialRevokedDocument = exports.CredentialRevokedSchema = void 0;
const mongoose_1 = require("mongoose");
const mongoose_2 = require("mongoose");
exports.CredentialRevokedSchema = new mongoose_1.default.Schema({
    id: String,
    description: String,
    verifiableCredential: [
        {
            claim: {
                id: String,
                currentStatus: String,
                statusReason: String,
            },
            issuer: String,
            issued: Date,
            proof: {}
        }
    ]
});
class CredentialRevokedDocument extends mongoose_2.Document {
}
exports.CredentialRevokedDocument = CredentialRevokedDocument;
//# sourceMappingURL=credentialRevoked.js.map