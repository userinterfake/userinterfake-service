import { Static, Type } from '@sinclair/typebox'

export const Birthday = Type.Object({
    id: Type.String(),
    day: Type.Integer(),
    month: Type.Integer(),
    user_id: Type.String(),
    username: Type.String(),
})

export type BirthdayType = Static<typeof Birthday>