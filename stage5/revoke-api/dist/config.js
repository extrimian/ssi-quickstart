"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const dotenv = require("dotenv");
dotenv.config();
exports.config = {
    PORT: Number(process.env.PORT) || '3800',
    MONGO_URI: process.env.MONGO_URI || '',
    API_URL: process.env.API_URL || '',
    ISSUER: 'Random Country',
    CREDENTIAL_DESCRIPTION: 'Estado de credenciales de identidad para Gibraltar',
};
//# sourceMappingURL=config.js.map