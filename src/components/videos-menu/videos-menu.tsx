import { videos } from "../../data/data";
import { VideoDto } from "../../dtos/video.dto";
import "./videos-menu.css";

type VideosMenuProps = {
  selectedVideo: VideoDto | null;
  onVideoClick: (video: VideoDto) => void;
};

const VideosMenu = ({ selectedVideo, onVideoClick }: VideosMenuProps) => {
  return (
    <ul className="videos-menu">
      {videos.map((video) => (
        <li className="videos-menu-item">
          <button
            className={
              "videos-menu-button" + (video === selectedVideo ? " active" : "")
            }
            onClick={() => onVideoClick(video)}
          >
            {video.title}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default VideosMenu;
