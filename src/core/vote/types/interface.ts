import { Static, Type } from '@sinclair/typebox'
import { User } from '../../user/types/interface'
import { InterComment } from '../../interComment/types/interface'

export const Vote = Type.Object({
    id: Type.String(),
    value: Type.Boolean(),
    user: Type.Object(User),
    user_id: Type.String(),
    comment: Type.Ref(InterComment),
    comment_id: Type.String(),
    
})

export type VoteType = Static<typeof Vote>