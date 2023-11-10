import { FFmpeg } from "@ffmpeg/ffmpeg";
import { fetchFile } from "@ffmpeg/util";

function getFileExtension(file_name: string) {
  const regex = /(?:\.([^.]+))?$/; // Matches the last dot and everything after it
  const match = regex.exec(file_name);
  if (match && match[1]) {
    return match[1];
  }
  return ""; // No file extension found
}

export async function convertToMp3(ffmpeg: FFmpeg) {
  const output = "output.mp3";
  const videoURL = "https://www.youtube.com/watch?v=0EnRK5YvBwU";

  const input = getFileExtension(videoURL);
  ffmpeg.writeFile(input, await fetchFile(videoURL));

  let ffmpeg_cmd: string[] = [
    "-i",
    input,
    "-vn",
    "-acodec",
    "libmp3lame",
    "-q:a",
    "2",
    "${outputFileName}",
  ];

  // execute cmd
  await ffmpeg.exec(ffmpeg_cmd);

  const data = await ffmpeg.readFile(output);
  const blob = new Blob([data], { type: "audio/mp3" });
  const url = URL.createObjectURL(blob);

  return url;
}
