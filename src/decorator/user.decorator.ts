import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const User = createParamDecorator(
  (data: string, ctx: ExecutionContext) => {
    console.log('params', data);
    const request = ctx.switchToHttp().getRequest();
    const user = request.user;
    console.log('request', user);

    return data ? user?.[data] : user;
  },
);
