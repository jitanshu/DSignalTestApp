import { CustomText as Text } from "../components/atoms";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Settings() {
    return (
        <SafeAreaView style={{ flex: 1, padding: 10 }}>
            <Text>Settings</Text>
        </SafeAreaView>
    );
}