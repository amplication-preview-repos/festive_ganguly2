import { ServerCredentialWhereInput } from "./ServerCredentialWhereInput";
import { ServerCredentialOrderByInput } from "./ServerCredentialOrderByInput";

export type ServerCredentialFindManyArgs = {
  where?: ServerCredentialWhereInput;
  orderBy?: Array<ServerCredentialOrderByInput>;
  skip?: number;
  take?: number;
};
