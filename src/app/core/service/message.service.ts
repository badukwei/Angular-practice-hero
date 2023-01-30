import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  /** 訊息 Array */
  messages: string[] = [];

   /**
   * 添加訊息
   * @param 訊息
   * @returns 無回傳值
   */
  add(message: string) {
    this.messages.push(message)
  };

  /**
   * 清除訊息
   * @returns 無回傳值
   */
  clear() {
    this.messages = []
  };
  constructor() { }
}
