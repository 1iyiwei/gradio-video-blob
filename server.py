# toy python server

import gradio as gr

def run_video(video):
    return video

def blocks():
    with gr.Blocks() as demo:
        with gr.Row():
            video = gr.Video(label="Video", interactive=True)
        with gr.Row():
            button = gr.Button("Run")
        button.click(run_video, inputs=[video], outputs=[video]) # type: ignore
    return demo

def launch(demo):
    demo.launch(share=True, show_error=True)

if __name__ == "__main__":
    demo = blocks()
    launch(demo)
