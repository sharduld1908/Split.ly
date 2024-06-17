import GroupComponent from '@/components/GroupComponent'
import React from 'react'
import { View } from 'react-native'

const Home = () => {
  return (
    <View style={{ flex: 1, backgroundColor: 'red' }}>
		<GroupComponent></GroupComponent>
    </View>
  )
}

export default Home