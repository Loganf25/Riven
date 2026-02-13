import { Realm } from '@realm/react'

export class Messages extends Realm.Object {
    _id!: Realm.BSON.ObjectId;
    role!: string; 
    content!: string;
    timestamp!: Date; 
    
    static schema: Realm.ObjectSchema = {
        name: "Message",
        primaryKey: "_id", 
        properties: {
            _id: "objectId",
            role: "string",
            content: "string", 
            timestamp: "date", 
        },
    };
}