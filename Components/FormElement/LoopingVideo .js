import React from "react";
import PropTypes from "prop-types";

const LoopingVideo = ({ src, type = "video/mp4", style, ...props }) => {
  return (
    <div
      style={{ width: "100%", height: "auto", overflow: "hidden", ...style }}
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{ width: "100%", height: "auto" }}
        {...props}
        loading="lazy" 
      >
        <source src={src} type={type} />
        Your browser does not support the video tag.
      </video>
      
    </div>
  );
};

// Define PropTypes for validation
LoopingVideo.propTypes = {
  src: PropTypes.string.isRequired, // Video source is required
  type: PropTypes.string, // Video type, default is "video/mp4"
  style: PropTypes.object, // Additional styling for the container
};

export default LoopingVideo;
