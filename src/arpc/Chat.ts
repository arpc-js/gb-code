import Base from '../core/Base';
import { ws, ctx } from '../core/Arpc';

export class Chat extends Base {
    // 发送消息（广播给所有人）
    static async send(message: string) {
        const userId = ctx.userId || ctx.get('wsId') || '匿名';
        
        // 广播给所有订阅者
        ws.publish('broadcast', { 
            type: 'chat', 
            userId, 
            message,
            time: Date.now()
        });
        
        return { sent: true };
    }
    
    // 加入房间
    static async joinRoom(room: string) {
        ctx.ws?.subscribe(room);
        ws.publish(room, { 
            type: 'join', 
            userId: ctx.get('wsId'), 
            room 
        });
        return { joined: room };
    }
    
    // 离开房间
    static async leaveRoom(room: string) {
        ctx.ws?.unsubscribe(room);
        ws.publish(room, { 
            type: 'leave', 
            userId: ctx.get('wsId'), 
            room 
        });
        return { left: room };
    }
    
    // 发送给房间
    static async toRoom(room: string, message: string) {
        const userId = ctx.userId || ctx.get('wsId') || '匿名';
        ws.publish(room, { 
            type: 'chat', 
            userId, 
            message, 
            room 
        });
        return { sent: true, room };
    }
    
    // 获取在线人数
    static async online() {
        return { count: ws.count };
    }
}
