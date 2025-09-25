import { StyleProp, StyleSheet, TextStyle, TouchableOpacity, ViewStyle } from "react-native";
import { CustomText as Text } from ".";
import { COLORS } from "../../constants/utils/colors";

export default function CustomButton({ title, onPress, leftIcon, rightIcon, style, textStyle }: { title?: string, onPress: () => void, leftIcon?: React.ReactNode, rightIcon?: React.ReactNode, style?: StyleProp<ViewStyle>, textStyle?: StyleProp<TextStyle> }) {
    return (
        <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
            {leftIcon}
            {title && <Text style={[styles.text, textStyle]}>{title}</Text>}
            {rightIcon}
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: COLORS.PRIMARY[500],
        padding: 10,
        borderRadius: 5
    },
    text: {
        color: COLORS.WHITE[500],
        fontWeight: "500"
    }
});