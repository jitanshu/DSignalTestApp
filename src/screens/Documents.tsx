import { SafeAreaView } from "react-native-safe-area-context";
import { CustomText as Text } from "../components/atoms";

export default function Documents() {
    return (
        <SafeAreaView style={{ flex: 1, padding: 10 }}>
            <Text>Documents</Text>
        </SafeAreaView>
    );
}