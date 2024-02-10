import { VideoDto } from "../../dtos/video.dto";
import "./video-player.css";

type VideoPlayerProps = {
  selectedVideo: VideoDto | null;
};

const VideoPlayer = ({ selectedVideo }: VideoPlayerProps) => {
  return (
    <div className="video-player">
      {selectedVideo ? (
        <iframe
          src={selectedVideo.embeddedLink}
          title={selectedVideo.title}
          frameborder="0"
          allow="autoplay;"
          allowfullscreen
        ></iframe>
      ) : (
        <h3>No video selected</h3>
      )}
    </div>
  );
};

export default VideoPlayer;
