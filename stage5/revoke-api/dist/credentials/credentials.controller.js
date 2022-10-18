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
exports.CredentialsController = void 0;
const common_1 = require("@nestjs/common");
const credentials_service_1 = require("./credentials.service");
let CredentialsController = class CredentialsController {
    constructor(credentialsService) {
        this.credentialsService = credentialsService;
    }
    async Revoke(id, revokedCredential) {
        return await this.credentialsService.revoke(id, revokedCredential);
    }
    async Verify(id) {
        return await this.credentialsService.verifyCredential(id);
    }
    async Get() {
        return await this.credentialsService.getCredentials();
    }
    async GetById(id) {
        const vc = await this.credentialsService.getCredentialById(id);
        return vc;
    }
};
__decorate([
    (0, common_1.Post)('revoke/:id'),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], CredentialsController.prototype, "Revoke", null);
__decorate([
    (0, common_1.Post)('verify/:id'),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CredentialsController.prototype, "Verify", null);
__decorate([
    (0, common_1.Get)(),
    (0, common_1.HttpCode)(200),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CredentialsController.prototype, "Get", null);
__decorate([
    (0, common_1.Get)('byid/:id'),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CredentialsController.prototype, "GetById", null);
CredentialsController = __decorate([
    (0, common_1.Controller)('credentials'),
    __metadata("design:paramtypes", [credentials_service_1.CredentialsService])
], CredentialsController);
exports.CredentialsController = CredentialsController;
//# sourceMappingURL=credentials.controller.js.map