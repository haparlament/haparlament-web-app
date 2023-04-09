import { validate } from 'class-validator';

export const validateDto = async (
    dto: object
): Promise<Record<string, string[]>> => {
    const errors = await validate(dto);
    const constraints: Record<string, string[]> = {};
    if (errors.length > 0) {
        errors.forEach((error) => {
            const propertyName = error.property;
            if (error.constraints) {
                const errorConstraints = Object.values(error.constraints);
                constraints[propertyName] = errorConstraints;
            }
        });
    }
    return constraints;
};
