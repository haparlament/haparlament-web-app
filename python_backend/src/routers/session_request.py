from fastapi import APIRouter
from airtable import Airtable
from models.session_request import SessionRequest

router = APIRouter()

@router.post("/")
def session_request(session_request: SessionRequest):
    airtable = Airtable('appsk8XVQplqlNAAz', 'Session Request', api_key='keyAvONYxb7zCCGUa')
    results = airtable.get_all()
    results = airtable.insert(session_request.dict())
    
    return results
