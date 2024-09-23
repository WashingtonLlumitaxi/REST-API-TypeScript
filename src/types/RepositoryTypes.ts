export interface Repository<T = unknown>{//contain CRUD method
    create(data: T): Promise<T>
    find(): Promise<T[]>

}