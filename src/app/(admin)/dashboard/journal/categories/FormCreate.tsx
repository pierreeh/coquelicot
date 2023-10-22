"use client";

import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

type JournalCategories = z.infer<typeof JournalCategoriesSchema>;

const JournalCategoriesSchema = z.object({
  name: z.string().trim().min(1, { message: "This field is required." }),
  published: z.boolean(),
});

export default function FormCreate(): React.ReactElement<"form"> {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isDirty, isValid },
  } = useForm<JournalCategories>({
    resolver: zodResolver(JournalCategoriesSchema),
  });

  async function onSubmit(data: JournalCategories) {
    try {
      const body = JSON.stringify({
        name: data.name,
        published: data.published,
      });

      const res = await (
        await fetch("/api/dashboard/journal/categories/post", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body,
        })
      ).json();

      return res;
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Create a category</h2>

      <label htmlFor="name">
        Name (required)
        <input type="text" id="name" autoComplete="off" {...register("name")} />
      </label>
      {errors.name && <span>{errors.name?.message}</span>}

      <label htmlFor="published">
        <input
          type="checkbox"
          id="published"
          defaultChecked
          {...register("published")}
        />
        Published
      </label>

      <button type="submit" disabled={!isDirty || !isValid || isSubmitting}>
        Create
      </button>
    </form>
  );
}
