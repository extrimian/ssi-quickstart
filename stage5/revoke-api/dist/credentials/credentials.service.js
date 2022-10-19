"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CredentialsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const config_1 = require("../config");
let CredentialsService = class CredentialsService {
    constructor(credentialRevokedModel, credentialModel) {
        this.credentialRevokedModel = credentialRevokedModel;
        this.credentialModel = credentialModel;
    }
    async revoke(vcId, vc) {
        this.validateCurrentStatus(vc.currentStatus);
        const revokedCredential = await this.getRevokedCredential(vcId);
        const newRevokedCredential = await this.generateRevokedCredential(vcId, vc, revokedCredential);
        if (!revokedCredential) {
            try {
                await this.credentialRevokedModel.create(newRevokedCredential);
                return newRevokedCredential;
            }
            catch (ex) {
                throw new common_1.InternalServerErrorException(ex);
            }
        }
        else {
            try {
                await this.credentialRevokedModel.updateOne({ id: revokedCredential.id }, { verifiableCredential: newRevokedCredential.verifiableCredential });
                return newRevokedCredential;
            }
            catch (ex) {
                throw new common_1.InternalServerErrorException(ex);
            }
        }
    }
    async verifyCredential(vcId) {
        return await this.getRevokedCredential(vcId);
    }
    async getRevokedCredential(id) {
        const statusId = `${config_1.config.API_URL}/status/${id}`;
        const result = await this.credentialRevokedModel.findOne({ id: statusId });
        return result;
    }
    async generateRevokedCredential(id, revokedCredentialDto, revokedCredentialModel) {
        const newVerifiableCredential = {
            claim: {
                id: `${config_1.config.API_URL}/credentials/${id}`,
                currentStatus: revokedCredentialDto.currentStatus,
                statusReason: revokedCredentialDto.statusReason,
            },
            issuer: config_1.config.ISSUER,
            issued: new Date(),
            proof: {},
        };
        const verifableCredentials = revokedCredentialModel
            ? revokedCredentialModel.verifiableCredential
            : [];
        verifableCredentials.push(newVerifiableCredential);
        const newRevokedCredential = {
            id: `${config_1.config.API_URL}/status/${id}`,
            description: config_1.config.CREDENTIAL_DESCRIPTION,
            verifiableCredential: verifableCredentials,
        };
        return newRevokedCredential;
    }
    validateCurrentStatus(currentStatus) {
        if (currentStatus !== 'Revoked' && currentStatus !== 'Suspended') {
            throw new common_1.BadRequestException('invalid currentStatus, it will be Revoked or Suspended');
        }
    }
    async getCredentials() {
        try {
            return await this.credentialModel.find();
        }
        catch (ex) {
            throw new common_1.InternalServerErrorException(ex);
        }
    }
    async getCredentialById(id) {
        try {
            return await this.credentialModel.findOne({ id: id });
        }
        catch (ex) {
            throw new common_1.InternalServerErrorException(ex);
        }
    }
};
CredentialsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('revoked-vcs')),
    __param(1, (0, mongoose_1.InjectModel)('credentials')),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model])
], CredentialsService);
exports.CredentialsService = CredentialsService;
//# sourceMappingURL=credentials.service.js.map