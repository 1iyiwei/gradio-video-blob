# python client

from gradio_client import Client, handle_file

video_source = (
    "https://github.com/gradio-app/gradio/raw/main/gradio/media_assets/videos/world.mp4"
)
gradio_server_url = "http://localhost:7860"
client = Client(gradio_server_url)
# change to your gradio server url as the output of running `gradio server.py`

result = client.predict(
    video={"video": handle_file(video_source)},
    text="hello from python!",
    api_name="/run_video"
)

print(result)
