import { Injectable } from "@nestjs/common/decorators";
@Injectable()
export class UserService {
    getUserDetail(): string {
        return 'user detail'
    }
    createNewUser(): string {
        return 'create new user'
    }
}