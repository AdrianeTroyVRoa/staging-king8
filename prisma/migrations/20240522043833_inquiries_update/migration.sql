/*
  Warnings:

  - You are about to drop the column `interactionId` on the `Inquiries` table. All the data in the column will be lost.
  - You are about to drop the `Interaction` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[email]` on the table `Inquiries` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[mobile_num]` on the table `Inquiries` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `email` to the `Inquiries` table without a default value. This is not possible if the table is not empty.
  - Added the required column `mobile_num` to the `Inquiries` table without a default value. This is not possible if the table is not empty.
  - Added the required column `subject` to the `Inquiries` table without a default value. This is not possible if the table is not empty.

*/
-- AlterEnum
ALTER TYPE "Status" ADD VALUE 'REJECTED';

-- DropForeignKey
ALTER TABLE "Inquiries" DROP CONSTRAINT "Inquiries_interactionId_fkey";

-- DropForeignKey
ALTER TABLE "Interaction" DROP CONSTRAINT "Interaction_customerId_fkey";

-- DropForeignKey
ALTER TABLE "Interaction" DROP CONSTRAINT "Interaction_productId_fkey";

-- AlterTable
ALTER TABLE "Inquiries" DROP COLUMN "interactionId",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "mobile_num" VARCHAR(10) NOT NULL,
ADD COLUMN     "name" TEXT,
ADD COLUMN     "subject" VARCHAR(60) NOT NULL;

-- DropTable
DROP TABLE "Interaction";

-- CreateTable
CREATE TABLE "Wishlist" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "productId" INTEGER NOT NULL,
    "customerId" INTEGER NOT NULL,

    CONSTRAINT "Wishlist_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Inquiries_email_key" ON "Inquiries"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Inquiries_mobile_num_key" ON "Inquiries"("mobile_num");

-- AddForeignKey
ALTER TABLE "Wishlist" ADD CONSTRAINT "Wishlist_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Wishlist" ADD CONSTRAINT "Wishlist_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "Customer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
