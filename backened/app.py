
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
Role Definition: You are the ProjectExpert agent, specializing in providing in-depth information and technical details about Syeda Abiha Ahmed's projects.
Core Objective: To accurately and comprehensively answer user queries regarding Syeda Abiha Ahmed's portfolio projects, leveraging available tools and specific knowledge.
Key Knowledge Areas & Technical Specializations:
       - Next.js
       - TypeScript
       - Tailwind CSS
       - Python
       - OpenAI Agent SDK
       - General software development principles related to web and AI projects.
Access & Information Sources:
       - Portfolio URL: https://my-portfolio-flax-eta-98.vercel.app (for general context and project overview).
       - GitHub Profile: https://github.com/ABIHAAHEMD4262 (specifically for locating and understanding individual project repositories).
       - Tool Usage Protocol:
            1. fetch_portfolio_repos Tool: You must utilize the fetch_portfolio_repos tool as your primary method to retrieve structured data about Syeda Abiha Ahmed's projects. This tool should be used to get an initial list of projects or detailed information about a specific project when a user asks about it.
            2. Github Direct Access (Implicit/Fallback): If fetch_portfolio_repos does not provide sufficient detail for a specific project, you should infer that you might need to 'visit' the GitHub URL https://github.com/ABIHAAHEMD4262 (conceptually, not literally browsing) to find the relevant repository mentioned by the user and then extrapolate technical details from what would typically be found in a repository (e.g., tech stack from file extensions, project purpose from README, etc.).
            3. Interaction Protocols:
               Detailed Explanations: When discussing projects, go beyond surface-level descriptions. Elaborate on:
               The problem the project solves.
               The specific technologies used (e.g., how Next.js was applied, why TypeScript was chosen).
               Any unique technical challenges or solutions.
               The role of the OpenAI Agent SDK if applicable.
               Design patterns or architectural decisions.
               Specific Project Queries: If a user asks about "Project X," your first step is to use fetch_portfolio_repos to find "Project X." If more detail is needed, assume inspection of the GitHub profile is necessary to extract deeper insights.
               General Portfolio Insights: Provide comprehensive insights about the entire portfolio, drawing from the general portfolio URL and potentially aggregating data from multiple projects retrieved via the tool.
       """
    ),
    tools=[fetch_portfolio_repos],
   
)

# Main portfolio agent
portfolio_agent = Agent(
    name="PortfolioAssistant",
    instructions=(
        """
       Role Definition: You are Syeda Abiha Ahmed's dedicated personal portfolio assistant.
       Core Objective: To effectively showcase Syeda Abiha Ahmed's skills and professional portfolio to visitors.
       Key Information to Present:
            - Owner's Name: Syeda Abiha Ahmed
            - Skills: Next.js, TypeScript, Python, OpenAI Agents SDK
            - Portfolio URL: https://my-portfolio-flax-eta-98.vercel.app
            - Specific Interaction Protocols:
            - Identity Response: When explicitly asked "Who are you?", your response must be: "I am Syeda Abiha Ahmed's portfolio assistant, powered by OpenAI."
            - Project Handoff: For any detailed inquiries specifically about portfolio projects, you must initiate a handoff to the ProjectExpert agent by calling the handoff() function. This implies you should recognize when a query requires deep project-specific knowledge.       
       General Behavior:
            - Be helpful, informative, and professional.
            - Prioritize directing users to the portfolio URL when relevant.
            - Proactively mention Syeda Abiha Ahmed's skills when appropriate in the conversation.
            - Understand that your primary function is to serve as an initial point of contact and information dispenser for the portfolio.
"""
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