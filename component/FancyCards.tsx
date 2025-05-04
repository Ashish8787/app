import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

export default function FancyCards() {
  const [showFullText, setShowFullText] = useState(false);

  const toggleText = () => {
    setShowFullText(!showFullText);
  };

  return (
    <View>
      <Text style={styles.headingText}>Trending place</Text>

      <View style={[styles.cards, styles.cardEleveted]}>
        <Image
          source={{
            uri: 'https://www.revv.co.in/blogs/wp-content/uploads/2019/11/self-drive-car-rental-delhi-gurgaon-noida_revv-blog.jpg',
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>India Gate</Text>
          <Text style={styles.cardLable}>Delhi</Text>
          <Text
            numberOfLines={showFullText ? undefined : 3}
            style={styles.cardDescription}
          >
            You aren’t going back home without visiting the heritage sites in India. 
            And you will find some of the best ones in the country’s capital, Delhi. 
            Like the Red Fort! It’s a marvellous Fort, a UNESCO heritage site, that 
            was built centuries back with red stones and marbles and architectural details. 
            Then there is also the Humayun’s Tomb that will impress you with its unique charm. 
            Even the Qutub Minar Complex is one of the famous attractions which is listed 
            as a world heritage site. Be awed by the complex construction of the ancient 
            observatory, Jantar Mantar. And since you have a car with you, don’t miss 
            visiting the Lotus Temple.
          </Text>

          <TouchableOpacity onPress={toggleText}>
            <Text style={styles.viewMoreText}>
              {showFullText ? 'View Less' : 'View More'}
            </Text>
          </TouchableOpacity>

          <Text style={styles.cardFooter}>1 Hour far away</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginVertical: 25,
    paddingHorizontal: 8,
  },
  cardEleveted: {
    backgroundColor: '#FFFFFF',
    elevation: 5,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.25,
  },
  cards: {
    borderRadius: 6,
    marginVertical: 12,
    marginHorizontal: 16,
  },
  cardImage: {
    height: 280,
    marginBottom: 8,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },
  cardBody: {
    flex: 1,
    flexGrow: 1,
    paddingHorizontal: 16,
    paddingBottom: 12,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
  },
  cardLable: {
    fontSize: 16,
    color: '#000000',
  },
  cardDescription: {
    fontSize: 14,
    color: '#000000',
  },
  cardFooter: {
    fontSize: 14,
    color: '#000000',
    textAlign: 'right',
    marginTop: 8,
  },
  viewMoreText: {
    color: '#1e90ff',
    marginTop: 4,
    fontWeight: '600',
  },
});
