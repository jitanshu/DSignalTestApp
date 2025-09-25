import { StyleSheet, View } from "react-native";
import { CustomText as Text } from "../atoms";
import { COLORS } from "../../constants/utils/colors";
import Calendar from "../../assets/icons/calendar.svg";
import { MupirocinCard } from "../molecules";

export default function MupirocinPanel() {
    return (
        <View style={styles.container}>
            <Text size={18} style={styles.title}>Mupirocin</Text>
            <View style={styles.statusContainer}>
                <Text size={13} style={styles.statusText}>Pick up</Text>
            </View>
            <View style={styles.pickupTimeContainer}>
                <Calendar width={17} height={15} />
                <View style={styles.pickupTimeTextContainer}>
                    <Text size={16} style={styles.pickupTimeText}>Pickup Time</Text>
                    <Text size={15} style={styles.pickupTimeTextDate}>31 Mar, 25 6:30 PM</Text>
                </View>
            </View>
            <View style={styles.separator} />
            <MupirocinCard style={styles.mupirocinCardStyle} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 10,
        margin: 10,
        borderRadius: 10,
        backgroundColor: COLORS.BLACK[300],
        shadowColor: COLORS.BLACK[500],
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 1,
        elevation: 5
    },
    title: {
        fontWeight: "500",
        fontSize: 14,
        color: COLORS.BLACK[500],
        paddingHorizontal: 10
    },
    pickupTimeContainer: {
        flexDirection: "row",
        marginVertical: 10,
        paddingHorizontal: 10
    },
    pickupTimeTextContainer: {
        marginLeft: 10
    },
    pickupTimeText: {
        fontWeight: "400",
        color: COLORS.BLACK[400]
    },
    pickupTimeTextDate: {
        marginTop: 4,
        fontWeight: "500",
        color: COLORS.BLACK[500]
    },
    statusContainer: {
        backgroundColor: COLORS.PRIMARY[500],
        padding: 5,
        paddingHorizontal: 10,
        borderRadius: 5,
        position: "absolute",
        top: 10,
        right: 10
    },
    statusText: {
        fontWeight: "500",
        color: COLORS.WHITE[500]
    },
    separator: {
        height: .5,
        width: "100%",
        backgroundColor: COLORS.BLACK[200],
        marginBottom: 15
    },
    mupirocinCardStyle: {
        width: "95%",
        borderWidth: 1,
        borderColor: COLORS.BLACK[200],
        alignSelf: "center"
    }
});