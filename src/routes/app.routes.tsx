import { createNativeStackNavigator } from "@react-navigation/native-stack";

const { Navigator, Screen } = createNativeStackNavigator();

import { Home } from "@screens/Home";
import { Statistics } from "@screens/Statistics";
import { MealDetails } from "@screens/MealDetails";
import { MealCreation } from "@screens/MealCreation";
import { MealFeedback } from "@screens/MealFeedback";

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />
      <Screen name="statistics" component={Statistics} />
      <Screen name="details" component={MealDetails} />
      <Screen name="creation" component={MealCreation} />
      <Screen name="feedback" component={MealFeedback} />
    </Navigator>
  );
}
