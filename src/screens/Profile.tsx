import { SafeAreaView } from "react-native-safe-area-context";
import { CustomText as Text } from "../components/atoms";

export default function Profile() {
    return (
        <SafeAreaView style={{ flex: 1, padding: 10 }}>
            <Text>Profile</Text>
        </SafeAreaView>
    );
}