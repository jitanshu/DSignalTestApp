import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Trips from "../screens/Trips";
import Profile from "../screens/Profile";
import Documents from "../screens/Documents";
import Settings from "../screens/Settings";
import { COLORS } from "../constants/utils/colors";
import Truck from "../assets/icons/truck.svg";
import TruckDisabled from "../assets/icons/truck-disabled.svg";
import ProfileIcon from "../assets/icons/profile.svg";
import DocumentsIcon from "../assets/icons/document.svg";
import SettingsIcon from "../assets/icons/settings.svg";
import ProfileDisabled from "../assets/icons/profile-disabled.svg";
import DocumentsDisabled from "../assets/icons/document-disabled.svg";
import SettingsDisabled from "../assets/icons/settings-disabled.svg";
import { getFontFamily } from "../constants/utils/fontfamily";

const Tab = createBottomTabNavigator();

export default function RootStack() {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false, tabBarStyle: { backgroundColor: COLORS.PRIMARY[500], height: 100, paddingTop: 10 }, tabBarLabelStyle: { fontFamily: getFontFamily('normal'), fontSize: 12, marginTop: 2 }, tabBarActiveTintColor: COLORS.WHITE[500], tabBarInactiveTintColor: 'rgba(255, 255, 255, 0.3)' }}>
            <Tab.Screen name="Trips" component={Trips} options={{ tabBarIcon: ({ focused }) => focused ? <Truck height={25} width={25} /> : <TruckDisabled height={25} width={25} /> }} />
            <Tab.Screen name="Documents" component={Documents} options={{ tabBarIcon: ({ focused }) => focused ? <DocumentsIcon height={25} width={25} /> : <DocumentsDisabled height={25} width={25} /> }} />
            <Tab.Screen name="Settings" component={Settings} options={{ tabBarIcon: ({ focused }) => focused ? <SettingsIcon height={25} width={25} /> : <SettingsDisabled height={25} width={25} /> }} />
            <Tab.Screen name="Profile" component={Profile} options={{ tabBarIcon: ({ focused }) => focused ? <ProfileIcon height={25} width={25} /> : <ProfileDisabled height={19} width={25} /> }} />
        </Tab.Navigator>
    );
}