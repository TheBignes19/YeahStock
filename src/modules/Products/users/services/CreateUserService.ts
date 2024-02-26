import { UserOutputDto } from "../dtos/UserOutputDto";
import { UserInputDto } from "../dtos/UserInputDto";
import { User } from "../entities/User";
import { usersRepository } from "../repositories/usersRepository";

import { hash } from "bcryptjs";
import { AppError } from "../../../../shared/errors/AppError";

class CreateUserService {
  async execute({ name, email, password }: UserInputDto): Promise<UserOutputDto> {

    if (name.length > 80) throw new AppError("Name is too long!", 422);

    const userWithSameEmail = await usersRepository.findOne({
      where: {
        email
      }
    });

    if (userWithSameEmail) throw new AppError("User already exist", 400);

    const passwordHash = await hash(password, 8);

    const user = usersRepository.create({
      name,
      email,
      password: passwordHash
    });
    await usersRepository.save(user)

    const UserOutput = new UserOutputDto(user)

    return UserOutput;
  }
}

export { CreateUserService }