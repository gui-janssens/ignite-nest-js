import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { MailService } from './mail/mail.service';
import { PostmarkMailService } from './mail/postmark-mail.service';
import { PrismaService } from './prisma.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    // these are the injectable services that our controllers will receive through their constructors. This way we do not need to explicitly instantiate the services
    PrismaService,
    {
      // this kind of provider is for when the service is an abstract class and a child class inherits it.
      provide: MailService,
      useClass: PostmarkMailService,
    },
  ],
})
export class AppModule {}
