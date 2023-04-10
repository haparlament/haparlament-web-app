import { IsNotEmpty, IsString, IsMobilePhone } from 'class-validator';

/**
* Validates create session DTO.
*/
export class CreateSessionRequestDto {
    constructor(
        username: string,
        imageId: string,
        feeling: string,
        phoneNumber: string,
        day: string,
        hourRange: string
    ) {
        this.username = username;
        this.imageId = imageId;
        this.feeling = feeling;
        this.phoneNumber = phoneNumber;
        this.day = day;
        this.hourRange = hourRange;
    }

@IsNotEmpty()
@IsString()
    username: string;

@IsNotEmpty()
@IsString()
    imageId: string;

@IsNotEmpty()
@IsString()
    feeling: string;

@IsNotEmpty()
@IsMobilePhone('he-IL')
    phoneNumber: string;

@IsNotEmpty()
@IsString()
    day: string;

@IsNotEmpty()
@IsString()
    hourRange: string;

    json() {
        return { 
            username: this.username,
            imageId: this.imageId,
            feeling: this.feeling,
            phoneNumber: this.phoneNumber,
            day: this.day,
            hourRange: this.hourRange,
        }
    }

    airtable() {
        return {
            UserName: this.username,
            ImageID: this.imageId,
            Feeling: this.feeling,
            PhoneNumber: this.phoneNumber,
            Day: this.day,
            HourRange: this.hourRange,
        }
    }
}
