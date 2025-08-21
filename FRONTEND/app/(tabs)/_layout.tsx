import React from "react";
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import  useTheme from "@/hooks/usetheme";

const Tabslayout = () => {
  const { colors } = useTheme();
  return (

    <Tabs screenOptions={{
      tabBarActiveTintColor: colors.primary,
      tabBarInactiveTintColor:colors.textMuted,
      tabBarStyle: {
        backgroundColor:colors.surface,
        borderTopColor:colors.border,
        height: 80,
        borderTopWidth: 1,
        paddingBottom: 40,
        paddingTop: 5,
      },
      tabBarLabelStyle:{
        fontSize:14,
        fontWeight: 600,
      },
      // headerShown: false,
    }} 
    >
      <Tabs.Screen name="index"
        options={{
          title: "Todos",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='flash-outline' size={size} color={color} />
          )
        }}
      />
      <Tabs.Screen name="settings"
        options={{
          title: "settings",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='settings' size={size} color={color} />
          )
        }}
      />
    </Tabs>
  );
};
export default Tabslayout;
