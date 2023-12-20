import { Module } from "@nestjs/common";
import { CatsService } from "./cat.service";
import { CatController } from "./cat.controller";
import { UserModule } from "src/users/user.module";

@Module({
    imports: [UserModule],
    controllers: [CatController],
    providers: [CatsService],
    exports: [CatsService]
})
export class CatModule {}