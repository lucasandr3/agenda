import { User, UserCreate, UserRepository } from "../interfaces/user.interface";
import { UserRepositoryPrisma } from "../repositories/user.repository";

class UserUserCase {

    private userRepository: UserRepository;

    constructor() {
        this.userRepository = new UserRepositoryPrisma();
    }

    async create({name, email}: UserCreate): Promise<User> {
        const verifyUserExists = await this.userRepository.findByEmail(email);

        if (verifyUserExists) {
            throw new Error("User already exists");
        }

        const result = await this.userRepository.create({email, name});
        return result;
    }
}

export { UserUserCase };