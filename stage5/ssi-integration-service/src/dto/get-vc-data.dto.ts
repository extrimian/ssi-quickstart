import { CredentialContext } from '../schemas/credential-context.schema';

export type GetVcDataDto = (Pick<
  CredentialContext,
  'contexts' | 'vcInfo' | 'mappingRulesDescriptor'
> & { data: any })[];
