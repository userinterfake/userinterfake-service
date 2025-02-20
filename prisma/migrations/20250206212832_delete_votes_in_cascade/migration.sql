-- DropForeignKey
ALTER TABLE "Vote" DROP CONSTRAINT "Vote_comment_id_fkey";

-- AddForeignKey
ALTER TABLE "Vote" ADD CONSTRAINT "Vote_comment_id_fkey" FOREIGN KEY ("comment_id") REFERENCES "InterComment"("id") ON DELETE CASCADE ON UPDATE CASCADE;
