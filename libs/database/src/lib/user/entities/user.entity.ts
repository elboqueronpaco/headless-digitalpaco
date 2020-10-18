import { BeforeInsert, BeforeUpdate, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Role } from '../enums/Roles.enum';
import { hash } from 'bcryptjs'

@Entity('Users')
export class UserEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: 'varchar', length: 50, nullable: false, unique: true})
    username: string
    
    @Column({ type: 'varchar', length: 150, nullable: false, unique: true })
    email: string

    @Column({ type: 'varchar', length: 255, nullable: false })
    password: string

    @Column({ type: 'enum', enum: Role, default: Role.USER })
    role: Role

    @Column({ type: 'bool', default: true })
    active: boolean

    @CreateDateColumn({ type: 'timestamp' })
    created: Date

    @BeforeInsert()
    @BeforeUpdate()
    async hashPasswor() {
        if (!this.password) return
        this.password = await hash(this.password, 10)
    }
 }
