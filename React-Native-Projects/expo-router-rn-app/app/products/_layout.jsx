import { Tabs } from "expo-router";

export default function Layout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          headerTitle: "Home",
          tabBarLabel: 'home'
        }}
      />
      <Tabs.Screen
        name="[id]"
        options={{
          headerTitle: "Product Details",
          tabBarLabel: 'details'
        }}
      />

    </Tabs>
  );
}
