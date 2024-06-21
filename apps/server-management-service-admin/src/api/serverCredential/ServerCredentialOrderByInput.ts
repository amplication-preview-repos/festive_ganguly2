import { SortOrder } from "../../util/SortOrder";

export type ServerCredentialOrderByInput = {
  createdAt?: SortOrder;
  hostname?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  port?: SortOrder;
  privateKey?: SortOrder;
  updatedAt?: SortOrder;
  username?: SortOrder;
};
