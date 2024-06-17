import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';
import GroupCard from './GroupCard';

interface GroupsComponentProps {
    // You can add props here if needed
}

const GroupComponent: React.FC<GroupsComponentProps> = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.TitleContainer}>
        <Text style={styles.header}>Groups:</Text>
        <AntDesign name="pluscircleo" size={26} color="black" style={{padding: 5, /*backgroundColor: 'yellow'*/}} />
      </View>
      <View style={styles.ScrollContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} >
          <GroupCard 
            title="USC Expenses" 
            amount="+$100" 
            onPress={() => console.log('USC Expenses pressed')}
          />
          <GroupCard 
            title="Rent" 
            amount="-$500" 
            onPress={() => console.log('Rent pressed')}
          />
          <GroupCard 
            title="Groceries" 
            amount="-$75" 
            onPress={() => console.log('Groceries pressed')}
          />
        </ScrollView>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    mainContainer: {
      padding: 16,
      backgroundColor: 'blue',
    },
    TitleContainer: {
      backgroundColor: 'yellow',
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 8,
    },
    ScrollContainer: {
      backgroundColor: 'cyan',
    },
    header: {
      // backgroundColor:'green',
      fontSize: 24,
      fontWeight: 'bold',
    },
});

export default GroupComponent