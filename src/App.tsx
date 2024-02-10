import { useState } from "react";
import "./App.css";
import VideoPlayer from "./components/video-player/video-player";
import VideosMenu from "./components/videos-menu/videos-menu";
import { VideoDto } from "./dtos/video.dto";

function App() {
  const [video, setVideo] = useState<VideoDto | null>(null);

  return (
    <main className="app">
      <VideosMenu selectedVideo={video} onVideoClick={setVideo} />
      <VideoPlayer selectedVideo={video} />
    </main>
  );
}

export default App;
