import { ScrollView, StyleSheet, View, StatusBar, TouchableOpacity } from "react-native";
import Plus from "../assets/icons/plus.svg";
import Back from "../assets/icons/back.svg";
import { SafeAreaView } from "react-native-safe-area-context";
import { CustomButton, CustomText as Text } from "../components/atoms";
import { EtaCard } from "../components/molecules";
import { MilestonesPanel, MupirocinPanel, UpdateMilestoneModal } from "../components/organisms";
import { useState } from "react";

export default function Trips() {
    const [updateMilestoneModalVisible, setUpdateMilestoneModalVisible] = useState(false);
    return (
        <View style={styles.mainContainer}>
            <TouchableOpacity onPress={() => { }} style={styles.backBtnStyle}>
                <Back />
            </TouchableOpacity>
            <ScrollView contentContainerStyle={styles.contentContainer}>
                <View style={styles.mapContainer}>

                </View>
                <EtaCard style={styles.etaCardStyle} />
                <MilestonesPanel handleUpdate={() => setUpdateMilestoneModalVisible(true)} style={styles.milestonesPanelStyle} />
                <MupirocinPanel />
            </ScrollView>
            <CustomButton style={styles.addBtnStyle} onPress={() => { }} leftIcon={<Plus />} />
            <UpdateMilestoneModal visible={updateMilestoneModalVisible} onClose={() => setUpdateMilestoneModalVisible(false)} />
        </View>
    );
}

const styles = StyleSheet.create({
    backBtnStyle: {
        padding: 10,
        position: 'absolute',
        top: 60,
        left: 0,
        zIndex: 999
    },
    mainContainer: {
        flex: 1
    },
    contentContainer: {
        flexGrow: 1
    },
    mapContainer: {
        backgroundColor: 'lightgray',
        height: 200,
        width: "100%",
        padding: 10
    },
    etaCardStyle: {
        marginTop: -35
    },
    addBtnStyle: {
        height: 50,
        width: 50,
        borderRadius: 100,
        position: 'absolute',
        bottom: 20,
        right: 20
    },
    milestonesPanelStyle: {
        marginTop: 10
    }
});