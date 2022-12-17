import { Injectable } from '@nestjs/common';
import { MailService } from './mail.service';

@Injectable() //making this injectable allows us to instantiate controllers that depend on these services without having to actually use the constructor
export class PostmarkMailService implements MailService {
  sendEmail(): string {
    return 'Postmark Mail!';
  }
}
