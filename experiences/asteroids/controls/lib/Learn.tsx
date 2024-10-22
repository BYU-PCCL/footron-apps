import { Box, Button, Fab } from "@material-ui/core";
import { useMessaging } from "@footron/controls-client";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { IconButton } from "@mui/material";
import { standardContainerStyle } from "./style";
import { useCallback, useState } from "react";
import { Close } from "@mui/icons-material";
import { Description } from "@material-ui/icons";

const longDummy = [
  {
    type: "content",
    description: (
      <Box>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
        odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
        voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum
        quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam
        eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
        voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam
        corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
        Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse
        quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
        voluptas nulla pariatur? \n \n Sed ut perspiciatis unde omnis iste natus
        error sit voluptatem accusantium doloremque laudantium, totam rem
        aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
        beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
        voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni
        dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
        est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
        sed quia non numquam eius modi tempora incidunt ut labore et dolore
        magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
        nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
        aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit
        qui in ea voluptate velit esse quam nihil molestiae consequatur, vel
        illum qui dolorem eum fugiat quo voluptas nulla pariatur?
      </Box>
    ),
  },
];

export default function Learn() {
  const [slideshowPlaying, setSlideShowPlaying] = useState(false);
  const [infoText, setInfoText] = useState(longDummy);
  const { sendMessage } = useMessaging((info: any[]) => {
    console.log("Incoming info: ", info);
    setInfoText(info);
  });
  const getInfoText = (value: string) => {
    sendMessage({ type: "learn", value: value });
  };

  const prev = async () => {
    getInfoText("previous");
  };

  const next = async () => {
    getInfoText("next");
  };

  const close = async () => {
    setSlideShowPlaying(false);
    sendMessage({ type: "context", value: "home" });
  };

  const startShow = async (value: string) => {
    setSlideShowPlaying(true);
    getInfoText(value);
  };

  return (
    <div>
      {slideshowPlaying ? (
        <Box style={{ width: "100%", height: "100%" }}>
          <Fab onClick={close}>
            <Close />
          </Fab>
          <Box
            style={{
              maxHeight: "50vh",
              overflow: "auto",
              backgroundColor: "#f0f0f0",
            }}
          >
            {infoText.map((block) => (<div dangerouslySetInnerHTML={{ __html: block.description}}></div>))}
          </Box>
          <Box style={standardContainerStyle}>
            <IconButton onClick={prev}>
              <ChevronLeftIcon sx={{ fontSize: 80 }} />
            </IconButton>
            <IconButton onClick={next}>
              <ChevronRightIcon sx={{ fontSize: 80 }} />
            </IconButton>
          </Box>
        </Box>
      ) : (
        <Box
          style={{
            maxHeight: "90vh",
            overflow: "auto",
          }}
        >
          <h3>Deep dives</h3>
          <p>Take a deeper dive into Asteroids with our interactive stories</p>
          <Box
            style={{
              border: "solid",
              borderRadius: "5px",
              padding: "1em",
              margin: "0 0 .5em 0",
            }}
          >
            <Box>
              <Button
                variant="contained"
                color="primary"
                onClick={() => startShow("asteroids-101")}
                style={{ width: "50%" }}
              >
                Asteroids 101
              </Button>
            </Box>
            <p>What are asteroids?</p>
            <p>What does this experience show me?</p>
          </Box>
          <Box
            style={{
              border: "solid",
              borderRadius: "5px",
              padding: "1em",
              margin: "0 0 .5em 0",
            }}
          >
            <Box>
              <Button
                variant="contained"
                color="primary"
                onClick={() => startShow("close-approaches")}
                style={{ width: "50%" }}
              >
                Close Approaches
              </Button>
            </Box>
            <p>What is a close approach?</p>
            <p>Are we in danger of impact?</p>
          </Box>
          <Box style={{ border: "solid", borderRadius: "5px", padding: "1em" }}>
            <Box>
              <Button
                variant="contained"
                color="primary"
                onClick={() => startShow("missions")}
                style={{ width: "50%" }}
              >
                Missions
              </Button>
            </Box>
            <p>Can we visit an asteroid</p>
            <p>What can missions achieve?</p>
          </Box>
        </Box>
      )}
    </div>
  );
}
