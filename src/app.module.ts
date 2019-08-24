import { CacheInterceptor, CacheModule, Module, ValidationPipe } from '@nestjs/common';
import { TodoModule } from './todo/todo.module';
import { APP_INTERCEPTOR, APP_PIPE } from '@nestjs/core';
import { ConfigModule } from './config.module';

@Module({
  imports: [
      ConfigModule,
      CacheModule.register({
          // store: 'redisStore',
          // host: 'localhost',
          // port: 6379,
      }),
      TodoModule,
  ],
  controllers: [],
  providers: [
    {
      provide: APP_PIPE,
      useClass: ValidationPipe,
    },
    {
        provide: APP_INTERCEPTOR,
        useClass: CacheInterceptor,
    },
  ],
})
export class AppModule {}
