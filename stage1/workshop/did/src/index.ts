import { DIDDocument, DIDDocumentMetadata } from "@extrimian/did-core";
import { createLongDID } from "./process/1_createLongDID";
import { resolveDID } from "./process/2_resolveDID";
import { publishDID } from "./process/3_publishDID";

export const index = async () => {
    const result = await createLongDID();

    let didDocument = await resolveDID(result.didUniqueSuffix);
    console.log(didDocument);

    const publicDID = await publishDID(result);
    console.log(publicDID);

    const resolvePromise = new Promise<DIDDocument>(async (resolve, reject) => {
        setTimeout(async () => {
            didDocument = await resolveDID(publicDID.canonicalId);
            resolve(didDocument);
        }, 180000);
    });

    didDocument = await resolvePromise;
    console.log(didDocument);
};

index();