import { DIDModenaResolver } from "@extrimian/did-resolver"
import { getModenaApiURL } from "../utils/modena.utils";


export const resolveDID = async (did: string) => {
    const resolver = new DIDModenaResolver({ modenaURL: getModenaApiURL() });

    return await resolver.resolveDID(did);
};