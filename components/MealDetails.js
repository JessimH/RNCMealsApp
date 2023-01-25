import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const MealDetails = ({ affordability, complexity, duration, style, textStyle }) => {
    return (
        <View style={[styles.summaryMeal, style]}>
            <Text style={[styles.summaryMealText, textStyle]}>{duration} min</Text>
            <Text style={[styles.summaryMealText, textStyle]}>{complexity}</Text>
            <Text style={[styles.summaryMealText, textStyle]}>{affordability}</Text>
        </View>
    )
}

export default MealDetails

const styles = StyleSheet.create({
    summaryMeal: {
        padding: 16,
        flexDirection: 'row',
        justifyContent: 'center',
        textAlign: 'center',
    },
    summaryMealText: {
        marginHorizontal: 8,
    },
})