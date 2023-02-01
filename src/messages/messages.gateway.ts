import { WebSocketGateway, SubscribeMessage, MessageBody, WebSocketServer, ConnectedSocket } from '@nestjs/websockets';
import { MessagesService } from './messages.service';
import { CreateMessageDto } from './dto/create-message.dto';
import { Server, Socket } from 'socket.io';


@WebSocketGateway({path: '/server/socket',
  cors: {
    orgin: '*',
  }, 
})

// @WebSocketGateway({
//   cors: {
//     orgin: '*',
//   }, 
// })

// @WebSocketGateway({path: '/server/socket/socket.io',
//   cors: {
//     orgin: '*',
//   }, 
// })

export class MessagesGateway {
  @WebSocketServer()
  server: Server;
  constructor(private readonly messagesService: MessagesService) {}

  @SubscribeMessage('updateCoor')
  async updateCoor(@MessageBody() driver_id: number, @MessageBody() latitude: number, @MessageBody() longtitude: number) {
    const message = await this.messagesService.updateCoor(driver_id, latitude, longtitude)
    
    this.server.emit('message2', message);

    return message;
  }

  @SubscribeMessage('createMessage')
  async create(@MessageBody() createMessageDto: CreateMessageDto, @ConnectedSocket() client: Socket,) {
    const message = await this.messagesService.create(createMessageDto, client.id)
    
    this.server.emit('message', message);

    return message;
  }

  @SubscribeMessage('findAllMessages')
  findAll() {
    return this.messagesService.findAll();
  }

  @SubscribeMessage('join')
  joinRoom(
    @MessageBody('name') name: string,
    @ConnectedSocket() client: Socket,
  ){
    return this.messagesService.identify(name, client.id);
  }

  @SubscribeMessage('typing')
  async typing(
    @MessageBody('isTyping') isTyping: boolean,
    @ConnectedSocket() client: Socket,
  ){
    const name = await this.messagesService.getClientName(client.id);

    client.broadcast.emit('typing', {name, isTyping});
    return this.messagesService.identify(name, client.id);
  }



}
