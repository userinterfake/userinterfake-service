-- CreateTable
CREATE TABLE "InterComment" (
    "id" TEXT NOT NULL,
    "comment" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "username" TEXT NOT NULL,

    CONSTRAINT "InterComment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Vote" (
    "id" TEXT NOT NULL,
    "value" BOOLEAN NOT NULL,
    "user_id" TEXT NOT NULL,
    "comment_id" TEXT NOT NULL,

    CONSTRAINT "Vote_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "InterComment" ADD CONSTRAINT "InterComment_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Vote" ADD CONSTRAINT "Vote_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Vote" ADD CONSTRAINT "Vote_comment_id_fkey" FOREIGN KEY ("comment_id") REFERENCES "InterComment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
