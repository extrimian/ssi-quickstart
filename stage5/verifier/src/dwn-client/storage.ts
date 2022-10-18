import { lighten } from 'polished';
const messagesStorage: any = [];
let lastPullDate: any;
const storageMock = {
  async getMessages() {
    return messagesStorage;
  },
  async getLastPullDate() {
    return lastPullDate;
  },
  async updateLastPullDate(date: Date) {
    lastPullDate = date;
  },
  async saveMessages(messages: any) {
    messagesStorage.push(...messages);
  },
  async clearMessages() {
    messagesStorage.length = 0;
  },
};

export default storageMock;
