import { InMemoryNotificationsRepository } from '../../../test/repositories/in-memory-notifications-repository';
import { SendNotification } from './send-notification';

describe('Send Notification', () => {
  it('should be able to send notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const sendNotification = new SendNotification(notificationsRepository);

    const { notification } = await sendNotification.execute({
      content: 'This is a notification',
      category: 'Social',
      recipientId: 'example recipient id',
    });

    expect(notificationsRepository.notifications).toHaveLength(1);
    expect(
      notificationsRepository.notifications[
        notificationsRepository.notifications.length - 1
      ],
    ).toEqual(notification);
  });
});
