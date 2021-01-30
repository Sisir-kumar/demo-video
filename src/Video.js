import React from "react";
import Modal from "./Modal";

class Video extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.state = {
      toggle: false
    };
  }
  toggle = (event) => {
    const { toggle } = this.state;
    this.setState({
      toggle: !toggle
    });
  };
  getVideo = elem => {
    this.video = elem
  }
  componentDidMount = () => {
    this.playVideo()
    setTimeout(() => {
      this.toggle();
      this.pauseVideo()
    }, 10000);
  };

  componentWillUnmount = () => {
    this.pauseVideo();
  };

  playVideo = () => {
    // You can use the play method as normal on your video ref
    this.myRef.current.play();
  };

  pauseVideo = () => {
    // Pause as well
    this.myRef.current.pause();
  };
  closeModal = () => {
    const { toggle } = this.state;
    this.setState(
      {
        toggle: !toggle
      },
      this.playVideo()
    );
  };
  render = () => {
    return (
      <div>
        <video
          ref={this.myRef}
          src="https://assets.polestar.com/video/test/polestar-1_09.mp4"
          type="video/mp4"
          
          autoplay 
          muted
        />

        <div></div>
        <Modal
          toggle={this.state.toggle}
          closeModal={() => this.closeModal()}
        />
      </div>
    );
  };
}

export default Video;
