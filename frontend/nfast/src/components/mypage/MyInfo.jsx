import React from "react";
import styled from "styled-components";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import TextField from "@mui/material/TextField";
import EditIcon from "@mui/icons-material/Edit";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const Styledh2 = styled.div`
  text-align: center;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  h4 {
    margin-top: 150px;
    margin-bottom: 70px;
  }
  p {
    font-size: 16px;
    margin-top: 30px;
  }
`;

const StyleBtn = styled.div`
  margin: 17%;

  Button {
    width: 120px;
    height: 50px;
    background-color: #bcb6ff;
    color: white;
    font-size: 20px;
  }
`;
function MyInfo() {
  return (
    <div>
      <Styledh2>
        <h4>정보 수정</h4>
        <IconButton sx={{ width: 200, height: 200 }}>
          <Avatar
            alt="Remy Sharp"
            src="cat.png"
            sx={{ width: 200, height: 200 }}
          />
        </IconButton>
        <p>프로필 편집</p>
        <EditIcon />
        <Box
          sx={{
            width: "70%",
          }}
        >
          <p style={{ textAlign: "left", fontSize: "medium" }}>연동지갑 주소</p>
          <TextField
            id="filled-read-only-input"
            defaultValue="지갑주소에요 우하핫"
            fullWidth
            InputProps={{
              readOnly: true,
            }}
          />
          <p style={{ textAlign: "left", fontSize: "medium" }}>닉네임 변경</p>
          <TextField
            id="outlined-basic"
            label="변경할 닉네임을 입력하세요."
            variant="outlined"
            fullWidth
          />
          <StyleBtn>
            <Button variant="contained">수정</Button>
          </StyleBtn>
        </Box>
      </Styledh2>
    </div>
  );
}

export default MyInfo;
