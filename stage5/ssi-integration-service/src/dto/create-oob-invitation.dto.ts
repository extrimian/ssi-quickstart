import { GoalCode } from '@extrimian/waci';
import { IsEnum, IsNotEmpty, IsString } from 'class-validator';

export class CreateOobInvitationDto {
  @IsEnum(GoalCode)
  goalCode: GoalCode;
  @IsString()
  @IsNotEmpty()
  userId: string;
  @IsString({ each: true })
  @IsNotEmpty({ each: true })
  credentialContextIds: string[];
}
