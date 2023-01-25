import { StatusBar } from 'expo-status-bar';
// WRAP ALL APP TO NAVIGATE
import { NavigationContainer } from '@react-navigation/native';

// import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen';

// const Stack = createStackNavigator();

// NativeStack is better but if there is some pb go with StackNavigator
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="dark" />

      {/* WRAP ALL APP TO NAVIGATE */}
      <NavigationContainer>
        {/* First child will be the default screen OR you can set 'initialRouteName' to StackNavigator */}
        <Stack.Navigator initialRouteName="MealsCategories">
          <Stack.Screen
            name="MealsOverview"
            component={MealsOverviewScreen}
          // options={({ route, navigation }) => {
          //   const catId = route.params.categoryId;
          //   return {
          //     title: route.params.categoryTitle,
          //   }
          // }}
          />
          <Stack.Screen
            name="MealDetails"
            component={MealDetailScreen}
          />
          <Stack.Screen
            name="MealsCategories"
            component={CategoriesScreen}
            options={{
              title: 'Home',
            }} />
        </Stack.Navigator>
      </NavigationContainer>

    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
