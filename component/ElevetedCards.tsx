import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'

export default function ElevetedCards (){
  return (
    <View>
      <Text style = {styles.headingText}>Eleveted Cards</Text>
      <ScrollView horizontal={true} style = {styles.container}>
        <View style = {[styles.card, styles.card1]}>
            <Text>Eleveted Card 1</Text>    
        </View>
        <View style = {[styles.card, styles.card2]}>
            <Text>Eleveted Card 2</Text>    
        </View>
        <View style = {[styles.card, styles.card3]}>    
            <Text>Eleveted Card 3</Text>    
        </View>
        <View style = {[styles.card, styles.card1]}>    
            <Text>Eleveted Card 3</Text>    
        </View>
        <View style = {[styles.card, styles.card3]}>    
            <Text>Eleveted Card 3</Text>    
        </View>
        <View style = {[styles.card, styles.card1]}>    
            <Text>Eleveted Card 3</Text>    
        </View>
        <View style = {[styles.card, styles.card2]}>    
            <Text>Eleveted Card 3</Text>    
        </View>
        <View style = {[styles.card, styles.card1]}>    
            <Text>Eleveted Card 3</Text>    
        </View>
      </ScrollView>
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
elevation: 5,
  },
  card1:{
    backgroundColor: '#FF5733',
  },
   card2:{
    backgroundColor: '#33FF57',
  },
    card3:{
    backgroundColor: '#3357FF', 
    },
})
