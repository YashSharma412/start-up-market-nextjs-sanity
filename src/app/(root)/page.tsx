import SearchForm from "../../components/SearchForm";

export default async function Home({ searchParams} : {
  searchParams: Promise<{ querry? : string}>
}) {
  const querry = (await searchParams).querry;
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

        </ul>
      </section>
    </>
  );
}