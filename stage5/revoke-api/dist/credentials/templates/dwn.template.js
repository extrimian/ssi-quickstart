"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dwnTemplate = void 0;
const dwnTemplate = (did, id, data) => {
    const date = Math.floor(new Date().getTime() / 1000);
    return {
        target: did,
        messages: [
            {
                data: data,
                descriptor: {
                    objectId: id,
                    dateCreated: date,
                    method: "ThreadsCreate",
                    schema: "https://schema.org/LikeAction",
                    dataFormat: "application/JSON-LD"
                }
            }
        ]
    };
};
exports.dwnTemplate = dwnTemplate;
//# sourceMappingURL=dwn.template.js.map