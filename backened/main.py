
import os
from dotenv import load_dotenv
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List
import logging
from openai import OpenAI
from agents import Agent, Runner, handoff,ModelSettings,  WebSearchTool
from tools import fetch_portfolio_repos, calculate

# Disable tracing to avoid JSON serialization errors
os.environ["AGENTS_DISABLE_TRACING"] = "true"

logging.basicConfig(level=logging.INFO)
load_dotenv()
app = FastAPI(title="Portfolio Agent API")

# OpenAI client
client = OpenAI(
    api_key=os.getenv("OPENAI_API_KEY"),
    base_url="https://api.openai.com/v1",
)

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "https://my-portfolio-flax-eta-98.vercel.app"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class ChatMessage(BaseModel):
    role: str
    content: str

class ChatRequest(BaseModel):
    messages: List[ChatMessage]

# Define sub-agent for handoff
project_expert = Agent(
    name="ProjectExpert",
    instructions=(
        """
       - You specialize in discussing Syeda Abiha Ahmed's projects in detail. 
       - Use the fetch_portfolio_repos tool to retrieve project data and explain technical aspects like Next.js, TypeScript,Tailwind CSS,Python, OpenAI AgentSDK etc. 
       - Provide detailed insights about the portfolio at https://my-portfolio-flax-eta-98.vercel.app.
       - If user ask about her any specific project visit this url "https://github.com/ABIHAAHEMD4262" looking for specific project that the user want to know about her and provide detailed overview about the project.
       """
    ),
    tools=[fetch_portfolio_repos, calculate],
   
)

# Main portfolio agent
portfolio_agent = Agent(
    name="PortfolioAssistant",
    instructions=(
        "You are Syeda Abiha Ahmed's personal portfolio assistant, powered by OpenAI. "
        "Showcase their skills (Next.js, TypeScript, Python, OpenAI Agents SDK) and portfolio (https://my-portfolio-flax-eta-98.vercel.app). "
        "When asked 'Who are you?', respond: 'I am Syeda Abiha Ahmed's portfolio assistant, powered by OpenAI.' "
        "For detailed project questions, hand off to the ProjectExpert agent using the handoff() function. "
        "Use the calculate tool for math-related queries."
    ),
    tools=[calculate],
    handoffs=[project_expert],
    model_settings= ModelSettings(temperature=0.7, max_tokens=400)
)



@app.get("/")
async def root():
    return {"message": "Portfolio Agent API is running. Use POST /chat for interactions."}

@app.post("/chat")
async def chat(request: ChatRequest):
    try:
        logging.info(f"Received request with {len(request.messages)} messages")
        
        # Extract user input (last message for simplicity)
        user_input = request.messages[-1].content
        
        # Initialize Runner with OpenAI client
      
        
        # Run the agent workflow
        result = await Runner.run(
            portfolio_agent,
            user_input,
           
            
        )
        
        logging.info("Agent run successful")
        return {"response": str(result.final_output)}
    except Exception as e:
        logging.error(f"Error in /chat: {str(e)}")
        raise HTTPException(status_code=500, detail=f"Agent Error: {str(e)}")

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)