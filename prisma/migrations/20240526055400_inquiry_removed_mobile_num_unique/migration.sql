/*
  Warnings:

  - Made the column `name` on table `Inquiries` required. This step will fail if there are existing NULL values in that column.

*/
-- DropIndex
DROP INDEX "Inquiries_mobile_num_key";

-- AlterTable
ALTER TABLE "Inquiries" ALTER COLUMN "name" SET NOT NULL;
