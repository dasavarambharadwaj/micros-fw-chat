import {
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  ListItemButton,
} from "@mui/material";
import { Fragment } from "react";

function ChatList(props) {
  const { list, onPersonClick } = props;
  function openChat() {
    onPersonClick?.();
  }
  return (
    <>
      <List className="w-full overflow-auto">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((person) => (
          <Fragment key={person}>
            <ListItem
              divider
              disableGutters
              disablePadding
              onClick={openChat}
              alignItems="flex-start"
            >
              <ListItemButton>
                <ListItemAvatar>
                  <Avatar alt="Remy Sharp" src="./assets/person.jpg" />
                </ListItemAvatar>
                <ListItemText
                  secondaryTypographyProps={{
                    color: "gray",
                  }}
                  primary={<div>{"Remy Sharp " + person}</div>}
                  secondary={<div>Brunch this weekend?</div>}
                />
              </ListItemButton>
            </ListItem>
          </Fragment>
        ))}
      </List>
    </>
  );
}
export default ChatList;
