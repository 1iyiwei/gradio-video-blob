// follow the code example from https://www.gradio.app/guides/getting-started-with-the-js-client

import { Client, handle_file } from "@gradio/client";

const video_source = 'https://github.com/gradio-app/gradio/raw/main/gradio/media_assets/videos/world.mp4'

const response = await fetch(video_source);
const video_data = await response.blob();

const gradio_server_url = "http://localhost:7860"; // change to your gradio server url as the output of running `gradio server.py`

const client = await Client.connect(gradio_server_url);

const result = await client.predict("/run_video", {
    video: video_data, // handle_file(video_data),
});

console.log(result.data);