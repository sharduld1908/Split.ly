import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

interface GroupCardProps {
    title: string;
    amount: string;
    onPress?: () => void;
  }

const GroupCard: React.FC<GroupCardProps> = ({ title, amount, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
        <Text style={styles.cardTitle}>{title}</Text>
        <Text style={styles.cardAmount}>{amount}</Text>
        <View style={styles.membersButton}>
            <Text style={styles.membersButtonText}>Members</Text>
        </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    header: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#fff',
      marginBottom: 16,
    },
    card: {
      backgroundColor: '#2E8B57',
      borderRadius: 10,
      padding: 16,
      marginRight: 16,
      width: 200,
    },
    cardTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#fff',
      marginBottom: 8,
    },
    cardAmount: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#fff',
      marginBottom: 16,
    },
    membersButton: {
      backgroundColor: 'rgba(255, 255, 255, 0.3)',
      borderRadius: 5,
      paddingVertical: 8,
      paddingHorizontal: 12,
      alignSelf: 'flex-start',
    },
    membersButtonText: {
      color: '#fff',
      fontWeight: 'bold',
    },
});

export default GroupCard