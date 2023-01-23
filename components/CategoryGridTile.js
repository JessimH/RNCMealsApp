import { StyleSheet, Text, View, Pressable, Platform } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import React from 'react'

const CategoryGridTile = ({ title, color, onPressFunction }) => {
    // Creater a navigation object without the 'navigation' props
    const navigation = useNavigation()
    return (
        <View style={styles.gridItem}>
            <Pressable
                style={({ pressed }) => [
                    styles.button, pressed
                        ? styles.buttonPressed
                        : null]}
                android_ripple={{ color: '#ccc' }}
                onPress={onPressFunction}
            >
                <View style={[
                    styles.innerContainer,
                    { backgroundColor: color }
                ]}>
                    <Text style={styles.title}>{title}</Text>
                </View>
            </Pressable>
        </View>
    )
}

export default CategoryGridTile

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 16,
        height: 150,
        borderRadius: 8,
        elevation: 4,
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 3,
        backgroundColor: 'white',
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    },
    button: {
        flex: 1,
    },
    buttonPressed: {
        opacity: 0.5,
    },
    innerContainer: {
        borderRadius: 8,
        flex: 1,
        padding: 16,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 16,
    }
})