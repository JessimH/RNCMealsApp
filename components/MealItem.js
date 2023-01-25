import { Pressable, StyleSheet, Text, View, Image, Platform } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const MealItem = ({ id, title, imageUrl, duration, complexity, affordability }) => {
    const navigation = useNavigation()
    const navigateHandler = () => {
        navigation.navigate('MealDetails', { id })
    }

    return (
        <View style={styles.mealItem}>
            <Pressable
                android_ripple={{ color: '#ccc' }}
                style={({ pressed }) => pressed ? styles.buttonPressed : null}
                onPress={navigateHandler}
            >
                <View style={styles.innerMealItem}>
                    <View>
                        <Image source={{ uri: imageUrl }} style={styles.image} />
                        <Text style={styles.title} >{title}</Text>
                    </View>
                    <View style={styles.summaryMeal}>
                        <Text style={styles.summaryMealText}>{duration} min</Text>
                        <Text style={styles.summaryMealText}>{complexity}</Text>
                        <Text style={styles.summaryMealText}>{affordability}</Text>
                    </View>
                </View>
            </Pressable>
        </View >
    )
}

export default MealItem

const styles = StyleSheet.create({
    mealItem: {
        marginVertical: 16,
        borderRadius: 8,
        backgroundColor: 'white',
        elevation: 4,
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 3,
        backgroundColor: 'white',
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    },
    innerMealItem: {
        borderRadius: 8,
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: 200,
    },
    summaryMeal: {
        padding: 16,
        flexDirection: 'row',
        justifyContent: 'center',
        textAlign: 'center',
    },
    summaryMealText: {
        marginHorizontal: 8,
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
        paddingTop: 8,
        textAlign: 'center',
    },
    buttonPressed: {
        opacity: 0.5,
    },
})