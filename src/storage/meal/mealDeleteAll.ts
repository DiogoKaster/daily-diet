import AsyncStorage from "@react-native-async-storage/async-storage";

import { MEAL_COLLECTION } from "@storage/storageConfig";

export async function mealDeleteAll() {
  try {
    AsyncStorage.removeItem(MEAL_COLLECTION);
  } catch (error) {
    throw new Error(`[mealDeleteAll] Error: ${error}`);
  }
}
