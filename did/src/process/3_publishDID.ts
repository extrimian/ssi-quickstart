import { CreateDIDResponse, Did } from "@extrimian/did-registry";
import { getModenaApiURL } from "../utils/modena.utils";


export const publishDID = async (createDID: CreateDIDResponse) => {
    const registry = new Did();

    return await registry.publishDID({
        modenaApiURL: getModenaApiURL(),
        createDIDResponse: createDID,
    });
};