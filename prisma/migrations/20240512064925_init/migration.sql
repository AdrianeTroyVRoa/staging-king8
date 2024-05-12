/*
  Warnings:

  - You are about to drop the column `customerId` on the `Inquiries` table. All the data in the column will be lost.
  - You are about to drop the column `inquiredAt` on the `Inquiries` table. All the data in the column will be lost.
  - You are about to drop the column `productId` on the `Inquiries` table. All the data in the column will be lost.
  - You are about to drop the `Wishlist` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `interactionId` to the `Inquiries` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Inquiries" DROP CONSTRAINT "Inquiries_customerId_fkey";

-- DropForeignKey
ALTER TABLE "Inquiries" DROP CONSTRAINT "Inquiries_productId_fkey";

-- DropForeignKey
ALTER TABLE "Wishlist" DROP CONSTRAINT "Wishlist_customerId_fkey";

-- DropForeignKey
ALTER TABLE "Wishlist" DROP CONSTRAINT "Wishlist_productId_fkey";

-- AlterTable
ALTER TABLE "Inquiries" DROP COLUMN "customerId",
DROP COLUMN "inquiredAt",
DROP COLUMN "productId",
ADD COLUMN     "interactionId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "Wishlist";

-- CreateTable
CREATE TABLE "Interaction" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "productId" INTEGER NOT NULL,
    "customerId" INTEGER NOT NULL,

    CONSTRAINT "Interaction_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Interaction" ADD CONSTRAINT "Interaction_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Interaction" ADD CONSTRAINT "Interaction_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "Customer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Inquiries" ADD CONSTRAINT "Inquiries_interactionId_fkey" FOREIGN KEY ("interactionId") REFERENCES "Interaction"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
