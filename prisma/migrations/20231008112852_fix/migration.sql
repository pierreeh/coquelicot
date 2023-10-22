/*
  Warnings:

  - You are about to drop the `journal_caegories` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "journal_caegories" DROP CONSTRAINT "journal_caegories_user_id_fkey";

-- DropTable
DROP TABLE "journal_caegories";

-- CreateTable
CREATE TABLE "journal_categories" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "published" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "journal_categories_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "journal_categories" ADD CONSTRAINT "journal_categories_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
