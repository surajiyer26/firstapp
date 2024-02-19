import React from 'react'
import { View, Text, SafeAreaView, ScrollView, TextInput } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'

function App() {
  return (
    <ScrollView>
    <View>
      <Text>
        Hey there
      </Text>
      <TextInput style = {{
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
      }}
      defaultValue="You can type in me"
      />
    </View>
  </ScrollView>
  )
}

export default App