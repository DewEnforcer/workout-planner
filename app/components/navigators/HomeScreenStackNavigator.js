import {createStackNavigator} from "@react-navigation/stack"
import DayOverview from "../../screens/DayOverviewScreen";
import HomeScreen from "../../screens/HomeScreen";
import routes from "./routes";

const Stack = createStackNavigator();

export default function HomeScreenNavigatorStack () {
    return (
        <Stack.Navigator initialRouteName={routes.HOME}>
            <Stack.Screen name={routes.HOME} component={HomeScreen}/>
            <Stack.Screen name={routes.DAY_OVERVIEW} component={DayOverview}/>
        </Stack.Navigator>
    )
}