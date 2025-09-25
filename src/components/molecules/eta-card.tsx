import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";
import { CustomText as Text } from "../atoms";
import { COLORS } from "../../constants/utils/colors";

export default function EtaCard({ style }: { style?: StyleProp<ViewStyle> }) {
    return (
        <View style={[styles.container, style]}>
            <View style={{ alignItems: "center" }}>
                <Text style={styles.expectedText}>Expected time</Text>
                <Text style={styles.dateText}>31 Mar, 25 6:30</Text>
            </View>
            <View style={styles.separatorLine} />
            <View style={{ alignItems: "center" }}>
                <Text style={styles.expectedText}>ETA status</Text>
                <View style={styles.statusContainer}>
                    <Text style={styles.statusText}>On Time</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.WHITE[500],
        borderRadius: 10,
        width: "95%",
        alignSelf: "center",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center"
    },
    expectedText: {
        color: COLORS.BLACK[400],
        fontWeight: "400"
    },
    dateText: {
        marginTop: 4,
        fontWeight: "500"
    },
    separatorLine: {
        height: 50,
        width: .5,
        backgroundColor: COLORS.BLACK[450],
        marginVertical: 10
    },
    statusContainer: {
        backgroundColor: COLORS.PRIMARY[500],
        padding: 10,
        paddingVertical: 5,
        marginTop: 4,
        borderRadius: 5
    },
    statusText: {
        fontWeight: "500",
        color: COLORS.WHITE[500]
    },
});