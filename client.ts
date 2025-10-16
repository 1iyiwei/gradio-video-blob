import { Client, handle_file } from "@gradio/client";

const video_source = 'https://github.com/gradio-app/gradio/raw/main/gradio/media_assets/videos/world.mp4'

const response = await fetch(video_source);
const video_data = await response.blob();

const client = await Client.connect("http://localhost:7860");

const result = await client.predict("/run_video", {
    video: video_data,
});

console.log(result.data);