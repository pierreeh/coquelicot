import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import z from "zod";

import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { db } from "@/lib/db";

const JournalCategoriesSchema = z
  .object({
    name: z.string().trim().min(1, { message: "This field is required." }),
    published: z.boolean(),
  })
  .strict();

export async function JournalCategoryPost(req: Request) {
  const session = await getServerSession(authOptions);

  if (req.method !== "POST") {
    return new NextResponse(
      JSON.stringify({ message: `Method ${req.method} not allowed.` }),
      {
        status: 405,
      }
    );
  }

  try {
    const response = await req.json();
    const res = JournalCategoriesSchema.safeParse(response);

    if (!res.success) {
      const { errors } = res.error;

      return new NextResponse(
        JSON.stringify({ error: { message: "Invalid request", errors } }),
        {
          status: 400,
        }
      );
    }

    await db.journalCategories.create({
      data: {
        userId: session?.user.id,
        name: res.data.name,
        published: res.data.published,
      },
    });

    return new NextResponse(JSON.stringify({ message: "OK" }), {
      status: 201,
    });
  } catch (e: any) {
    return new NextResponse(JSON.stringify({ message: e.message }), {
      status: 500,
    });
  }
}

export { JournalCategoryPost as POST };
