export function pet(): string {
  return 'pet';
}
export interface PetModel{
  firstName : string;
  lastName : string;
  birthDate : string;
  type : string;
  avatarPictureUrl : string;
  coverPictureUrl : string;
  summary : string;
}