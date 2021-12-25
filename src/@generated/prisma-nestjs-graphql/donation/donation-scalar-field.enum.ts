import { registerEnumType } from '@nestjs/graphql';

export enum DonationScalarFieldEnum {
    id = "id",
    count = "count",
    created_at = "created_at",
    display_name = "display_name",
    email = "email",
    mobile = "mobile",
    message = "message",
    team = "team"
}


registerEnumType(DonationScalarFieldEnum, { name: 'DonationScalarFieldEnum', description: undefined })
