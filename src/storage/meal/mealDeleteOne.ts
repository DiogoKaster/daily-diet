import AsyncStorage from "@react-native-async-storage/async-storage";

import { MEAL_COLLECTION } from "@storage/storageConfig";
import { mealGetAll } from "./mealGetAll";
import { MealDTO } from "./MealDTO";
import { StorageDTO } from "../StorageDTO";

export async function mealDeleteOne(
  mealToDeleteDate: string,
  mealToDeleteName: string
) {
  try {
    const storedMeals = await mealGetAll();

    const newMeals = storedMeals
      .map((storage: StorageDTO) => {
        if (storage.title === mealToDeleteDate && storage.data.length > 1) {
          // Se houver mais de um item no data, remova apenas o item desejado
          return {
            title: storage.title,
            data: storage.data.filter(
              (meal: MealDTO) =>
                meal.date !== mealToDeleteDate || meal.name !== mealToDeleteName
            ),
          };
        } else if (storage.title !== mealToDeleteDate) {
          // Mantenha os objetos que não correspondem ao title a ser excluído
          return storage;
        }
        // Se chegarmos aqui, significa que temos um título igual ao que queremos excluir,
        // mas há apenas um item no data, então retornamos null para remover este objeto
        return null;
      })
      .filter(Boolean); // Remova todos os nulos do array

    await AsyncStorage.setItem(MEAL_COLLECTION, JSON.stringify(newMeals));
  } catch (error) {
    throw new Error(`[mealDeleteOne] Error: ${error}`);
  }
}
