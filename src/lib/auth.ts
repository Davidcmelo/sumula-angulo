import type { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { compare, hash } from 'bcryptjs';
import prisma from '@/lib/prismadb';

declare module 'next-auth' {
    interface User {
        id: number; // <- here it is
    }
}

const secret = process.env.NEXTAUTH_SECRET;
export const authOptions: NextAuthOptions = {
    session: {
        strategy: 'jwt',
    },
    secret,
    providers: [
        CredentialsProvider({
            name: 'Sign in',
            credentials: {
                email: {
                    label: 'Email',
                    type: 'email',
                    placeholder: 'examplo@angulo.com',
                },
                password: { label: 'Senha', type: 'password' },
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials.password) {
                    return null;
                }

                const user = await prisma.responsavel.findUnique({
                    where: {
                        email: credentials.email,
                    },
                    include: {
                        time: true,
                    },
                });

                if (user?.password === null) {
                    const hashedPassword = await hash(credentials.password, 12);
                    await prisma.responsavel.update({
                        where: { id: user.id },
                        data: { password: hashedPassword },
                    });
                } else if (
                    !user ||
                    // !(credentials.password === user.password)
                    !(await compare(credentials.password, user.password))
                ) {
                    return null;
                }

                console.log('user', user);

                return {
                    id: user.id,
                    email: user.email,
                    name: user.nome,
                    time: user.time?.nome,
                    time_id: user.time?.id,
                };
            },
        }),
    ],
    callbacks: {
        session: ({ session, token }) => {
            console.log('CALLBACK session XX', session, token);
            // console.log('console do id da sessao', session.user.id);
            // console.log('token id login', token.id);

            const retorno = {
                ...session,
                user: {
                    ...session.user,
                    time: token.time,
                    time_id: token.time_id,
                    id: token.id,
                },
            };

            console.log('retorno', retorno);
            return retorno;
        },
        jwt: ({ token, user }) => {
            console.log('CALLBACK token XX', token, user);
            if (user) {
                const u = user as unknown as any;
                return {
                    ...token,
                    id: u.id,
                    time: u.time,
                    time_id: u.time_id,
                };
            }
            // console.log('token XX 2 = ', token);
            return token;
        },
    },
    pages: {
        signIn: '/auth/login',
        // newUser: '/auth/cadastrar',
    },
    debug: process.env.NODE_ENV === 'development',
};
