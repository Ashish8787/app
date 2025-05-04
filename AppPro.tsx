import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import FlatCards from './component/FlatCards'
import ElevetedCards from './component/ElevetedCards'
import FancyCards from './component/FancyCards'
import ActionCards from './component/ActionCards'
import Contact from './component/Contact'

const AppPro = () => {
  return (
    <SafeAreaView>
        <ScrollView>
            <FlatCards />
            <ElevetedCards />
            <FancyCards />
            <Contact />
            <ActionCards />
        </ScrollView>
    </SafeAreaView>
  )
}

export default AppPro