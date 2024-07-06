import CreateMessage from "./create-message/CreateMessage";
import UserHeader from "./user-header/UserHeader";
import ViewMessages from "./view-messages/ViewMessages";

function RightSection() {
  const messages = [
    { id: 1, text: "Hello!", isSentMessage: true },
    { id: 2, text: "Hi there!", isSentMessage: false },
    { id: 3, text: "How are you?", isSentMessage: true },
    {
      id: 4,
      text: "I'm good, thanks!",
      isSentMessage: false,
    },
    { id: 5, text: "Hello!", isSentMessage: true },
    { id: 6, text: "Hi there!", isSentMessage: false },
    { id: 7, text: "How are you?", isSentMessage: true },
    { id: 5, text: "Hello!", isSentMessage: true },
    { id: 6, text: "Hi there!", isSentMessage: false },
    { id: 7, text: "How are you?", isSentMessage: true },
  ];
  return (
    <div className="flex flex-col h-full justify-end">
      <UserHeader></UserHeader>
      <ViewMessages messages={messages}></ViewMessages>
      <CreateMessage></CreateMessage>
    </div>
  );
}
export default RightSection;
