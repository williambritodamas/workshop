const CHANNEL_NAME = 'audio-workshop-presentation';

export interface PresentationMessage {
  type: 'SLIDE_CHANGE' | 'LESSON_CHANGE' | 'CLOSE' | 'CLICK';
  lesson: number;
  slide: number;
  x?: number;
  y?: number;
}

export function sendMessage(msg: PresentationMessage) {
  try {
    const channel = new BroadcastChannel(CHANNEL_NAME);
    channel.postMessage(msg);
    channel.close();
  } catch {
    // BroadcastChannel not supported
  }
}

export function listenMessages(handler: (msg: PresentationMessage) => void) {
  try {
    const channel = new BroadcastChannel(CHANNEL_NAME);
    channel.onmessage = (e: MessageEvent<PresentationMessage>) => handler(e.data);
    return () => channel.close();
  } catch {
    return () => {};
  }
}
