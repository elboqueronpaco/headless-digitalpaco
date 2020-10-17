import { registerEnumType } from '@nestjs/graphql';

export enum RolesEnum {
    ADMIN = 'Admin',
    USER= 'User'
}

registerEnumType(RolesEnum, {
    name: 'RolesEnum'
})