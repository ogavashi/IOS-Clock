import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import WorldClock from "./components/WorldClock";
import StopWatch from "./components/StopWatch";
import Alarm from "./components/Alarm";
import Timer from "./components/Timer";
import { AppContextProvider } from "./components/AppContext";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <AppContextProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarStyle: styles.tabBar,
            headerStyle: styles.topBar,
            headerTitle: "",
            headerLeftContainerStyle: { paddingLeft: 20 },
            headerRightContainerStyle: { paddingRight: 20 },
            tabBarActiveTintColor: "orange",
            tabBarInactiveTintColor: "white",
            tabBarLabelStyle: styles.tabLabel,
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              if (route.name === "World Clock") {
                iconName = focused ? "globe" : "globe-outline";
              } else if (route.name === "Alarm") {
                iconName = focused ? "alarm" : "alarm-outline";
              } else if (route.name === "Stopwatch") {
                iconName = focused ? "stopwatch" : "stopwatch-outline";
              } else if (route.name === "Timer") {
                iconName = focused ? "timer" : "timer-outline";
              }
              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
        >
          <Tab.Screen name="World Clock" component={WorldClock} />
          <Tab.Screen name="Alarm" component={Alarm} />
          <Tab.Screen name="Timer" component={Timer} />
          <Tab.Screen name="Stopwatch" component={StopWatch} />
        </Tab.Navigator>
      </NavigationContainer>
    </AppContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  tabBar: {
    backgroundColor: "#000000",
    border: "none",
  },
  topBar: {
    backgroundColor: "#000000",
    borderBottomWidth: 0,
  },
  tabLabel: {
    fontSize: 16,
  },
});
