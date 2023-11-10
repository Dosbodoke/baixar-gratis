"use client";

import { useEffect, useState, useRef } from "react";

import loadFfmpeg from "@/utils/load-ffmpeg";
import { FFmpeg } from "@ffmpeg/ffmpeg";

export default function Download() {
  const [ffmpegLoaded, setFfmpegLoaded] = useState(false);
  const ffmpegRef = useRef(new FFmpeg());

  useEffect(() => {
    load();
  }, []);

  const load = async () => {
    const ffmpeg_response: FFmpeg = await loadFfmpeg();
    ffmpegRef.current = ffmpeg_response;
    setFfmpegLoaded(true);
  };
}
