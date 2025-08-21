import { View, Text } from 'react-native'
import React from 'react'
import useTheme from '@/hooks/usetheme'
import { TouchableOpacity } from "react-native";
const index = () => {
  const {toggleDarkMode} = useTheme();
  return (
    <View>
      <Text>index</Text>
         <TouchableOpacity onPress={toggleDarkMode}> 
        <Text>
          toggle the Mode
        </Text> 
      </TouchableOpacity>
    </View>
  )
}

export default index