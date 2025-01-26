import { Static, Type } from '@sinclair/typebox'
import { Birthday } from '../../birthday/types/interface'
import { GameParameter } from '../../gameParameter/types/interface'
import { Vote } from '../../vote/types/interface'

export const User: any = Type.Object({
    id: Type.String(),
    twitch_id: Type.String(),
    gameParameters: Type.Array(GameParameter),
    birthday: Type.Object(Birthday),
    votes: Type.Array(Type.Object(Vote)),
})

export type UserType = Static<typeof User>