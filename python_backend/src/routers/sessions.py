from fastapi import APIRouter
from airtable import Airtable


router = APIRouter()

@router.get("/")
def get_sessions():
    airtable = Airtable('appsk8XVQplqlNAAz', 'Sessions', api_key='keyAvONYxb7zCCGUa')
    results = airtable.get_all()
    return results
