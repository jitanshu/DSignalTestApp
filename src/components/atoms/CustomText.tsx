import { StyleProp, Text, TextStyle } from "react-native";
import { getFontFamily } from "../../constants/utils/fontfamily";

export default function CustomText({ children, style, size = 14 }: { children: React.ReactNode, style?: StyleProp<TextStyle>, size?: number }) {
    return <Text style={[style, { fontFamily: getFontFamily('normal'), fontSize: size }]}>{children}</Text>;
}