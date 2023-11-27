
import React  from 'react';
import './App.css';
import Base from './Base.tsx';

import { Box, Inline, Stack, xcss } from '@atlaskit/primitives';

import { AtlassianIcon, AtlassianLogo } from '@atlaskit/logo';
import Avatar from '@atlaskit/avatar';

import {
  AtlassianNavigation,
  PrimaryButton,
  PrimaryDropdownButton,
  ProductHome,
  AppSwitcher,
  Profile,
  Settings
} from '@atlaskit/atlassian-navigation';
import StoreProvider from './store/StoreProvider.js';

const AtlassianProductHome = () => (
  <ProductHome icon={AtlassianIcon} logo={AtlassianLogo} />
);

const DefaultSettings = () => <Settings tooltip="Product settings" />;
const onClick = (...args) => {
  console.log('profile click', ...args);
};

const DefaultAppSwitcher = () => <AppSwitcher tooltip="Switch to..." />;

const DefaultProfile = () => (
  <Profile
    icon={
      <Avatar
        size="small"
        src={''}
        name="Atlassian account: Emil Rottmayer"
      />
    }
    onClick={onClick}
    tooltip="Your profile and settings"
  />
);






const Navegacion = () => (
  <AtlassianNavigation
    label="site"
    primaryItems={[
      <PrimaryButton>Your work</PrimaryButton>,
      <PrimaryDropdownButton>Issues</PrimaryDropdownButton>,
      <PrimaryDropdownButton>Projects</PrimaryDropdownButton>,
      <PrimaryButton>Repositories</PrimaryButton>,
    ]}
    renderAppSwitcher={DefaultAppSwitcher}
    renderProductHome={AtlassianProductHome}
    renderProfile={DefaultProfile}
    renderSettings={DefaultSettings}
  />
);





function App() {
  return (
    /*<Box className="App">
      <Navegacion/>
      
    </Box>
    */
   <StoreProvider>
      <Base></Base>
   </StoreProvider>
   
  );
}

export default App;
