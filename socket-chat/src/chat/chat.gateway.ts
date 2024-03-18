import { WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { OnModuleInit } from '@nestjs/common';
import { ChatService } from './chat.service';
import { Server, Socket } from 'socket.io';

@WebSocketGateway()
export class ChatGateway implements OnModuleInit{
  
  @WebSocketServer()
  public server: Server;
  
  constructor(private readonly chatService: ChatService) {}

  onModuleInit() {
    this.server.on('connection', (socket:Socket) => {
      console.log('Cliente Conectado: ', socket.id);

      socket.on('disconnect', () => {
        console.log('Cliente desconectado: ', socket.id);
        
      })
      
    })
  }
}
