import classes from "./Meals.module.css";
import { MealItem } from "./components";

function Meals({ meals }: Props) {
  return (
    <ul className={classes.meals}>
      {meals.map((meal) => (
        <li key={meal.id}>
          <MealItem {...meal} />
        </li>
      ))}
    </ul>
  );
}
export default Meals;

type Props = {
  meals: Meal[];
};
