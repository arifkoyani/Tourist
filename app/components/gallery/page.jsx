import Image from 'next/image';
import Footer from "../Footer/page"
import Navbar from '../NavBar/page';
import Secondbar from '../SecondBar/page';
const Gallery = () => {
  return (
    <>
          <Navbar/>
          <Secondbar/>
    <div className="container mx-auto p-4 bg-gradient-to-r from-[#14918b] to-[#0c6478]">
        
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-3">
        <div className="grid gap-4">

        <div>
            <Image
              className="h-auto max-w-full rounded-lg"
              src="https://scontent.fisb29-1.fna.fbcdn.net/v/t39.30808-6/395481349_824661969669634_30009979676651307_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFrmOqkVPe6oJTEf9BdrR-LDvyQNh8zFuIO_JA2HzMW4iMaeEnI7FSmvqH7rCR2nmi9cNg7UZ-bUW_hNiC1WdV8&_nc_ohc=CTgP8hZwxe4Q7kNvgGlBsde&_nc_ht=scontent.fisb29-1.fna&_nc_gid=Awiv2ejfN9YXcWIAWSXtSFz&oh=00_AYA39i8v_qNFbOB4PjlcKNS3QXKZkkBpNWSddVoPglxaAQ&oe=67031F99"
              alt="Temple Image 1"
              width={400}
              height={300}
            />
          </div>

        <div>
            <Image
              className="h-auto max-w-full rounded-lg"
              src="https://scontent.fisb29-1.fna.fbcdn.net/v/t39.30808-6/434208203_939706734831823_4665737550727650927_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGa36RAaB55Lttb6ErC7-4QYVMAFd4iRMBhUwAV3iJEwDyLd1QEfDo8jvXJIt-kgofpvM6aMBM8CSAhDS2Y8vEv&_nc_ohc=hZmfOTGOHzIQ7kNvgEDs-hP&_nc_ht=scontent.fisb29-1.fna&_nc_gid=A14fCHZhXk0rjUvISi9zIUG&oh=00_AYA_AS_4IzBiJoDhn8LRb5clfpQySEWUjD6RCJtByFl4iw&oe=67031AE6"
              alt="Temple Image 1"
              width={400}
              height={300}
            />
          </div>

          <div>
            <Image
              className="h-auto max-w-full rounded-lg"
              src="https://scontent.fisb29-1.fna.fbcdn.net/v/t39.30808-6/444489822_994114629391033_1068445025552059108_n.jpg?stp=cp6_dst-jpg&_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGgExwtMGISmh-7gln5x2ze1BhrTQAtou3UGGtNAC2i7RKwO_C3ppkLpmOGBp_EUU05sjSxIReOucbMfMYKwxW1&_nc_ohc=NpxApzvM1FkQ7kNvgHYnCRD&_nc_ht=scontent.fisb29-1.fna&oh=00_AYAXAprRnqxXjoBm7zFGS5olg_P_6p1Npbps3MxC_Zuo8w&oe=67033F52"
              alt="Temple Image 1"
              width={400}
              height={300}
            />
          </div>
          <div>
            <Image
              className="h-auto max-w-full rounded-lg"
              src="https://images.unsplash.com/photo-1663698294067-332d68cfab97?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Temple Image 2"
              width={400}
              height={300}
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <Image
              className="h-auto max-w-full rounded-lg"
              src="https://images.unsplash.com/photo-1514558427911-8e293bebf18c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Temple Image 3"
              width={400}
              height={300}
            />
          </div>
          <div>
            <Image
              className="h-auto max-w-full rounded-lg"
              src="https://images.unsplash.com/photo-1699554204687-93ce87c6c880?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Temple Image 4"
              width={400}
              height={300}
            />
          </div>
          <div>
            <Image
              className="h-auto max-w-full rounded-lg"
              src="https://images.unsplash.com/photo-1592860200849-d408778c15d6?q=80&w=1910&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              width={400}
              height={300}
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <Image
              className="h-auto max-w-full rounded-lg"
              src="https://images.unsplash.com/photo-1592860200849-d408778c15d6?q=80&w=1910&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Temple Image 5"
              width={400}
              height={300}
            />
          </div>
          <div>
            <Image
              className="h-auto max-w-full rounded-lg"
              src="https://scontent.fisb29-1.fna.fbcdn.net/v/t1.6435-9/76644639_2577434039009544_7495159973849071616_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeHHAD_fRL-6xpOi8yUqM09sgZfXNBAiFmKBl9c0ECIWYlHepKlk9lF8uehFL8Y2DDAdZsrJ6jFh2bYOy57FkS8G&_nc_ohc=aU0I3dzc4KIQ7kNvgEBsLTL&_nc_ht=scontent.fisb29-1.fna&oh=00_AYA3oNC-M-hNq-UQOaH2LtFL1CgzZzJaffJ7pA_lSsZHNg&oe=6724DA8C"
              alt="Temple Image 6"
              width={400}
              height={300}
            />
          </div>
          <div>
            <Image
              className="h-auto max-w-full rounded-lg"
              src="https://images.unsplash.com/photo-1610064095022-db1b488c05f1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              width={400}
              height={300}
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <Image
              className="h-auto max-w-full rounded-lg"
              src="https://scontent.fisb29-1.fna.fbcdn.net/v/t1.6435-9/76267792_2583650988387849_7056618270756962304_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeFM0kpSzuu3j4odS7xnQVK_F5dql-lr0ikXl2qX6WvSKZk8NmnqpTXmqXnZErGI4ZvYB-N7jzx-19O44SCjTnYU&_nc_ohc=ykKeqicM1VcQ7kNvgF7sD5j&_nc_ht=scontent.fisb29-1.fna&_nc_gid=AQtOaC0_ASUNPNlFOzICEdx&oh=00_AYCzmyixE2rzdOb8camqapi8dPW5OtLWXJxD0c2TdRPj1w&oe=6724D008"
              width={400}
              height={300}
            />
          </div>
          <div>
            <Image
              className="h-auto max-w-full rounded-lg"
              src="https://images.unsplash.com/photo-1582122183292-e660e1faecc4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Ahilya Ghat"
              width={400}
              height={300}
            />
          </div>
          <div>
            <Image
              className="h-auto max-w-full rounded-lg"
              src="https://scontent.fisb29-1.fna.fbcdn.net/v/t1.6435-9/49429007_2055074281245525_6381433692245458944_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=f798df&_nc_eui2=AeFikyfPEhUGS6MwGXDWwFrx_V0Og8M2I3n9XQ6DwzYjecbdaIlckVL7go58okRLAQjrW6l3qFDW36SHjoxTF6G-&_nc_ohc=fOLOeso_xEIQ7kNvgEmFhOY&_nc_ht=scontent.fisb29-1.fna&_nc_gid=AOb01B8KcAgmV1QdfMUfrad&oh=00_AYCg9Hqjf8fLpr29vxd3LB4dNREHJFReBDIuafga09GIpA&oe=6724DBA4"
              alt="Chet Singh Ghat"
              width={400}
              height={300}
            />



          </div>
        </div>
      </div>
      <Footer/>
    </div>
    </>

  );
};

export default Gallery;
