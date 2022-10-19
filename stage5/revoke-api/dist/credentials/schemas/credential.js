"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CredentialDocument = exports.CredentialSchema = void 0;
const mongoose_1 = require("mongoose");
const mongoose_2 = require("mongoose");
exports.CredentialSchema = new mongoose_1.default.Schema({
    '@context': [String],
    id: String,
    type: [String],
    issuer: String,
    name: String,
    description: String,
    issuanceDate: Date,
    expirationDate: Date,
    credentialStatus: Object,
    credentialSubject: Object,
    refreshService: Object,
    credentialSchema: Object,
    proof: Object,
}, { typeKey: '$type' });
class CredentialDocument extends mongoose_2.Document {
}
exports.CredentialDocument = CredentialDocument;
//# sourceMappingURL=credential.js.map