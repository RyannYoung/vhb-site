import VhbVideo from "../assets/vhb_demo_streamable.mp4";

const HeroVideo = () => {
  return (
    <div className="w-full rounded-b-xl lg:rounded-b-3xl aspect-video overflow-hidden">
      <video
        preload="metadata"
        className="max-h-screen rounded-b-xl lg:rounded-b-3xl object-cover"
        width="100%"
        height="100%"
        src={VhbVideo}
        autoPlay
        loop
        muted
      />
    </div>
  );
};

export default HeroVideo;
