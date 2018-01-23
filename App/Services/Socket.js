import io from "socket.io-client";

export const socket = io.connect("http://silk.dev.biznetx.org/");
