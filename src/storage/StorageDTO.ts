import { MealDTO } from "./meal/MealDTO";

export interface StorageDTO {
  title: string;
  data: MealDTO[];
}
