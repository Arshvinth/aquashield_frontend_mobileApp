
// import * as React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import ResearcherBottomTabsBottomTabs from './navigation/ResearcherBottomTabs';
// import AddSpeciesRequest from './screens/addSpeciesRequest';

// export default function App() {
//   return (
//     <NavigationContainer>
//       <ResearcherBottomTabsBottomTabs />
//     </NavigationContainer>
//   );
// }
 
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ResearcherBottomTabsBottomTabs from './navigation/ResearcherBottomTabs';
import AddSpeciesRequest from './screens/addSpeciesRequest';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* Tabs as the main navigation */}
        <Stack.Screen
          name="ResearcherTabs"
          component={ResearcherBottomTabsBottomTabs}
          options={{ headerShown: false }}
        />
        {/* Extra screen for new species request */}
        <Stack.Screen
          name="AddSpeciesRequest"
          component={AddSpeciesRequest}
          options={{ title: 'Add Species Request' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
