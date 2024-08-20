import { User, UserCreate, UserRepository } from "../interfaces/user.interface";
import { UserRepositoryPrisma } from "../repositories/user.repository";

class UserUserCase {

    private userRepository: UserRepository;

    constructor() {
        this.userRepository = new UserRepositoryPrisma();
    }

    async create({name, email}: UserCreate): Promise<User> {}
}

export { UserUserCase };