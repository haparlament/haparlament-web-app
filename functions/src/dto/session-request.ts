import { IsNotEmpty, IsString, IsMobilePhone } from 'class-validator';

/**
 * Validates create session DTO.
 */
export class CreateSessionRequestDto {
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
}
