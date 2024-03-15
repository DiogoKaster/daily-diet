import AsyncStorage from "@react-native-async-storage/async-storage";

import { mealGetAll } from "./mealGetAll";
import { MealDTO } from "./MealDTO";
import { StorageDTO } from "@storage/StorageDTO";

export async function mealStatistics() {
  const mealsStorage = await mealGetAll();

  const mealStatisticsData = {
    totalMeals: 0,
    plannedMeals: 0,
    unPlannedMeals: 0,
    percentage: 0,
  };

  mealsStorage.map((storage: StorageDTO) => {
    storage.data.map((meal: MealDTO) => {
      mealStatisticsData.totalMeals += 1;
      if (meal.isPlanned) {
        mealStatisticsData.plannedMeals += 1;
      } else {
        mealStatisticsData.unPlannedMeals += 1;
      }
    });
  });

  mealStatisticsData.percentage = Math.round(
    (mealStatisticsData.plannedMeals / mealStatisticsData.totalMeals) * 100
  );

  return mealStatisticsData;
}
