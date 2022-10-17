import { DWNMessage, MessageStorage } from '@extrimian/dwn-client';

const messagesStorage: DWNMessage[] = [];
let lastPullDate: Date;
export const inMemoryMessageStorage: MessageStorage = {
  async getMessages(): Promise<DWNMessage[]> {
    return messagesStorage;
  },
  async getLastPullDate(): Promise<Date> {
    return lastPullDate;
  },
  async updateLastPullDate(date: Date): Promise<void> {
    lastPullDate = date;
  },
  async saveMessages(messages: DWNMessage[]): Promise<void> {
    messagesStorage.push(...messages);
  },
};
