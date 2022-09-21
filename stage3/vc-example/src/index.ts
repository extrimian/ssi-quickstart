import { signVCServiceOk } from "./examples/1.sign-vcservice-ok";
import { signVCOk } from "./examples/2.sign-vc-ok";
import { signInvalidPurposeVerify } from "./examples/3.sign-invalid-purpose";
import { signInvalidPurpose } from "./examples/4.sign-invalid-purpose-verify";
import { singInvalidBbsbls2 } from "./examples/5.sign-invalid-bbsbls2";
import { signOkBbsbls2 } from "./examples/6.sign-ok-bbsbls2";

const index = async () => {
    await signVCServiceOk();
    await signVCOk();
    await signInvalidPurpose();
    await signInvalidPurposeVerify
    await singInvalidBbsbls2();
    await signOkBbsbls2();
}

index();