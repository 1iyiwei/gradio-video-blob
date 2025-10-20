# toy python server

import gradio as gr

def run_video(video, text):
    print(f"video: {video}, text: {text}")
    return video, text

def blocks():
    with gr.Blocks() as demo:
        with gr.Row():
            video = gr.Video(label="Video", interactive=True)
            text = gr.Text(label="Text", interactive=True)
        with gr.Row():
            button = gr.Button("Run")
        button.click(run_video, inputs=[video, text], outputs=[video, text]) # type: ignore
    return demo

def launch(demo):
    demo.launch(share=True, show_error=True)

if __name__ == "__main__":
    demo = blocks()
    launch(demo)
