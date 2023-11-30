import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const User = createParamDecorator(
  (data: string, ctx: ExecutionContext) => {
    console.log('params', data);
    const request = ctx.switchToHttp().getRequest();
    const user = request.User;
    console.log('request', request.params.id);

    return data ? user?.[data] : user;
  },
);
