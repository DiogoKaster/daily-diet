import { MealDTO } from "@storage/meal/MealDTO";

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      creation: undefined;
      details: { name: string; time: string };
      feedback: { isPlanned: boolean };
      statistics: undefined;
    }
  }
}
