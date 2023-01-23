import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import { CATEGORIES } from '../data/dummy-data'
import CategoryGridTile from '../components/CategoryGridTile'

const renderCategoryItem = (itemData) => {
  return (
    <CategoryGridTile title={itemData.item.title} color={itemData.item.color} />
  )
}

const CategoriesScreen = () => {
  return (
    <View>
      <FlatList data={CATEGORIES} keyExtractor={(item) => item.id} renderItem={renderCategoryItem} />
    </View>
  )
}

export default CategoriesScreen

const styles = StyleSheet.create({

})