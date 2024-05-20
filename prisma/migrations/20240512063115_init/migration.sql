/*
  Warnings:

  - You are about to drop the column `userId` on the `Inquiries` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Wishlist` table. All the data in the column will be lost.
  - Made the column `customerId` on table `Inquiries` required. This step will fail if there are existing NULL values in that column.
  - Made the column `customerId` on table `Wishlist` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Inquiries" DROP CONSTRAINT "Inquiries_customerId_fkey";

-- DropForeignKey
ALTER TABLE "Inquiries" DROP CONSTRAINT "Inquiries_userId_fkey";

-- DropForeignKey
ALTER TABLE "Wishlist" DROP CONSTRAINT "Wishlist_customerId_fkey";

-- DropForeignKey
ALTER TABLE "Wishlist" DROP CONSTRAINT "Wishlist_userId_fkey";

-- AlterTable
ALTER TABLE "Inquiries" DROP COLUMN "userId",
ALTER COLUMN "customerId" SET NOT NULL;

-- AlterTable
ALTER TABLE "Wishlist" DROP COLUMN "userId",
ALTER COLUMN "customerId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Wishlist" ADD CONSTRAINT "Wishlist_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "Customer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Inquiries" ADD CONSTRAINT "Inquiries_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "Customer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
