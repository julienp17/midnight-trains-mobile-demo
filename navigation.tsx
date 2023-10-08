import React from "react";
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator
} from "@react-navigation/bottom-tabs";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

import HomeScreen from "./screens/Home";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { Center, Image } from "native-base";
import MidnightTrainsLogoWithTitleYellow from "./assets/midnight_trains_logo_yellow.png";

type TabBarIconProps = {
  focused: boolean;
  color: string;
  size: number;
};

const getIcon = (
  { focused, color, size }: TabBarIconProps,
  iconName: string
): React.ReactNode => (
    <MaterialIcons name={iconName} size={size} color={focused ? "#1A1C33" : "#FDDBA9"} />
);

const Tab = createBottomTabNavigator<TabParamList>();
type TabParamList = {
  Home: undefined;
  Search: undefined,
  Shop: undefined,
  Profile: undefined,
  Menu: undefined
};

const options: BottomTabNavigationOptions = {
  headerTitle: () => (
      <Image
        size="xl"
        source={require('./assets/midnight_trains_logo_with_title_yellow.png')}
        resizeMode='contain'
      />
  ),
  headerStyle: {
    backgroundColor: "#1A1C33",
    padding: 4
  },
  headerTitleAlign: "center",
  tabBarShowLabel: false,
  tabBarActiveBackgroundColor: "#FDDBA9",
  activeTintColor: "#1A1C33",
  inactiveTintColor: "#FDDBA9",
  tabBarStyle: {
    backgroundColor: "#1A1C33",
  },
}

function TabsNavigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={options}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: (props: TabBarIconProps) => getIcon(props, 'home')
          }}
        />
        <Tab.Screen
          name="Search"
          component={HomeScreen}
          options={{
            tabBarIcon: (props: TabBarIconProps) => getIcon(props, 'search')
          }}
        />
        <Tab.Screen
          name="Shop"
          component={HomeScreen}
          options={{
            tabBarIcon: (props: TabBarIconProps) => getIcon(props, 'shopping-bag')
          }}
        />
        <Tab.Screen
          name="Profile"
          component={HomeScreen}
          options={{
            tabBarIcon: (props: TabBarIconProps) => getIcon(props, 'person')
          }}
        />
        <Tab.Screen
          name="Menu"
          component={HomeScreen}
          options={{
            tabBarIcon: (props: TabBarIconProps) => getIcon(props, 'menu')
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default TabsNavigation;
