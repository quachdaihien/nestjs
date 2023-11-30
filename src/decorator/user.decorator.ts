import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const User = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    console.log('params',data)
    const request = ctx.switchToHttp().getRequest();
   return request.User;
    // console.log('request',request.name)

    // return data ? user?.[data] : user;
  },
);