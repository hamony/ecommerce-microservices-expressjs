import amqplib from "amqplib";
const DispatcherEvent = {};
DispatcherEvent.dispatch = async ({queue = 'tasks', event}) => {
    try {
        if (event instanceof Object) {
            event = JSON.stringify(event);
        }
        const connect = await amqplib.connect('amqp://rabbitmq:5672');
        const channel = await connect.createChannel();
        await channel.assertQueue(queue);
        channel.sendToQueue(queue, Buffer.from(event));
        channel.close();
    } catch (error) {
        console.log(error);
    }
};

export default DispatcherEvent;