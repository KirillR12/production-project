import { User } from '@/entities/User/model/types/UserSchema'

export interface CommentBlock {
id: string,
text: string,
user: User
}
