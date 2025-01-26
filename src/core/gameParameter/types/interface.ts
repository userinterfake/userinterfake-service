import { Static, Type } from '@sinclair/typebox'
import { Birthday } from '../../birthday/types/interface'


export const Game = Type.Object({
    id: Type.String(),
    name: Type.String(),
})

export type GameType = Static<typeof Game>

export const GameParameter = Type.Object({
        id: Type.String(),
        value: Type.Integer(),
        game_id: Type.String(),
        user_id: Type.String(),
        game: Type.Object(Game)
})

export type GameParameterType = Static<typeof GameParameter>