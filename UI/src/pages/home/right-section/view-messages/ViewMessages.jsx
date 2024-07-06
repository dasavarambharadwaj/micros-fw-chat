function ViewMessages(props) {
  const { messages } = props;
  return (
    <div className="flex flex-col gap-4 w-full overflow-auto grow p-4">
      {messages.map((message) => (
        <div
          className={
            "flex gap-4" +
            (message.isSentMessage ? " justify-end" : " justify-start")
          }
          key={message.id}
        >
          <div className="w-auto p-3 rounded-xl bg-gray-300 text-gray-950 max-w-[70%]">
            {message.text}
          </div>
        </div>
      ))}
    </div>
  );
}
export default ViewMessages;
