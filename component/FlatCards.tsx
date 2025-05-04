import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FlatCards() {
  return (
    <View>
      <Text style = {styles.headingText}>FlatCards</Text>
      <View style = {styles.container}>
      <View style = {[styles.card, styles.card1]}>
        <Text>FlatCard 1</Text>
      </View>
      <View style = {[styles.card, styles.card2]}>
        <Text>FlatCard 1</Text>
      </View>
      <View style = {[styles.card, styles.card3]}>
        <Text>FlatCard 1</Text>
      </View>
      <View style = {[styles.card, styles.card3]}>
        <Text>FlatCard 1</Text>
      </View>
    </View>
    </View>
    
  )
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginVertical: 25,
    paddingHorizontal: 8,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
  },
  card: {
    flex: 1,
    width: '30%',
    height: 100,
    borderEndEndRadius: 10,
    borderTopStartRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    margin :5,
  },
  card1: {
    backgroundColor: '#FF5733',
  },
  card2: {
    backgroundColor: '#33FF57',
  },
  card3: {
    backgroundColor: '#3357FF',
  },
})