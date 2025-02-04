import { Static, Type } from '@sinclair/typebox'
import { Vote } from '../../vote/types/interface'

export const InterComment: any  = Type.Object({
    id: Type.String(),
    comment: Type.String(),
    user_id: Type.String(),
    username: Type.String(),
    votes: Type.Object(Vote),
    createdAt: Type.Date(),
    
})

export type InterCommentType = Static<typeof InterComment>