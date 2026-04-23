import { contextBridge, ipcRenderer } from "electron";

type BraxeApi = {
  ping: (message: string) => Promise<string>;
};

const braxeApi: BraxeApi = {
  ping: (message: string) => ipcRenderer.invoke("app:ping", { message })
};

contextBridge.exposeInMainWorld("braxeAPI", braxeApi);
