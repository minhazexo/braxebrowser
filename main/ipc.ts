import { app, ipcMain, IpcMainInvokeEvent } from "electron";

const IPC_PING_CHANNEL = "app:ping";

type PingRequest = {
  message: string;
};

function isPingRequest(value: unknown): value is PingRequest {
  if (typeof value !== "object" || value === null) {
    return false;
  }

  const candidate = value as Record<string, unknown>;

  return typeof candidate.message === "string" && candidate.message.length > 0 && candidate.message.length <= 200;
}

function validateSender(event: IpcMainInvokeEvent): boolean {
  const senderUrl = event.senderFrame?.url;
  if (!senderUrl) {
    return false;
  }
  return senderUrl.startsWith("http://localhost:5173") || senderUrl.startsWith("file://");
}

export function registerIpcHandlers(): void {
  ipcMain.handle(IPC_PING_CHANNEL, (event, payload: unknown) => {
    if (!validateSender(event)) {
      throw new Error("Rejected IPC message from an unknown origin.");
    }

    if (!isPingRequest(payload)) {
      throw new Error("Invalid IPC payload for app:ping.");
    }

    return `pong:${payload.message} (${app.getVersion()})`;
  });
}
