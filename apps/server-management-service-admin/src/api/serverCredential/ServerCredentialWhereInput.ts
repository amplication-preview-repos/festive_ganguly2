import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type ServerCredentialWhereInput = {
  hostname?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  port?: IntNullableFilter;
  privateKey?: StringNullableFilter;
  username?: StringNullableFilter;
};
