import { ServerCredential as TServerCredential } from "../api/serverCredential/ServerCredential";

export const SERVERCREDENTIAL_TITLE_FIELD = "hostname";

export const ServerCredentialTitle = (record: TServerCredential): string => {
  return record.hostname?.toString() || String(record.id);
};
