import React from 'react';
import {Button} from "@rneui/themed";
import Icon from "react-native-vector-icons/AntDesign";
import {ColorValue, StyleProp, ViewStyle} from "react-native";

interface ReloadButtonProps {
    type?: 'solid' | 'clear' | 'outline'
    loading?: boolean
    iconColor?: number | ColorValue
    iconSize?: number
    iconName?: string
    containerStyle?: StyleProp<ViewStyle>
    onPress?: () => void

}

const ReloadButton = (
    {
        type = "clear",
        loading = false,
        iconSize = 20,
        iconColor = "#2f54eb",
        iconName = "reload1",
        containerStyle,
        onPress
    }: ReloadButtonProps) => {
    return (
        <Button
            type={type}
            loading={loading}
            activeOpacity={0.5}
            containerStyle={containerStyle}
            onPress={onPress}
        >
            <Icon name={iconName} size={iconSize} color={iconColor}/>
        </Button>
    );
};

export default ReloadButton;
