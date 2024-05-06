"use server";

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";
import { revalidatePath } from "next/cache";

const isInvalidText = (text: string) => !text || text.trim().length === 0;

export const shareMeal = async (state: FormState, formData: FormData) => {
  "use server";

  const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  } as Meal;

  const areInvalidTextFields = [
    meal.title,
    meal.summary,
    meal.instructions,
    meal.creator,
    meal.creator_email,
  ].some(isInvalidText);

  if (
    areInvalidTextFields ||
    !meal.creator_email.includes("@") ||
    !meal.image ||
    (meal.image as File).size === 0
  ) {
    return { message: "Invalid input." };
  }

  await saveMeal(meal).then(() => {
    revalidatePath("/meals",);
    redirect("/meals");
  });
  return { message: null };
};
