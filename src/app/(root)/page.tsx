import StartUpCard from "@/components/StartUpCard";
import SearchForm from "../../components/SearchForm";
import { client } from "@/sanity/lib/client";
import { STARTUPS_QUERRY } from "@/sanity/lib/queries";

export default async function Home({ searchParams} : {
  searchParams: Promise<{ querry? : string}>
}) {
  const querry = (await searchParams).querry;
  const posts = await client.fetch(STARTUPS_QUERRY)
  // console.log(JSON.stringify(posts, null, 2))
  // const posts = [
  //   {
  //     _id: 1,
  //     _createdAt: new Date(),
  //     _updatedAt: "2022-01-01",
  //     title: "Startup 1",
  //     description: "This is a description of the startup 1",
  //     votes: 100,
  //     views: 1000,
  //     category: "Tech",
  //     tags: ["Tech", "Startup", "Innovation"],
  //     image: "https://plus.unsplash.com/premium_photo-1682023587356-86065925727a?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHN0YXJ0dXAlMjByb2JvdHN8ZW58MHx8MHx8fDA%3D",
  //     author: {
  //       _id: 1,
  //       name: "John Doe",
  //     }
  //   },
  //   {
  //     _id: 2,
  //     _createdAt: "2022-01-01",
  //     _updatedAt: "2022-01-01",
  //     title: "Startup 2",
  //     description: "This is a description of the startup 2",
  //     votes: 200,
  //     views: 2000,
  //     category: "Tech",
  //     tags: ["Tech", "Startup", "Innovation"],
  //     image: "https://plus.unsplash.com/premium_photo-1682023587356-86065925727a?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHN0YXJ0dXAlMjByb2JvdHN8ZW58MHx8MHx8fDA%3D",
  //     author: {
  //       _id: 2,
  //       name: "Jane Doe",
  //     }
  //   }
  // ]
  return (
    <>
      <section className="pink_container">
        <h1 className="heading">Pitch Your StartUp, <br /> Connect with Entrepreneurs</h1>
        <p className="sub-heading !max-w-3xl">
          Submit your ideas, vote on pitches, and get noticed in Virtual Competitions.
        </p>
        <SearchForm querry={querry}/>
      </section>
      <section className="section_container">
        <p className="text-30-semibold">
          { 
            querry ?
            `Search results for "${querry}"` :
            `All Startups`
          }
        </p>
        <ul className="my-7 card_grid">
          {
            posts?.length > 0 ? (
              posts.map((post:PostType, index:number) => 
                <StartUpCard key={post?._id} post={post} />
              )
          ) : <p>Sorry, No Startups Found.</p>
          }
        </ul>
      </section>
    </>
  );
}