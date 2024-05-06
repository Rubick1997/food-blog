import sql from "better-sqlite3";
import fs from "node:fs";
import slugify from "slugify";
import xss from "xss";
import { Storage } from "@google-cloud/storage";

const db = sql("meals.db");

export const getMeals = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  // throw new Error("Failed to fetch meals");
  return db.prepare("SELECT * from meals").all() as Meal[];
};

export const getMeal = (slug: string) => {
  return db.prepare("SELECT * from meals WHERE slug = ?").get(slug) as Meal;
};

export const saveMeal = async (meal: Meal) => {
  meal.slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions);
  const img = meal.image as File;
  const extension = img.name.split(",").pop();
  const fileName = `${meal.slug}(${Date.now()}).${extension}`;

  const buffer = await img.arrayBuffer();
  const storage = new Storage({
    projectId: "uber-clone-331501",
    keyFilename: "uber-clone-331501-2fb650f25118.json",
  });
  await storage
    .bucket("ciphermode-test")
    .file(`dishes/${fileName}`)
    .save(Buffer.from(buffer));

  meal.image = `https://storage.googleapis.com/ciphermode-test/dishes/${fileName}`;
  db.prepare(
    `
    INSERT INTO meals (title, summary, instructions, image, creator, creator_email, slug)
    VALUES (@title, @summary, @instructions, @image, @creator, @creator_email, @slug)
  `
  ).run(meal);
};
