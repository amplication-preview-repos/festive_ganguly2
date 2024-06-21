import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { ServerCredentialList } from "./serverCredential/ServerCredentialList";
import { ServerCredentialCreate } from "./serverCredential/ServerCredentialCreate";
import { ServerCredentialEdit } from "./serverCredential/ServerCredentialEdit";
import { ServerCredentialShow } from "./serverCredential/ServerCredentialShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"ServerManagementService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="ServerCredential"
          list={ServerCredentialList}
          edit={ServerCredentialEdit}
          create={ServerCredentialCreate}
          show={ServerCredentialShow}
        />
      </Admin>
    </div>
  );
};

export default App;
