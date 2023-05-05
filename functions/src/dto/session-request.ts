import { IsNotEmpty, IsString, IsDate, IsMobilePhone, MaxLength } from 'class-validator';
import { TimeRange } from '../controllers/session-request';

/**
* Validates create session DTO.
*/
export class CreateSessionRequestDto {
    constructor(
        userName: string,
        imageId: string,
        feeling: string,
        phoneNumber: string,
        days: string[],
        hourRanges: TimeRange[],
    ) {
        this.userName = userName;
        this.imageId = imageId;
        this.feeling = feeling;
        this.phoneNumber = phoneNumber;
        this.days = days;
        this.hoursRanges = hourRanges;
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
    @MaxLength(7, {
        each: true,
    })
        days: string[];

    @IsNotEmpty()
    @MaxLength(10, {
        each: true,
    })
        hoursRanges: TimeRange[];

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
            days: this.days,
            hoursRanges: this.hoursRanges,
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
            Days: this.days,
            HourRanges: this.hoursRanges,
        };
    }
}
