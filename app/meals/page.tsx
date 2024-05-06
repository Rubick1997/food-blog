import Link from "next/link";
import classes from "./page.module.css";
import { Meals } from "@/components";
import { getMeals } from "@/lib/meals";
import { Suspense } from "react";

export const metadata = {
  title: "All Meals",
  description: "Browse the delicious meals shared by our gorgeous community",
};

async function MealsLoad() {
  const meals = await getMeals();
  return <Meals meals={meals} />;
}

function MealsPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals, created{" "}
          <span className={classes.highlight}>by you</span>
        </h1>
        <p>Choose your favorite recipe</p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share you own recipe</Link>
        </p>
      </header>
      <main className={classes.main}>
        <Suspense
          fallback={<p className={classes.loading}>Fetching meals ...</p>}
        >
          <MealsLoad />
        </Suspense>
      </main>
    </>
  );
}
export default MealsPage;
