/* eslint-disable no-unused-vars */
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@aws-amplify/ui-react/styles.css";

import { Routes, Route } from "react-router-dom";

import SiteNav from "./components/Common/SiteNav";
import SiteFooter from "./components/Common/SiteFooter";

import HomePage from "./components/Home/HomePage";
import Contacts from "./components/Contacts/Contacts";

import { Amplify } from "aws-amplify";
import {
  Authenticator,
  View,
  Image,
  useTheme,
  Text,
} from "@aws-amplify/ui-react";
import awsExports from "./aws-exports";

Amplify.configure(awsExports);

function App() {
  const components = {
    Header() {
      const { tokens } = useTheme();

      return (
        <View textAlign="center" padding={tokens.space.large}>
          <Image alt="Contacts app" src="/img/logo.png" />
        </View>
      );
    },

    Footer() {
      const { tokens } = useTheme();

      return (
        <View textAlign="center" padding={tokens.space.large}>
          <Text color={tokens.colors.neutral[80]}>&copy; 2023 Handyman</Text>
        </View>
      );
    },
  };

  return (
    <Authenticator loginMechanisms={["email"]} components={components}>
      {({ signOut, user }) => (
        <div>
          <SiteNav logOut={signOut} />
          <Routes>
            <Route path="*" element={<HomePage />} />
            <Route path="/" exact={true} element={<HomePage />} />
            <Route path="/contacts" element={<Contacts />} />
          </Routes>
          <SiteFooter />
        </div>
      )}
    </Authenticator>
  );
}

export default App;
