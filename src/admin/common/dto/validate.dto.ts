import {IsDateString, IsEmail, IsNotEmpty, IsPhoneNumber, MinLength, IsString, Length, IsAlpha, IsDate, Matches} from 'class-validator';

export class validateRule {
    @IsEmail()
    @IsNotEmpty()
    @MinLength(2)
    user_name: string;
    @MinLength(2)
    @Matches(/^[a-z0-9 ]+$/i)
    full_name: string;
    @IsString()
    @MinLength(6)
    @Matches(/(^[a-z0-9 ](?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {message: 'password too weak'})
    password: string;
    @IsPhoneNumber('VN')
    phone_number: string;
}
export class validateRule2 {
  @MinLength(2)
  @Matches(/^[a-z0-9 ]+$/i)
  full_name: string;
  @IsString()
  @MinLength(6)
  @Matches(/(^[a-z0-9 ](?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {message: 'password too weak'})
  password: string;
  @IsPhoneNumber('VN')
  phone_number: string;
}
export class validateUserName {
  @IsEmail()
  @IsNotEmpty()
  @MinLength(2)
  user_name_new: string;
}
export class validateFullName {
  @MinLength(2)
  @Matches(/^[a-z0-9 ]+$/i)
  full_name_new: string;
}
export class validatePassword {
  @IsString()
  @MinLength(6)
  @Matches(/(^[a-z0-9 ](?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {message: 'password too weak'})
  password_new: string;
}
export class validatePhone {
  @IsPhoneNumber('VN')
  phone_number_new: string;
}
export class validateBirth {
  @IsDateString()
  birth_new: Date;
}
export class validateGender {
  @MinLength(2)
  @Matches(/^[a-z0-9 ]+$/i)
  gender_new: string;
}




  