import React, { useState } from "react";
import YouTube from "react-youtube";
import '../styles/player.css';


const VideoDemo = ({ projectId }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  // Function to get the YouTube link based on projectId
  const getVideoLink = () => {
    switch (projectId) {
      case 1:
        return "https://youtu.be/_SdpHqDuS9I"; // Video for Project 1
      case 2:
        return "https://www.youtube.com/watch?v=YFlkBN-d8FM"; // Video for Project 2
      case 3:
        return "https://youtu.be/9B0ZKI0n4dM"; // Video for Project 3
      case 4:
        return "https://youtu.be/3kG99nm0Dkg"; // Video for Project 4
      default:
        return null; // If no video is available
    }
  };

  // Function to extract YouTube Video ID from the link
  const extractVideoId = (url) => {
    const regExp = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regExp);
    return match ? match[1] : null;
  };

  const videoLink = getVideoLink();
  const videoId = videoLink ? extractVideoId(videoLink) : null;

  const handleOpenModal = () => {
    if (videoId) {
      setModalOpen(true);
    } else {
      alert("No video available for this project yet. stay tuned for updates!");
    }
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      {/* Button to Open Modal */}
      <button className="video-demo-btn" onClick={handleOpenModal}>
         Video Demo
      </button>

      {/* Modal */}
      {isModalOpen && videoId && (
        <div className="video-modal" onClick={handleCloseModal}>
          <div
            className="modal-content2"
            onClick={(e) => e.stopPropagation()} // Prevent modal close on inner click
          >
            <button className="close-btn" onClick={handleCloseModal}>
              &times;
            </button>
            {/* YouTube Player */}
            <YouTube
              videoId={videoId} // Extracted Video ID
              className="youtube-player"
              opts={{
                height: "101%",
                width: "100%",
                
                playerVars: {
                  autoplay: 1, // Auto-play the video
                },
              }}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default VideoDemo;
