import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";
import { COLORS } from "../../constants/utils/colors";
import { CustomText as Text } from "../atoms";
import Warehouse from "../../assets/icons/warehouse.svg";
import ContactPerson from "../../assets/icons/person.svg";
import Phone from "../../assets/icons/phone.svg";
import Email from "../../assets/icons/email.svg";
import Designation from "../../assets/icons/tag.svg";
import Copy from "../../assets/icons/copy.svg";

export default function MupirocinCard({ style }: { style?: StyleProp<ViewStyle> }) {
    return (
        <View style={[styles.container, style]}>
            <View style={styles.copyContainer}>
                <Copy width={18} height={18} />
            </View>
            <View style={styles.warehouseContainer}>
                <Warehouse width={18} height={18} />
                <View style={styles.warehouseTextContainer}>
                    <Text size={16} style={styles.warehouseText}>Warehouse</Text>
                    <Text size={15} style={styles.warehouseTextAddress}>{`4th Cross road, stbtrben, \nSatara, Maharashtra, India, \n123653`}</Text>
                </View>
            </View>
            <View style={styles.warehouseContainer}>
                <ContactPerson width={18} height={18} />
                <View style={styles.warehouseTextContainer}>
                    <Text size={16} style={styles.warehouseText}>Contact Person</Text>
                    <Text size={15} style={styles.contentText}>{`Satish Dubay`}</Text>
                </View>
            </View>
            <View style={styles.warehouseContainer}>
                <Phone width={18} height={18} />
                <View style={styles.warehouseTextContainer}>
                    <Text size={16} style={styles.warehouseText}>Phone</Text>
                    <Text size={15} style={[styles.contentText, { color: 'blue' }]}>{`+91 2685368465`}</Text>
                </View>
            </View>
            <View style={styles.warehouseContainer}>
                <Email width={18} height={18} />
                <View style={styles.warehouseTextContainer}>
                    <Text size={16} style={styles.warehouseText}>Email</Text>
                    <Text size={15} style={styles.contentText}>{`satish@gmail.com`}</Text>
                </View>
            </View>
            <View style={styles.warehouseContainer}>
                <Designation width={18} height={18} />
                <View style={styles.warehouseTextContainer}>
                    <Text size={16} style={styles.warehouseText}>Designation</Text>
                    <Text size={15} style={styles.contentText}>{`fbvgh | ghfhd`}</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.WHITE[500],
        borderRadius: 10,
        width: "100%",
    },
    copyContainer: {
        position: "absolute",
        top: 10,
        right: 10
    },
    warehouseContainer: {
        flexDirection: "row",
        padding: 10,
        paddingBottom: 5
    },
    warehouseTextContainer: {
        marginLeft: 10
    },
    warehouseText: {
        fontWeight: "400",
        color: COLORS.BLACK[400]
    },
    warehouseTextAddress: {
        fontWeight: "500",
        marginTop: 4,
        width: "80%",
        color: COLORS.BLACK[500]
    },
    contentText: {
        fontWeight: "500",
        marginTop: 4,
        color: COLORS.BLACK[500]
    }
});