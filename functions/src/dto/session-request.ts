import { IsNotEmpty, IsString, IsMobilePhone, IsDate } from 'class-validator';

/**
* Validates create session DTO.
*/
export class CreateSessionRequestDto {
    constructor(
        userName: string,
        imageId: string,
        feeling: string,
        phoneNumber: string,
        day: string,
        hourRange: string,
    ) {
        this.userName = userName;
        this.imageId = imageId;
        this.feeling = feeling;
        this.phoneNumber = phoneNumber;
        this.day = day;
        this.hourRange = hourRange;
    }

    @IsNotEmpty()
    @IsString()
        userName: string;

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

    @IsNotEmpty()
    @IsDate()
        createdAt: Date;

    @IsNotEmpty()
    @IsDate()
        updatedAt: Date;

    json() {
        return {
            userName: this.userName,
            imageId: this.imageId,
            feeling: this.feeling,
            phoneNumber: this.phoneNumber,
            day: this.day,
            hourRange: this.hourRange,
            updatedAt: this.updatedAt,
            createdAt: this.createdAt,
        };
    }

    airtable() {
        return {
            UserName: this.userName,
            ImageID: this.imageId,
            Feeling: this.feeling,
            PhoneNumber: this.phoneNumber,
            Day: this.day,
            HourRange: this.hourRange,
        };
    }
}
