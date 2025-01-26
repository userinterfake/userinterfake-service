-- CreateTable
CREATE TABLE "Birthday" (
    "id" TEXT NOT NULL,
    "day" INTEGER NOT NULL,
    "month" INTEGER NOT NULL,
    "username" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,

    CONSTRAINT "Birthday_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Birthday_username_key" ON "Birthday"("username");

-- CreateIndex
CREATE UNIQUE INDEX "Birthday_user_id_key" ON "Birthday"("user_id");

-- AddForeignKey
ALTER TABLE "Birthday" ADD CONSTRAINT "Birthday_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
