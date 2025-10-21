// follow the code example from https://www.gradio.app/guides/getting-started-with-the-js-client

import { Client, handle_file } from "@gradio/client";

const video_source = 'https://github.com/gradio-app/gradio/raw/main/gradio/media_assets/videos/world.mp4'

const response = await fetch(video_source);
const video_data = await response.blob();

const gradio_server_url = "http://localhost:7860"; // change to your gradio server url as the output of running `gradio server.py`

const client = await Client.connect(gradio_server_url);

// use list for parameters
const handled_video = handle_file(video_data);
const list_params: any[] = [
    {video: handled_video},
    "hello from ts with list parameters!"];

console.log(list_params);
let result = await client.predict("/run_video", list_params);
console.log(result.data);

// use dictionary for parameters
const dict_params: any = {
    input_video: {video: handled_video},
    input_text: "hello from ts with dictionary parameters!"
};

console.log(dict_params);
result = await client.predict("/run_video", dict_params);
console.log(result.data);

// use url source
const dict_params_with_url = {
    input_video: {video: handle_file(video_source)},
    input_text: "hello from ts with url source!"
};

console.log(dict_params_with_url);
result = await client.predict("/run_video", dict_params_with_url);
console.log(result.data);