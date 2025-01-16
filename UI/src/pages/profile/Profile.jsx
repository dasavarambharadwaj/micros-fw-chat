import React from "react";
import { Card, CardContent, Avatar, Typography, Switch } from "@mui/material";
import useAuthToken from "../../hooks/useAuthToken";

const ProfileCard = () => {
  const {
    userData: { user_id, email, isActive, username, registration_date },
  } = useAuthToken();
  return (
    <>
      <Card className="max-w-sm mx-auto shadow-md rounded-lg bg-white mt-4">
        <div className="flex justify-center mt-6">
          <Avatar alt={username} className="w-24 h-24" />
        </div>
        <CardContent className="p-6 text-center">
          <Typography variant="h6" className="font-semibold">
            {username} ({user_id})
          </Typography>
          <Typography variant="body2" className="text-gray-600">
            {email}
          </Typography>
          <div className="flex justify-center items-center mt-6">
            <Typography variant="body1" className="mr-2 font-medium">
              Active User
            </Typography>
            <Switch
              color="success"
              checked={isActive}
              inputProps={{ "aria-label": "SMS Alerts Activation" }}
            />
          </div>
          <div className="flex justify-center gap-4 mb-4 items-center mt-6">
            <Typography variant="body1" className="mr-2 font-medium">
              Joined on
            </Typography>
            <Typography variant="body2" className="text-gray-600">
              {new Date(registration_date).toDateString()}
            </Typography>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default ProfileCard;
