import Header from "./header/Header.jsx";
import ChatList from "./chat-list/ChatList";
import SearchBox from "./search-box/SearchBox.jsx";

function LeftSection() {
  return (
    <div className="flex flex-col h-full">
      <Header></Header>
      <SearchBox></SearchBox>
      <ChatList></ChatList>
    </div>
  );
}
export default LeftSection;
