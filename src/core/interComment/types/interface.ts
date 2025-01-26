import { Static, Type } from '@sinclair/typebox'
import { User } from '../../user/types/interface'
import { Vote } from '../../vote/types/interface'

export const InterComment: any  = Type.Object({
    id: Type.String(),
    comment: Type.String(),
    user_id: Type.String(),
    username: Type.String(),
    votes: Type.Object(Vote),
    
})

export type InterCommentType = Static<typeof InterComment>