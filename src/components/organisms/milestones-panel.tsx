import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";
import { CustomButton, CustomText as Text } from "../atoms";
import { COLORS } from "../../constants/utils/colors";
import RightArrow from "../../assets/icons/right-arrow.svg";

const milestones = [
    {
        title: "1 Trip Started",
        date: "Sat, 22 Mar, 25, 01:02 PM",
        done: true,
        showUpdateBtn: false
    },
    {
        title: "2 At load point",
        date: "Sat, 22 Mar, 25, 01:02 PM",
        done: true,
        showUpdateBtn: true
    },
    {
        title: "3 Gate in",
        date: "Sat, 22 Mar, 25, 01:02 PM",
        done: false,
        showUpdateBtn: false
    },
    {
        title: "4 Gate out",
        date: "Sat, 22 Mar, 25, 01:02 PM",
        done: false,
        showUpdateBtn: false
    },
    {
        title: "5 At unload point",
        date: "Sat, 22 Mar, 25, 01:02 PM",
        done: false,
        showUpdateBtn: false
    },
]

export default function MilestonesPanel({ handleUpdate, style }: { handleUpdate: () => void, style?: StyleProp<ViewStyle> }) {
    return (
        <View style={[styles.container, style]}>
            <View style={styles.slidePill} />
            <Text size={18} style={styles.title}>Milestones</Text>
            <View style={styles.separator} />
            <View style={styles.timelineContainer}>
                {milestones.map((milestone, index) => (
                    <View key={index} style={styles.milestoneItem}>
                        <View style={styles.timelineLeft}>
                            <View style={[styles.circleContainer, { borderColor: milestone.done ? COLORS.PRIMARY[500] : COLORS.BLACK[450] }]}>
                                <View style={[
                                    styles.circle,
                                    milestone.done ? styles.circleActive : styles.circleInactive
                                ]} />
                            </View>
                            {index < milestones.length - 1 && (
                                <View style={styles.connectorContainer}>
                                    {Array.from({ length: 5 }, (_, i) => (
                                        <View
                                            key={i}
                                            style={[
                                                styles.line,
                                                milestone.done ? styles.dotActive : styles.dotInactive
                                            ]}
                                        />
                                    ))}
                                </View>
                            )}
                        </View>
                        <View style={styles.milestoneContentContainer}>
                            <View style={styles.milestoneContent}>
                                <Text size={16} style={[
                                    styles.milestoneTitle,
                                    milestone.done ? styles.milestoneTitleActive : styles.milestoneTitleInactive
                                ]}>
                                    {milestone.title}
                                </Text>
                                {milestone.done && <Text size={14} style={styles.milestoneDate}>{milestone.date}</Text>}
                            </View>
                            {milestone.showUpdateBtn && <CustomButton style={styles.updateBtn} title="Update" onPress={handleUpdate} rightIcon={<RightArrow fill={COLORS.BLACK[500]} width={12} height={12} style={{ marginLeft: 2 }} />} />}
                        </View>
                    </View>
                ))}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: COLORS.WHITE[500],
        // borderTopLeftRadius: 25,
        // borderTopRightRadius: 25,
        paddingHorizontal: 0
    },
    slidePill: {
        height: 3,
        width: 80,
        backgroundColor: COLORS.BLACK[350],
        borderRadius: 10,
        alignSelf: "center"
    },
    title: {
        fontWeight: "500",
        padding: 20,
        paddingTop: 10,
        paddingBottom: 0,
        color: COLORS.BLACK[500]
    },
    separator: {
        height: .5,
        width: "100%",
        backgroundColor: COLORS.BLACK[300],
        marginVertical: 15
    },
    timelineContainer: {
        paddingHorizontal: 20,
    },
    milestoneItem: {
        flexDirection: 'row',
    },
    timelineLeft: {
        alignItems: 'center',
        marginRight: 15,
        width: 20
    },
    circleContainer: {
        padding: 3,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: COLORS.PRIMARY[500]
    },
    circle: {
        width: 12,
        height: 12,
        borderRadius: 10,
    },
    circleActive: {
        backgroundColor: COLORS.PRIMARY[500],
        borderColor: COLORS.PRIMARY[500],
    },
    circleInactive: {
        backgroundColor: COLORS.BLACK[200]
    },
    connectorContainer: {
        marginTop: 5,
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        width: 2,
        minHeight: 30
    },
    line: {
        width: .5,
        height: 3,
        borderRadius: 1,
    },
    dotActive: {
        backgroundColor: COLORS.PRIMARY[500]
    },
    dotInactive: {
        backgroundColor: COLORS.BLACK[400]
    },
    milestoneContent: {
        flex: 1,
        paddingTop: 2
    },
    milestoneTitle: {
        fontWeight: "600",
        fontSize: 16,
        marginBottom: 4
    },
    milestoneTitleActive: {
        color: COLORS.BLACK[500]
    },
    milestoneTitleInactive: {
        color: COLORS.BLACK[400]
    },
    milestoneDate: {
        fontWeight: "400",
        fontSize: 14,
        color: COLORS.BLACK[400]
    },
    milestoneContentContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    updateBtn: {
        paddingHorizontal: 20,
        height: 40,
        borderRadius: 100,
    }
})