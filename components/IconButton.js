import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

const IconButton = ({ onPressFunction, icon, size, color }) => {
    return (
        <Pressable
            onPress={onPressFunction}
            style={({ pressed }) => pressed && styles.pressed}
        >
            <Ionicons name={icon} size={size} color={color} />
        </Pressable>
    )
}

export default IconButton

const styles = StyleSheet.create({
    pressed: {
        opacity: 0.5,
    }
})