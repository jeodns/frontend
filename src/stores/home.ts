import { defineStore } from 'pinia'
import type Message from '@/types/Message';

const delay = (t = 1000) => new Promise<void>((resolve, reject) => setTimeout(() => {
  if (Math.floor(Math.random() * 5) != 0) {
    resolve();
  } else {
    reject();
  }
}, t));

export const useHomeStore = defineStore('home', {
  state: () => ({
    loading: false,
  }),
  actions: {
    async sendMessage(message: Message) {
      try {
        this.loading = true;
        await delay()
      } finally {
        this.loading = false;
      }
    }
  }
})
