import { Modal, StyleSheet, TouchableOpacity, View } from "react-native";
import { CustomButton, CustomText as Text } from "../atoms";
import UpdateIcon from "../../assets/icons/update.svg";
import { COLORS } from "../../constants/utils/colors";
import CloseIcon from "../../assets/icons/close.svg";
import LocationIcon from "../../assets/icons/location.svg";
import Calendar from "../../assets/icons/calendar.svg";


export default function UpdateMilestoneModal({ visible, onClose }: { visible: boolean, onClose: () => void }) {
    return (
        <Modal visible={visible} animationType="fade" transparent={true}>
            <View style={styles.container}>
                <View style={styles.modalContainer}>
                    <View style={styles.modalHeader}>
                        <View style={styles.modalHeaderIcon}>
                            <UpdateIcon width={14} height={14} />
                        </View>
                        <Text size={20} style={styles.modalHeaderText}>Update Milestone</Text>
                        <TouchableOpacity onPress={onClose} style={styles.modalHeaderCloseIcon}>
                            <CloseIcon width={12} height={12} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.separator} />
                    <View style={styles.modalContent}>
                        <View style={styles.modalContentItem}>
                            <View style={styles.modalContentIcon}>
                                <LocationIcon width={16} height={16} />
                                <Text size={18} style={styles.modalContentIconText}>Gate in</Text>
                            </View>
                            <View style={[styles.modalContentIcon, { marginTop: 10 }]}>
                                <Calendar width={18} height={16} />
                                <Text size={16} style={styles.modalContentIconText}>Mon, 23 Mar 2025 6:30 PM</Text>
                            </View>
                        </View>
                        <Text size={14} style={styles.agreementText}>Do you want to update this milestone?</Text>
                        <View style={styles.modalContentButton}>
                            <CustomButton style={styles.modalContentButtonNo} textStyle={styles.modalContentButtonNoText} title="No" onPress={onClose} />
                            <CustomButton style={styles.modalContentButtonYes} textStyle={styles.modalContentButtonYesText} title="Yes, Update" onPress={onClose} />
                        </View>
                    </View>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)' // Semi-transparent background
    },
    modalContainer: {
        width: '90%',
        backgroundColor: 'white',
        borderRadius: 10,
        paddingBottom: 10
    },
    modalHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
    },
    modalHeaderIcon: {
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 100,
        padding: 2
    },
    modalHeaderText: {
        fontWeight: "500",
        fontSize: 16,
        color: COLORS.BLACK[500],
        marginLeft: 10,
        flex: 1
    },
    modalHeaderCloseIcon: {
        padding: 2
    },
    separator: {
        height: .5,
        width: "100%",
        backgroundColor: COLORS.BLACK[200],
        marginVertical: 10,
        marginTop: 0
    },
    modalContent: {
        padding: 10,
        paddingHorizontal: 15
    },
    modalContentText: {
        fontWeight: "500",
        color: COLORS.BLACK[500]
    },
    modalContentIcon: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10
    },
    modalContentIconText: {
        fontWeight: "500",
        color: COLORS.BLACK[500],
        marginLeft: 10
    },
    modalContentItem: {
    },
    agreementText: {
        marginVertical: 10,
        fontWeight: "400",
        color: COLORS.BLACK[350],
    },
    modalContentButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 20
    },
    modalContentButtonNo: {
        backgroundColor: COLORS.BLACK[200],
        borderRadius: 100,
        padding: 15,
        width: "48%"
    },
    modalContentButtonNoText: {
        color: COLORS.BLACK[500],
        fontWeight: "800"
    },
    modalContentButtonYes: {
        backgroundColor: COLORS.PRIMARY[500],
        borderRadius: 100,
        padding: 15,
        width: "48%"
    },
    modalContentButtonYesText: {
        color: COLORS.WHITE[500],
        fontWeight: "800"
    }
});