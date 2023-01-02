import { useState } from "react";

import { toast } from "react-toastify";

import { fetchResetPassword } from "services/users";

import { UserAPIResponse } from "interfaces/UserApiResponse.interface";
import { Dialog, DialogContent, Typography } from "@mui/material";

import TextAction from "components/TextAction";
import DefaultButton from "components/Buttons/DefaultButton";

interface props {
  user: UserAPIResponse;
}

const ResetPasswordModal = ({ user }: props) => {
  const [showModal, setShowModal] = useState(false);

  const handleResetPassword = async () => {
    try {
      await fetchResetPassword(user?.data?.email);
      toast("Email sent, please check your inbox to reset your password", {
        type: "success",
      });
      setShowModal(false);
    } catch (error) {
      toast("Something went wrong, please try again", { type: "error" });
    }
  };
  return (
    <>
      {!user?.data?.social_media_login && (
        <>
          <TextAction onClick={() => setShowModal(true)}>
            Change password
          </TextAction>
          <Dialog
            open={showModal}
            onClose={() => setShowModal(false)}
            maxWidth="sm"
          >
            <DialogContent
              style={{
                backgroundColor: "#2F314F",
                maxWidth: 300,
                padding: "1em 2em",
              }}
            >
              <Typography
                variant="h6"
                style={{
                  color: "white",
                }}
              >
                Reset password
              </Typography>
              <Typography
                variant="body2"
                style={{
                  color: "white",
                  marginTop: "0.5em",
                }}
              >
                We will send you an email with a link to reset your password
              </Typography>
              <DefaultButton
                style={{
                  backgroundColor: "#f6104e",
                  marginTop: "2em",
                  width: 250,
                }}
                onClick={handleResetPassword}
              >
                Send email
              </DefaultButton>
            </DialogContent>
          </Dialog>
        </>
      )}
    </>
  );
};

export default ResetPasswordModal;
