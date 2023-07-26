import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { getSession, signOut } from 'next-auth/react'
import Image from 'next/image'

export const getServerSideProps: GetServerSideProps<{ session: any }> = async (context) => {

    const session = await getSession(context);

    if (!session) return {
        redirect: {
            destination: "/login",
            permanent: false
        }
    }
    return {
        props: {
            session
        }
    }
}

export default function Home(props: InferGetServerSidePropsType<typeof getServerSideProps>) {
   
    const { session } = props;

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <figure>
                <Image
                    src={session?.user?.image!}
                    alt={""}
                    width={50}
                    height={50}
                />
                <figcaption>
                    <b> Name: </b> <p>  {session?.user?.name} </p>
                    <b> Correo: </b> <p> {session?.user?.email} </p>
                </figcaption>
            </figure>
            <button onClick={()=>signOut()}>
                lougout
            </button>
        </main>
    )
}