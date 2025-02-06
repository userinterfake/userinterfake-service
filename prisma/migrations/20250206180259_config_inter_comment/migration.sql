-- CreateTable
CREATE TABLE "PlatformConfigInterComment" (
    "id" TEXT NOT NULL,
    "authorization" BOOLEAN NOT NULL,

    CONSTRAINT "PlatformConfigInterComment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ConfigInterComment" (
    "id" TEXT NOT NULL,
    "key" TEXT NOT NULL,
    "value" TEXT NOT NULL,

    CONSTRAINT "ConfigInterComment_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ConfigInterComment_key_key" ON "ConfigInterComment"("key");
