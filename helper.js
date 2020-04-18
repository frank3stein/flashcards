import { askAsync, NOTIFICATIONS } from "expo-permissions";
import { Notifications } from "expo";

import { AsyncStorage } from "react-native";

const NOTIFICATION_KEY = "Flashcards:notifications";

export function clearLocalNotifications() {
  return AsyncStorage.removeItem(NOTIFICATION_KEY).then(
    Notifications.cancelAllScheduledNotificationsAsync
  );
}

function createNotification() {
  return {
    title: "Take a quiz today",
    body: "Do not forget to take your daily quiz",
    ios: {
      sound: true,
    },
    android: {
      sound: true,
      priority: "high",
      sticky: false,
      vibrate: true,
    },
  };
}

export function setLocalNotification() {
  AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then((data) => {
      if (data === null) {
        askAsync(NOTIFICATIONS).then(({ status }) => {
          if (status === "granted") {
            Notifications.cancelAllScheduledNotificationsAsync();
            let tomorrow = new Date();
            tomorrow.setDate(tomorrow.getDate() + 1);
            tomorrow.setHours(20);
            tomorrow.setMinutes(0);

            Notifications.scheduleNotificationWithTimerAsync(
              createNotification(),
              {
                time: tomorrow,
                repeat: "day",
              }
            );

            AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true));
          }
        });
      }
    });
}
