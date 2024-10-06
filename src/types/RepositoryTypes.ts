export type Query = Record<string, unknown>

export interface Repository<T = unknown>{//contain CRUD method
    create(data: T): Promise<T>
    find(): Promise<T[]>
    findById(id: string): Promise<T | null>;
    update(id: string, data: Partial<T>): Promise<T | null>;
    delete(id: string): Promise<boolean>;
}