const Video = ({ videos }) => {
  console.log("videos", videos);
  return (
    <>
      <aside>
        {videos.map((video) => (
          <div className="videos-list" key={video.id}>
            <h3>{video.videoTitle}</h3>
            <lite-youtube
              videotitle={video.videoTitle}
              videoId={video.videoId}
            ></lite-youtube>
          </div>
        ))}
      </aside>
    </>
  );
};

export default Video;
