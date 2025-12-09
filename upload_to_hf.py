from huggingface_hub import upload_folder
import os

token  = os.getenv("HUGGING_FACE_ACESS_TOEKN")
  # Directly use the provided token
repo_id = "AbihaCodes/Portfolio-Chatbot"
folder_path = "backened/Portfolio-Chatbot"

upload_folder(
    folder_path=folder_path,
    repo_id=repo_id,
    repo_type="space",
    token=token,
    commit_message="Update CORS origins"
)
print(f"Successfully uploaded {folder_path} to {repo_id}")
