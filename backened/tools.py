import requests
from typing import Optional
from agents import function_tool


@function_tool
def fetch_portfolio_repos(username: str) -> str:
    """
    Fetches and summarizes the user's GitHub repositories.
    
    Args:
        username (str): GitHub username (e.g., 'ABIHAAHEMD4262')
    
    Returns:
        str: A summary of repos, stars, and languages.
    """
    url = f"https://api.github.com/users/{username}/repos"
    try:
        response = requests.get(url, headers={"Accept": "application/vnd.github.v3+json"})
        response.raise_for_status()
        repos = response.json()
        summary = f"Top repos for {username}:\n"
        for repo in sorted(repos, key=lambda x: x.get('stargazers_count', 0), reverse=True)[:3]:
            summary += f"- {repo['name']}: {repo['description'] or 'No description'} ({repo['stargazers_count']} stars, {repo['language'] or 'Unknown language'})\n"
        return summary
    except Exception as e:
        return f"Error fetching repos: {str(e)}"

@function_tool
def calculate(expression: str) -> Optional[float]:
    """
    Evaluates a simple math expression (e.g., '2 + 2 * 3').
    
    Args:
        expression (str): The math expression to evaluate.
    
    Returns:
        Optional[float]: The result as a float, or None if invalid.
    """
    try:
        allowed_names = {"__builtins__": {}}
        result = eval(expression, allowed_names)
        return float(result)
    except:
        return None