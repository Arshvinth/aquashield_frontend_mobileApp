
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import ResearcherBottomTabsBottomTabs from './navigation/ResearcherBottomTabs';
import ClientBottom from './navigation/ClientReporterBottomTab';

export default function App() {
  return (
    <NavigationContainer>
      {/*<ResearcherBottomTabsBottomTabs />*/}
      <ClientBottom />
    </NavigationContainer>
  );
}
