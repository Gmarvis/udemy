import React from "react"
import { Button, Popover, Whisper } from "rsuite"

type Props = {

}

const Swipper = () => {

  return (
    <div>
      <Whisper
        followCursor
        speaker={
          <Popover arrow={true}>
            This is a Popover that follow cursor
          </Popover>
        }
        enterable
        placement="bottom"
      >
        <Button>
          Hover me
        </Button>
      </Whisper>
    </div>
  )

}
export default Swipper