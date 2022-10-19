export type VcDataDto = {
  contexts: string[];
  vcInfo: {
    issuer: string;
    types: string[];
  };
  data: any;
  mappingRulesDescriptor: Record<string, string>;
};
