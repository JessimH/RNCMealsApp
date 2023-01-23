import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import { CATEGORIES } from '../data/dummy-data'
import CategoryGridTile from '../components/CategoryGridTile'


const CategoriesScreen = ({ navigation }) => {
  const renderCategoryItem = (itemData) => {
    const pressHandler = () => {
      navigation.navigate('MealsOverview', {})
    }
    return (
      <CategoryGridTile title={itemData.item.title} color={itemData.item.color} onPressFunction={pressHandler} />
    )
  }

  return (
    <View>
      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={renderCategoryItem}
        // Number colomn FlatList
        numColumns={2}
      />
    </View>
  )
}

export default CategoriesScreen

const styles = StyleSheet.create({

})