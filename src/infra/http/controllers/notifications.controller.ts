import { Body, Controller, Post } from '@nestjs/common';
import { Notification } from 'src/app/entities/notification';
import { SendNotification } from '../../../app/use-cases/send-notification';
import { CreateNotificationBody } from '../dtos/create-notification-body';

@Controller('notifications')
export class NotificationsController {
  constructor(private sendNotification: SendNotification) {}

  @Post()
  async create(@Body() body: CreateNotificationBody): Promise<Notification> {
    const { recipientId, content, category } = body;

    const { notification } = await this.sendNotification.execute({
      category,
      content,
      recipientId,
    });

    return notification;
  }
}
