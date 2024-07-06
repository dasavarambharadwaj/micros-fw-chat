import { IconButton, OutlinedInput } from "@mui/material";
import Add from "@mui/icons-material/Add";
import SendIcon from "@mui/icons-material/Send";

function CreateMessage() {
  function sendMessage() {}
  return (
    <div className="flex gap-3 p-4 justify-center items-center">
      <IconButton aria-label="attachment icon">
        <Add></Add>
      </IconButton>
      <OutlinedInput
        size="small"
        placeholder="Send message"
        className="grow"
        id="outlined-multiline-flexible"
        multiline
        endAdornment={
          <IconButton onClick={sendMessage} aria-label="attachment icon">
            <SendIcon></SendIcon>
          </IconButton>
        }
        maxRows={4}
      />
    </div>
  );
}
export default CreateMessage;
