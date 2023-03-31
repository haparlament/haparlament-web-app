from fastapi import APIRouter
from airtable import Airtable


router = APIRouter()

@router.get("/users")
def get_users():
    airtable = Airtable('appsk8XVQplqlNAAz', 'Users', api_key='keyAvONYxb7zCCGUa')
    results = airtable.get_all()
    return results


