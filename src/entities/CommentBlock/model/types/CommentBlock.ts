import { User } from '@/entities/User'

export interface CommentBlock {
    id: string
    text: string
    user: User
}
