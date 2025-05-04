import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Contact() {
    const contacts = [
        {
            uid: 1,
            name: 'John Doe',
            phone: '123-456-7890',
            email: 'johndoe@gmail.com',
            imageUrl: 'https://avatars.githubusercontent.com/u/69979718?v=4',
        },
        {
            uid: 2,
            name: 'Jane Smith',
            phone: '987-654-3210',
            email: 'janesmith@gmail.com',
            imageUrl: 'https://avatars.githubusercontent.com/u/69979718?v=4',
        },
        {
            uid: 3,
            name: 'Sam Wilson',
            phone: '555-555-5555',
            email: 'samwilson@gmail.com',
            imageUrl: 'https://avatars.githubusercontent.com/u/69979718?v=4',
        },
        {
            uid: 4,
            name: 'John Doe',
            phone: '123-456-7890',
            email: 'johndoe@gmail.com',
            imageUrl: 'https://avatars.githubusercontent.com/u/69979718?v=4',
        },
        {
            uid: 5,
            name: 'Jane Smith',
            phone: '987-654-3210',
            email: 'janesmith@gmail.com',
            imageUrl: 'https://avatars.githubusercontent.com/u/69979718?v=4',
        },
        {
            uid: 6,
            name: 'Sam Wilson',
            phone: '555-555-5555',
            email: 'samwilson@gmail.com',
            imageUrl: 'https://avatars.githubusercontent.com/u/69979718?v=4',
        },
    ]
  return (
    <View>
      <Text style={styles.headerText}>Contact List</Text>
      <View>
        <ScrollView style={styles.container} scrollEnabled={true}>
            {contacts.map(({uid, name, phone, email, imageUrl}) => (
                <View key={uid} style={styles.userCard}>
                    <Image 
                    source={{
                        uri: imageUrl
                    }}
                    style={styles.userImage}
                    />
                    <View>
                    <Text style={styles.userName}>{name}</Text>
                    <Text style={styles.userPhone}>{phone}</Text>
                    <Text style = {styles.userEmail}>{email}</Text>
                    </View>
                </View>
            ))}
        </ScrollView>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 5,
        textAlign: 'center',
    },
    container: {
        margin: 10,

    },
    userCard:{
        flex: 1, 
        flexDirection: 'row',
        backgroundColor: '#e1e3e1',
        borderRadius: 6,
        marginTop: 10,
        padding: 8,
        },
    userImage:{
        width: 80,
        height: 80,
    },
    userName:{
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 10,
        marginTop: 5,
        color: '#000',
    },
    userPhone:{
        fontSize: 16,
        marginLeft: 10,
        color: '#000',
    },
    userEmail:{
        fontSize: 16,
        marginLeft: 10,
        color: '#000',
    },
})