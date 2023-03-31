from pydantic import BaseModel

class SessionRequest(BaseModel):
    ImageID:str
    Feeling:str =""
    UserName:str =""
    PhoneNumber:str =""
    Day:str =""
    HourRange:str = ""