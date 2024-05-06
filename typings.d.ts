type Meal = {
  id?: string;
  title: string;
  image: string | File;
  creator: string;
  summary: string;
  slug?: string;
  creator_email: string;
  instructions: string;
};

type FormState = { message: string | null };
