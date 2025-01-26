/*
  Warnings:

  - Added the required column `name` to the `GameParameter` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "GameParameter" ADD COLUMN     "name" TEXT NOT NULL;
